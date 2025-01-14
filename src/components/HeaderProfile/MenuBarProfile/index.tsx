import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarCheckboxItem,
} from "@/components/ui/menubar";

export function MenubarPerfil() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Informações</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Editar Perfil <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Alterar Senha <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Visualizar Histórico <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Preferências</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Configurações de Notificações <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Definir Idioma <MenubarShortcut>⌘L</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem>
            Ativar Notificações por E-mail
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Receber Atualizações de Sistema
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Privacidade</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Gerenciar Sessões Ativas <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Apagar Dados de Navegação <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Configurações de Privacidade</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Bloquear Usuários</MenubarItem>
              <MenubarItem>Gerenciar Permissões de Dados</MenubarItem>
              <MenubarItem>Controle de Cookies</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Suporte</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Enviar Feedback <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Ajuda e Suporte <MenubarShortcut>⌘? </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Sair <MenubarShortcut>⌘Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
