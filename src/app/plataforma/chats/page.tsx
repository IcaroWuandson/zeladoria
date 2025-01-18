"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";

import Chat from "./component-chat";
import ControlerChat from "./controler-chat";
import { HeaderChatsComponent } from "@/components/HeaderChats";
import { Profile } from "@/types/type";
import { HeaderWelcome } from "@/components/HeaderWelcome";

export default function Chats() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <Container>
      <HeaderWelcome />

      <Separator className="my-4" />
      <HeaderChatsComponent />
      <Separator className="my-4" />

      <div className="flex justify-start flex-row gap-4">
        {/* Seletor de mensagens */}
        <ControlerChat onSelectProfile={setSelectedProfile} />

        {/* Chat */}
        <Chat profile={selectedProfile} />
      </div>
    </Container>
  );
}
