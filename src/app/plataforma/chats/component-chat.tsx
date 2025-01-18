import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Ellipsis, Paperclip, Send, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Profile } from "@/types/type";
import { supabase } from "@/utils/supabase/server";
import { useAuth } from "@/context/AuthContext";
import { format } from "date-fns";
import { toast } from "sonner";

interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

interface ChatProps {
  profile: Profile | null;
}

export default function Chat({ profile }: ChatProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [conversationId, setConversationId] = useState<string | null>(null);

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!profile || !user) return;

    const fetchConversationAndMessages = async () => {
      const { data: conversation, error: conversationError } = await supabase
        .from("conversations")
        .select("*")
        .or(
          `and(user1_id.eq.${user.id},user2_id.eq.${profile.id}),and(user1_id.eq.${profile.id},user2_id.eq.${user.id})`
        )
        .single();

      if (conversationError) {
        console.error("Erro ao buscar conversa:", conversationError);
        return;
      }

      let conversationIdLocal = conversation?.id;

      if (!conversation) {
        const { data: newConversation, error: newConversationError } =
          await supabase
            .from("conversations")
            .insert([{ user1_id: user.id, user2_id: profile.id }])
            .select()
            .single();

        if (newConversationError) {
          console.error("Erro ao criar conversa:", newConversationError);
          return;
        }

        conversationIdLocal = newConversation.id;
      }

      setConversationId(conversationIdLocal);

      const { data: messagesData, error: messagesError } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationIdLocal)
        .order("created_at", { ascending: true });

      if (messagesError) {
        console.error("Erro ao buscar mensagens:", messagesError);
      } else {
        setMessages(messagesData || []);
      }

      const subscription = supabase
        .channel("messages")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "messages",
            filter: `conversation_id=eq.${conversationIdLocal}`,
          },
          (payload) => {
            const newMessage = payload.new as Message;
            if (
              newMessage &&
              newMessage.id &&
              newMessage.conversation_id &&
              newMessage.sender_id &&
              typeof newMessage.content === "string"
            ) {
              setMessages((prev) =>
                [...prev, newMessage].sort(
                  (a, b) =>
                    new Date(a.created_at).getTime() -
                    new Date(b.created_at).getTime()
                )
              );
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(subscription);
      };
    };

    fetchConversationAndMessages();
  }, [profile, user]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !conversationId || !user) return;

    const { error } = await supabase
      .from("messages")
      .insert([
        {
          conversation_id: conversationId,
          sender_id: user.id,
          content: newMessage,
        },
      ])
      .select();

    if (error) {
      toast("Erro ao enviar mensagem");
    } else {
      setNewMessage("");
    }
  };

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center w-[70vw] h-[75vh]">
        <Image
          src="/assets/Typing-rafiki.png"
          width={350}
          height={350}
          alt="typing-rafaki.png"
        />
        <p className="text-gray-500">
          Selecione um usuário para começar a conversar.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[70vw] h-[75vh]">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row p-2 gap-2 justify-start items-center">
          <Avatar>
            <AvatarImage
              src={profile.avatar_url}
              alt={`Avatar de ${profile.username}`}
              className="rounded-full border w-10 h-10"
            />
            <AvatarFallback className="flex items-center justify-center w-10 h-10">
              {(profile.username || "U").charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-row w-full justify-between items-center">
            <p className="text-lg text-gray-800 font-bold dark:text-white">
              {profile.username}
            </p>
            <div className="flex flex-row gap-2">
              <Button variant="outline">
                <Video />
              </Button>

              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Ellipsis />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Ver perfil</MenubarItem>
                    <MenubarItem>Bloquear</MenubarItem>
                    <MenubarItem>Denunciar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex-grow overflow-auto flex flex-col gap-4 p-4"
        ref={messageContainerRef}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.sender_id === user?.id
                ? "self-end bg-indigo-100"
                : "self-start bg-gray-100"
            } p-3 rounded-lg max-w-[60%] shadow-sm`}
             
          >
            <p className="text-gray-800 text-base1 text-justify">
              {message.content}
            </p>

            <div className="flex justify-end items-center dark:text-gray-800">
              <p className="text-xs">
                {format(new Date(message.created_at), "dd/MM/yyyy HH:mm:ss")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-gray-200 rounded-lg p-4 flex flex-row justify-between items-center gap-2">
        <div className="relative w-full">
          <Input
            placeholder="Mensagem"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="pr-20 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          />

          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center space-x-2 text-gray-500">
            <Paperclip
              size={20}
              className="cursor-pointer hover:text-indigo-500"
            />
          </div>
        </div>
        <Button onClick={handleSendMessage}>
          <Send />{" "}
        </Button>
      </div>
    </div>
  );
}
