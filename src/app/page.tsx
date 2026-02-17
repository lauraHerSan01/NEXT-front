import Navbar from "@/components/Navbar";
import HomeScreen from "@/components/HomeScreen";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Equipo from "@/components/Equipo";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <HomeScreen />
      <Servicios />
      <Proyectos />
      <Equipo />
    </main>
  );
}
