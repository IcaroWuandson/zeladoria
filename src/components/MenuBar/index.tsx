"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface MenubarProps {
  onNovoChamado: () => void;
}

export function MenubarComponent({ onNovoChamado }: MenubarProps) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Chamados</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={onNovoChamado}>Novo Chamado</MenubarItem>
          <MenubarItem>Consultar Chamados</MenubarItem>
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
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
