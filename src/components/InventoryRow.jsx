import { formatCurrencyCLP } from '../utils/currency.js'

function InventoryRow({ vehicle, renderActions }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="px-4 py-4 text-sm font-semibold text-slate-900 sm:px-6">
        {vehicle.brand}
      </td>
      <td className="px-4 py-4 text-sm text-slate-700 sm:px-6">{vehicle.model}</td>
      <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">{vehicle.category}</td>
      <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">{vehicle.year}</td>
      <td className="px-4 py-4 text-sm font-semibold text-brand-600 sm:px-6">
        {formatCurrencyCLP(vehicle.price)}
      </td>
      <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">{vehicle.description}</td>
      {renderActions ? (
        <td className="px-4 py-4 text-sm text-slate-600 sm:px-6">{renderActions(vehicle)}</td>
      ) : null}
    </tr>
  )
}

export default InventoryRow
