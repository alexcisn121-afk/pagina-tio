import { useState, useEffect } from "react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <span className="text-xl font-bold tracking-tight text-gray-900">GBC</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: "Inicio", id: "hero" },
            { label: "Capacidades", id: "capacidades" },
            { label: "Impresión", id: "impresion" },
            { label: "Contacto", id: "cta" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scrolled ? "text-gray-700 hover:text-sky-500" : "text-white hover:text-lime-300"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <i className={`ri-${menuOpen ? "close" : "menu"}-line text-2xl`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 anim-fade-up" style={{ animationDuration: '0.3s' }}>
          {[
            { label: "Inicio", id: "hero" },
            { label: "Capacidades", id: "capacidades" },
            { label: "Impresión", id: "impresion" },
            { label: "Contacto", id: "cta" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium text-gray-700 hover:text-sky-500 cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onQuoteClick(); setMenuOpen(false); }}
            className="mt-2 px-5 py-2 rounded-md bg-lime-400 text-gray-900 text-sm font-semibold cursor-pointer whitespace-nowrap"
          >
            Solicitar Cotización
          </button>
        </div>
      )}
    </nav>
  );
}
