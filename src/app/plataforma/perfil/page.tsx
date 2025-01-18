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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/server";
import { HeaderWelcome } from "@/components/HeaderWelcome";

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

  const notifications = [
    { title: "Denuncia registrada: Rua Suja", description: "1 hora atrás" },
    {
      title: "Alerta: Denuncia de buraco atendida",
      description: "1 hora atrás",
    },
    {
      title: "Denuncia registrada: Árvore caída",
      description: "2 horas atrás",
    },
    { title: "Aviso: Lixo acumulado na praça", description: "3 horas atrás" },
    {
      title: "Alerta: Problema com iluminação pública",
      description: "4 horas atrás",
    },
    {
      title: "Denuncia registrada: Animais abandonados",
      description: "5 horas atrás",
    },
    {
      title: "Alerta: Fuga de gás em residência",
      description: "6 horas atrás",
    },
    {
      title: "Denuncia registrada: Vazamento de água",
      description: "7 horas atrás",
    },
    { title: "Alerta: Calçada danificada", description: "8 horas atrás" },
    {
      title: "Denuncia registrada: Obra irregular",
      description: "9 horas atrás",
    },
    { title: "Alerta: Posto de saúde fechado", description: "10 horas atrás" },
    { title: "Aviso: Esgoto a céu aberto", description: "11 horas atrás" },
    {
      title: "Denuncia registrada: Animais na rua",
      description: "12 horas atrás",
    },
    { title: "Alerta: Buraco na rua da escola", description: "13 horas atrás" },
    {
      title: "Aviso: Sinalização de trânsito faltando",
      description: "14 horas atrás",
    },
    {
      title: "Denuncia registrada: Construção sem alvará",
      description: "15 horas atrás",
    },
    {
      title: "Alerta: Fumaça excessiva no bairro",
      description: "16 horas atrás",
    },
    {
      title: "Aviso: Lixo nos fundos da escola",
      description: "17 horas atrás",
    },
    {
      title: "Denuncia registrada: Invasão de terreno",
      description: "18 horas atrás",
    },
    { title: "Alerta: Falta de água na região", description: "19 horas atrás" },
    { title: "Aviso: Ruído excessivo de obra", description: "20 horas atrás" },
    {
      title: "Denuncia registrada: Obra irregular sem proteção",
      description: "21 horas atrás",
    },
    { title: "Alerta: Buraco na rua principal", description: "22 horas atrás" },
    { title: "Aviso: Arborização inadequada", description: "23 horas atrás" },
    {
      title: "Denuncia registrada: Descarte irregular de lixo",
      description: "1 dia atrás",
    },
    {
      title: "Alerta: Fumaça de incêndio nas proximidades",
      description: "1 dia atrás",
    },
    {
      title: "Aviso: Lixo acumulado em terreno baldio",
      description: "1 dia atrás",
    },
    {
      title: "Denuncia registrada: Obra em área pública",
      description: "1 dia atrás",
    },
    { title: "Alerta: Rua com entulho na calçada", description: "1 dia atrás" },
    { title: "Aviso: Carro abandonado na rua", description: "1 dia atrás" },
    {
      title: "Denuncia registrada: Falta de segurança no bairro",
      description: "1 dia atrás",
    },
    { title: "Alerta: Árvore com risco de queda", description: "1 dia atrás" },
    {
      title: "Aviso: Obra irregular sem autorização",
      description: "1 dia atrás",
    },
    {
      title: "Denuncia registrada: Poluição sonora no centro",
      description: "2 dias atrás",
    },
    {
      title: "Alerta: Faltando lâmpadas em poste",
      description: "2 dias atrás",
    },
    { title: "Aviso: Buraco no estacionamento", description: "2 dias atrás" },
    {
      title: "Denuncia registrada: Sinalização de trânsito errada",
      description: "2 dias atrás",
    },
    {
      title: "Alerta: Muro caindo em área residencial",
      description: "2 dias atrás",
    },
    { title: "Aviso: Vazamento de esgoto", description: "3 dias atrás" },
    {
      title: "Denuncia registrada: Estrutura de escola comprometida",
      description: "3 dias atrás",
    },
    {
      title: "Alerta: Fuga de água em praça pública",
      description: "3 dias atrás",
    },
    {
      title: "Aviso: Falta de transporte público no horário",
      description: "3 dias atrás",
    },
    {
      title: "Denuncia registrada: Carro estacionado em vaga de deficientes",
      description: "4 dias atrás",
    },
    {
      title: "Alerta: Obra parada em vias principais",
      description: "4 dias atrás",
    },
    {
      title: "Aviso: Falta de iluminação em parque",
      description: "4 dias atrás",
    },
    {
      title: "Denuncia registrada: Ruído alto em bar durante a madrugada",
      description: "4 dias atrás",
    },
    { title: "Alerta: Falta de coleta de lixo", description: "5 dias atrás" },
    {
      title: "Aviso: Lixo espalhado em bairro residencial",
      description: "5 dias atrás",
    },
    {
      title: "Denuncia registrada: Animais em via pública",
      description: "5 dias atrás",
    },
    { title: "Alerta: Falta de pavimentação", description: "6 dias atrás" },
    { title: "Aviso: Obra sem proteção na rua", description: "6 dias atrás" },
    {
      title: "Denuncia registrada: Buraco profundo em estrada",
      description: "6 dias atrás",
    },
  ];

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
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
