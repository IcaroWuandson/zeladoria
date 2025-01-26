"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import { HeaderWelcome } from "@/components/HeaderWelcome";

const ComponentMap = dynamic(() => import("./componet-map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function Mapa() {
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    setIsMapReady(true);
    return () => {
      setIsMapReady(false); // Limpa a instância do mapa quando o componente for desmontado
    };
  }, []);

  return (
    <Container>
      <HeaderWelcome />
      {isMapReady && <ComponentMap />}
    </Container>
  );
}
