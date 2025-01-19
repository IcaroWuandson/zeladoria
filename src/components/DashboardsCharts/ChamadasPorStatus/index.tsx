"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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

// Dados atualizados para o número de chamados por status
const chartData = [
  { status: "Aberto", chamados: 120 },
  { status: "Em Andamento", chamados: 150 },
  { status: "Resolvido", chamados: 80 },
];

const chartConfig = {
  chamados: {
    label: "Chamados",
    color: "hsl(var(--chart-1))",
  },
  status: {
    label: "Status",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function ComponentChamadasPorStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chamados por Status</CardTitle>
        <CardDescription>Distribuição dos chamados por status</CardDescription>
      </CardHeader>
      <CardContent className="max-w-[500px]">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="status"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis dataKey="chamados" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="chamados"
              layout="vertical"
              fill="var(--color-chamados)"
              radius={4}
            >
              <LabelList
                dataKey="status"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="chamados"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de aumento de 8.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Exibindo o tempo médio de resolução dos chamados nos últimos 6 meses.
        </div>
      </CardFooter>
    </Card>
  );
}
