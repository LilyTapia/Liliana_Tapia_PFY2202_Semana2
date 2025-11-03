import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function FinanceModal({ vehicle, onClose }) {
  // Escuchamos la tecla Escape para cerrar el modal sin usar el mouse.
  useEffect(() => {
    if (!vehicle) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [vehicle, onClose])

  if (!vehicle) {
    return null
  }

  const financePlans = Array.isArray(vehicle.finance) ? vehicle.finance : []

  const handleOverlayClick = () => {
    onClose()
  }

  const handleModalClick = (event) => {
    event.stopPropagation()
  }

  // Usamos portal para renderizar la capa modal en la raíz del documento.
  return createPortal(
    <>
      <div
        className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
        role="presentation"
        onClick={handleOverlayClick}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
        <div
          className="w-full max-w-3xl rounded-3xl bg-white shadow-brand-lg ring-1 ring-slate-200/80"
          role="dialog"
          aria-modal="true"
          onClick={handleModalClick}
        >
          <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-500">
                Financiamiento
              </span>
              <h3 className="mt-1 text-2xl font-semibold text-slate-900">{vehicle.model}</h3>
              <p className="text-sm text-slate-500">
                {vehicle.brand} · {vehicle.category} · Año {vehicle.year}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Cerrar modal"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </header>

          <div className="space-y-6 px-6 py-6">
            <p className="text-sm text-slate-600">
              Elige la alternativa que mejor se adapte a tu presupuesto. Todas las opciones incluyen
              asistencia en ruta, mantención anual y soporte personalizado NovaDrive.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {financePlans.map(({ label, details: { pie, cuota, plazo, tasa } }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
                >
                  <h4 className="text-lg font-semibold text-brand-600">{label}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>
                      <strong className="text-slate-900">Pie:</strong> {pie}
                    </li>
                    <li>
                      <strong className="text-slate-900">Cuota mensual:</strong> {cuota}
                    </li>
                    <li>
                      <strong className="text-slate-900">Plazo:</strong> {plazo}
                    </li>
                    <li>
                      <strong className="text-slate-900">Tasa referencial:</strong> {tasa}
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <footer className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
              onClick={onClose}
            >
              Cerrar
            </button>
            {financePlans.length > 0 && (
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
                onClick={onClose}
              >
                Solicitar simulación personalizada
              </button>
            )}
          </footer>
        </div>
      </div>
    </>,
    document.body,
  )
}

export default FinanceModal
