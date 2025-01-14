import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const chamados = [
  {
    tipo: "Buraco na rua",
    nome: "João Silva",
    bairro: "Centro",
    status: "Aberto",
  },
  {
    tipo: "Sujeira na praça",
    nome: "Maria Oliveira",
    bairro: "Jardim das Flores",
    status: "Em andamento",
  },
  {
    tipo: "Árvore caída",
    nome: "Carlos Pereira",
    bairro: "Bela Vista",
    status: "Resolvido",
  },
  {
    tipo: "Lâmpada queimada",
    nome: "Ana Souza",
    bairro: "Vila Nova",
    status: "Aberto",
  },
  {
    tipo: "Entulho na calçada",
    nome: "Pedro Santos",
    bairro: "Centro",
    status: "Em andamento",
  },
];

export function TabelaChamados() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Tipo de Chamado</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Bairro</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chamados.map((chamado, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{chamado.tipo}</TableCell>
            <TableCell>{chamado.nome}</TableCell>
            <TableCell>{chamado.bairro}</TableCell>
            <TableCell>{chamado.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="text-right bg-white">
            Total de Chamados: {chamados.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
