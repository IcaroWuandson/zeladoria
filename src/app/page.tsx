"use client";

import { useAuth } from "@/context/AuthContext";
import Loading from "@/components/Loading";
import Login from "./plataforma/login";
import Home from "./plataforma/home/page";

export default function Page() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading isLoading={loading} value={50} />;
  }

  if (user) {
    return <Home />;
  }

  return <Login />;
}
