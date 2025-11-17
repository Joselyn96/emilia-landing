export default function Hero() {
    return (
        <section id="inicio" className="w-full py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-primary/5 to-background opacity-0 animate-fadeInUp">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance text-left">
                                Tu bienestar emocional, acompañado por la tecnología
                            </h1>
                            <div className="w-20 h-1 bg-primary rounded-full"></div>
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-left">
                            Soy Emilia, tu compañera de bienestar emocional. Te acompaño en tiempo real, brindándote apoyo personalizado mediante tecnología e inteligencia artificial.
                        </p>
                    </div>

                    {/* Right side - Emilia Character */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-full max-w-sm">
                            <img
                                src="Standard-Mode-que-el-personaje-unscreen.gif"
                                alt="Emilia - Tu asistente virtual"
                                className="relative w-full h-auto drop-shadow-2xl scale-125"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}