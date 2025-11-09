const clCurrencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0,
})

export const formatCurrencyCLP = (value) => {
  const numericValue = Number(value)
  if (Number.isNaN(numericValue)) {
    return clCurrencyFormatter.format(0)
  }
  return clCurrencyFormatter.format(numericValue)
}
