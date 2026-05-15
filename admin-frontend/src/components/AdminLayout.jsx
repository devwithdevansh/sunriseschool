import { NavLink, Outlet } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FileText, 
  Bell, 
  GraduationCap, 
  Image, 
  Mail, 
  Users, 
  Activity, 
  Award, 
  ClipboardCheck, 
  Settings,
  LogOut,
  Search,
  User
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/notices', label: 'Notices', icon: Bell },
  { to: '/results', label: 'Results', icon: GraduationCap },
  { to: '/inquiries', label: 'Inquiries', icon: Mail },
]

export default function AdminLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <h1>Sunrise<span className="brand-dot"></span></h1>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-link" style={{width: '100%', background: 'none', border: 'none', cursor: 'pointer'}}>
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="main-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f5f5f5', padding: '10px 20px', borderRadius: '12px', width: '300px' }}>
            <Search size={16} color="#8c8c8c" />
            <input 
              type="text" 
              placeholder="Search..." 
              style={{ border: 'none', background: 'none', outline: 'none', fontSize: '0.85rem', fontWeight: 600, width: '100%' }} 
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800 }}>Principal Sanjay</p>
              <p style={{ margin: 0, fontSize: '0.7rem', fontWeight: 600, color: '#8c8c8c', textTransform: 'uppercase' }}>Administrator</p>
            </div>
            <div style={{ width: '40px', height: '40px', background: '#f5f5f5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={20} color="#666" />
            </div>
          </div>
        </header>

        <div className="content-viewport">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
