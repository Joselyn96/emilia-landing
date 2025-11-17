import { useEffect, useState } from "react";

export default function Realidad() {
  const images = [
    // "/estres06.jpg",
    // "/estres07.jpg",
    // "/estres08.jpg",
    "/imagen_2.jpg",
    "/imagen_3.jpg",
    "/imagen_4.jpg",
    "/imagen_1.jpg",
  ];

  const textos = [
    "En 2021 se registraron que alrededor de 359 millones de personas sufrían estrés y ansiedad. Además, aproximadamente uno de cada siete jóvenes presentaba síntomas de ansiedad o depresión",
    "En Perú, EsSalud reportó más de 182 mil casos de ansiedad en 2024. Un año después, el MINSA alertó un aumento significativo de consultas en jóvenes, principalmente asociadas al estrés y a cuadros de ansiedad",
    "La UNESCO indicó que hasta el 50% de los estudiantes presenta problemas de salud mental; en Perú, la Red Peruana de Universidades halló que casi la mitad reporta estrés, ansiedad severa y más de un tercio depresión",
    "La falta de atención temprana en personas con estrés incrementa el riesgo de cronificación, afectando su bienestar, la permanencia en la educación superior, el rendimiento académico y su salud integral"
    // "En Perú, EsSalud registró más de 182 mil casos de ansiedad en 2024,",
    // "y el MINSA alertó en 2025 un incremento de consultas juveniles, principalmente por problemas de ánimo y ansiedad.",
    // "En el ámbito universitario, la UNESCO indicó que hasta el 50% de los estudiantes presenta problemas de salud mental;",
    // "en Perú, la Red Peruana de Universidades halló que casi la mitad reporta ansiedad severa",
    // "y más de un tercio depresión.",
    // "La pandemia agravó estas condiciones y fomentó hábitos poco saludables que afectan el rendimiento académico.",
    // "A ello se suma el subdiagnóstico: solo una de cada seis personas recibe tratamiento.",
    // "La falta de atención temprana eleva el riesgo de cronificación,",
    // "lo que impacta en el bienestar, la permanencia en la educación superior, rendimiento académico y su salud integral."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 9000); // 9 segundos

    return () => clearInterval(interval);
  }, [images.length]);
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      id="realidad"
      className="w-full overflow-x-hidden py-16 md:py-24 lg:py-32 px-0 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="w-full">
        <div className="w-full">

          {/* Carousel */}
          <div className="relative w-full h-full">
            <div className="overflow-hidden w-full rounded-none shadow-2xl relative">

              {/* IMAGE */}
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover transition-transform duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20 py-10">
                <div
                  className="
                bg-black/30
                rounded-2xl
                p-6 md:p-10 lg:p-12
                max-w-2xl
                relative
                text-white
              "
                >
                  {/* Barra azul izquierda */}
                  <div className="absolute left-4 top-6 bottom-6 w-2 bg-primary rounded-full"></div>

                  {/* Texto */}
                  <div className="pl-6 text-left">
                    {/* <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                  REALIDAD DEL PROBLEMA
                </h2> */}

                    <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
                      {textos[currentIndex]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
              <span className="-mt-0.5">&#8592;</span>
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-2xl rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                <span className="-mt-0.5">&#8594;</span>
              </button>

              {/* Slide Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-primary scale-110" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}