import { Link } from 'react-router-dom'
import { useVehicles } from '../context/VehicleContext.jsx'

const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0,
})

function Inventory() {
  const { vehicles } = useVehicles()

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <header className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
            Inventario general
          </span>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            Vehículos disponibles
          </h1>
          <p className="text-slate-600">
            Revisa la lista actualizada de modelos incorporados en la plataforma. Los
            datos se actualizan en tiempo real con la información del formulario.
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
          to="/ingresar-vehiculo"
        >
          Agregar nuevo vehículo
        </Link>
      </header>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-brand-md">
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
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-semibold text-slate-900 sm:px-6">
                    {vehicle.brand}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700 sm:px-6">
                    {vehicle.model}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">
                    {vehicle.category}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">
                    {vehicle.year}
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-brand-600 sm:px-6">
                    {currencyFormatter.format(vehicle.price)}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">
                    {vehicle.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Total de vehículos registrados:
            <strong className="ml-1 text-slate-800">{vehicles.length}</strong>
          </span>
          <span>Actualizado automáticamente con la información del formulario.</span>
        </footer>
      </div>
    </div>
  )
}

export default Inventory
