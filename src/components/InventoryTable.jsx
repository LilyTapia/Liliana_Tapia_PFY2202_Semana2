import InventoryRow from './InventoryRow.jsx'

function InventoryTable({ vehicles, totalCount = 0, emptyMessage, renderActions }) {
  const hasVehicles = vehicles.length > 0
  const hasActions = typeof renderActions === 'function'

  const messageWhenEmpty =
    emptyMessage || 'Aún no hay vehículos registrados. Agrega uno nuevo desde el formulario para visualizarlo en este listado.'

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-brand-md">
      {hasVehicles ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Marca
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Modelo
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Categoría
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Año
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Precio
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Descripción
                </th>
                {hasActions && (
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                    Acciones
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {vehicles.map((vehicle) => (
                <InventoryRow key={vehicle.id} vehicle={vehicle} renderActions={renderActions} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center text-slate-500">
          <p className="text-lg font-semibold text-slate-700">{messageWhenEmpty}</p>
        </div>
      )}

      <footer className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>
          Mostrando <strong className="text-slate-800">{vehicles.length}</strong> de{' '}
          <strong className="text-slate-800">{totalCount}</strong> vehículos disponibles
        </span>
        <span>Actualizado automáticamente con la información del formulario.</span>
      </footer>
    </div>
  )
}

export default InventoryTable
