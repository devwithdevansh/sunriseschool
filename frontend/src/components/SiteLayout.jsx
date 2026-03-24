import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <div className="site-mark">SS</div>
          <div>
            <h1>Sunrise School</h1>
            <p>Public website</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Website navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `site-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}
