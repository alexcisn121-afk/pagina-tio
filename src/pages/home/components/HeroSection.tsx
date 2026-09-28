interface HeroSectionProps {
  onQuoteClick: () => void;
}

export default function HeroSection({ onQuoteClick }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=macro%20photography%20of%20transparent%20shiny%20glossy%20cellophane%20rolls%20and%20clear%20plastic%20bags%20in%20modern%20packaging%20factory%2C%20crystal%20clear%20material%20with%20light%20reflections%2C%20clean%20industrial%20setting%2C%20high%20resolution%20product%20photography%2C%20blue%20and%20white%20tones%2C%20bokeh%20background%2C%20professional%20studio%20lighting&width=1920&height=1080&seq=celophane-hero-01&orientation=landscape"
          alt="Bolsas de celofán de alta calidad"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-sky-900/55 to-slate-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6 py-32 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="anim-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 backdrop-blur-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 flex items-center justify-center">
            <span className="block w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          </span>
          Fabricantes industriales de empaques de celofán
        </div>

        {/* Headline */}
        <h1
          className="anim-fade-up text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          style={{ animationDelay: '0.3s' }}
        >
          Expertos en{" "}
          <span className="text-sky-400">Soluciones</span>
          <br />
          de Empaque de{" "}
          <span className="text-lime-400">Celofán</span>
        </h1>

        {/* Subtitle */}
        <p
          className="anim-fade-up text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: '0.5s' }}
        >
          Fabricamos la bolsa perfecta para tu producto. Calidad, versatilidad y personalización sin límites para tu negocio.
        </p>

        {/* CTA Buttons */}
        <div
          className="anim-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.7s' }}
        >
          <button
            onClick={onQuoteClick}
            className="px-8 py-4 rounded-md bg-lime-400 text-gray-900 text-base font-bold hover:bg-lime-300 transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-lime-400/30"
          >
            Solicitar Cotización
          </button>
          <button
            onClick={() => scrollTo("capacidades")}
            className="px-8 py-4 rounded-md bg-white/10 border border-white/30 text-white text-base font-semibold hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            Ver Capacidades
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo("capacidades")}
        className="anim-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        aria-label="Desplazar hacia abajo"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <i className="ri-arrow-down-line text-xl animate-bounce" />
      </button>
    </section>
  );
}
