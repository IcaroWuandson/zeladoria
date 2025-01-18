"use-client";

import { CardComponent } from "@/components/Card";
import { ComponentChart } from "@/components/Chart";
import Container from "@/components/Container";
import { DatePickerComponent } from "@/components/DatePicker";
import { HeaderWelcome } from "@/components/HeaderWelcome";
import { MenubarComponent } from "@/components/MenuBar";
import { TabelaChamados } from "@/components/Table";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const cardContent = {
    title: "Chamados",
    description: "Número de chamados realizados",
    amount: 12345,
  };
  const cardContent2 = {
    title: "Pendentes",
    description: "Número de chamados pendentes",
    amount: 12345,
  };
  const cardContent3 = {
    title: "Em atendimento",
    description: "Número de chamados em atendimento",
    amount: 12345,
  };
  const cardContent4 = {
    title: "Finalizados",
    description: "Número de chamados finalizados",
    amount: 12345,
  };

  return (
    <Container>
      <HeaderWelcome />
      <Separator className="my-4" />
      <div className="flex flex-row justify-between w-full">
        <MenubarComponent />

        <DatePickerComponent />
      </div>
      <Separator className="my-4" />

      <div className="max-w-full">
        <div className="flex flex-row justify-start gap-4">
          <CardComponent content={cardContent} />
          <CardComponent content={cardContent2} />
          <CardComponent content={cardContent3} />
          <CardComponent content={cardContent4} />
        </div>
      </div>

      <Separator className="my-4" />
      <div>
        <TabelaChamados />

        <Separator className="my-4" />
        <ComponentChart />
      </div>
    </Container>
  );
}
