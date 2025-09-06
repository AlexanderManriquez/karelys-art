"use client";

import { sendContactMessage } from "@/services/contactService";
import { CreateContactDto } from "@/types/contact";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ContactForm() {
  const [form, setForm] = useState<CreateContactDto>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await sendContactMessage(form);
      toast.success("Mensaje enviado con éxito.");
      setForm( { name: "", email: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/4 mx-auto-6 bg-gray-50 rounded-1xl p-4 space-y-4">
      <h2 className="text-2xl font-bold text-red-400">Contáctame</h2>

      <Input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Tu nombre"
        className="w-full border rounded-lg p-2"
        aria-required="true"
        required
      />

      <Input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Tu correo electrónico"
        className="w-full border rounded-lg p-2"
        aria-required="true"
        required
      />

      <Textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Escribe tu mensaje"
        className="w-full border rounded-lg p-2"
        minLength={10}
        aria-required="true"
        required
      />

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}  
      </Button>
    </form>
  );
}