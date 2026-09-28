import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const printFeatures = [
  {
    icon: "ri-palette-line",
    title: "Hasta 6 Colores",
    desc: "Impresión flexográfica multicolor de hasta 6 colores para reproducciones fieles de tu logo y diseños.",
  },
  {
    icon: "ri-drop-line",
    title: "Tintas Aptas para Alimentos",
    desc: "Certificadas para contacto indirecto con alimentos, cumpliendo normativas internacionales.",
  },
  {
    icon: "ri-leaf-line",
    title: "Alta Definición",
    desc: "Resolución de impresión superior que garantiza nitidez en textos finos y degradados.",
  },
];

export default function PrintSection() {
  const { ref: leftRef, visible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, visible: rightVisible } = useScrollAnimation();

  return (
    <section id="impresion" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Mosaic */}
          <div
            ref={leftRef}
            className={`relative ${leftVisible ? 'anim-slide-left' : 'anim-hidden'}`}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 h-60 rounded-xl overflow-hidden">
                <img
                  src="https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/d76618cd-909e-4c6a-b34b-54e3f18e07c4_tio-11.jpg?v=e2b4f307c586ac9788f1d23280bb104c"
                  alt="Bolsas de celofán impresas a todo color"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="h-44 rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=transparent%20cellophane%20bag%20with%20full%20color%20custom%20brand%20logo%20print%2C%20glossy%20polypropylene%20packaging%20with%20vibrant%20multicolor%20flexographic%20print%20showing%20company%20branding%2C%20clean%20white%20background%2C%20close%20up%20product%20photography&width=400&height=350&seq=print-celo-02&orientation=portrait"
                  alt="Bolsa de celofán con logo impreso"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="h-44 rounded-xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=printed%20cellophane%20polypropylene%20bags%20for%20retail%20gift%20shop%20with%20colorful%20custom%20printing%2C%20glossy%20transparent%20plastic%20bags%20with%20branding%20in%20red%20yellow%20green%20colors%20on%20white%20studio%20background%2C%20commercial%20packaging%20product%20photography&width=400&height=350&seq=print-celo-03&orientation=portrait"
                  alt="Bolsas impresas para ropa y regalos"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-sky-500 text-white rounded-xl px-5 py-3 shadow-lg">
              <div className="text-2xl font-extrabold">100%</div>
              <div className="text-xs opacity-80">Personalizable</div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={rightRef}
            className={`${rightVisible ? 'anim-slide-right' : 'anim-hidden'}`}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-xs font-semibold tracking-wide uppercase mb-4">
              El Poder de la Impresión
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Tu empaque es tu{" "}
              <span className="text-sky-500">mejor vendedor</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Ofrecemos impresión de alta calidad en celofán que garantiza que tu marca se destaque en el estante. Cada bolsa es una oportunidad de comunicar profesionalismo, confianza y calidad a tus clientes.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Usamos tintas aptas para alimentos certificadas y tecnología de impresión flexográfica de última generación para resultados impecables en cada corrida de producción.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-3 gap-5">
              {printFeatures.map((feat) => (
                <div key={feat.title} className="flex gap-3 items-start">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 flex-shrink-0">
                    <i className={`${feat.icon} text-lg`} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">{feat.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
