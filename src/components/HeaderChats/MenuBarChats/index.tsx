import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenubarChats() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Conversas</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Configurações</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Notificações</MenubarItem>
              <MenubarItem>Privacidade</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Ajuda</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Suporte <MenubarShortcut>F1</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            FAQs <MenubarShortcut>F2</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
