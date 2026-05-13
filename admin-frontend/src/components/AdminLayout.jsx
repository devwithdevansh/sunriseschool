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
  ChevronRight,
  Search,
  User,
  Moon,
  Sparkles,
  ShieldCheck
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { type: 'divider', label: 'Management' },
  { to: '/pages', label: 'Page Content', icon: FileText },
  { to: '/notices', label: 'Notice Board', icon: Bell },
  { to: '/results', label: 'Academic Results', icon: GraduationCap },
  { to: '/staff', label: 'Staff & Faculty', icon: Users },
  { type: 'divider', label: 'Campus Life' },
  { to: '/media', label: 'Media Library', icon: Image },
  { to: '/activities', label: 'Co-Curricular', icon: Activity },
  { to: '/alumni', label: 'Achievements', icon: Award },
  { to: '/exams', label: 'Exam Center', icon: ClipboardCheck },
  { type: 'divider', label: 'Inbound' },
  { to: '/inquiries', label: 'Leads & Inquiries', icon: Mail },
  { type: 'divider', label: 'System' },
  { to: '/settings', label: 'Admin Settings', icon: Settings },
]

export default function AdminLayout() {
  return (
    <div className="app-shell bg-slate-50 min-h-screen">
      <div className="admin-layout flex">
        {/* Sidebar */}
        <aside className="sidebar w-72 h-screen sticky top-0 bg-slate-900 text-slate-400 p-6 flex flex-col border-r border-slate-800">
          <div className="brand-block mb-10 flex items-center gap-4 px-2">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
              <Sparkles size={24} />
            </div>
            <div>
              <h1 className="text-white font-black tracking-tight text-xl leading-none">Sunrise</h1>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mt-1">Management Console</p>
            </div>
          </div>

          <nav className="sidebar-nav flex-1 overflow-y-auto space-y-1 pr-2 custom-scrollbar" aria-label="Admin navigation">
            {navItems.map((item, idx) => (
              item.type === 'divider' ? (
                <div key={idx} className="pt-6 pb-2 px-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{item.label}</span>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm group ${
                      isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                      : 'hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <item.icon size={18} className={`${item.to === '/' ? 'text-blue-400 group-[.active]:text-white' : ''}`} />
                  <span className="flex-1">{item.label}</span>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              )
            ))}
          </nav>

          <div className="sidebar-footer mt-auto pt-8 border-t border-slate-800">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
                <User size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-white truncate">Sanjay Mehta</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Administrator</p>
              </div>
            </div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-800 text-slate-300 font-bold text-sm hover:bg-red-900/20 hover:text-red-400 transition-all">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-panel flex-1 flex flex-col min-h-screen overflow-hidden">
          <header className="main-header h-20 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-8 flex items-center justify-between border-b border-slate-100">
            <div className="header-search flex items-center gap-3 bg-slate-50 px-5 py-2.5 rounded-2xl w-96 border border-transparent focus-within:border-blue-100 focus-within:bg-white transition-all">
              <Search size={18} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources, students, or records..." 
                className="bg-transparent border-none outline-none text-sm font-medium w-full text-slate-600 placeholder:text-slate-400"
              />
            </div>
            
            <div className="header-actions flex items-center gap-4">
              <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Toggle Theme">
                  <Moon size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors relative" title="Notifications">
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
                </button>
              </div>
              <div className="h-8 w-px bg-slate-100 mx-2"></div>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Network Secure</span>
                <ShieldCheck size={14} className="text-blue-500" />
              </div>
            </div>
          </header>

          <div className="content-container flex-1 p-10 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
