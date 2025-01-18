// app/page.tsx

"use client"; // Para garantir que este código seja executado no cliente

import { useAuth } from "@/context/AuthContext"; // Importa o hook useAuth
import Loading from "@/components/Loading";
import Login from "./plataforma/login";
import Home from "./plataforma/home/page";

export default function Page() {
  const { user, loading } = useAuth(); // Usa o hook useAuth

  if (loading) {
    return <Loading isLoading={loading} value={50} />;
  }

  if (user) {
    return <Home />;
  }

  return <Login />;
}
