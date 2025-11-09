import { Link } from 'react-router-dom'
import { formatCurrencyCLP } from '../utils/currency.js'

function VehicleCard({ vehicle, onSelect }) {
  const hasImage = Boolean(vehicle.image)
  const hasFinance = Array.isArray(vehicle.finance) && vehicle.finance.length > 0

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-brand-md ring-1 ring-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-brand-lg">
      {hasImage ? (
        <img
          src={vehicle.image}
          alt={vehicle.imageAlt || `Imagen del modelo ${vehicle.model}`}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-52 w-full items-center justify-center bg-gradient-to-br from-brand-500 to-indigo-600 text-3xl font-semibold text-white">
          {vehicle.model.slice(0, 1)}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <header className="space-y-1">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            {vehicle.brand}
          </span>
          <h3 className="text-xl font-semibold text-slate-900">{vehicle.model}</h3>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {vehicle.category}
          </p>
        </header>

        <p className="text-lg font-semibold text-brand-600">
          {formatCurrencyCLP(vehicle.price)}
        </p>
        {vehicle.autonomy && <p className="text-sm text-slate-600">{vehicle.autonomy}</p>}
        {vehicle.highlight || vehicle.description ? (
          <p className="text-sm text-slate-600">{vehicle.highlight ?? vehicle.description}</p>
        ) : null}

        <div className="mt-auto flex flex-col gap-3">
          {hasFinance && (
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
              onClick={() => onSelect(vehicle)}
            >
              Ver opciones de financiamiento
            </button>
          )}
          <Link
            to={`/vehiculo/${vehicle.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  )
}

export default VehicleCard
