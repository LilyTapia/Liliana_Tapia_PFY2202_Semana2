import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/ingresar-vehiculo', label: 'Ingresar vehículo' },
  { to: '/inventario', label: 'Inventario' },
]

function HeaderNav() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen((prev) => !prev)
  const closeMenu = () => setOpen(false)

  const linkClasses = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-semibold transition',
      isActive
        ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
        : 'text-slate-600 hover:bg-brand-100 hover:text-brand-700',
    ].join(' ')

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-xl font-semibold text-slate-900"
          onClick={closeMenu}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white">
            ND
          </span>
          NovaDrive
        </NavLink>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2 text-slate-600 transition hover:border-brand-500 hover:text-brand-600 md:hidden"
          onClick={toggleMenu}
          aria-label="Alternar navegación"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav className="hidden gap-3 md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClasses} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="mx-4 mb-4 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:hidden">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClasses} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default HeaderNav
