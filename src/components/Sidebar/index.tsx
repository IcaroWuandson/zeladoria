"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import {
  Home,
  Brain,
  ChartCandlestick,
  CircleUser,
  LogOut,
} from "lucide-react";
import Link from "next/link";

import { supabase } from "@/utils/supabase/server";

export function AppSidebar() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push("/");
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex w-14 flex-col">
      <aside className="fixed inset-y-0 left-0 z-10 w-14 border-r bg-background flex-col h-full">
        <nav className="flex flex-col items-center gap-4 px-2 py-5 flex-grow">
          <TooltipProvider>
            <Link href="#">
              <Brain className="h-5 w-5" />
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/plataforma/home"
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/plataforma/dashboard"
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChartCandlestick className="h-5 w-5" />
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/plataforma/perfil"
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <CircleUser className="h-5 w-5" />
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Perfil</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="flex flex-col items-center gap-4 px-2 py-5 absolute bottom-5 left-0 w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleLogout}
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </TooltipTrigger>

              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </div>
  );
}
