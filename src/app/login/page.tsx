"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/utils/supabase/server";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      alert("Erro no login. Verifique suas credenciais.");
    } else {
      router.push("/home");
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (registerPassword !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: registerEmail,
      password: registerPassword,
    });

    if (error) {
      alert("Erro no registro. Tente novamente.");
    } else {
      alert(
        "Registro bem-sucedido! Verifique seu e-mail para confirmar a conta."
      );
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col justify-center items-center text-center px-10 flex-1 bg-gray-50 py-12">
        <div className="mb-6">
          <Image
            src="/assets/logo.png"
            width={220}
            height={220}
            alt="Logo ZeloSim"
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl font-semibold text-zinc-800 mb-4">
          Bem-vindo ao <span className="text-blue-600">ZeloSim</span>
        </h1>

        <p className="text-zinc-600 text-lg leading-relaxed tracking-wide max-w-md">
          O <strong>ZeloSim</strong> é o sistema inteligente de{" "}
          <strong>zeladoria municipal</strong> que organiza, monitora e agiliza
          a resolução de demandas públicas. Controle total da sua cidade com
          mais eficiência, transparência e zelo.
        </p>
      </div>

      <div className="flex justify-center items-center flex-1">
        <Tabs defaultValue="login" className="w-[400px] mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Já tem conta? Entre</TabsTrigger>
            <TabsTrigger value="register">Novo? Registre-se</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Insira suas credenciais para acessar sua conta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <Label htmlFor="login-email">E-mail</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Senha</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="********"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>

                  <Button className="w-full my-4 bg-[#0134a3] " type="submit">
                    Entrar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Registre-se</CardTitle>
                <CardDescription>
                  Crie uma conta preenchendo as informações abaixo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleRegister}>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">E-mail</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="********"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirme sua senha</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="********"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <Button className="w-full my-4 bg-[#0134a3] " type="submit">
                    Registrar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
