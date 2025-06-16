// components/DialogNovoChamado.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DialogNovoChamadoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DialogNovoChamado({
  open,
  onOpenChange,
}: DialogNovoChamadoProps) {
  const [form, setForm] = useState({
    nome: "",
    bairro: "",
    descricao: "",
    fotos: [] as File[],
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setForm({ ...form, fotos: Array.from(e.target.files) });
    }
  }

  function handleSubmit() {
    console.log("Chamado enviado:", {
      ...form,
      fotos: form.fotos.map((file) => file.name),
    });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Novo Chamado</DialogTitle>
          <DialogDescription>
            Preencha os dados para registrar um novo chamado.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="bairro">Bairro</Label>
            <Input
              id="bairro"
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="fotos">Fotos</Label>
            <Input
              id="fotos"
              name="fotos"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </div>

          <Button onClick={handleSubmit} className="w-full mt-2">
            Criar Chamado
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
