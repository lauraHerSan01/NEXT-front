export default function Proyectos() {
  return (
    <section className="bg-black text-white py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-gray-400 text-sm tracking-[0.3em] mb-16">
          PROYECTOS
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Proyecto 1 */}
          <div>
            <div className="relative">
              <img
                src="/proyecto 1.png"
                alt="Valverde Menta"
                className="w-full h-130 object-cover"
              />

              {/* Etiqueta */}
              <span className="absolute top-6 left-6 bg-black/70 text-white text-xs tracking-widest px-4 py-2 border border-white/30">
                COMERCIAL
              </span>
            </div>

            {/* Contenido */}
            <div className="mt-8 flex justify-between items-start">
              <h3 className="text-4xl md:text-5xl font-serif leading-tight">
                Valverde Menta
              </h3>
              <span className="text-gray-400 text-lg">2024</span>
            </div>

            <p className="text-gray-400 mt-4 text-lg">
              Diseño y construcción de un estudio y galería para la artista visual colombo-americana Lorenza Panero.
            </p>
          </div>

          {/* Proyecto 2 */}
          <div>
            <div className="relative">
              <img
                src="/proyecto2.png"
                alt="Conjunto Habitacional Oasis"
                className="w-full h-130 object-cover"
              />

              {/* Etiqueta */}
              <span className="absolute top-6 left-6 bg-black/70 text-white text-xs tracking-widest px-4 py-2 border border-white/30">
                FAMILIAR
              </span>
            </div>

            {/* Contenido */}
            <div className="mt-8 flex justify-between items-start">
              <h3 className="text-4xl md:text-5xl font-serif leading-tight">
                Departamento Mazurén
              </h3>
              <span className="text-gray-400 text-lg">2024</span>
            </div>

            <p className="text-gray-400 mt-4 text-lg">
              Remodelación de un apartamento DUPLEX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
