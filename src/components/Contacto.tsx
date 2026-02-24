"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contacto() {
  return (
    <section className="relative w-full h-screen text-white">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/contactoFondo.png')" }}
      />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-20">

        {/* Lado Izquierdo */}
        <div className="max-w-xl space-y-6">

          <p className="text-gray-400 text-sm tracking-[0.3em] mb-16">
            CONTACTO
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Hablemos de tu <br /> proyecto
          </h2>

          <p className="text-gray-300 text-lg">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacer realidad tu visión arquitectónica.
          </p>

          {/* Información */}
          <div className="space-y-4 pt-6">

            <div className="flex items-center gap-4">
              <MapPin size={20} className="text-gray-300" />
              <span className="text-gray-300">
                Calle 100 #19-61, Bogotá
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={20} className="text-gray-300" />
              <span className="text-gray-300">
                +57 (1) 234-5678
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={20} className="text-gray-300" />
              <span className="text-gray-300">
                contacto@habitar.co
              </span>
            </div>

          </div>
        </div>

        {/* Lado Derecho - Botón */}
        <div>
         <Link
            href="/solicitud-obra"
            className="mt-80 bg-white text-black px-10 py-4 text-lg mr-40 hover:bg-gray-200 transition inline-block"
        >
            Solicitud de Obra
        </Link>
        </div>

      </div>
    </section>
  );
}