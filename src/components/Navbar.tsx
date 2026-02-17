export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-12 py-6">
      <h1 className="text-2xl tracking-wide font-serif">
        HABITAR
      </h1>

      <nav className="flex gap-10 text-sm text-gray-300">
        <a href="#">//Servicios</a>
        <a href="#">//Proyectos</a>
        <a href="#">//Equipo</a>
        <a href="#">//Nosotros</a>
        <a href="#">//Contacto</a>
      </nav>
    </header>
  );
}
