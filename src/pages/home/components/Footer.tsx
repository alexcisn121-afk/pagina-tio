import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { ref, visible } = useScrollAnimation(0.05);

  return (
    <footer className="bg-slate-800 text-white/70 py-14 px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto ${visible ? 'anim-fade-up' : 'anim-hidden'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="https://public.readdy.ai/ai/img_res/87228265-ae83-4242-a355-4f3340819638.png"
              alt="Logo"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed max-w-xs text-white/50">
              Líderes en fabricación de empaques de celofán con más de 15 años de experiencia en el sector industrial y comercial.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {["ri-facebook-fill", "ri-instagram-line", "ri-linkedin-fill"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  rel="nofollow noopener"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-sky-500 transition-colors cursor-pointer"
                >
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
              <a
                href="https://wa.me/525568692005"
                target="_blank"
                rel="nofollow noopener"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-sky-500 transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-sm" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Navegación</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Inicio", id: "hero" },
                { label: "Capacidades", id: "capacidades" },
                { label: "Impresión", id: "impresion" },
                { label: "Contacto", id: "cta" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm hover:text-lime-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contacto</h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "ri-mail-line", text: "GBC.CELOFAN@GMAIL.COM" },
                { icon: "ri-phone-line", text: "+52 55 6869 2005" },
                { icon: "ri-map-pin-line", text: "Ciudad de México, México" },
                { icon: "ri-time-line", text: "Lun–Vie 8am–6pm" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-sm">
                  <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <i className={`${item.icon} text-sky-400`} />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Bolsas de Celofán GBCCelofan. Todos los derechos reservados.</p>
          <p className="text-xs text-white/30">Fabricantes de empaques de celofán industrial y comercial</p>
        </div>
      </div>
    </footer>
  );
}
