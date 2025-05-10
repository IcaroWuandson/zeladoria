"use client";

import { useState, useEffect } from "react";

export default function Redirecting() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-lg font-semibold w-screen">
      Aguarde{dots}
    </div>
  );
}
