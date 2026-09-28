import { useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      await fetch("https://readdy.ai/api/form/d6v30klt4s7j0tv5ib5g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
          aria-label="Cerrar"
        >
          <i className="ri-close-line text-xl" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-lime-100 rounded-full">
              <i className="ri-check-line text-3xl text-lime-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">¡Solicitud enviada!</h3>
            <p className="text-gray-500 text-sm">Nuestro equipo de ventas se pondrá en contacto contigo en menos de 24 horas.</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-md bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 cursor-pointer whitespace-nowrap"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Solicitar Cotización</h2>
            <p className="text-sm text-gray-500 mb-6">Cuéntanos sobre tu proyecto y te enviamos una propuesta personalizada.</p>

            <form
              id="quote-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    placeholder="Nombre de empresa"
                    className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-600">Correo Electrónico *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@empresa.com"
                  className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-600">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="+52 55 1234 5678"
                  className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Tipo de bolsa</label>
                  <select name="tipo_bolsa" className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400">
                    <option value="">Seleccionar...</option>
                    <option value="sello_fondo">Sello de Fondo</option>
                    <option value="sello_lateral">Sello Lateral</option>
                    <option value="resellable">Cinta Resellable</option>
                    <option value="fuelle">Con Fuelle</option>
                    <option value="perforacion">Con Perforación</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Cantidad estimada</label>
                  <input
                    type="text"
                    name="cantidad"
                    placeholder="Ej. 5,000 unidades"
                    className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-600">Detalles adicionales</label>
                <textarea
                  name="detalles"
                  maxLength={500}
                  rows={3}
                  placeholder="Medidas, colores de impresión, producto a empacar..."
                  className="px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-sky-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-full py-3 rounded-md bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60"
              >
                {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-500 text-center">Ocurrió un error. Por favor intenta de nuevo.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
