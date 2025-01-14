"use-client";

import { MenubarPerfil } from "./MenuBarProfile";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeaderProfileComponent() {
  return (
    <div className="flex flex-row justify-between mr-6">
      <MenubarPerfil />


      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
