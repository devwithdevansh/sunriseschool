import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Globe, 
  Bell, 
  Lock, 
  Save, 
  Camera,
  Info,
  Smartphone
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  const tabs = [
    { id: 'general', label: 'Institutional', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Alerts', icon: Bell },
  ]

  return (
    <div className="page-container">
      <div className="topbar">
        <h2>System Settings</h2>
        <p>Configure institutional defaults and administrative security.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px', alignItems: 'flex-start' }}>
        {/* Navigation */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                borderRadius: '16px',
                fontSize: '0.9rem',
                fontWeight: 700,
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer',
                transition: '0.2s',
                background: activeTab === tab.id ? '#1a1a1a' : 'white',
                color: activeTab === tab.id ? 'white' : '#8c8c8c',
                boxShadow: activeTab === tab.id ? '0 8px 16px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className="card" style={{ padding: '48px' }}>
          {activeTab === 'general' && (
            <div className="space-y-10">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900 }}>General Information</h3>
                <button className="primary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px' }}>
                  <Save size={16} /> Save Changes
                </button>
              </div>

              <div style={{ padding: '32px', background: '#fcfcfc', borderRadius: '24px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '32px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '100px', height: '100px', background: 'white', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)', fontSize: '2rem', fontWeight: 900, color: 'var(--brand-orange)' }}>
                    SS
                  </div>
                  <button style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '36px', height: '36px', borderRadius: '12px', background: '#1a1a1a', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Camera size={16} />
                  </button>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800 }}>Institutional Logo</h4>
                  <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#8c8c8c' }}>This logo will appear on all public pages and official PDF reports.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="field-group">
                  <label className="field-label">School Name</label>
                  <input type="text" className="field-input" defaultValue="Sunrise School Rajkot" />
                </div>
                <div className="field-group">
                  <label className="field-label">Official Email</label>
                  <input type="email" className="field-input" defaultValue="sunriseschool8261@gmail.com" />
                </div>
                <div className="field-group">
                  <label className="field-label">Phone Number</label>
                  <input type="text" className="field-input" defaultValue="8799140051" />
                </div>
                <div className="field-group">
                  <label className="field-label">Office Hours</label>
                  <input type="text" className="field-input" defaultValue="08:00 AM - 02:00 PM" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-10">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900 }}>Login & Security</h3>
                <button className="primary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px' }}>
                  <Lock size={16} /> Update Security
                </button>
              </div>

              <div className="field-group">
                <label className="field-label">Current Password</label>
                <input type="password" placeholder="••••••••" className="field-input" />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="field-group">
                  <label className="field-label">New Password</label>
                  <input type="password" placeholder="Min 8 characters" className="field-input" />
                </div>
                <div className="field-group">
                  <label className="field-label">Confirm New Password</label>
                  <input type="password" placeholder="Repeat new password" className="field-input" />
                </div>
              </div>

              <div style={{ padding: '24px', background: '#f0fdf4', borderRadius: '20px', border: '1px solid #dcfce7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Smartphone size={24} color="#166534" />
                  <div>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: '#166534' }}>Two-Factor Authentication</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#166534', opacity: 0.8 }}>Add an extra layer of security to your admin account.</p>
                  </div>
                </div>
                <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: '#166534' }} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
