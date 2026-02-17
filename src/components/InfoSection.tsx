export default function InfoSection() {
  return (
    <section className="px-20 mt-24 flex gap-12 items-start pb-10">
      <div className="w-30 h-40 bg-cover bg-center" 
      style={{ backgroundImage: "url('/InfoServi.png')" }} 
        />

      <div className="space-y-4 text-gray-300 max-w-2xl" >
        <div className="flex gap-20 text-sm">
          <div>
            <p className="text-gray-500">Ubicados en</p>
            <p className="text-white">Bogotá, Colombia</p>
          </div>

          <div>
            <p className="text-gray-500">Trabajamos en</p>
            <p className="text-white">Todo Colombia</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Creamos proyectos arquitectónicos únicos, transformando
          espacios vacíos en hogares llenos de confort, personalidad
          y estilo atemporal.
        </p>
      </div>
    </section>
  );
}
