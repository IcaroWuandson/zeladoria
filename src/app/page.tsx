"use client"; // Para garantir que este componente será executado no cliente

import { supabase } from "@/utils/supabase/server";
import React, { useEffect, useState } from "react";
import Login from "./plataforma/login";
import Home from "./plataforma/home/page";
import { Session } from "@supabase/supabase-js";
import Loading from "@/components/Loading";

export default function Page() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Verificar se o código está sendo executado no cliente
    if (typeof window !== "undefined") {
      const fetchSession = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (!error) {
          setSession(data.session);
        }
        setLoading(false);
      };

      const simulateProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 10;
          clearInterval(simulateProgress);
          return 100;
        });
      }, 100);

      fetchSession();

      return () => clearInterval(simulateProgress);
    }
  }, []);

  if (loading) {
    return <Loading isLoading={loading} value={progress} />;
  }

  if (session?.user) {
    return <Home />;
  }

  return <Login />;
}
