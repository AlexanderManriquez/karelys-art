"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "ui/button";
import { HiMenu, HiX } from "react-icons/hi";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Función para abrir/cerrar el menú en móviles
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <Link href="/" className="text-2xl font-bold text-amber-500 pl-2">Karelys ART.</Link>
            <div className="space-x-6 hidden md:flex items-center pl-2">
                <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Inicio</Link>
                <Link href="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors">Galería</Link>
                <Link href="/exposiciones" className="text-gray-700 hover:text-gray-900 transition-colors">Exposiciones</Link>
                <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</Link>
                <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contacto</Link>
                <Button variant="outline" size="sm">Donar</Button>
            </div>
            {/* Botón para abrir el menú móvil */}
            <div className="md:hidden pl-2">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg w-full">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Inicio</Link>
                        <Link href="/gallery" className="text-gray-700 hover:text-gray-900 transition-colors">Galería</Link>
                        <Link href="/exposiciones" className="text-gray-700 hover:text-gray-900 transition-colors">Exposiciones</Link>
                        <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contacto</Link>
                        <Button variant="outline">Donar</Button>
                    </div>
                    
                </div>
            )}
        </nav>
    )
}