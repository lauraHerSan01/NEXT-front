"use client";

import { useState } from "react";

export default function Servicios() {
  const [expanded, setExpanded] = useState(false);

  const servicios = [
    { id: "01", titulo: "Diseño Arquitectónico", desc: "Creamos espacios únicos que reflejan la identidad de cada cliente" },
    { id: "02", titulo: "Diseño de Interiores", desc: "Transformamos espacios interiores en ambientes que inspiran" },
    { id: "03", titulo: "Construcción de obra civil", desc: "Tecnología BIM para visualizar proyectos con precisión" },
    { id: "04", titulo: "Trámites de licencia", desc: "Acompañamos cada fase hasta la entrega final" },

    { id: "05", titulo: "Modelado BIM", desc: "Creamos espacios únicos que reflejan la identidad de cada cliente" },
    { id: "06", titulo: "Renderizado", desc: "Transformamos espacios interiores en ambientes que inspiran" },
    { id: "07", titulo: "Legalizaciones urbanísticas", desc: "Tecnología BIM para visualizar proyectos con precisión" },
    { id: "08", titulo: "Paisajismo", desc: "Acompañamos cada fase hasta la entrega final" },

    { id: "09", titulo: "Diseño urbano", desc: "Creamos espacios únicos que reflejan la identidad de cada cliente" },
    { id: "10", titulo: "Cálculos estructurales", desc: "Transformamos espacios interiores en ambientes que inspiran" },
    { id: "11", titulo: "Remodelación", desc: "Tecnología BIM para visualizar proyectos con precisión" },
    { id: "12", titulo: "Licencia de reconocimiento", desc: "Acompañamos cada fase hasta la entrega final" },
  ];

  const visibleServicios = expanded ? servicios : servicios.slice(0, 4);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center text-white px-20 flex flex-col justify-end"
      style={{ backgroundImage: "url('/servicios-bg.png')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto pb-8 w-full">

        {/* Header */}
        <div className="flex justify-between items-end mb-15">
          <div>
            <p className="text-gray-400 tracking-widest mt-6 mb-2">SERVICIOS</p>
            <h2 className="font-serif text-[80px] leading-tight">
              Lo que hacemos
            </h2>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-white text-black px-6 py-3 text-sm tracking-wide hover:bg-gray-200 transition"
          >
            {expanded ? "MENOS SERVICIOS" : "MAS SERVICIOS"}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-x-6 ">
          {visibleServicios.map((servicio) => (
            <div key={servicio.id} className="space-y-4 border-t border-gray-300 pb-8">
              <p className="text-gray-400 text-sm">{servicio.id}</p>
              <h3 className="font-serif text-2xl">{servicio.titulo}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {servicio.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}
