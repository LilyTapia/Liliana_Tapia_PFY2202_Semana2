import { NavLink } from 'react-router-dom'

// Menú inferior persistente para navegación rápida en dispositivos móviles.
const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes' },
  { to: '/inventario', label: 'Inventario' },
  { to: '/posibles-compras', label: 'Posibles' },
  { to: '/ingresar-vehiculo', label: 'Ingresar' },
]

const linkClasses = ({ isActive }) =>
  [
    'flex-1 rounded-2xl px-3 py-3 text-center text-xs font-semibold uppercase tracking-wide transition sm:text-sm',
    isActive
      ? 'bg-brand-100 text-brand-700 shadow-[0_-4px_12px_rgba(37,99,235,0.18)]'
      : 'text-slate-500 hover:bg-slate-100 hover:text-brand-700',
  ].join(' ')

function FooterNav() {
  return (
    <nav
      className="footer-nav fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 px-4 pb-3 pt-2 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
      aria-label="Navegación inferior del sitio"
    >
      <div className="mx-auto flex max-w-3xl gap-2">
        {navItems.map(({ to, label }) => (
          <NavLink key={to} to={to} className={linkClasses}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default FooterNav
