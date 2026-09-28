import { useState, useEffect } from "react";
import Navbar from "../../components/feature/Navbar";
import HeroSection from "./components/HeroSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import PrintSection from "./components/PrintSection";
import GallerySection from "./components/GallerySection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://example.com";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GBCCelofan",
      alternateName: "Bolsas de Celofán GBCCelofan",
      url: SITE_URL,
      description:
        "Fabricantes de bolsas de celofán y empaques de celofán en México. Celofán transparente, impreso y personalizado para regalo, floristería, bisutería y más.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MX",
      },
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      knowsAbout: [
        "bolsas de celofán",
        "empaques de celofán",
        "celofán personalizado",
        "bolsas para regalo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Bolsas de Celofán GBCCelofan",
      description:
        "Empaques de celofán y bolsas de celofán en México — GBCCelofan",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "es-MX",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Bolsas de Celofán GBCCelofan | Empaques de Celofán en México",
      description:
        "GBCCelofan — fabricantes de bolsas de celofán y empaques de celofán en México. Celofán transparente, impreso y personalizado.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Bolsas de Celofán GBCCelofan",
      url: SITE_URL,
      description:
        "Fabricantes y distribuidores de bolsas de celofán y empaques de celofán personalizados en México.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MX",
      },
      priceRange: "$$",
      currenciesAccepted: "MXN",
      paymentAccepted: "Cash, Credit Card",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué tipos de bolsas de celofán ofrecen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ofrecemos bolsas de celofán transparente, impreso y personalizado en diferentes tamaños para regalo, floristería, bisutería y uso industrial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo personalizar mis empaques de celofán?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en GBCCelofan ofrecemos impresión personalizada en bolsas de celofán con tu logo o diseño para destacar tu marca.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hacen envíos de bolsas de celofán a toda la República Mexicana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, realizamos envíos de bolsas de celofán y empaques a todo México.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const scriptId = "schema-org-json-ld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);
    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <main className="min-h-screen font-sans">
      <Navbar onQuoteClick={() => setQuoteOpen(true)} />
      <HeroSection onQuoteClick={() => setQuoteOpen(true)} />
      <CapabilitiesSection />
      <PrintSection />
      <GallerySection />
      <CTASection />
      <Footer />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </main>
  );
}
