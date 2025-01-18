import Container from "@/components/Container";
import { ComponentChamadasPorStatus } from "@/components/DashboardsCharts/ChamadasPorStatus";
import { ComponentChamadaPorTipo } from "@/components/DashboardsCharts/ChamadasPorTipo";
import { ComponentChamadasAoLongoDoTempo } from "@/components/DashboardsCharts/ChamadosAoLongoDoTempo";
import { ComponentChamadosPorBairro } from "@/components/DashboardsCharts/ChamadosPorBairro";
import { ComponentMedioResolução } from "@/components/DashboardsCharts/MedioResolução";
import { ComponentOrigemDosChamados } from "@/components/DashboardsCharts/OrigemDosChamados";
import { HeaderDashboardComponent } from "@/components/HeaderDashboard";
import { HeaderWelcome } from "@/components/HeaderWelcome";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <Container>
      <HeaderWelcome />
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
