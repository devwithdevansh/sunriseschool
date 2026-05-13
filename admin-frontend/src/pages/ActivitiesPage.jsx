import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X,
  ImageIcon,
  Palette,
  Music,
  Trophy,
  Theater,
  Mic,
  Sparkles,
  Camera,
  Brain,
  Users2,
  Heart,
  Save,
  Settings,
  Star,
  Globe,
  Zap,
  Info
} from 'lucide-react'

const ICON_MAP = {
  Palette, Music, Trophy, Theater, Mic, Sparkles, Camera, Brain, Users2, Heart, Zap, Globe
}

const MOCK_ACTIVITIES = [
  { id: 1, title: 'Visual Arts', category: 'Arts', tag: 'Creative', icon: 'Palette', desc: 'Colors, shapes, and textures — students define their unique visual language.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400', isFeatured: true },
  { id: 2, title: 'Music Academy', category: 'Performance', tag: 'Melodic', icon: 'Music', desc: 'Vocal and instrumental mastery spanning classical and contemporary genres.', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400', isFeatured: true },
  { id: 3, title: 'Athletic Club', category: 'Sports', tag: 'Physical', icon: 'Trophy', desc: 'Strength, strategy, and teamwork across multiple sporting disciplines.', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400', isFeatured: true },
]

export default function ActivitiesPage() {
  const [activities] = useState(MOCK_ACTIVITIES)
  const [showAddForm, setShowAddForm] = useState(false)
  const [showConfig, setShowConfig] = useState(false)
  const [filter, setFilter] = useState('All')

  return (
    <div className="page-container">
      {/* Restored Clean UX Topbar */}
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h2>Co-Curricular Manager</h2>
          <p>Direct control over programs, philosophy, and page content.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => setShowConfig(true)}
            className="secondary-button" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px' }}
          >
            <Settings size={18} /> Page Content
          </button>
          <button 
            onClick={() => setShowAddForm(true)}
            className="primary-button" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px' }}
          >
            <Plus size={18} /> Add Program
          </button>
        </div>
      </div>

      {/* Clean Filter Bar */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '48px', padding: '16px', background: 'white', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1 }}>
          {['All', 'Arts', 'Sports', 'Performance', 'Clubs'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: '0.2s',
                background: filter === cat ? '#1a1a1a' : '#f5f5f5',
                color: filter === cat ? 'white' : '#8c8c8c'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8c8c8c' }} />
          <input 
            type="text" 
            placeholder="Search activities..." 
            style={{ width: '100%', padding: '12px 12px 12px 44px', borderRadius: '14px', border: '1px solid var(--border-subtle)', background: '#fcfcfc', fontSize: '0.85rem', fontWeight: 600, outline: 'none' }} 
          />
        </div>
      </div>

      {/* Unified Program Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
        {activities.filter(a => filter === 'All' || a.category === filter).map((act) => {
          const Icon = ICON_MAP[act.icon] || ImageIcon
          return (
            <div key={act.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '180px', position: 'relative' }}>
                <img src={act.image} alt={act.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px' }}>
                  <span className="badge badge-orange" style={{ background: 'white', color: '#1a1a1a' }}>{act.tag}</span>
                  {act.isFeatured && <span className="badge badge-orange" style={{ background: 'var(--brand-orange)', color: 'white' }}><Star size={10} fill="white" /> Featured</span>}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color="var(--brand-orange)" />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900 }}>{act.title}</h3>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#8c8c8c', textTransform: 'uppercase' }}>{act.category}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', margin: '0 0 24px', height: '3.2em', overflow: 'hidden' }}>{act.desc}</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid var(--border-subtle)', background: 'white', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}>Edit</button>
                  <button style={{ padding: '10px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fff1f1', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Drawer 1: Manage Program (Add/Edit) */}
      <AnimatePresence>
        {showAddForm && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddForm(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} style={{ position: 'relative', width: '500px', height: '100%', background: 'white', padding: '48px', boxShadow: '-16px 0 32px rgba(0,0,0,0.05)', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Add Program</h3>
                <button onClick={() => setShowAddForm(false)} style={{ border: 'none', background: '#f5f5f5', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}><X size={20} /></button>
              </div>

              <form className="space-y-6">
                <div className="field-group">
                  <label className="field-label">Program Title</label>
                  <input type="text" className="field-input" placeholder="e.g. Visual Arts" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="field-group">
                    <label className="field-label">Category</label>
                    <select className="field-input"><option>Arts</option><option>Sports</option><option>Performance</option><option>Clubs</option></select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Short Tag</label>
                    <input type="text" className="field-input" placeholder="e.g. Creative" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="field-group">
                    <label className="field-label">Lucide Icon</label>
                    <select className="field-input">
                      <option value="Palette">Palette</option><option value="Music">Music</option><option value="Trophy">Trophy</option><option value="Camera">Camera</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Image URL</label>
                    <input type="text" className="field-input" placeholder="https://..." />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', background: '#fcfcfc', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                   <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: 'var(--brand-orange)' }} />
                   <div><p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>Featured Experience</p><p style={{ margin: 0, fontSize: '0.7rem', color: '#8c8c8c' }}>Show in horizontal scroll section</p></div>
                </div>
                <div className="field-group">
                  <label className="field-label">Description</label>
                  <textarea className="field-textarea" style={{ height: '120px' }} placeholder="Catchy description..." />
                </div>
                <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
                  <button type="button" className="primary-button" style={{ flex: 1, padding: '18px' }}>Save Program</button>
                  <button type="button" onClick={() => setShowAddForm(false)} className="secondary-button" style={{ flex: 1, padding: '18px' }}>Cancel</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Drawer 2: Page Configuration (All the "Other Stuff") */}
      <AnimatePresence>
        {showConfig && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowConfig(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} style={{ position: 'relative', width: '600px', height: '100%', background: 'white', padding: '48px', boxShadow: '-16px 0 32px rgba(0,0,0,0.05)', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Page Settings</h3>
                  <p style={{ margin: '4px 0 0', color: '#8c8c8c', fontWeight: 600 }}>Configure hero and philosophy sections.</p>
                </div>
                <button onClick={() => setShowConfig(false)} style={{ border: 'none', background: '#f5f5f5', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}><X size={20} /></button>
              </div>

              <div className="space-y-10">
                {/* Hero Section */}
                <section>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-orange)', marginBottom: '24px' }}>1. Hero Header</h4>
                  <div className="space-y-4">
                    <div className="field-group"><label className="field-label">Heading L1</label><input type="text" className="field-input" defaultValue="Co-Curricular" /></div>
                    <div className="field-group"><label className="field-label">Heading L2 (Outline)</label><input type="text" className="field-input" defaultValue="Excellence" /></div>
                    <div className="field-group"><label className="field-label">Intro Description</label><textarea className="field-textarea" style={{ height: '80px' }} defaultValue="Nurturing every student's hidden genius — from the stage to the field." /></div>
                  </div>
                </section>

                {/* Philosophy Section */}
                <section>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-orange)', marginBottom: '24px' }}>2. Philosophy Split-Screen</h4>
                  <div className="space-y-4">
                    <div className="field-group"><label className="field-label">Philosophy Image URL</label><input type="text" className="field-input" defaultValue="https://unsplash..." /></div>
                    <div className="field-group"><label className="field-label">Heading ("Every Child Has a Talent")</label><input type="text" className="field-input" defaultValue="Every Child Has a Talent" /></div>
                    <div className="field-group"><label className="field-label">Philosophy Text</label><textarea className="field-textarea" style={{ height: '100px' }} defaultValue="Co-curricular activities at Sunrise School are not a supplement..." /></div>
                    
                    <div style={{ marginTop: '24px' }}>
                      <label className="field-label" style={{ marginBottom: '12px', display: 'block' }}>Values & Core Pillars</label>
                      <div className="grid grid-cols-1 gap-3">
                        {['Confidence & Self-expression', 'Teamwork & Collaboration', 'Cultural & Global Awareness', 'Leadership & Initiative'].map((v, i) => (
                          <div key={i} style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: '40px', height: '40px', background: '#f5f5f5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} color="#ccc" /></div>
                            <input type="text" className="field-input" defaultValue={v} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Stats & Pills */}
                <section>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-orange)', marginBottom: '24px' }}>3. Stats & Floating Pills</h4>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="field-group"><label className="field-label">Stats (6+ Activities)</label><input type="text" className="field-input" defaultValue="6+" /></div>
                     <div className="field-group"><label className="field-label">Stats (1000+ Students)</label><input type="text" className="field-input" defaultValue="1000+" /></div>
                  </div>
                  <div style={{ marginTop: '24px' }}>
                    <label className="field-label" style={{ marginBottom: '12px', display: 'block' }}>Quick Choice Pills</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {['Music', 'Dance', 'Arts', 'Sports'].map(p => (
                        <span key={p} style={{ padding: '6px 12px', background: '#f5f5f5', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', gap: '4px', alignItems: 'center' }}>{p} <X size={10} color="#ccc" /></span>
                      ))}
                      <div style={{ padding: '4px 10px', border: '1px dashed #ccc', borderRadius: '8px' }}><Plus size={12} color="#ccc" /></div>
                    </div>
                  </div>
                </section>

                <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)' }}>
                  <button type="button" className="primary-button" style={{ width: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <Save size={20} /> Update All Page Elements
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
