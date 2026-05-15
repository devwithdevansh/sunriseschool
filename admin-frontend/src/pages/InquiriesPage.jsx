import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Search, 
  Eye, 
  Trash2, 
  Download,
  User,
  Phone,
  GraduationCap,
  Loader2,
  X,
  Calendar,
  MessageSquare
} from 'lucide-react'
import api from '../services/api'

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [selectedInquiry, setSelectedInquiry] = useState(null)

  useEffect(() => {
    fetchInquiries()
  }, [])

  const fetchInquiries = async () => {
    try {
      setLoading(true)
      const res = await api.get('/inquiries')
      setInquiries(res.data.data)
    } catch (err) {
      console.error("Failed to fetch inquiries", err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Remove this inquiry record?")) {
      try {
        await api.delete(`/inquiries/${id}`)
        fetchInquiries()
      } catch (err) {
        console.error("Error deleting", err)
      }
    }
  }

  const filteredInquiries = inquiries.filter(inq => {
    if (filter === 'All') return true
    return inq.status?.toLowerCase() === filter.toLowerCase()
  })

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2>Admission Inquiries</h2>
          <p>Review and manage prospective student leads from the public website.</p>
        </div>
        <button className="secondary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Download size={18} /> Export Data
        </button>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1, padding: '4px' }}>
          {['All', 'New', 'Replied', 'Closed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={filter === tab ? 'primary-button' : 'secondary-button'}
              style={{ padding: '10px 24px', fontSize: '0.85rem' }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input 
            type="text" 
            placeholder="Search inquiries..." 
            className="field-input"
            style={{ paddingLeft: '48px' }}
          />
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
          <Loader2 className="animate-spin" size={40} color="var(--brand-primary)" />
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Student & Parent</th>
                <th>Contact Info</th>
                <th>Grade</th>
                <th>Date</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.map((inq) => (
                <tr key={inq._id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={20} />
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>{inq.studentName}</p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Parent: {inq.parentName}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                        <Phone size={14} color="#94a3b8" /> {inq.phone}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
                        <Mail size={14} color="#94a3b8" /> {inq.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-info" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                      <GraduationCap size={14} /> {inq.class}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button onClick={() => setSelectedInquiry(inq)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}><Eye size={18} /></button>
                      <button onClick={() => handleDelete(inq._id)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fef2f2', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredInquiries.length === 0 && (
            <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
              <Mail size={40} style={{ margin: '0 auto 16px', opacity: 0.2 }} />
              <p style={{ fontWeight: 600 }}>No inquiries found in this category.</p>
            </div>
          )}
        </div>
      )}

      {/* Inquiry Detail Modal */}
      <AnimatePresence>
        {selectedInquiry && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedInquiry(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              style={{ position: 'relative', width: '100%', maxWidth: '600px', background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800 }}>Inquiry Details</h3>
                  <p style={{ margin: '4px 0 0', color: '#64748b' }}>Submitted on {new Date(selectedInquiry.createdAt).toLocaleString()}</p>
                </div>
                <button onClick={() => setSelectedInquiry(null)} style={{ border: 'none', background: '#f1f5f9', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
                <div className="space-y-4">
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Student Name</label>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>{selectedInquiry.studentName}</p>
                  </div>
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Parent Name</label>
                    <p style={{ margin: 0, fontWeight: 600 }}>{selectedInquiry.parentName}</p>
                  </div>
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Grade / Class</label>
                    <span className="badge badge-info">{selectedInquiry.class}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Phone Number</label>
                    <p style={{ margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Phone size={14} color="var(--brand-primary)" /> {selectedInquiry.phone}
                    </p>
                  </div>
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Email Address</label>
                    <p style={{ margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Mail size={14} color="var(--brand-primary)" /> {selectedInquiry.email}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
                 <label className="field-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                   <MessageSquare size={16} /> Message / Notes
                 </label>
                 <p style={{ margin: 0, color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                   {selectedInquiry.message || "No additional message provided."}
                 </p>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={`tel:${selectedInquiry.phone}`} className="primary-button" style={{ flex: 1, textDecoration: 'none', justifyContent: 'center' }}>
                  <Phone size={18} /> Call Parent
                </a>
                <button onClick={() => setSelectedInquiry(null)} className="secondary-button" style={{ flex: 1 }}>Close View</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
