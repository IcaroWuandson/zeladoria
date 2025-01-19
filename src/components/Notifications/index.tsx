"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/utils/supabase/server";
import { useAuth } from "@/context/AuthContext";

export function RealTimeNotifications() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading || !user) {
      return;
    }

    const channel = supabase
      .channel("public:messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        async (payload) => {
          const { content, sender_id, id, conversation_id } = payload.new;

          const userId = user.id.trim();
          const senderId = sender_id.trim();

          if (senderId !== userId) {
            const { data: conversations, error: conversationError } =
              await supabase
                .from("conversations")
                .select("user1_id, user2_id")
                .eq("id", conversation_id)
                .single();

            if (conversationError) {
              console.error("Erro ao buscar conversa:", conversationError);
              return;
            }

            const { user1_id, user2_id } = conversations || {};

            if (
              (userId === user1_id || userId === user2_id) &&
              senderId !== userId
            ) {
              const { data: profiles, error: profileError } = await supabase
                .from("profiles")
                .select("username")
                .eq("id", sender_id)
                .single();

              if (profileError) {
                console.error("Erro ao buscar o username:", profileError);
                return;
              }

              const senderUsername = profiles?.username || "Desconhecido";

              toast(`${content}`, {
                description: `${senderUsername}`,
              });

              const { error: insertError } = await supabase
                .from("notifications")
                .insert([
                  {
                    conversation_ID: conversation_id,
                    sender_id: senderId,
                    message_id: id,
                  },
                ])
                .select();

              if (insertError) {
              } else {
              }
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loading, user]);

  return null;
}
