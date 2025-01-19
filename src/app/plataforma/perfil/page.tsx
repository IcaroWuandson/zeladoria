"use client";

import Container from "@/components/Container";
import { HeaderProfileComponent } from "@/components/HeaderProfile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/server";
import { HeaderWelcome } from "@/components/HeaderWelcome";
import ComponentNotifications from "./notifications";

interface ProfileUser {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  website?: string;
  city?: string;
  phone?: string;
}

export default function Perfil() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileUser | undefined>(undefined);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (data) {
          setProfile(data);
        } else {
          console.error("Erro ao buscar o perfil:", error);
        }
      };

      fetchProfile();
    }
  }, [user]);

  return (
    <Container>
      <HeaderWelcome />
      <Separator className="my-4" />
      <HeaderProfileComponent />
      <Separator className="my-4" />

      <div className="flex flex-row items-start justify-start gap-4">
        <Card className="w-[500px]">
          <CardHeader className="items-center">
            <CardTitle>{profile?.username || "Carregando..."}</CardTitle>

            <div className="flex h-16 items-center space-x-4 text-sm mt-4">
              <div className="items-center flex flex-col">
                <p>32</p>
                <p className="text-xs font-bold">denúncias feitas</p>
              </div>
              <Separator orientation="vertical" />
              <div className="items-center flex flex-col">
                <p>25</p>
                <p className="text-xs font-bold">atendidas</p>
              </div>
              <Separator orientation="vertical" />
              <div className="items-center flex flex-col">
                <p>3</p>
                <p className="text-xs font-bold">em andamento</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-row gap-2 items-center">
              <Mail className="h-5 w-5" />
              icarowuandson1@gmail.com
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Phone className="h-5 w-5" />
              {profile?.phone || "..."}
            </div>
            <div className="flex flex-row gap-2 items-center">
              <MapPin className="h-5 w-5" />
              {profile?.city || "..."}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Últimas atividades</CardTitle>
            <CardDescription>
              Confira aqui suas últimas atividades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ComponentNotifications />
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
