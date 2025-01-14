import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  export function MenubarDashboard() {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Denúncias</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Registrar Nova Denúncia <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Visualizar Denúncias <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Encerrar Denúncia <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
  
        <MenubarMenu>
          <MenubarTrigger>Relatórios</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Relatório de Denúncias <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Relatório de Ações <MenubarShortcut>⇧⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Exportar</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PDF</MenubarItem>
                <MenubarItem>Excel</MenubarItem>
                <MenubarItem>CSV</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
  
        <MenubarMenu>
          <MenubarTrigger>Configurações</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Gerenciar Usuários <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Configurar Permissões <MenubarShortcut>⇧⌘P</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem>Ativar Notificações</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Receber Relatórios Diários
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
  
        <MenubarMenu>
          <MenubarTrigger>Visão Geral</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Dashboard <MenubarShortcut>⌘D</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Estatísticas <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Configurar Dashboard <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }
  