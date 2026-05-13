import { useState } from 'react'
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
  FileText
} from 'lucide-react'

const MOCK_RESULTS = [
  { id: 1, title: 'Class 10th Board Results', year: '2025-26', category: '10th Board', toppers: 5, status: 'Published' },
  { id: 2, title: 'Class 12th Science Stream', year: '2025-26', category: '12th Science', toppers: 3, status: 'Published' },
  { id: 3, title: 'Class 12th Commerce Stream', year: '2025-26', category: '12th Commerce', toppers: 4, status: 'Draft' },
]

export default function ResultsPage() {
  const [results] = useState(MOCK_RESULTS)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h2>Academic Results</h2>
          <p>Manage and publish board results and topper lists.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={18} /> New Result Entry
        </button>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: 'Total Results', value: '12', icon: GraduationCap, color: '#3b82f6' },
          { label: 'Published', value: '10', icon: CheckCircle2, color: '#10b981' },
          { label: 'Drafts', value: '02', icon: AlertCircle, color: '#f59e0b' },
        ].map((stat, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <stat.icon size={22} />
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: '#8c8c8c', display: 'block', marginBottom: '4px' }}>{stat.label}</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900 }}>Active Records</h3>
          <div style={{ position: 'relative', width: '250px' }}>
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8c8c8c' }} />
            <input 
              type="text" 
              placeholder="Filter results..." 
              style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: '10px', border: '1px solid var(--border-subtle)', background: '#fcfcfc', fontSize: '0.8rem', fontWeight: 600, outline: 'none' }} 
            />
          </div>
        </div>

        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Result Title</th>
                <th>Academic Year</th>
                <th>Category</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res) => (
                <tr key={res.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileText size={16} color="#666" />
                      </div>
                      <span style={{ fontWeight: 700 }}>{res.title}</span>
                    </div>
                  </td>
                  <td><span style={{ color: '#666' }}>{res.year}</span></td>
                  <td><span className="badge badge-gray" style={{ background: '#f0f4ff', color: '#3b82f6' }}>{res.category}</span></td>
                  <td>
                    <span className={`badge ${res.status === 'Published' ? 'badge-orange' : 'badge-gray'}`}>
                      {res.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'white', cursor: 'pointer' }}><Edit3 size={16} /></button>
                      <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid #fee2e2', background: '#fff1f1', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Polish Form Drawer */}
      <AnimatePresence>
        {showForm && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ position: 'relative', width: '500px', height: '100%', background: 'white', padding: '48px', boxShadow: '-16px 0 32px rgba(0,0,0,0.05)', overflowY: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>New Result Entry</h3>
                <button onClick={() => setShowForm(false)} style={{ border: 'none', background: '#f5f5f5', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-6">
                <div className="field-group">
                  <label className="field-label">Result Title</label>
                  <input type="text" className="field-input" placeholder="e.g. SSC Board March 2026" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="field-group">
                    <label className="field-label">Academic Year</label>
                    <select className="field-input">
                      <option>2025-26</option>
                      <option>2024-25</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Category</label>
                    <select className="field-input">
                      <option>10th Board</option>
                      <option>12th Science</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Upload Result PDF</label>
                  <div style={{ border: '2px dashed var(--border-subtle)', borderRadius: '20px', padding: '40px', textAlign: 'center', background: '#fcfcfc' }}>
                    <FileDown size={32} color="#8c8c8c" style={{ margin: '0 auto 12px' }} />
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>Drop PDF here or click to browse</p>
                    <p style={{ margin: '4px 0 0', fontSize: '0.7rem', color: '#8c8c8c' }}>Maximum file size 5MB</p>
                  </div>
                </div>

                <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
                  <button type="button" className="primary-button" style={{ flex: 1, padding: '18px' }}>Publish Result</button>
                  <button type="button" onClick={() => setShowForm(false)} className="secondary-button" style={{ flex: 1, padding: '18px' }}>Cancel</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
