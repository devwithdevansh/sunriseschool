import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  Plus, 
  Search, 
  FileDown, 
  Trash2, 
  Edit3, 
  X,
  CheckCircle2,
  AlertCircle,
  FileText,
  UserPlus,
  Trophy,
  Loader2
} from 'lucide-react'
const INITIAL_RESULTS = [
  { _id: '1', title: 'Class 10 EM — Board Results', academicYear: '2024-25', classLevel: '10 EM', imageSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop' },
  { _id: '2', title: 'Commerce Toppers — Group Photo', academicYear: '2024-25', classLevel: '12 Commerce', imageSrc: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop' },
]

export default function ResultsPage() {
  const [results, setResults] = useState(INITIAL_RESULTS)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingResult, setEditingResult] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    academicYear: '2025-26',
    classLevel: '10 EM',
    imageSrc: ''
  })

  const handleOpenForm = (result = null) => {
    if (result) {
      setEditingResult(result)
      setFormData({
        title: result.title,
        academicYear: result.academicYear,
        classLevel: result.classLevel,
        imageSrc: result.imageSrc || ''
      })
    } else {
      setEditingResult(null)
      setFormData({
        title: '',
        academicYear: '2025-26',
        classLevel: '10 EM',
        imageSrc: ''
      })
    }
    setShowForm(true)
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (editingResult) {
      setResults(results.map(r => r._id === editingResult._id ? { ...formData, _id: r._id } : r))
    } else {
      setResults([...results, { ...formData, _id: Date.now().toString() }])
    }
    setShowForm(false)
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this result?")) {
      setResults(results.filter(r => r._id !== id))
    }
  }

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2>Academic Results</h2>
          <p>Manage board results and honor your school's top achievers.</p>
        </div>
        <button onClick={() => handleOpenForm()} className="primary-button">
          <Plus size={18} /> New Result Entry
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
          <Loader2 className="animate-spin" size={40} color="var(--brand-primary)" />
        </div>
      ) : (
        <>
          {/* Summary Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {[
              { label: 'Total Gallery Images', value: results.length, icon: GraduationCap, color: '#6366f1' },
              { label: '10 EM Images', value: results.filter(r => r.classLevel === '10 EM').length, icon: Trophy, color: '#f59e0b' },
              { label: 'Recent Year', value: results[0]?.academicYear || 'N/A', icon: CheckCircle2, color: '#10b981' },
            ].map((stat, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', margin: 0 }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${stat.color}15`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <stat.icon size={26} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>{stat.label}</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fcfcfc' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Active Records</h3>
              <div style={{ position: 'relative', width: '280px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="text" 
                  placeholder="Filter by title or year..." 
                  className="field-input"
                  style={{ paddingLeft: '40px', paddingTop: '10px', paddingBottom: '10px' }}
                />
              </div>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Gallery Title / Label</th>
                  <th>Academic Year</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((res) => (
                  <tr key={res._id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FileText size={18} color="#64748b" />
                        </div>
                        <span style={{ fontWeight: 600 }}>{res.title}</span>
                      </div>
                    </td>
                    <td><span style={{ color: '#64748b', fontWeight: 500 }}>{res.academicYear}</span></td>
                    <td><span className="badge badge-info">{res.classLevel}</span></td>
                    <td>
                      {res.imageSrc ? (
                        <img src={res.imageSrc} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>No Image</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button onClick={() => handleOpenForm(res)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', transition: '0.2s' }}><Edit3 size={16} /></button>
                        <button onClick={() => handleDelete(res._id)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fef2f2', color: '#ef4444', cursor: 'pointer', transition: '0.2s' }}><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Form Drawer */}
      <AnimatePresence>
        {showForm && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.3)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{ position: 'relative', width: '600px', height: '100%', background: 'white', padding: '0', boxShadow: '-20px 0 50px rgba(0,0,0,0.1)', overflowY: 'auto' }}
            >
              <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 10, padding: '32px 40px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>{editingResult ? 'Edit Result' : 'New Result Entry'}</h3>
                <button onClick={() => setShowForm(false)} style={{ border: 'none', background: '#f1f5f9', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '40px' }}>
                <form onSubmit={handleSave} className="space-y-8">
                  <div className="field-group">
                    <label className="field-label">Gallery Label / Title</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. Class 10 EM — Board Results" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="field-group">
                      <label className="field-label">Academic Year</label>
                      <select 
                        className="field-select"
                        value={formData.academicYear}
                        onChange={(e) => setFormData({...formData, academicYear: e.target.value})}
                      >
                        <option>2025-26</option>
                        <option>2024-25</option>
                        <option>2023-24</option>
                        <option>2022-23</option>
                      </select>
                    </div>
                    <div className="field-group">
                      <label className="field-label">Category</label>
                      <select 
                        className="field-select"
                        value={formData.classLevel}
                        onChange={(e) => setFormData({...formData, classLevel: e.target.value})}
                      >
                        <option>10 EM</option>
                        <option>10 GM</option>
                        <option>12 Commerce</option>
                      </select>
                    </div>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Image URL</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="https://images.unsplash.com/..." 
                      value={formData.imageSrc}
                      onChange={(e) => setFormData({...formData, imageSrc: e.target.value})}
                      required
                    />
                    {formData.imageSrc && (
                      <div style={{ marginTop: '16px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-subtle)', height: '180px' }}>
                        <img src={formData.imageSrc} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '16px', padding: '40px 0' }}>
                    <button type="submit" className="primary-button" style={{ flex: 1, padding: '16px', justifyContent: 'center' }}>
                      {editingResult ? 'Update Record' : 'Save & Publish'}
                    </button>
                    <button type="button" onClick={() => setShowForm(false)} className="secondary-button" style={{ flex: 1, padding: '16px' }}>Cancel</button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
