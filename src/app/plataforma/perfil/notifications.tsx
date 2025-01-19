"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/server";

interface Notificacao {
  message_id: string;
  sender_id: string;
  conversation_ID: string;
  content: string;
  description: string;
  sender_username: string;
  created_at: string;
}

const fetchNotifications = async (userId: string): Promise<Notificacao[]> => {
  const { data, error } = await supabase
    .from("notifications")
    .select("message_id, sender_id, conversation_ID, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar notificações:", error.message || error);
    return [];
  }

  // Buscar as mensagens e suas conversas
  const notificationsWithContent = await Promise.all(
    data.map(async (notification) => {
      // Buscar a conversa associada a cada notificação
      const { data: conversationData, error: conversationError } =
        await supabase
          .from("conversations")
          .select("user1_id, user2_id")
          .eq("id", notification.conversation_ID)
          .single();

      if (conversationError) {
        console.error(
          "Erro ao buscar conversa:",
          conversationError.message || conversationError
        );
        return null;
      }

      if (
        (conversationData.user1_id === userId ||
          conversationData.user2_id === userId) &&
        notification.sender_id !== userId
      ) {
        const { data: messageData, error: messageError } = await supabase
          .from("messages")
          .select("content")
          .eq("id", notification.message_id)
          .single();

        if (messageError) {
          console.error(
            "Erro ao buscar mensagem:",
            messageError.message || messageError
          );
          return null;
        }

        const { data: senderProfile, error: senderError } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", notification.sender_id)
          .single();

        if (senderError) {
          console.error(
            "Erro ao buscar perfil do remetente:",
            senderError.message || senderError
          );
          return null;
        }

        return {
          ...notification,
          content: messageData.content,
          sender_username: senderProfile.username, 
          description: `${senderProfile.username} te enviou uma mensagem`,
        };
      }
      return null;
    })
  );

  return notificationsWithContent.filter(
    (item): item is Notificacao => item !== null
  );
};

export default function ComponentNotifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notificacao[]>([]);

  useEffect(() => {
    if (user) {
      const loadNotifications = async () => {
        const notificationsData = await fetchNotifications(user.id);
        setNotifications(notificationsData);
      };

      loadNotifications();
    }
  }, [user]);

  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {notification.content || "Sem conteúdo"}
              </p>
              <p className="text-sm text-muted-foreground">
                {notification.description || "Sem descrição"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
