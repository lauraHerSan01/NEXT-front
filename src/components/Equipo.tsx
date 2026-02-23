export default function Equipo() {
  return (
    <section className="relative py-28 px-6 md:px-16 text-white overflow-hidden">
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/equipoFondo.png"
          alt="Equipo fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/1"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Titulo */}
        <h2 className="text-gray-400 text-sm tracking-[0.3em] mb-16">
          NUESTRO EQUIPO
        </h2>
        
        {/* Texto superior */}
        <div className="max-w-3xl mb-20">
          <p className="text-2xl md:text-2xl font-light leading-relaxed text-gray-200">
            Un equipo multidisciplinado de Arquitectos, Diseñadores y Especialistas
            comprometidos con la excelencia
          </p>
        </div>

        {/* Grid equipo */}
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Miembro 1 */}
          <div>
            <img
              src="/miembro1.jpeg"
              alt="Wolfram Cañas"
              className="w-full h-105 object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <h3 className="mt-6 text-xl font-semibold">
              Wolfram Cañas 
            </h3>
            <p className="text-gray-400 mt-1">
              Director de Proyectos
            </p>
          </div>

          {/* Miembro 2 */}
          <div>
            <img
              src="/miembro2.png"
              alt="Brayan Barreto"
              className="w-full h-105 object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <h3 className="mt-6 text-xl font-semibold">
              Brayan Barreto
            </h3>
            <p className="text-gray-400 mt-1">
              Ingeniero en sistemas
            </p>
          </div>

          {/* Miembro 3 */}
          <div>
            <img
              src="/ana.jpg"
              alt="Ana Rodriguez"
              className="w-full h-105 object-cover"
            />
            <h3 className="mt-6 text-xl font-semibold">
              Ana Rodriguez
            </h3>
            <p className="text-gray-400 mt-1">
              Diseñadora de Interiores
            </p>
          </div>
          

          {/* Miembro 4 */}
          <div>
            <img
              src="/roberto.jpg"
              alt="Roberto Sanchez"
              className="w-full h-105 object-cover"
            />
            <h3 className="mt-6 text-xl font-semibold">
              Roberto Sanchez
            </h3>
            <p className="text-gray-400 mt-1">
              Especialista BIM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
