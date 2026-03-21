import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
]

export default function AdminLayout() {
  return (
    <div className="app-shell">
      <div className="admin-layout">
        <aside className="sidebar">
          <div className="brand-block">
            <div className="brand-mark">SS</div>
            <h1>Sunrise School CMS</h1>
            <p>React admin panel for managing school content through the existing PHP API.</p>
          </div>

          <nav className="sidebar-nav" aria-label="Admin navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `sidebar-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-note">
            Backend APIs remain unchanged. This panel is ready to connect to the existing `pages` endpoints.
          </div>
        </aside>

        <main className="main-panel">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
