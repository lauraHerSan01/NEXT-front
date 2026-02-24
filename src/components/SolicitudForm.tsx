"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export default function SolicitudObra() {
  const [tipoProyecto, setTipoProyecto] = useState("Residencial");

  const tipos = [
    "Residencial",
    "Comercial",
    "Remodelacion",
    "Institucional",
  ];

  return (
    <section className="min-h-screen bg-black text-white flex">

      {/* LADO IZQUIERDO */}
        <div className="hidden md:flex w-1/2 relative flex-col justify-between px-20 py-16 border-r border-gray-900 overflow-hidden">
          
          {/* Imagen de fondo */}
          <img
            src="/FondoFormulario.jpg"
            alt="Proyecto arquitectónico"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/40"></div>


          {/* Contenido */}
          <div className="relative z-20">
            <h2 className="mt-170 text-6xl font-serif leading-tight mb-6 text-gray-200">
              Construyamos <br /> juntos tu <br /> proyecto ideal
            </h2>

            <p className="text-gray-100 text-lg max-w-md">
              Cuéntanos sobre tu visión y nuestro equipo se encargará
              de hacerla realidad.
            </p>
          </div>

          <div className="relative z-20"></div>

        </div>


      {/* LADO DERECHO */}
      <div className="w-full md:w-1/2 px-8 md:px-20 py-16 relative">

        {/* Botón cerrar */}
        <Link
          href="/"
          className="absolute top-8 right-8 border border-gray-700 p-3 hover:bg-white hover:text-black transition"
        >
          <X size={18} />
        </Link>

        <h2 className="text-3xl font-serif mb-3">
          Solicitud de Obra
        </h2>

        <p className="text-gray-400 mb-10">
          Completa el formulario y nuestro equipo evaluará tu proyecto.
        </p>

        <form className="space-y-6">

          {/* Nombre */}
          <div>
            <label className="block text-xs tracking-widest mb-2">
              NOMBRE COMPLETO
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full bg-gray-900 border border-gray-800 p-4 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Email + Teléfono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-widest mb-2">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-gray-900 border border-gray-800 p-4 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest mb-2">
                TELEFONO
              </label>
              <input
                type="text"
                placeholder="+57 300 000 0000"
                className="w-full bg-gray-900 border border-gray-800 p-4 focus:outline-none focus:border-white transition"
              />
            </div>
          </div>

          {/* Tipo de Proyecto */}
          <div>
            <label className="block text-xs tracking-widest mb-4">
              TIPO DE PROYECTO
            </label>

            <div className="grid grid-cols-2 gap-4">
              {tipos.map((tipo) => (
                <button
                  type="button"
                  key={tipo}
                  onClick={() => setTipoProyecto(tipo)}
                  className={`py-4 border transition ${
                    tipoProyecto === tipo
                      ? "bg-white text-black border-white"
                      : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-500"
                  }`}
                >
                  {tipo}
                </button>
              ))}
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <label className="block text-xs tracking-widest mb-2">
              UBICACION DEL PROYECTO
            </label>
            <input
              type="text"
              placeholder="Ciudad, barrio o zona"
              className="w-full bg-gray-900 border border-gray-800 p-4 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Presupuesto */}
          <div>
            <label className="block text-xs tracking-widest mb-2">
              PRESUPUESTO ESTIMADO
            </label>
            <input
              type="text"
              placeholder="Ej: $100.000.000 - $200.000.000 COP"
              className="w-full bg-gray-900 border border-gray-800 p-4 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-xs tracking-widest mb-2">
              DESCRIPCION DEL PROYECTO
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto, qué buscas, estilo, metros cuadrados..."
              className="w-full bg-gray-900 border border-gray-800 p-4 focus:outline-none focus:border-white transition resize-none"
            />
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            className="w-full mt-6 bg-white text-black py-4 flex items-center justify-center gap-3 hover:bg-gray-200 transition"
          >
            Enviar Solicitud
            <ArrowRight size={18} />
          </button>

          {/* Login */}
          <p className="text-gray-500 text-sm text-center mt-4">
            Ya tienes acceso?{" "}
            <span className="text-white hover:underline cursor-pointer">
              Iniciar sesión
            </span>
          </p>

        </form>
      </div>

    </section>
  );
}