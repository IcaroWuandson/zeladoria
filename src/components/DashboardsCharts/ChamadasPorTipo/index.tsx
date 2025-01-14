"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Dados atualizados
const chartData = [
  { type: "Buraco na rua", count: 120, fill: "hsl(var(--chart-1))" },
  { type: "Sujeira", count: 90, fill: "hsl(var(--chart-2))" },
  { type: "Lâmpada queimada", count: 60, fill: "hsl(var(--chart-3))" },
  { type: "Água vazando", count: 40, fill: "hsl(var(--chart-4))" },
  { type: "Outros", count: 30, fill: "hsl(var(--chart-5))" },
]

// Configuração de cores e rótulos
const chartConfig = {
  count: {
    label: "Chamados",
  },
  "Buraco na rua": {
    label: "Buraco na rua",
    color: "hsl(var(--chart-1))",
  },
  Sujeira: {
    label: "Sujeira",
    color: "hsl(var(--chart-2))",
  },
  "Lâmpada queimada": {
    label: "Lâmpada queimada",
    color: "hsl(var(--chart-3))",
  },
  "Água vazando": {
    label: "Água vazando",
    color: "hsl(var(--chart-4))",
  },
  Outros: {
    label: "Outros",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ComponentChamadaPorTipo() {
  const totalCalls = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribuição dos Chamados por Tipo</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="type"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCalls}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Chamados
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de aumento de 5.9% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Exibindo o tempo médio de resolução dos chamados nos últimos 6 meses.
        </div>
      </CardFooter>
    </Card>
  )
}
