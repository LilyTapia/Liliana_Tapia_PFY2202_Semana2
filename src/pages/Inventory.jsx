import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import InventoryFilters from '../components/InventoryFilters.jsx'
import InventoryTable from '../components/InventoryTable.jsx'
import { useVehicles } from '../context/VehicleContext.jsx'

const initialFilters = {
  brand: 'all',
  category: 'all',
  minPrice: '',
  maxPrice: '',
  minYear: '',
  maxYear: '',
}

function Inventory() {
  const { vehicles } = useVehicles()
  const [filters, setFilters] = useState(initialFilters)

  const brandOptions = useMemo(
    () => Array.from(new Set(vehicles.map((vehicle) => vehicle.brand))).sort(),
    [vehicles],
  )
  const categoryOptions = useMemo(
    () => Array.from(new Set(vehicles.map((vehicle) => vehicle.category))).sort(),
    [vehicles],
  )

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      if (filters.brand !== 'all' && vehicle.brand !== filters.brand) {
        return false
      }
      if (filters.category !== 'all' && vehicle.category !== filters.category) {
        return false
      }

      const minPrice = Number(filters.minPrice)
      if (!Number.isNaN(minPrice) && minPrice > 0 && vehicle.price < minPrice) {
        return false
      }

      const maxPrice = Number(filters.maxPrice)
      if (!Number.isNaN(maxPrice) && maxPrice > 0 && vehicle.price > maxPrice) {
        return false
      }

      const minYear = Number(filters.minYear)
      if (!Number.isNaN(minYear) && minYear >= 2000 && vehicle.year < minYear) {
        return false
      }

      const maxYear = Number(filters.maxYear)
      if (!Number.isNaN(maxYear) && maxYear >= 2000 && vehicle.year > maxYear) {
        return false
      }

      return true
    })
  }, [vehicles, filters])

  const handleFilterChange = (event) => {
    const { name, value } = event.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleResetFilters = () => {
    setFilters(initialFilters)
  }

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

      <InventoryFilters
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
        brandOptions={brandOptions}
        categoryOptions={categoryOptions}
      />

      <InventoryTable
        vehicles={filteredVehicles}
        totalCount={vehicles.length}
        emptyMessage="No hay vehículos que coincidan con los filtros seleccionados."
        renderActions={(vehicle) => (
          <Link
            to={`/vehiculo/${vehicle.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500 px-4 py-2 text-xs font-semibold text-brand-600 transition hover:bg-brand-50"
          >
            Ver detalle
          </Link>
        )}
      />
    </div>
  )
}

export default Inventory
