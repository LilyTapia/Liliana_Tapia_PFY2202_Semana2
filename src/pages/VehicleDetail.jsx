import { Link, useNavigate, useParams } from 'react-router-dom'
import { formatCurrencyCLP } from '../utils/currency.js'
import { useVehicles } from '../context/VehicleContext.jsx'

function VehicleDetail() {
  const { vehicleId } = useParams()
  const navigate = useNavigate()
  const { getVehicleById, isVehicleShortlisted, markAsPossiblePurchase, removeFromPossiblePurchases } =
    useVehicles()

  const vehicle = getVehicleById(vehicleId)

  if (!vehicle) {
    return (
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-rose-200 bg-white p-8 text-center text-rose-700 shadow-brand-md">
        <h1 className="text-2xl font-semibold">Vehículo no encontrado</h1>
        <p className="mt-2 text-sm text-rose-600">
          Es posible que haya sido removido del inventario. Revisa el listado actualizado para confirmar.
        </p>
        <Link
          to="/inventario"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Volver al inventario
        </Link>
      </div>
    )
  }

  const isShortlisted = isVehicleShortlisted(vehicle.id)

  const handleToggleShortlist = () => {
    if (isShortlisted) {
      removeFromPossiblePurchases(vehicle.id)
    } else {
      markAsPossiblePurchase(vehicle.id)
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex w-max items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
      >
        ← Volver
      </button>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-brand-md">
        {vehicle.image ? (
          <img src={vehicle.image} alt={vehicle.imageAlt || vehicle.model} className="h-72 w-full object-cover" />
        ) : (
          <div className="flex h-72 w-full items-center justify-center bg-brand-600 text-5xl font-semibold text-white">
            {vehicle.model.slice(0, 1)}
          </div>
        )}

        <div className="space-y-5 px-6 py-8 sm:px-10">
          <header className="space-y-3">
            <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
              {vehicle.brand}
            </span>
            <h1 className="text-3xl font-semibold text-slate-900">{vehicle.model}</h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {vehicle.category} · Año {vehicle.year}
            </p>
            <p className="text-2xl font-semibold text-brand-600">{formatCurrencyCLP(vehicle.price)}</p>
          </header>

          {vehicle.autonomy && (
            <p className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700">{vehicle.autonomy}</p>
          )}

          <p className="text-slate-600">{vehicle.description}</p>

          {vehicle.highlight && (
            <div className="rounded-3xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm text-brand-700">
              {vehicle.highlight}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleToggleShortlist}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                isShortlisted
                  ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  : 'bg-brand-600 text-white hover:bg-brand-700'
              }`}
            >
              {isShortlisted ? 'Quitar de posibles compras' : 'Marcar como posible compra'}
            </button>
            <Link
              to="/inventario"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              Ver inventario
            </Link>
            <Link
              to="/posibles-compras"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
            >
              Ver posibles compras
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default VehicleDetail
