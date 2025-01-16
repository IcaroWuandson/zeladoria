import Container from "@/components/Container";
import { HeaderProfileComponent } from "@/components/HeaderProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  CirclePlus,
  Ellipsis,
  Paperclip,
  Search,
  Smile,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Chats() {
  return (
    <Container>
      <div className="mb-4">
        <p className="font-bold text-2xl text-gray-800">Seja Bem-Vindo(a)!</p>
      </div>

      <Separator className="my-4" />
      <HeaderProfileComponent />
      <Separator className="my-4" />

      <div className="flex justify-start flex-row gap-4">
        {/* Seletor de mensagens */}
        <Card className="w-[25vw] h-[75vh] shadow-lg">
          <CardHeader>
            <div className="flex flex-row justify-between">
              <CardTitle className="text-xl font-semibold text-gray-800">
                Conversas
              </CardTitle>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <CirclePlus />
                    Nova
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Selecione</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4">
              <Search
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <Input
                placeholder="Procurar conversa"
                className="pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              {/* Componente mensagem */}
              <div className=" flex flex-row p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 gap-2 justify-start items-center">
                {/* Foto de perfil do usuario */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="https://github.com/IcaroWuandson.png"
                      alt="Avatar de Ícaro Wuandson"
                    />
                    <AvatarFallback>iw</AvatarFallback>
                  </Avatar>
                </div>

                {/* Infos e ultima mensagem do usuario */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row w-[17vw] justify-between items-center">
                    <p className="text-lg text-gray-800 font-bold">
                      Icaro Wuandson
                    </p>
                    <p className="text-xs text-gray-500">1 hora</p>
                  </div>
                  <p className="text-xs text-gray-800">Olá, tudo bem?</p>
                </div>
              </div>
              <div className=" flex flex-row p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 gap-2 justify-start items-center">
                {/* Foto de perfil do usuario */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="https://github.com/IcaroWuandson.png"
                      alt="Avatar de Ícaro Wuandson"
                    />
                    <AvatarFallback>iw</AvatarFallback>
                  </Avatar>
                </div>

                {/* Infos e ultima mensagem do usuario */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row w-[17vw] justify-between items-center">
                    <p className="text-lg text-gray-800 font-bold">
                      Icaro Wuandson
                    </p>
                    <p className="text-xs text-gray-500">1 hora</p>
                  </div>
                  <p className="text-xs text-gray-800">Olá, tudo bem?</p>
                </div>
              </div>
              <div className=" flex flex-row p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 gap-2 justify-start items-center">
                {/* Foto de perfil do usuario */}
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src="https://github.com/IcaroWuandson.png"
                      alt="Avatar de Ícaro Wuandson"
                    />
                    <AvatarFallback>iw</AvatarFallback>
                  </Avatar>
                </div>

                {/* Infos e ultima mensagem do usuario */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row w-[17vw] justify-between items-center">
                    <p className="text-lg text-gray-800 font-bold">
                      Icaro Wuandson
                    </p>
                    <p className="text-xs text-gray-500">1 hora</p>
                  </div>
                  <p className="text-xs text-gray-800">Olá, tudo bem?</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat */}

        <div className="flex flex-col w-[70vw] h-[75vh]">
          {/* Header das mensagens */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row p-2 gap-2 justify-start items-center">
              {/* Foto de perfil do usuário */}
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Avatar className="w-full h-full">
                  <AvatarImage
                    src="https://github.com/IcaroWuandson.png"
                    alt="Avatar de Ícaro Wuandson"
                  />
                  <AvatarFallback>iw</AvatarFallback>
                </Avatar>
              </div>

              {/* Infos e última mensagem do usuário */}
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-lg text-gray-800 font-bold">
                  Icaro Wuandson
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

          {/* Mensagens */}
          <div className="flex-grow overflow-auto flex flex-col gap-4 p-4">
            {/* Mensagem do remetente (esquerda) */}
            <div className="self-start bg-gray-100 p-3 rounded-lg max-w-[60%] shadow-sm">
              <p className="text-gray-800 text-sm">Olá, tudo bem?</p>
            </div>

            {/* Mensagem do destinatário (direita) */}
            <div className="self-end bg-indigo-100 p-3 rounded-lg max-w-[60%] shadow-sm">
              <p className="text-gray-800 text-sm">Tudo ótimo, e você?</p>
            </div>

            {/* Mensagem do remetente (esquerda) */}
            <div className="self-start bg-gray-100 p-3 rounded-lg max-w-[60%] shadow-sm">
              <p className="text-gray-800 text-sm">Estou indo bem, obrigado!</p>
            </div>

            {/* Mensagem do destinatário (direita) */}
            <div className="self-end bg-indigo-100 p-3 rounded-lg max-w-[60%] shadow-sm">
              <p className="text-gray-800 text-sm">Que bom ouvir isso!</p>
            </div>
          </div>

          {/* Componente escrever mensagem */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-row justify-between items-center gap-2">
            <div className="relative w-full">
              <Input
                placeholder="Mensagem"
                className="pr-20 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center space-x-2 text-gray-500">
                <Smile
                  size={20}
                  className="cursor-pointer hover:text-indigo-500"
                />
                <Paperclip
                  size={20}
                  className="cursor-pointer hover:text-indigo-500"
                />
              </div>
            </div>
            <Button>Enviar</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
