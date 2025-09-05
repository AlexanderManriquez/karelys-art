"use client";

import { sendContactMessage } from "@/services/contactService";
import { CreateContactDto } from "@/types/contact";
import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState<CreateContactDto>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      await sendContactMessage(form);
      setSuccess("¡Mensaje enviado con éxito!");
      setForm( { name: "", email: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto-6 bg-gray-50 rounded-1xl p-4 space-y-4">
      <h2 className="text-2xl font-bold">Contáctame</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Tu nombre"
        className="w-full border rounded-lg p-2"
        aria-required="true"
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Tu correo electrónico"
        className="w-full border rounded-lg p-2"
        aria-required="true"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Escribe tu mensaje"
        className="w-full border rounded-lg p-2"
        minLength={10}
        aria-required="true"
        required
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}  
      </button>

      {success && <p className="text-green-600 text-sm">{success}</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}