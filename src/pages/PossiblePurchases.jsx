import { Link } from 'react-router-dom'
import InventoryTable from '../components/InventoryTable.jsx'
import { useVehicles } from '../context/VehicleContext.jsx'

function PossiblePurchases() {
  const { shortlist, removeFromPossiblePurchases } = useVehicles()

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <header className="space-y-3 text-center md:text-left">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">
          Seguimiento de compras
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Vehículos marcados</h1>
        <p className="text-slate-600">
          Aquí encontrarás todos los modelos que marcaste como posible compra. Puedes revisar su detalle o retirarlos de la lista para que vuelvan al inventario general.
        </p>
      </header>

      <InventoryTable
        vehicles={shortlist}
        totalCount={shortlist.length}
        emptyMessage="Aún no marcas vehículos como posible compra."
        renderActions={(vehicle) => (
          <div className="flex flex-wrap gap-2">
            <Link
              to={`/vehiculo/${vehicle.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-500 px-4 py-2 text-xs font-semibold text-brand-600 transition hover:bg-brand-50"
            >
              Ver detalle
            </Link>
            <button
              type="button"
              onClick={() => removeFromPossiblePurchases(vehicle.id)}
              className="inline-flex items-center gap-2 rounded-full border border-rose-300 px-4 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50"
            >
              Quitar
            </button>
          </div>
        )}
      />
    </div>
  )
}

export default PossiblePurchases
