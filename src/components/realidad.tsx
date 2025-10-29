import { useState } from "react";

export default function Realidad() {
  const images = [
    "/realidad1.png",
    "/realidad2.png",
    "/realidad3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="realidad" className="w-full py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              La realidad que nos rodea
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explora cómo la tecnología y el bienestar emocional se entrelazan en nuestra vida diaria. 
              A través de soluciones inteligentes, buscamos acompañarte en cada momento para que tu experiencia sea positiva y enriquecedora.
            </p>
          </div>

          {/* Right Side - Carousel */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-xl relative">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500"
              />

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                &#8592;
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                &#8594;
              </button>

              {/* Slide Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
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