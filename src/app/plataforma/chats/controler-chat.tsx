import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/utils/supabase/server";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import Image from "next/image";

interface Profile {
  id: string;
  username: string;
  avatar_url: string;
}

interface ControlerChatProps {
  onSelectProfile: (profile: Profile, lastMessage: string) => void;
}

interface Conversation {
  id: string;
  user1_id: string;
  user2_id: string;
}

export default function ControlerChat({ onSelectProfile }: ControlerChatProps) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const { user } = useAuth();
  const [lastMessages, setLastMessages] = useState<{
    [key: string]: { content: string; created_at: string };
  }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para controle de carregamento

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .neq("id", user.id);

      if (error) {
        console.error("Erro ao buscar perfis:", error);
      } else {
        setProfiles(data || []);
      }
    };

    fetchProfiles();
  }, [user]);

  useEffect(() => {
    const fetchLastMessages = async () => {
      if (!user) return;

      const newLastMessages: {
        [key: string]: { content: string; created_at: string };
      } = {};

      for (const profile of profiles) {
        const { data: existingConversations, error: fetchError } =
          await supabase
            .from("conversations")
            .select("*")
            .or(
              `and(user1_id.eq.${user.id},user2_id.eq.${profile.id}),and(user1_id.eq.${profile.id},user2_id.eq.${user.id})`
            )
            .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          console.error("Erro ao verificar conversa:", fetchError);
          continue;
        }

        if (existingConversations) {
          const { data: fetchedMessages, error: fetchMessagesError } =
            await supabase
              .from("messages")
              .select("content, created_at")
              .eq("conversation_id", existingConversations.id)
              .order("created_at", { ascending: false })
              .limit(1);

          if (fetchMessagesError) {
            console.error("Erro ao buscar mensagens:", fetchMessagesError);
            continue;
          }

          newLastMessages[profile.id] = {
            content: fetchedMessages?.[0]?.content || "Nenhuma mensagem ainda.",
            created_at: fetchedMessages?.[0]?.created_at || "",
          };
        }
      }

      setLastMessages(newLastMessages);
      setIsLoading(false);
    };

    fetchLastMessages();
  }, [profiles, user]);

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false
  );

  const sortedProfiles = filteredProfiles.sort((a, b) => {
    const lastMessageA = lastMessages[a.id]?.created_at;
    const lastMessageB = lastMessages[b.id]?.created_at;

    if (!lastMessageA && !lastMessageB) return 0;

    if (!lastMessageA) return 1;
    if (!lastMessageB) return -1;

    return new Date(lastMessageB).getTime() - new Date(lastMessageA).getTime();
  });

  const handleProfileClick = async (profile: Profile) => {
    if (!user) return;

    setIsProcessing(profile.id);

    const { data: existingConversations, error: fetchError } = await supabase
      .from("conversations")
      .select("*")
      .or(
        `and(user1_id.eq.${user.id},user2_id.eq.${profile.id}),and(user1_id.eq.${profile.id},user2_id.eq.${user.id})`
      )
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Erro ao verificar conversa:", fetchError);
      setIsProcessing(null);
      return;
    }

    let conversationId = existingConversations?.id;

    if (!conversationId) {
      const { data: newConversation, error: createError } = await supabase
        .from("conversations")
        .insert([
          {
            user1_id: user.id,
            user2_id: profile.id,
          },
        ])
        .single();

      const typedNewConversation = newConversation as Conversation | null;

      if (createError) {
        toast("Erro ao criar conversa:");
        setIsProcessing(null);
        return;
      }

      if (typedNewConversation && typedNewConversation.id) {
        conversationId = typedNewConversation.id;
      } else {
        toast("Erro: nova conversa não foi criada corretamente.");
        setIsProcessing(null);
        return;
      }
    }

    onSelectProfile(
      profile,
      lastMessages[profile.id]?.content || "Nenhuma mensagem ainda."
    );

    setIsProcessing(null);
  };

  const formatTime = (createdAt: string) => {
    if (!createdAt) return "...";

    const date = parseISO(createdAt);
    const distance = formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    });

    if (distance.includes("minuto") || distance.includes("hora")) {
      return distance;
    }

    if (distance.includes("ontem")) {
      return "Ontem";
    }

    return distance || "...";
  };

  return (
    <Card className="w-[25vw] h-[75vh] shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
          Conversas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <Input
            placeholder="Procurar conversa"
            className="pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <ScrollArea className="h-[55vh]">
            {isLoading ? (
              <>
                <Image
                  src="/assets/Loading-rafiki.png"
                  width={300}
                  height={300}
                  alt="Loading-rafaki.png"
                />
                <p className="text-center text-gray-500">
                  Carregando as conversas...
                </p>
              </>
            ) : (
              sortedProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className={`flex flex-row p-2 border-b border-gray-400 cursor-pointer hover:bg-gray-100 gap-2 justify-start items-center dark:hover:bg-zinc-800 ${
                    isProcessing === profile.id
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                  onClick={() => handleProfileClick(profile)}
                >
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={profile.avatar_url}
                      alt={`Avatar de ${profile.username || "Usuário"}`}
                      className="rounded-full border"
                    />
                    <AvatarFallback className="flex justify-center items-center w-10 h-10">
                      {(profile.username || "U").charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row w-[17vw] justify-between items-center">
                      <p className="text-base text-gray-800 font-bold dark:text-white">
                        {profile.username}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-teal-50">
                        {formatTime(lastMessages[profile.id]?.created_at)}
                      </p>
                    </div>
                    <p className="text-sm text-gray-800 whitespace-nowrap overflow-hidden truncate dark:text-white">
                      {lastMessages[profile.id]?.content?.length > 100
                        ? `${lastMessages[profile.id]?.content.slice(
                            0,
                            100
                          )}...`
                        : lastMessages[profile.id]?.content ||
                          "Nenhuma mensagem ainda."}
                    </p>
                  </div>
                </div>
              ))
            )}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
