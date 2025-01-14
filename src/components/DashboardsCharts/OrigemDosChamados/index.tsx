"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dados do gráfico: Canais pelos quais os chamados foram registrados
const dadosGrafico = [
  { canal: "Telefone", chamados: 350, fill: "var(--color-telefone)" },
  { canal: "Site", chamados: 420, fill: "var(--color-site)" },
  { canal: "Aplicativo", chamados: 300, fill: "var(--color-aplicativo)" },
  { canal: "Presencial", chamados: 100, fill: "var(--color-presencial)" },
];

// Configuração do gráfico
const configuracaoGrafico = {
  chamados: {
    label: "Chamados Registrados",
  },
  telefone: {
    label: "Telefone",
    color: "hsl(var(--chart-1))",
  },
  site: {
    label: "Site",
    color: "hsl(var(--chart-2))",
  },
  aplicativo: {
    label: "Aplicativo",
    color: "hsl(var(--chart-3))",
  },
  presencial: {
    label: "Presencial",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function ComponentOrigemDosChamados() {
  return (
    <Card className="flex flex-col">
      <CardHeader className=" pb-0">
        <CardTitle>Canais de Registro</CardTitle>
        <CardDescription>
          Exibe os canais pelos quais os chamados foram registrados.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={configuracaoGrafico}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={dadosGrafico} dataKey="chamados" nameKey="canal" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de aumento de 5.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Exibindo o tempo médio de resolução dos chamados nos últimos 6 meses.
        </div>
      </CardFooter>
    </Card>
  );
}
