"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

export default function Galeria() {
  const slides: Slide[] = [
    {
      image: "/Galeria1.png",
      title: "Estudio Galería para artistas",
      subtitle:
        "Diseño de espacios para la creación artística y la exhibición de obras.",
    },
    {
      image: "/Galeria2.png",
      title: "Simultaneidad de espacios",
      subtitle:
        "Simultaneidad de espacios de trabajo y recreación.",
    },
    {
      image: "/Galeria3.png",
      title: "Diseño espejo",
      subtitle:
        "Diseño de espejos para ampliar la percepción espacial y crear efectos visuales únicos.",
    },
    {
      image: "/Galeria4.png",
      title: "Interior Residencial moderno",
      subtitle:
        "Diseño de interiores que combinan funcionalidad y estética contemporánea.",
    },
    {
      image: "/Galeria5.png",
      title: "Servicios modernos y acogedores",
      subtitle:
        "Diseño de servicios para mejorar la experiencia del usuario.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🔥 Autoplay
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const prevSlide = () => {
    stopAutoPlay();
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    startAutoPlay();
  };

  const nextSlide = () => {
    stopAutoPlay();
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    startAutoPlay();
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 relative">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-5xl md:text-6xl font-serif">Galería</h2>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="border border-gray-700 p-3 hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="border border-gray-700 p-3 hover:bg-white hover:text-black transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div className="relative h-[550px] overflow-hidden">
        
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[550px] relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-12 left-12 max-w-xl">
                <h3 className="text-4xl md:text-5xl font-serif mb-3">
                  {slide.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopAutoPlay();
              setCurrent(index);
              startAutoPlay();
            }}
            className={`w-8 h-2 rounded-full transition-all ${
              current === index
                ? "bg-white"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>

    </section>
  );
}