import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { RealTimeNotifications } from "@/components/Notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SIGEDAM",
  description: "Sistema de análise de orçamento para prefeituras",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <AuthProvider>
          <main suppressHydrationWarning>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            <RealTimeNotifications />
          </main>
        </AuthProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
