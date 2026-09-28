import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const galleryItems = [
  {
    src: "https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/ab2390d4-0377-4e40-85a6-16ad3d800b33_tio-1.jpg?v=d1a8761e50f0188fc619edf8845977a4",
    alt: "Producto 1",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/5d64addf-38ac-4a3e-97ea-c4a3d29a3888_tio-2.jpg?v=e5f079a1aa501716eb4048a1bd22066d",
    alt: "Producto 2",
  },
  {
    src: "https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/e571a5b4-bfb6-4a49-9e71-697f370bf039_tio-6.jpg?v=dff46c39105c44a27714701087f8674d",
    alt: "Producto 3",
  },
  {
    src: "https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/939d28de-d979-4c0a-adb2-bda1d75f1f69_tio-8.jpg?v=ea36b7207d3877d0c5b9af83acdcc8ca",
    alt: "Producto 4",
  },
  {
    src: "https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/375d8cd7-2957-4efd-90bd-ae57d79a2890_tio-7.jpg?v=b9fcc9a8c58bb2328ef3d1a9539ed61e",
    alt: "Producto 5",
  },
  {
    src: "https://storage.readdy-site.link/project_files/3e976a05-f397-41dd-9720-557007be39dc/77349c6f-6184-4eed-9f25-0b3c968c7c8d_tio-4.jpg?v=ef2ed7bd87b5b822f00de7f34eb0cf86",
    alt: "Producto 6",
  },
];

export default function GallerySection() {
  const { ref: headerRef, visible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, visible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section id="galeria" className="bg-stone-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerVisible ? 'anim-fade-up' : 'anim-hidden'}`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Nuestros Productos en Acción
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Una muestra de la calidad y versatilidad de nuestras bolsas de celofán para todo tipo de industria y aplicación.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-4 gap-4 auto-rows-auto">
          {/* Large featured image */}
          <div
            className={`col-span-2 row-span-2 rounded-2xl overflow-hidden bg-stone-100 ${gridVisible ? 'anim-scale-in' : 'anim-hidden'}`}
            style={{ animationDelay: gridVisible ? '0s' : undefined }}
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover min-h-[340px]"
            />
          </div>

          {/* Top right wide */}
          <div
            className={`col-span-2 rounded-2xl overflow-hidden h-56 bg-stone-100 ${gridVisible ? 'anim-fade-up' : 'anim-hidden'}`}
            style={{ animationDelay: gridVisible ? '0.1s' : undefined }}
          >
            <img src={galleryItems[1].src} alt={galleryItems[1].alt} className="w-full h-full object-cover" />
          </div>

          {/* Bottom right 2 medium */}
          <div
            className={`col-span-1 rounded-2xl overflow-hidden h-48 bg-stone-100 ${gridVisible ? 'anim-fade-up' : 'anim-hidden'}`}
            style={{ animationDelay: gridVisible ? '0.2s' : undefined }}
          >
            <img src={galleryItems[2].src} alt={galleryItems[2].alt} className="w-full h-full object-cover" />
          </div>
          <div
            className={`col-span-1 rounded-2xl overflow-hidden h-48 bg-stone-100 ${gridVisible ? 'anim-fade-up' : 'anim-hidden'}`}
            style={{ animationDelay: gridVisible ? '0.3s' : undefined }}
          >
            <img src={galleryItems[3].src} alt={galleryItems[3].alt} className="w-full h-full object-cover" />
          </div>

          {/* Bottom full row */}
          <div
            className={`col-span-2 rounded-2xl overflow-hidden h-52 bg-stone-100 ${gridVisible ? 'anim-fade-up' : 'anim-hidden'}`}
            style={{ animationDelay: gridVisible ? '0.35s' : undefined }}
          >
            <img src={galleryItems[4].src} alt={galleryItems[4].alt} className="w-full h-full object-cover" />
          </div>
          <div
            className={`col-span-2 rounded-2xl overflow-hidden h-52 bg-stone-100 ${gridVisible ? 'anim-fade-up' : 'anim-hidden'}`}
            style={{ animationDelay: gridVisible ? '0.45s' : undefined }}
          >
            <img src={galleryItems[5].src} alt={galleryItems[5].alt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Fabricamos bolsas para <strong className="text-gray-600">alimentos, farmacéutica, retail, regalos y más</strong> — siempre con la calidad que tu marca merece.
        </p>
      </div>
    </section>
  );
}
