import { useState } from 'react'
import { 
  Users, 
  Bell, 
  Mail, 
  TrendingUp, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Calendar,
  Zap,
  Layout
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [stats] = useState([
    { label: 'Published Pages', value: '18', icon: Layout, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Active Notices', value: '07', icon: Bell, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Pending Inquiries', value: '14', icon: Mail, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Total Faculty', value: '32', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
  ])

  const [recentActivity] = useState([
    { id: 1, type: 'update', content: 'Admission Notice for 2026-27 Published', time: '10 mins ago', status: 'success' },
    { id: 2, type: 'inquiry', content: 'New admission inquiry: Master Aarav Shah', time: '1 hour ago', status: 'pending' },
    { id: 3, type: 'result', content: 'SSC Board Toppers List Updated', time: '3 hours ago', status: 'success' },
    { id: 4, type: 'media', content: 'Gallery updated: Republic Day Celebrations', time: 'Yesterday', status: 'success' },
  ])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Console Overview</h2>
          <p className="text-slate-500 font-medium">Welcome back, Principal. Here is your institutional snapshot.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
          <Calendar size={18} className="text-blue-600" />
          <span className="text-sm font-bold text-slate-700">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.article 
            key={idx} 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 transition-all hover:shadow-xl"
          >
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
              <stat.icon size={26} />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              <h4 className="text-2xl font-black text-slate-900 leading-none mt-1">{stat.value}</h4>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Hero Card */}
        <article className="lg:col-span-8 relative overflow-hidden rounded-[40px] bg-slate-900 p-10 md:p-14 text-white group">
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
            <Zap size={240} />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-500/20">
              <Zap size={14} /> System Health: Excellent
            </span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-[0.95]">
              Empower Your <br />
              <span className="text-blue-400 font-light italic">Digital Campus.</span>
            </h3>
            <p className="text-slate-400 font-medium text-lg leading-relaxed mb-10">
              You have <span className="text-white font-bold">14 unread inquiries</span> and 2 notices pending review. Keep your community updated with the latest school events and results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-blue-50 transition-all text-sm shadow-xl shadow-white/5">
                Manage Inquiries
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all text-sm">
                Publish Notice
              </button>
            </div>
          </div>
        </article>

        {/* Quick Insights */}
        <article className="lg:col-span-4 bg-white rounded-[40px] border border-slate-100 p-10 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-slate-900">Live Insights</h3>
            <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
              <ArrowUpRight size={18} />
            </div>
          </div>
          
          <div className="space-y-8">
            {[
              { label: 'Site Traffic', val: '2.4k', change: '+12%', color: 'text-green-500' },
              { label: 'Inquiry Rate', val: '84%', change: '+5%', color: 'text-blue-500' },
              { label: 'Response Time', val: '2.4h', change: '-18%', color: 'text-green-500' },
            ].map((insight, i) => (
              <div key={i} className="flex items-center justify-between group cursor-default">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{insight.label}</p>
                  <p className="text-2xl font-black text-slate-900 leading-none">{insight.val}</p>
                </div>
                <span className={`text-xs font-black px-3 py-1 rounded-full bg-slate-50 ${insight.color} transition-all group-hover:scale-110`}>
                  {insight.change}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Users size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Admins</p>
                <div className="flex -space-x-2 mt-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold">+2</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Activity Table */}
        <article className="lg:col-span-12 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-10 pb-0 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Recent Operational Log</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">A real-time record of all administrative actions.</p>
            </div>
            <button className="text-sm font-bold text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-xl transition-all">View Full Audit Log</button>
          </div>
          
          <div className="p-6">
            <div className="table-wrap border-none">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Event Details</th>
                    <th>Timeline</th>
                    <th>Status</th>
                    <th>Control</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-slate-50/50 transition-colors">
                      <td>
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl ${activity.status === 'success' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                            {activity.status === 'success' ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                          </div>
                          <span className="font-bold text-slate-700">{activity.content}</span>
                        </div>
                      </td>
                      <td className="text-slate-400 font-bold text-xs uppercase tracking-widest">{activity.time}</td>
                      <td>
                        <span className={`badge ${activity.status === 'success' ? 'badge-green' : 'badge-orange shadow-none'}`}>
                          {activity.status === 'success' ? 'Completed' : 'Review Required'}
                        </span>
                      </td>
                      <td>
                        <button className="p-3 hover:bg-slate-100 text-slate-400 rounded-xl transition-all">
                          <ArrowUpRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  )
}
