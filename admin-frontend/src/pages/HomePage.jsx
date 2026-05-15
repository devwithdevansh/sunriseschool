import { useState, useEffect } from 'react'
import { 
  Bell, 
  Mail, 
  GraduationCap,
  ArrowRight,
  Plus,
  ExternalLink,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react'
import { motion } from 'framer-motion'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()
  const [counts, setCounts] = useState({ notices: 0, results: 0, inquiries: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [n, r, i] = await Promise.all([
          api.get('/notices'),
          api.get('/results'),
          api.get('/inquiries')
        ])
        setCounts({
          notices: n.data.data.length,
          results: r.data.data.length,
          inquiries: i.data.data.length
        })
      } catch (err) {
        console.error("Failed to load counts", err)
      } finally {
        setLoading(false)
      }
    }
    fetchCounts()
  }, [])

  const stats = [
    { label: 'Active Notices', value: counts.notices, icon: Bell, color: '#f59e0b', trend: '+2 this week' },
    { label: 'Total Results', value: counts.results, icon: GraduationCap, color: '#6366f1', trend: 'Updated today' },
    { label: 'New Inquiries', value: counts.inquiries, icon: Mail, color: '#10b981', trend: '4 pending' },
  ]

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2>Dashboard</h2>
          <p>Institutional command center for Sunrise School.</p>
        </div>
        <button className="secondary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ExternalLink size={16} /> Open Website
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="card" style={{ margin: 0, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${stat.color}15`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <stat.icon size={26} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', letterSpacing: '0.05em' }}>{stat.label}</span>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>{loading ? '...' : stat.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                <TrendingUp size={14} /> {stat.trend}
              </div>
            </div>
            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.03 }}>
              <stat.icon size={120} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
        <div className="card" style={{ margin: 0 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Quick Actions <Zap size={20} color="var(--brand-secondary)" />
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <button onClick={() => navigate('/notices')} className="secondary-button" style={{ height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fffbeb', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bell size={24} />
              </div>
              <span style={{ fontWeight: 700 }}>Post Notice</span>
            </button>
            <button onClick={() => navigate('/results')} className="secondary-button" style={{ height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#eef2ff', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={24} />
              </div>
              <span style={{ fontWeight: 700 }}>Upload Results</span>
            </button>
            <button onClick={() => navigate('/inquiries')} className="secondary-button" style={{ height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', border: '1px solid #e2e8f0', gridColumn: 'span 2' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={24} />
              </div>
              <span style={{ fontWeight: 700 }}>View Admission Desk</span>
            </button>
          </div>
        </div>

        <div className="card" style={{ margin: 0, background: 'var(--text-main)', color: 'white' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            System Status <Clock size={20} color="#10b981" />
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase' }}>Last Update</p>
              <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: '1.1rem' }}>Today at 14:32</p>
            </div>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase' }}>Admin Session</p>
              <p style={{ margin: '4px 0 0', fontWeight: 700, fontSize: '1.1rem' }}>Principal Sanjay (Root)</p>
            </div>
            <div style={{ marginTop: '20px', padding: '24px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
              <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.6 }}>
                The portal is now running the v2.0 premium engine. All modules are synchronized with the cloud backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
