export default function Servicios() {
  return (
    <section className="relative w-full min-h-screen text-white">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/servicios-bg.png')" }}
      />

      {/* Overlay oscuro con degradado */}
      <div className="absolute inset-0 bg-linear-to-r from-black/1via-black/60 to-black/30" />

      {/* Contenido */}
      <div className="relative z-20 px-14 pt-[60vh] pb-10">

        {/* Encabezado */}
        <div className="mb-20 max-w-3xl">
          <p className="text-sm tracking-[0.3em] text-gray-300 mb-6">
            SERVICIOS
          </p>

          <h2 className="font-serif text-[72px] leading-tight">
            Lo que hacemos
          </h2>
        </div>

        {/* Línea horizontal */}
        <div className="grid grid-cols-5 md:grid-cols-4 gap-16 mb-8">
            <div className="w-68 h-px bg-gray-500/60" />
            <div className="w-68 h-px bg-gray-500/60" />
            <div className="w-66 h-px bg-gray-500/60" />
            <div className="w-68 h-px bg-gray-500/60" />
        </div>


        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          <ServiceItem
            number="01"
            title="Diseño Arquitectonico"
            description="Creamos espacios únicos que reflejan la identidad de cada cliente"
          />

          <ServiceItem
            number="02"
            title="Diseño de Interiores"
            description="Transformamos espacios interiores en ambientes que inspiran"
          />

          <ServiceItem
            number="03"
            title="Modelado BIM / Revit"
            description="Tecnología BIM para visualizar proyectos con precisión"
          />

          <ServiceItem
            number="04"
            title="Gestion de Proyectos"
            description="Acompañamos cada fase hasta la entrega final"
          />

        </div>
      </div>
    </section>
  );
}

/* 🔹 Subcomponente interno */
function ServiceItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-6 max-w-xs">

      <span className="text-sm text-gray-400">
        {number}
      </span>

      <h3 className="font-serif text-2xl leading-snug">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
