export default function HomeScreen() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="px-20 pt-24">
        <h2 className="font-bold text-[110px] leading-[1.05] tracking-tight">
          HABITAR
          <br />
          <span className="font-sans">Arquitectura</span>
        </h2>
      </section>


      {/* Info Section */}
      <section className="px-20 mt-24 flex gap-12 items-start pb-10">
        
        {/* Imagen lateral */}
        <div
          className="w-30 h-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/InfoServi.png')" }}
        />

        {/* Contenido */}
        <div className="space-y-4 text-gray-300 max-w-2xl">
          
          {/* Ubicación */}
          <div className="flex gap-20 text-sm">
            <div>
              <p className="text-gray-500">Ubicados en</p>
              <p className="text-white">Bogotá, Colombia</p>
            </div>
        </div>

          {/* Descripción */}
          <p className="text-lg leading-relaxed">
            Creamos proyectos arquitectónicos únicos, transformando
            espacios vacíos en hogares llenos de confort, personalidad
            y estilo atemporal.
          </p>

        </div>
      </section>

    </main>
  );
}
