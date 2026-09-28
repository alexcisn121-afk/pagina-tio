import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function CTASection() {
  const { ref: leftRef, visible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, visible: rightVisible } = useScrollAnimation();

  return (
    <section id="cta" className="relative bg-slate-900 py-24 px-6 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20blue%20industrial%20background%20with%20subtle%20geometric%20pattern%2C%20modern%20corporate%20tech%20texture%2C%20minimal%20clean%20dark%20wallpaper%2C%20gradient%20dark%20slate%20navy%20blue&width=1920&height=800&seq=celophane-cta-bg&orientation=landscape"
          alt="Fondo CTA"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pitch */}
          <div
            ref={leftRef}
            className={`${leftVisible ? 'anim-slide-left' : 'anim-hidden'}`}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 text-xs font-semibold tracking-wide uppercase mb-6">
              Proyectos Personalizados
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              ¿Tienes un proyecto especial?{" "}
              <span className="text-lime-400">Nosotros lo fabricamos.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Sin importar el volumen ni la complejidad de tu diseño, nuestro equipo de ingeniería está listo para desarrollar la solución de empaque perfecta para tu marca.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "ri-time-line", text: "Respuesta en menos de 24 horas" },
                { icon: "ri-flask-line", text: "Muestras físicas sin costo" },
                { icon: "ri-truck-line", text: "Envío a todo el país" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 flex-shrink-0">
                    <i className={`${item.icon} text-base`} />
                  </div>
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp CTA */}
          <div
            ref={rightRef}
            className={`flex flex-col items-center justify-center gap-6 text-center ${rightVisible ? 'anim-slide-right' : 'anim-hidden'}`}
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-green-500/20 border border-green-500/30">
              <i className="ri-whatsapp-line text-5xl text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Escríbenos por WhatsApp</h3>
              <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed">
                Contacta a nuestro equipo de ventas ahora mismo y recibe atención personalizada al instante.
              </p>
            </div>
            <a
              href="https://wa.me/525568692005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-colors text-white font-bold text-base cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-xl" />
              Chatear en WhatsApp
            </a>
            <p className="text-white/30 text-xs">+52 55 2855 9099 · Lun–Vie 8am–6pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
