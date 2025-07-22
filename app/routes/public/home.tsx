import { useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => AOS.init({ duration: 800, once: true }));
      import("aos/dist/aos.css");
    }
  }, []);

  return (
    <section className="relative bg-[#0e0f11] min-h-screen px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden text-white">
      {/* Contenido izquierdo */}
      <div className="z-10 w-full md:w-1/2 space-y-6" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Descubre el <span className="text-primary">Poder</span> de la{" "}
          <span className="text-blue-400">Tecnología</span> con{" "}
          <span className="text-primary">BytesFlash</span>
        </h1>

        <p className="text-base-content/80 text-md md:text-lg">
          Desarrollo web, servidores, automatización, APIs, inteligencia
          artificial y más. Todo lo que tu empresa necesita para evolucionar,
          desde una sola fuente de soluciones reales.
        </p>

        <div className="flex gap-4">
          <button className="btn btn-primary btn-md" data-aos="fade-up">
            Ver Servicios
          </button>
          <button className="btn btn-outline btn-md" data-aos="fade-up" data-aos-delay="200">
            Agenda una Reunión
          </button>
        </div>
      </div>

      {/* Imagen o panel decorativo derecho */}
      <div className="w-full md:w-1/2 flex justify-center items-center" data-aos="fade-left">
        <img
          src="/home/dashboard.png"
          alt="Panel BytesFlash"
          className="w-[90%] md:w-[80%] drop-shadow-2xl opacity-90"
        />
      </div>
    </section>
  );
}
