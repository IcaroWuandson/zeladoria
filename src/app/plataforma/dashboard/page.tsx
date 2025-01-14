import Container from "@/components/Container";
import { ComponentChamadasPorStatus } from "@/components/DashboardsCharts/ChamadasPorStatus";
import { ComponentChamadaPorTipo } from "@/components/DashboardsCharts/ChamadasPorTipo";
import { ComponentChamadasAoLongoDoTempo } from "@/components/DashboardsCharts/ChamadosAoLongoDoTempo";
import { ComponentChamadosPorBairro } from "@/components/DashboardsCharts/ChamadosPorBairro";
import { ComponentMedioResolução } from "@/components/DashboardsCharts/MedioResolução";
import { ComponentOrigemDosChamados } from "@/components/DashboardsCharts/OrigemDosChamados";
import { HeaderDashboardComponent } from "@/components/HeaderDashboard";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <Container>
      <div className="mb-4">
        <p className="font-bold text-2xl">Seja Bem-Vindo(a)!</p>
      </div>
      <Separator className="my-4" />
      <HeaderDashboardComponent />

      <Separator className="my-4" />

      <div className="flex flex-row justify-start gap-4">
        <ComponentChamadaPorTipo />
        <ComponentChamadasPorStatus />
        <ComponentChamadosPorBairro />
      </div>
      <Separator className="my-4" />
      <div className="flex flex-row justify-start gap-4">
        <ComponentChamadasAoLongoDoTempo />
        <ComponentMedioResolução />
        <ComponentOrigemDosChamados />
      </div>
    </Container>
  );
}
