"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Redirecting from "@/app/redirecting";

const ComponentMap = dynamic(() => import("./componet-map"), {
  loading: () => <Redirecting />,
  ssr: false,
});

export default function Mapa() {
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    setIsMapReady(true);
    return () => {
      setIsMapReady(false);
    };
  }, []);

  return <Container>{isMapReady && <ComponentMap />}</Container>;
}
