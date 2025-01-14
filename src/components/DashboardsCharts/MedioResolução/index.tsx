"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

// Dados do gráfico: Média de tempo para resolver chamados (em dias)
const dadosGrafico = [
  { mes: "Janeiro", tempoResolucao: 3.2 },
  { mes: "Fevereiro", tempoResolucao: 2.8 },
  { mes: "Março", tempoResolucao: 3.5 },
  { mes: "Abril", tempoResolucao: 2.9 },
  { mes: "Maio", tempoResolucao: 3.1 },
  { mes: "Junho", tempoResolucao: 2.7 },
];

// Configuração do gráfico
const configuracaoGrafico = {
  tempoResolucao: {
    label: "Tempo Médio de Resolução (Dias)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ComponentMedioResolução() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tempo Médio de Resolução</CardTitle>
        <CardDescription>
          Exibe o tempo médio de resolução dos chamados nos últimos 6 meses.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[500px]">
        <ChartContainer config={configuracaoGrafico}>
          <LineChart
            accessibilityLayer
            data={dadosGrafico}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(valor) => valor.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="tempoResolucao"
              type="linear"
              stroke="var(--color-tempoResolucao)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de queda de 5.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Exibindo o tempo médio de resolução dos chamados nos últimos 6 meses.
        </div>
      </CardFooter>
    </Card>
  );
}
