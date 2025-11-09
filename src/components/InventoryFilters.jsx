function InventoryFilters({
  filters,
  onChange,
  onReset,
  brandOptions = [],
  categoryOptions = [],
}) {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-brand-md">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Filtros dinámicos
          </span>
          <h2 className="text-2xl font-semibold text-slate-900">Refina el inventario</h2>
          <p className="text-sm text-slate-500">
            Combina categoría, marca, precio y año para encontrar el vehículo indicado sin perder el inventario original.
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-600"
        >
          Limpiar filtros
        </button>
      </div>

      <form className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Marca
          <select
            name="brand"
            value={filters.brand}
            onChange={onChange}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          >
            <option value="all">Todas</option>
            {brandOptions.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Categoría
          <select
            name="category"
            value={filters.category}
            onChange={onChange}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          >
            <option value="all">Todas</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Precio mínimo (CLP)
          <input
            type="number"
            name="minPrice"
            min="0"
            value={filters.minPrice}
            onChange={onChange}
            placeholder="Ej. 20000000"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Precio máximo (CLP)
          <input
            type="number"
            name="maxPrice"
            min="0"
            value={filters.maxPrice}
            onChange={onChange}
            placeholder="Ej. 45000000"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Año mínimo
          <input
            type="number"
            name="minYear"
            min="2000"
            value={filters.minYear}
            onChange={onChange}
            placeholder="Ej. 2020"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
          Año máximo
          <input
            type="number"
            name="maxYear"
            min="2000"
            value={filters.maxYear}
            onChange={onChange}
            placeholder="Ej. 2024"
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </label>
      </form>
    </section>
  )
}

export default InventoryFilters
