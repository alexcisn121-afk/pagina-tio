import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const capabilities = [
  {
    icon: "ri-printer-line",
    title: "Bolsas Impresas Personalizadas",
    description:
      "Destaca tu marca con impresión flexográfica de alta definición. Hasta 6 colores para logotipos y diseños vibrantes que captan la atención.",
    color: "bg-sky-50 text-sky-500 border-sky-100",
    image: "https://static.readdy.ai/image/ac52fa1a00703fabd9fbddfa4d8fbfc9/728131e18b97f934047496c2a9cd9cbd.jpeg",
  },
  {
    icon: "ri-inbox-archive-line",
    title: "Bolsas con Sello de Fondo",
    description:
      "Máxima resistencia y capacidad para productos pesados o voluminosos. Sellado térmico de precisión para garantizar integridad total.",
    color: "bg-lime-50 text-lime-600 border-lime-100",
    image: "https://static.readdy.ai/image/ac52fa1a00703fabd9fbddfa4d8fbfc9/cb78fdc7db17b9d7a8b1b509a330b597.jpeg",
  },
  {
    icon: "ri-side-bar-line",
    title: "Bolsas con Sello Lateral",
    description:
      "El acabado clásico para exhibición, ideal para productos ligeros y visibilidad total del contenido gracias al celofán transparente.",
    color: "bg-sky-50 text-sky-500 border-sky-100",
    image: "https://static.readdy.ai/image/ac52fa1a00703fabd9fbddfa4d8fbfc9/3fc6df4adcd3925ab55d84509c7784ad.jpeg",
  },
  {
    icon: "ri-lock-2-line",
    title: "Bolsas con Cinta Adhesiva Resellable",
    description:
      "Facilidad de uso para el consumidor final con cierre seguro y reutilizable. Perfectas para productos de consumo gradual.",
    color: "bg-lime-50 text-lime-600 border-lime-100",
    image: "https://static.readdy.ai/image/ac52fa1a00703fabd9fbddfa4d8fbfc9/843ed9f3312d7feca21445d16db30218.jpeg",
  },
  {
    icon: "ri-expand-width-line",
    title: "Bolsas con Fuelle",
    description:
      "Expande la capacidad de la bolsa para productos de mayor volumen. Diseño funcional que maximiza el espacio interior disponible.",
    color: "bg-sky-50 text-sky-500 border-sky-100",
    image: "https://static.readdy.ai/image/ac52fa1a00703fabd9fbddfa4d8fbfc9/1a816d628f06d2510589557962d21600.jpeg",
  },
  {
    icon: "ri-scan-line",
    title: "Bolsas con Perforación para Colgar",
    description:
      "Listas para exhibidores de venta minorista (retail). Perforación de euro slot estándar para displays y ganchos en punto de venta.",
    color: "bg-lime-50 text-lime-600 border-lime-100",
    image: "https://readdy.ai/api/search-image?query=transparent%20cellophane%20polypropylene%20bags%20with%20euro%20hole%20punch%20hanging%20on%20metal%20retail%20display%20hooks%2C%20clear%20glossy%20bags%20with%20circular%20hanging%20hole%20at%20top%20showing%20products%20inside%20hanging%20from%20wire%20rack%2C%20clean%20bright%20store%20background%2C%20commercial%20retail%20packaging%20photography&width=600&height=360&seq=cap-celo-06&orientation=landscape",
  },
];

export default function CapabilitiesSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, visible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section id="capacidades" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'anim-fade-up' : 'anim-hidden'}`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Capacidades de Fabricación
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Nuestras Capacidades
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Diseñamos y fabricamos cada bolsa con tecnología de punta para cumplir con los más altos estándares industriales y comerciales.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-200 cursor-default ${gridVisible ? 'anim-fade-up' : 'anim-hidden'}`}
              style={{ animationDelay: gridVisible ? `${i * 0.1}s` : undefined }}
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg border ${cap.color}`}>
                  <i className={`${cap.icon} text-xl`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1">{cap.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
