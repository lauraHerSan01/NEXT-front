import Navbar from "@/components/Navbar";
import HomeScreen from "@/components/HomeScreen";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Equipo from "@/components/Equipo";
import Nosotros from "@/components/Nosotros";
import Galeria from "@/components/Galeria";
import Contacto from "@/components/Contacto";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section id="home">
        <HomeScreen />
      </section>

      <section id="servicios" className="scroll-mt-28">
        <Servicios />
      </section>

      <section id="proyectos" className="scroll-mt-28">
        <Proyectos />
      </section>

      <section id="equipo" className="scroll-mt-28">
        <Equipo />
      </section>

      <section id="nosotros" className="scroll-mt-28">
        <Nosotros />
      </section>

      <section id="galeria" className="scroll-mt-28">
        <Galeria />
      </section>

      <section id="contacto" className="scroll-mt-28">
        <Contacto />
      </section>

    </main>
  );
}
