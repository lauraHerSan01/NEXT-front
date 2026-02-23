"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="flex justify-between items-center px-12 py-2">

        {/* Logo */}
        <img 
          src="/HabitarLogo.jpeg" 
          alt="HABITAR Logo"
          className="h-12"
        />

        <div className="flex items-center gap-10">

          {/* MENÚ DESPLEGABLE */}
          <nav
            className={`flex gap-10 text-sm text-gray-300 transition-all duration-500 ease-in-out transform ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0 pointer-events-none"
            }`}
          >
            <a href="#" className="hover:text-white">Servicios</a>
            <a href="#" className="hover:text-white">Proyectos</a>
            <a href="#" className="hover:text-white">Equipo</a>
            <a href="#" className="hover:text-white">Nosotros</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </nav>

          {/* ICONO MENÚ */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between w-5 h-4"
          >
            <span className="h-0.5 w-full bg-white"></span>
            <span className="h-0.5 w-full bg-white"></span>
            <span className="h-0.5 w-full bg-white"></span>
          </button>

          {/* BOTÓN INICIAR SESIÓN */}
          <a
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Iniciar sesión
          </a>

          {/* BOTÓN SOLICITAR OBRA */}
          <a
            href="/solicitud"
            className="bg-white text-black px-6 py-2 text-sm tracking-wide hover:bg-gray-200 transition"
          >
            Solicitar obra
          </a>

        </div>
      </div>
    </header>
  );
}