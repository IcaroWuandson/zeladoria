"use client";

import { useState } from "react";
import Container from "@/components/Container";

import Chat from "./component-chat";
import ControlerChat from "./controler-chat";
import { HeaderChatsComponent } from "@/components/HeaderChats";
import { Profile } from "@/types/type";

export default function Chats() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <Container>
      <HeaderChatsComponent />

      <div className="flex justify-start flex-row gap-4">
        {/* Seletor de mensagens */}
        <ControlerChat onSelectProfile={setSelectedProfile} />

        {/* Chat */}
        <Chat profile={selectedProfile} />
      </div>
    </Container>
  );
}
