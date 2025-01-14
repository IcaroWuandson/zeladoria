"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

// Dados atualizados para quantidade de chamados por bairro
const chartData = [
  { bairro: "Centro", chamados: 120 },
  { bairro: "Zona Sul", chamados: 150 },
  { bairro: "Zona Norte", chamados: 80 },
  { bairro: "Zona Leste", chamados: 100 },
  { bairro: "Zona Oeste", chamados: 60 },
]

const chartConfig = {
  chamados: {
    label: "Chamados",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ComponentChamadosPorBairro() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chamados por Bairro</CardTitle>
        <CardDescription>Visualização por região da cidade</CardDescription>
      </CardHeader>
      <CardContent className="w-[500px]">
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="bairro" 
              tickLine={false} 
              axisLine={false} 
              tickMargin={10} 
            />
            <YAxis 
              type="number" 
              tickLine={false} 
              axisLine={false} 
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="chamados" fill="hsl(var(--chart-1))" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de aumento de 8.5% neste mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Visualizando a distribuição dos chamados por bairro
        </div>
      </CardFooter>
    </Card>
  )
}
