import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Pin, 
  Paperclip, 
  X,
  Calendar,
  Megaphone,
  Bell
} from 'lucide-react'

const MOCK_NOTICES = [
  { id: 1, title: 'Urgent: School Closure due to Heavy Rainfall', category: 'General', date: 'May 04, 2026', isPinned: true, content: 'School will remain closed tomorrow due to red alert issued by the weather department...' },
  { id: 2, title: 'Term 2 Final Examination Timetable', category: 'Exams', date: 'May 02, 2026', isPinned: true, content: 'Official timetable for Term 2 has been released. Students can download the PDF from the attachments.' },
  { id: 3, title: 'Annual Sports Meet 2026', category: 'Events', date: 'Apr 28, 2026', isPinned: false, content: 'Registration for the upcoming meet is now open for all houses. Please contact your house captain.' },
]

export default function NoticesPage() {
  const [notices] = useState(MOCK_NOTICES)
  const [isAdding, setIsAdding] = useState(false)

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h2>Notice Board</h2>
          <p>Broadcast announcements and official circulars to the community.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="primary-button" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={18} /> Create New Notice
        </button>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900 }}>Announcements</h3>
          <div style={{ position: 'relative', width: '250px' }}>
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8c8c8c' }} />
            <input 
              type="text" 
              placeholder="Filter notices..." 
              style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: '10px', border: '1px solid var(--border-subtle)', background: '#fcfcfc', fontSize: '0.8rem', fontWeight: 600, outline: 'none' }} 
            />
          </div>
        </div>

        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Notice Content</th>
                <th>Category</th>
                <th>Visibility</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <tr key={notice.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: notice.isPinned ? '#fff5ef' : '#f5f5f5', color: notice.isPinned ? 'var(--brand-orange)' : '#666', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {notice.isPinned ? <Pin size={18} /> : <Megaphone size={18} />}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>{notice.title}</p>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#8c8c8c' }}>{notice.date}</p>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-gray">{notice.category}</span></td>
                  <td>
                    {notice.isPinned ? (
                      <span className="badge badge-orange" style={{ fontSize: '10px' }}>Pinned Alert</span>
                    ) : (
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#ccc', textTransform: 'uppercase' }}>Standard</span>
                    )}
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
        {isAdding && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsAdding(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ position: 'relative', width: '500px', height: '100%', background: 'white', padding: '48px', boxShadow: '-16px 0 32px rgba(0,0,0,0.05)', overflowY: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Create Announcement</h3>
                <button onClick={() => setIsAdding(false)} style={{ border: 'none', background: '#f5f5f5', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-6">
                <div className="field-group">
                  <label className="field-label">Notice Title</label>
                  <input type="text" className="field-input" placeholder="e.g. Summer Vacation 2026" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="field-group">
                    <label className="field-label">Category</label>
                    <select className="field-input">
                      <option>General</option>
                      <option>Academic</option>
                      <option>Events</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Publish Date</label>
                    <input type="date" className="field-input" />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Content</label>
                  <textarea className="field-textarea" style={{ height: '150px' }} placeholder="Write the announcement details..." />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', background: '#fcfcfc', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                   <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: 'var(--brand-orange)' }} />
                   <div>
                     <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>Pin to Top</p>
                     <p style={{ margin: 0, fontSize: '0.7rem', color: '#8c8c8c' }}>Make this notice primary on the board</p>
                   </div>
                </div>

                <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
                  <button type="button" className="primary-button" style={{ flex: 1, padding: '18px' }}>Broadcast Now</button>
                  <button type="button" onClick={() => setIsAdding(false)} className="secondary-button" style={{ flex: 1, padding: '18px' }}>Cancel</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
