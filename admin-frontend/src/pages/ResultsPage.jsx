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
  { _id: '1', title: 'SSC Board 2025', academicYear: '2024-25', classLevel: '10th Board', toppers: [{ name: 'Aarav Mehta', percentage: '98.5%', rank: 1 }] },
  { _id: '2', title: 'HSC Science 2025', academicYear: '2024-25', classLevel: '12th Science', toppers: [{ name: 'Isha Patel', percentage: '96.2%', rank: 1 }] },
]

export default function ResultsPage() {
  const [results, setResults] = useState(INITIAL_RESULTS)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingResult, setEditingResult] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    academicYear: '2025-26',
    classLevel: '10th Board',
    pdfUrl: '',
    toppers: []
  })

  // Topper Form State
  const [newTopper, setNewTopper] = useState({ name: '', percentage: '', rank: '', image: '' })

  const handleOpenForm = (result = null) => {
    if (result) {
      setEditingResult(result)
      setFormData({
        title: result.title,
        academicYear: result.academicYear,
        classLevel: result.classLevel,
        pdfUrl: result.pdfUrl,
        toppers: result.toppers || []
      })
    } else {
      setEditingResult(null)
      setFormData({
        title: '',
        academicYear: '2025-26',
        classLevel: '10th Board',
        pdfUrl: '',
        toppers: []
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

  const addTopper = () => {
    if (newTopper.name && newTopper.percentage) {
      setFormData({
        ...formData,
        toppers: [...formData.toppers, { ...newTopper, rank: parseInt(newTopper.rank) || formData.toppers.length + 1 }]
      })
      setNewTopper({ name: '', percentage: '', rank: '', image: '' })
    }
  }

  const removeTopper = (index) => {
    const updatedToppers = [...formData.toppers]
    updatedToppers.splice(index, 1)
    setFormData({ ...formData, toppers: updatedToppers })
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
              { label: 'Total Published', value: results.length, icon: GraduationCap, color: '#6366f1' },
              { label: 'Total Toppers', value: results.reduce((acc, curr) => acc + (curr.toppers?.length || 0), 0), icon: Trophy, color: '#f59e0b' },
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
                  <th>Result Title</th>
                  <th>Academic Year</th>
                  <th>Category</th>
                  <th>Toppers</th>
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Trophy size={14} color="#f59e0b" />
                        <span style={{ fontWeight: 600 }}>{res.toppers?.length || 0} Students</span>
                      </div>
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
                    <label className="field-label">Result Title</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. SSC Board March 2026" 
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
                      </select>
                    </div>
                    <div className="field-group">
                      <label className="field-label">Category</label>
                      <select 
                        className="field-select"
                        value={formData.classLevel}
                        onChange={(e) => setFormData({...formData, classLevel: e.target.value})}
                      >
                        <option>10th Board</option>
                        <option>12th Science</option>
                        <option>12th Commerce</option>
                        <option>School Internal</option>
                      </select>
                    </div>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Result PDF URL</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="https://drive.google.com/..." 
                      value={formData.pdfUrl}
                      onChange={(e) => setFormData({...formData, pdfUrl: e.target.value})}
                    />
                  </div>

                  <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: '32px', marginTop: '32px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Trophy size={20} color="#f59e0b" /> Manage Toppers
                    </h4>
                    
                    {/* Topper Form */}
                    <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', marginBottom: '24px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <input 
                          type="text" className="field-input" placeholder="Student Name" 
                          value={newTopper.name} onChange={(e) => setNewTopper({...newTopper, name: e.target.value})}
                        />
                        <input 
                          type="text" className="field-input" placeholder="Percentage" 
                          value={newTopper.percentage} onChange={(e) => setNewTopper({...newTopper, percentage: e.target.value})}
                        />
                        <input 
                          type="number" className="field-input" placeholder="Rank" 
                          value={newTopper.rank} onChange={(e) => setNewTopper({...newTopper, rank: e.target.value})}
                        />
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <input 
                          type="text" className="field-input" placeholder="Photo URL" 
                          value={newTopper.image} onChange={(e) => setNewTopper({...newTopper, image: e.target.value})}
                        />
                        <button type="button" onClick={addTopper} className="secondary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                          <UserPlus size={18} /> Add
                        </button>
                      </div>
                    </div>

                    {/* Toppers List */}
                    <div className="space-y-3">
                      {formData.toppers.map((topper, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800 }}>
                              {topper.rank}
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{topper.name}</div>
                              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{topper.percentage}</div>
                            </div>
                          </div>
                          <button type="button" onClick={() => removeTopper(idx)} style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer' }}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
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
