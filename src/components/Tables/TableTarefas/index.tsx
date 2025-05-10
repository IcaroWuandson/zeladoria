"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface Task {
  descricao: string;
  horario: string;
  data: string;
  status: string;
  equipe: string;
}

const tasksPendentes: Task[] = [
  {
    descricao: "Pintura de meio-fio",
    horario: "08:00",
    data: "2025-02-14",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Podagem de árvores",
    horario: "10:30",
    data: "2025-02-14",
    status: "Pendente",
    equipe: "Equipe B",
  },
  {
    descricao: "Coleta de entulhos",
    horario: "14:00",
    data: "2025-02-15",
    status: "Atrasado",
    equipe: "Equipe C",
  },
  {
    descricao: "Reparo em calçamento",
    horario: "09:00",
    data: "2025-02-16",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Limpeza de bueiros",
    horario: "07:30",
    data: "2025-02-16",
    status: "Concluído",
    equipe: "Equipe D",
  },
  {
    descricao: "Pintura de faixa de pedestres",
    horario: "08:00",
    data: "2025-02-17",
    status: "Pendente",
    equipe: "Equipe B",
  },
  {
    descricao: "Recolhimento de galhos",
    horario: "11:00",
    data: "2025-02-17",
    status: "Pendente",
    equipe: "Equipe C",
  },
  {
    descricao: "Troca de lâmpadas",
    horario: "13:30",
    data: "2025-02-18",
    status: "Atrasado",
    equipe: "Equipe D",
  },
  {
    descricao: "Manutenção de praça",
    horario: "09:00",
    data: "2025-02-18",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Conserto de corrimão",
    horario: "15:00",
    data: "2025-02-19",
    status: "Concluído",
    equipe: "Equipe B",
  },
  {
    descricao: "Remoção de pichações",
    horario: "08:00",
    data: "2025-02-19",
    status: "Pendente",
    equipe: "Equipe C",
  },
  {
    descricao: "Roçada de terrenos públicos",
    horario: "10:00",
    data: "2025-02-20",
    status: "Concluído",
    equipe: "Equipe D",
  },
  {
    descricao: "Revitalização de parquinho",
    horario: "14:30",
    data: "2025-02-20",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Reposição de bancos quebrados",
    horario: "09:30",
    data: "2025-02-21",
    status: "Atrasado",
    equipe: "Equipe B",
  },
  {
    descricao: "Limpeza de canteiros centrais",
    horario: "11:30",
    data: "2025-02-21",
    status: "Pendente",
    equipe: "Equipe C",
  },
  {
    descricao: "Conserto de bueiros quebrados",
    horario: "13:00",
    data: "2025-02-22",
    status: "Concluído",
    equipe: "Equipe D",
  },
  {
    descricao: "Troca de tampas de bueiro",
    horario: "07:00",
    data: "2025-02-22",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Limpeza de pontos de ônibus",
    horario: "12:00",
    data: "2025-02-23",
    status: "Atrasado",
    equipe: "Equipe B",
  },
  {
    descricao: "Instalação de lixeiras",
    horario: "10:30",
    data: "2025-02-23",
    status: "Pendente",
    equipe: "Equipe C",
  },
  {
    descricao: "Reparo de sinalização",
    horario: "14:00",
    data: "2025-02-24",
    status: "Pendente",
    equipe: "Equipe D",
  },
  {
    descricao: "Manutenção de calçadas",
    horario: "09:30",
    data: "2025-02-24",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Pintura de guias",
    horario: "07:00",
    data: "2025-02-25",
    status: "Concluído",
    equipe: "Equipe B",
  },
  {
    descricao: "Troca de placas de trânsito",
    horario: "11:45",
    data: "2025-02-25",
    status: "Atrasado",
    equipe: "Equipe C",
  },
  {
    descricao: "Desobstrução de bocas de lobo",
    horario: "13:30",
    data: "2025-02-26",
    status: "Pendente",
    equipe: "Equipe D",
  },
  {
    descricao: "Lavagem de ruas",
    horario: "08:00",
    data: "2025-02-26",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Manutenção de iluminação pública",
    horario: "10:00",
    data: "2025-02-27",
    status: "Concluído",
    equipe: "Equipe B",
  },
  {
    descricao: "Instalação de refletores em praças",
    horario: "14:00",
    data: "2025-02-27",
    status: "Pendente",
    equipe: "Equipe C",
  },
  {
    descricao: "Limpeza de margens de rios",
    horario: "09:00",
    data: "2025-02-28",
    status: "Atrasado",
    equipe: "Equipe D",
  },
  {
    descricao: "Manutenção de equipamentos de ginástica",
    horario: "12:30",
    data: "2025-02-28",
    status: "Pendente",
    equipe: "Equipe A",
  },
  {
    descricao: "Pintura de bancos de praças",
    horario: "16:00",
    data: "2025-03-01",
    status: "Concluído",
    equipe: "Equipe B",
  },
];

export default function ListaDeTarefas() {
  const [tasks, setTasks] = useState(tasksPendentes);

  const handleIniciarTarefa = (task: Task) => {
    toast(`Iniciando a tarefa: ${task.descricao} às ${task.horario}`);
  };

  const handleExcluirTarefa = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const colunasTarefas: ColumnDef<Task>[] = [
    { id: "descricao", header: "Descrição", accessorKey: "descricao" },
    {
      id: "horario",
      header: "Horário",
      cell: ({ row }) => <div>{row.original.horario}</div>,
    },
    {
      id: "data",
      header: "Data",
      cell: ({ row }) => (
        <div>{format(new Date(row.original.data), "dd/MM/yyyy")}</div>
      ),
    },
    { id: "status", header: "Status", accessorKey: "status" },
    { id: "equipe", header: "Equipe Responsável", accessorKey: "equipe" },
    {
      id: "acao",
      header: "Ação",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            onClick={() => handleExcluirTarefa(row.index)}
            variant="outline"
          >
            Excluir
          </Button>
          <Button
            onClick={() => handleIniciarTarefa(row.original)}
            variant="default"
          >
            Iniciar
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: tasks,
    columns: colunasTarefas,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border p-4 h-[85vh]">
      <h2 className="mb-4 text-xl font-bold">Tarefas</h2>
      <ScrollArea className="h-[75vh]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={colunasTarefas.length}
                  className="h-24 text-center"
                >
                  Nenhuma tarefa pendente.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}
