import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenubarComponent() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Chamados</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Novo Chamado <MenubarShortcut>Ctrl+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Consultar Chamados <MenubarShortcut>Ctrl+F</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Filtrar por Status</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Todos</MenubarItem>
              <MenubarItem>Aberto</MenubarItem>
              <MenubarItem>Em andamento</MenubarItem>
              <MenubarItem>Resolvido</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Relatórios</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Gerar Relatório Mensal</MenubarItem>
          <MenubarItem>Gerar Relatório Anual</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Exportar para PDF</MenubarItem>
          <MenubarItem>Exportar para Excel</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Configurações</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Notificar por Email</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Exibir Chamados Finalizados</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Gerenciar Usuários</MenubarItem>
          <MenubarItem>Configurações do Sistema</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Perfil</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="admin">
            <MenubarRadioItem value="admin">Administrador</MenubarRadioItem>
            <MenubarRadioItem value="user">Usuário</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>Sair</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
