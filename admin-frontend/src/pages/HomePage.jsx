import { useState } from 'react'
import { 
  Users, 
  Bell, 
  Mail, 
  Layout,
  ArrowRight,
  Plus,
  ExternalLink
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [stats] = useState([
    { label: 'Website Pages', value: '18', icon: Layout, color: '#3b82f6' },
    { label: 'Active Notices', value: '07', icon: Bell, color: '#f59e0b' },
    { label: 'New Inquiries', value: '14', icon: Mail, color: '#10b981' },
    { label: 'Staff Records', value: '32', icon: Users, color: '#8b5cf6' },
  ])

  const [recentActivity] = useState([
    { id: 1, content: 'Notice published: Summer Vacation 2026', time: '10 mins ago', type: 'notice' },
    { id: 2, content: 'New inquiry from Deepak Patel (Class 10)', time: '2 hours ago', type: 'inquiry' },
    { id: 3, content: 'Staff record updated: Mrs. Anjali Shah', time: '4 hours ago', type: 'staff' },
    { id: 4, content: 'New photo added to Sports Gallery', time: 'Yesterday', type: 'media' },
  ])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="dashboard-container"
    >
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>Overview</h2>
            <p style={{ color: '#8c8c8c', fontWeight: 500, marginTop: '8px' }}>Welcome back, Principal. Here is your institutional snapshot.</p>
          </div>
          <button className="primary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <ExternalLink size={16} /> Visit Site
          </button>
        </div>
      </div>

      <div className="stats-grid" style={{ marginTop: '48px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <stat.icon size={20} />
              </div>
            </div>
            <span className="label" style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: '#8c8c8c', display: 'block', marginBottom: '8px' }}>{stat.label}</span>
            <div className="value" style={{ fontSize: '2rem', fontWeight: 900 }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '48px', marginTop: '64px' }}>
        <div className="activity-section">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Live Stream <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentActivity.map((activity) => (
              <div 
                key={activity.id}
                style={{ padding: '20px 24px', background: 'white', borderRadius: '20px', border: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {activity.type === 'notice' && <Bell size={18} color="#f59e0b" />}
                    {activity.type === 'inquiry' && <Mail size={18} color="#10b981" />}
                    {activity.type === 'staff' && <Users size={18} color="#3b82f6" />}
                    {activity.type === 'media' && <Layout size={18} color="#8b5cf6" />}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: '#1a1a1a' }}>{activity.content}</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 500, color: '#8c8c8c' }}>{activity.time}</p>
                  </div>
                </div>
                <ArrowRight size={18} color="#e2e8f0" />
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '32px', border: '1px solid var(--border-subtle)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '24px' }}>Control Center</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button className="primary-button" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1a1a1a', padding: '18px 24px' }}>
              Create New Notice <Plus size={16} />
            </button>
            <button className="primary-button" style={{ background: '#f8fafc', color: '#1a1a1a', border: '1px solid #e2e8f0', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px' }}>
              Admission Desk <ArrowRight size={18} />
            </button>
            <button className="primary-button" style={{ background: '#f8fafc', color: '#1a1a1a', border: '1px solid #e2e8f0', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px' }}>
              Academic Records <ArrowRight size={18} />
            </button>
          </div>
          
          <div style={{ marginTop: '40px', padding: '24px', background: '#fff5ef', borderRadius: '20px', border: '1px solid #ffe8d9' }}>
            <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 800, color: 'var(--brand-orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pro Tip</p>
            <p style={{ margin: '8px 0 0', fontSize: '0.85rem', fontWeight: 600, color: '#9a3412', lineHeight: '1.5' }}>
              Pinned notices are always visible first to students. Use them for urgent closures or board updates.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
