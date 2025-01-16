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
} from "@/components/ui/menubar";

export function MenubarDashboard() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Relatórios</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Relatório de Denúncias <MenubarShortcut>Ctrl+R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Relatório de Ações <MenubarShortcut>⇧Ctrl+A</MenubarShortcut>
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
        <MenubarTrigger>Visão Geral</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Dashboard <MenubarShortcut>Ctrl+D</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Estatísticas <MenubarShortcut>Ctrl+S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Configurar Dashboard <MenubarShortcut>Ctrl+C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
