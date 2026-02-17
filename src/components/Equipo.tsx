export default function Equipo() {
  return (
    <section className="relative py-32 px-6 md:px-16 text-white overflow-hidden">
      
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
        
        {/* Texto superior */}
        <div className="max-w-3xl mb-20">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
            Un equipo multidisciplinado de Arquitectos, Diseñadores y Especialistas
            comprometidos con la excelencia
          </p>
        </div>

        {/* Grid equipo */}
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Miembro 1 */}
          <div>
            <img
              src="/maria.jpg"
              alt="Maria Gonzales"
              className="w-full h-105 object-cover"
            />
            <h3 className="mt-6 text-xl font-semibold">
              Maria Gonzales
            </h3>
            <p className="text-gray-400 mt-1">
              Directora Creativa
            </p>
          </div>

          {/* Miembro 2 */}
          <div>
            <img
              src="/carlos.jpg"
              alt="Carlos Mendoza"
              className="w-full h-105 object-cover"
            />
            <h3 className="mt-6 text-xl font-semibold">
              Carlos Mendoza
            </h3>
            <p className="text-gray-400 mt-1">
              Arquitecto Principal
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
