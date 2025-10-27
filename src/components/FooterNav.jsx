import { NavLink } from 'react-router-dom'

// Menú inferior con enlaces declarados para mantener la navegación consistente.
const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/contacto', label: 'Contáctanos' },
]

function FooterNav() {
  return (
    <nav className="footer-nav" aria-label="Navegación principal inferior">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            ['footer-nav__link', isActive ? 'footer-nav__link--active' : '']
              .filter(Boolean)
              .join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default FooterNav
