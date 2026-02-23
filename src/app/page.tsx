import Navbar from "@/components/Navbar";
import HomeScreen from "@/components/HomeScreen";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Equipo from "@/components/Equipo";
import Nosotros from "@/components/Nosotros";
import Galeria from "@/components/Galeria";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <HomeScreen />
      <Servicios />
      <Proyectos />
      <Equipo />
      <Nosotros />
      <Galeria />
    </main>
  );
}
