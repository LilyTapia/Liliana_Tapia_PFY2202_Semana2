import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VEHICLE_CATEGORIES, VEHICLE_MODELS } from '../constants/vehicleOptions.js'
import { useVehicles } from '../context/VehicleContext.jsx'

const initialFormState = {
  brand: '',
  model: '',
  category: '',
  price: '',
  year: '',
  autonomy: '',
  description: '',
}

function AddVehicle() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const { addVehicle } = useVehicles()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'model') {
      const selectedModel = VEHICLE_MODELS.find((option) => option.value === value)
      setFormData((prev) => ({
        ...prev,
        model: value,
        brand: selectedModel?.brand ?? prev.brand,
      }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const currentErrors = {}

    if (!formData.brand.trim()) currentErrors.brand = 'Ingresa la marca.'
    if (!formData.model.trim()) currentErrors.model = 'Ingresa el modelo.'
    if (!formData.category.trim()) currentErrors.category = 'Especifica una categoría.'

    const priceValue = Number(formData.price)
    if (!priceValue || priceValue <= 0) currentErrors.price = 'Ingresa un precio válido en pesos chilenos.'

    const yearValue = Number(formData.year)
    if (!yearValue || yearValue < 2000) currentErrors.year = 'Ingresa un año mayor o igual a 2000.'

    if (!formData.description.trim()) {
      currentErrors.description = 'Describe el vehículo para mostrarlo en el sitio.'
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors)
      setStatus(null)
      return
    }

    addVehicle({
      brand: formData.brand,
      model: formData.model,
      category: formData.category,
      price: priceValue,
      year: yearValue,
      autonomy: formData.autonomy,
      description: formData.description,
    })

    setFormData(initialFormState)
    setErrors({})
    setStatus('Vehículo agregado correctamente. Puedes revisarlo en el inventario.')
  }

  const handleViewInventory = () => {
    navigate('/inventario')
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <header className="space-y-2 text-center md:text-left">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
          Gestión de inventario
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Ingresar nuevo vehículo
        </h1>
        <p className="text-slate-600">
          Completa el formulario para sumar un vehículo al catálogo. Recuerda ingresar
          los datos en pesos chilenos.
        </p>
      </header>

      {status && (
        <div className="flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800 shadow-md shadow-emerald-100/60 sm:flex-row sm:items-center sm:justify-between">
          <span>{status}</span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleViewInventory}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Ver inventario
            </button>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
              to="/"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-brand-md sm:p-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="brand">
              Marca *
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              value={formData.brand}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
              placeholder="Ej. Zenith Motors"
            />
            {errors.brand && <span className="text-sm text-rose-600">{errors.brand}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="model">
              Modelo *
            </label>
            <select
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
            >
              <option value="">Selecciona un modelo</option>
              {VEHICLE_MODELS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.model && <span className="text-sm text-rose-600">{errors.model}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="category">
              Categoría *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
            >
              <option value="">Selecciona una categoría</option>
              {VEHICLE_CATEGORIES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.category && <span className="text-sm text-rose-600">{errors.category}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="price">
              Precio en CLP *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
              placeholder="Ej. 25990000"
            />
            {errors.price && <span className="text-sm text-rose-600">{errors.price}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="year">
              Año *
            </label>
            <input
              id="year"
              name="year"
              type="number"
              min="2000"
              value={formData.year}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
              placeholder="Ej. 2025"
            />
            {errors.year && <span className="text-sm text-rose-600">{errors.year}</span>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-800" htmlFor="autonomy">
              Autonomía o atributo principal
            </label>
            <input
              id="autonomy"
              name="autonomy"
              type="text"
              value={formData.autonomy}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
              placeholder="Ej. 450 km WLTP, 1.2 toneladas de carga..."
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <label className="block text-sm font-semibold text-slate-800" htmlFor="description">
            Descripción *
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
            placeholder="Resume los beneficios y la propuesta de valor del vehículo."
          />
          {errors.description && (
            <span className="text-sm text-rose-600">{errors.description}</span>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Los campos marcados con * son obligatorios. Los datos ingresados se reflejan
            inmediatamente en el inventario.
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
          >
            Guardar vehículo
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddVehicle
