"use client"; // Para garantir que este componente será executado no cliente

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenubarChats } from "./MenuBarChats";
import { useAuth } from "@/context/AuthContext"; 
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/server";


export function HeaderChatsComponent() {
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
          console.error("Erro ao buscar avatar:", error);
        }
      }
    };

    fetchAvatarUrl();
  }, [user?.id]); // Faz a consulta quando o ID do usuário mudar

  return (
    <div className="flex flex-row justify-between mr-6">
      <MenubarChats />
      
    
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
