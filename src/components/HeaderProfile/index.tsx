"use client"; // Para garantir que este componente será executado no cliente

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/server";
import { MenubarPerfil } from "./MenuBarProfile";

export function HeaderProfileComponent() {
  const { user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatarUrl = async () => {
      if (user?.id) {
        const { data, error } = await supabase
          .from("profiles")
          .select("avatar_url")
          .eq("id", user.id)
          .single();

        if (data && !error) {
          setAvatarUrl(data.avatar_url);
        } else {
        }
      }
    };

    fetchAvatarUrl();
  }, [user?.id]);

  return (
    <div className="flex flex-row justify-between mb-2">
      <MenubarPerfil />

      <Avatar>
        {avatarUrl ? (
          <AvatarImage src={avatarUrl} />
        ) : (
          <AvatarFallback>U</AvatarFallback>
        )}
      </Avatar>
    </div>
  );
}
