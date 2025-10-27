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

  const handleOverlayClick = () => {
    onClose()
  }

  const handleModalClick = (event) => {
    event.stopPropagation()
  }

  // Usamos portal para renderizar la capa modal en la raíz del documento.
  return createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="modal" onClick={handleModalClick}>
        <header className="modal__header">
          <h3 className="modal__title">Financiamiento {vehicle.name}</h3>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>
        <div className="modal__content">
          <p className="modal__subtitle">
            Elige la alternativa que mejor se adapte a tu presupuesto. Todas las
            opciones incluyen asistencia en ruta y mantención anual.
          </p>
          <div className="finance-options">
            {vehicle.finance.map(
              ({ label, details: { pie, cuota, plazo, tasa } }) => (
                <article key={label} className="finance-card">
                  <h4>{label}</h4>
                  <ul>
                    <li>
                      <strong>Pie:</strong> {pie}
                    </li>
                    <li>
                      <strong>Cuota mensual:</strong> {cuota}
                    </li>
                    <li>
                      <strong>Plazo:</strong> {plazo}
                    </li>
                    <li>
                      <strong>Tasa referencial:</strong> {tasa}
                    </li>
                  </ul>
                </article>
              ),
            )}
          </div>
        </div>
        <footer className="modal__footer">
          <button type="button" className="modal__cta" onClick={onClose}>
            Solicitar simulación personalizada
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  )
}

export default FinanceModal
