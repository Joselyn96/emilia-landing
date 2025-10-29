import { useRef, useState } from "react"
import { Heart, Brain, Zap } from "lucide-react"

export default function AboutWhoWeAre() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null); // <-- aquí definimos el ref

    const handlePlay = () => {
        setIsVideoPlaying(true);
        videoRef.current?.play(); // usamos ?. por si es null
    };

    return (
        <section id="sobre" className="w-full py-16 md:py-24 lg:py-24 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* Grid principal: texto y video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-4 text-balance text-left">
                Quiénes Somos
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              Somos una plataforma inteligente de apoyo emocional, creada para monitorear el estrés y ansiedad de manera
              no invasiva a través de una pulsera con sensores biométricos y algoritmos de inteligencia artificial.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              Nuestro objetivo es brindar apoyo a estudiantes universitarios, detectando el estrés a tiempo,
              construyendo perfiles emocionales personalizados y facilitando herramientas digitales para su bienestar,
              sin la necesidad de equipos clínicos especializados.
            </p>
          </div>

          {/* Right side - Video container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <video
              ref={videoRef}
              src="WhatsApp-Video-2025-10-27-at-11.54.10-PM.mp4"
              className="w-full h-full object-cover"
              controls
            />

            {!isVideoPlaying && (
              <div
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/30 transition-colors"
              >
                <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <svg
                    className="w-10 h-10 text-white fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contenedor horizontal debajo de texto y video */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  {[{
      icon: <Heart size={24} className="text-white " />,
      title: "Apoyo Emocional Personalizado",
      description: "Perfiles únicos adaptados a cada estudiante"
    },
    {
      icon: <Brain size={24} className="text-white" />,
      title: "Detección Temprana",
      description: "Identifica estrés y ansiedad en tiempo real"
    },
    {
      icon: <Zap size={24} className="text-white" />,
      title: "Tecnología No Invasiva",
      description: "Sensores biométricos integrados en pulsera"
    }].map((item, index) => (
      <div
        key={index}
        className="flex gap-4 items-start bg-white/20 p-6 rounded-lg shadow-md 
                   transform transition-transform duration-300 hover:scale-105 
                   hover:shadow-xl cursor-pointer"
      >
        <div className="p-3 rounded-lg bg-[#c49adb] flex-shrink-0">
          {item.icon}
        </div>
        <div>
          <h3 className="font-semibold text-muted-foreground mb-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>
  ))}
</div>
      </div>
    </section>
    )
}
