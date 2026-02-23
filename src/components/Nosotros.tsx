"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SectionId = "mision" | "vision" | "valores" | "bim";

interface ItemProps {
  title: string;
  content: string;
  id: SectionId;
}

export default function Nosotros() {
  const [active, setActive] = useState<SectionId | null>(null);

  const toggle = (section: SectionId) => {
    setActive(active === section ? null : section);
  };

  const Item = ({ title, content, id }: ItemProps) => (
    <div className="border-b border-gray-600 py-6">
      
      <button
        onClick={() => toggle(id)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-xl font-medium">{title}</span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            active === id ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          active === id
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-gray-300 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-55 px-6 md:px-16 text-white overflow-hidden">

        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/NosotrosFondo.png')" }}
         >
        </div>

        {/* Contenido */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Columna izquierda */}
        <div>
            <p className="text-gray-400 text-sm tracking-[0.3em] mb-6">
            NOSOTROS
            </p>

            <h2 className="text-5xl md:text-6xl font-serif mb-8">
            Dedicados a crear
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed mb-6">
            En HABITAR creemos que la arquitectura tiene el poder de transformar vidas.
            </p>

            <p className="text-gray-400">
            Fundado en 2015 / Bogotá, Colombia
            </p>
        </div>

        {/* Acordeón */}
        <div>
            <Item
            id="mision"
            title="Nuestra Misión"
            content="Redefinir el acto de habitar a través de un diseño arquitectónico consciente que equilibre la estética, la alta calidad técnica y el impacto social. Nos dedicamos a transformar espacios para clientes privados y colectivos, priorizando siempre la experiencia humana y la conexión genuina entre el usuario y su entorno."
            />

            <Item
            id="vision"
            title="Nuestra Visión"
            content="Ser la firma de arquitectura referente en Colombia por transformar la cultura del diseño, logrando que el acto de habitar sea entendido como un equilibrio perfecto entre la belleza estética, la dignidad humana y el bienestar colectivo."
            />

            <Item
            id="valores"
            title="Nuestros Valores"
            content="Compromiso, excelencia, ética profesional, trabajo colaborativo y enfoque en el detalle."
            />

            <Item
            id="bim"
            title="Metodología BIM"
            content="Implementamos metodología BIM para optimizar procesos, mejorar la coordinación interdisciplinaria y garantizar eficiencia en cada proyecto."
            />
        </div>

        </div>
    </section>
    );
}