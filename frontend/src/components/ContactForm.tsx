"use client";

import { sendContactMessage } from "@/services/contactService";
import { CreateContactDto } from "@/types/contact";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

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
      setTimeout(() => {
        redirect("/");
      }, 2000);
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
    <div className="max-w-md w-full bg-gradient-to-br from-amber-50 via-white to-red-50 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <h1 className="text-4xl font-bold text-amber-500 text-center mb-2">¡Bienvenido!</h1>
      <h2 className="text-2xl font-semibold text-red-300 text-center mb-2">Gracias por visitar la página.</h2>
      <p className="text-center text-gray-600 mb-4">Si tienes alguna consulta o comentario, escríbeme usando el formulario abajo</p>
      <form onSubmit={handleSubmit} className="w-full p-4 space-y-4">
      
        <label htmlFor="name" className="block m-1 text-sm font-medium text-gray-700">Nombre</label>
        <Input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          aria-required="true"
          required
        />

        <label htmlFor="email" className="block m-1 text-sm font-medium text-gray-700">Correo Electrónico</label>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          className="focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          aria-required="true"
          required
        />

        <label htmlFor="message" className="block m-1 text-sm font-medium text-gray-700">Mensaje</label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje"
          className="focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          minLength={10}
          rows={5}
          aria-required="true"
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition hover:scale-105 duration-200 shadow-md"
        >
          {loading ? "Enviando..." : "Enviar Mensaje"}  
        </Button>
    </form>
    </div>

  );
}