"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

// Dados atualizados para o número de chamados por mês
const chartData = [
  { month: "January", chamados: 120 },
  { month: "February", chamados: 150 },
  { month: "March", chamados: 200 },
  { month: "April", chamados: 180 },
  { month: "May", chamados: 220 },
  { month: "June", chamados: 250 },
]

const chartConfig = {
  chamados: {
    label: "Chamados",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ComponentChamadasAoLongoDoTempo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução dos Chamados Registrados</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent className="max-w-[500px]">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="chamados"
              type="natural"
              stroke="var(--color-chamados)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
        Tendência de aumento de 15.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Visualizando a evolução dos chamados
        </div>
      </CardFooter>
    </Card>
  )
}
