import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Pin, 
  X,
  Megaphone,
  Bell,
  Loader2,
  Calendar
} from 'lucide-react'
const INITIAL_NOTICES = [];

export default function NoticesPage() {
  const { getAuthHeader } = useAuth()
  const [notices, setNotices] = useState(INITIAL_NOTICES)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchNotices = async () => {
    try {
      const response = await fetch('https://sunriseschool.onrender.com/api/notices');
      const data = await response.json();
      if (data.status === 'success') {
        setNotices(data.data);
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);
  const [showForm, setShowForm] = useState(false)
  const [editingNotice, setEditingNotice] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
    category: 'General',
    isPinned: false,
    attachment: null
  })

  const handleOpenForm = (notice = null) => {
    if (notice) {
      setEditingNotice(notice)
      setFormData({
        title: notice.title,
        date: notice.date || new Date().toISOString().split('T')[0],
        content: notice.content,
        category: notice.category,
        isPinned: notice.isPinned,
        attachment: notice.attachment || null
      })
    } else {
      setEditingNotice(null)
      setFormData({
        title: '',
        date: new Date().toISOString().split('T')[0],
        content: '',
        category: 'General',
        isPinned: false,
        attachment: null
      })
    }
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    
    const finalData = { ...formData };
    if (!finalData.attachment) {
      delete finalData.attachment;
    }
    setLoading(true);

    try {
      if (editingNotice) {
        const res = await fetch(`https://sunriseschool.onrender.com/api/notices/${editingNotice._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
          body: JSON.stringify(finalData)
        });
        if (res.ok) {
          fetchNotices();
          toast.success('Notice updated successfully');
        } else {
          const errData = await res.json().catch(() => ({}));
          toast.error(errData.errors?.[0]?.message || errData.message || 'Failed to update notice');
        }
      } else {
        const res = await fetch('https://sunriseschool.onrender.com/api/notices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
          body: JSON.stringify(finalData)
        });
        if (res.ok) {
          fetchNotices();
          toast.success('Notice added successfully');
        } else {
          const errData = await res.json().catch(() => ({}));
          toast.error(errData.errors?.[0]?.message || errData.message || 'Failed to add notice');
        }
      }
    } catch (error) {
      console.error("Error saving notice:", error);
      toast.error('An error occurred while saving');
    } finally {
      setLoading(false);
      setShowForm(false);
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Delete this notice forever?")) {
      try {
        setLoading(true);
        const res = await fetch(`https://sunriseschool.onrender.com/api/notices/${id}`, {
          method: 'DELETE',
          headers: getAuthHeader()
        });
        if (res.ok) {
          fetchNotices();
          toast.success('Notice deleted');
        } else {
          toast.error('Failed to delete notice');
        }
      } catch (error) {
        console.error("Error deleting notice:", error);
        toast.error('Error deleting notice');
      } finally {
        setLoading(false);
      }
    }
  }

  const filteredNotices = notices.filter(notice => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      (notice.title || '').toLowerCase().includes(query) ||
      (notice.content || '').toLowerCase().includes(query) ||
      (notice.category || '').toLowerCase().includes(query)
    );
  });

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2>Notice Board</h2>
          <p>Broadcast essential announcements and circulars to students and parents.</p>
        </div>
        <button onClick={() => handleOpenForm()} className="primary-button">
          <Plus size={18} /> Create New Notice
        </button>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
          <Loader2 className="animate-spin" size={40} color="var(--brand-primary)" />
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fcfcfc' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Active Announcements</h3>
            <div style={{ position: 'relative', width: '280px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input 
                type="text" 
                placeholder="Search notices..." 
                className="field-input"
                style={{ paddingLeft: '40px', paddingTop: '10px', paddingBottom: '10px' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Notice Content</th>
                <th>Category</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotices.map((notice) => (
                <tr key={notice._id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: notice.isPinned ? '#eff6ff' : '#f1f5f9', color: notice.isPinned ? '#2563eb' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {notice.isPinned ? <Pin size={20} /> : <Megaphone size={20} />}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>{notice.title}</p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={12} /> {notice.date} {notice.attachment ? '📎 (Attached)' : ''}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-info">{notice.category}</span></td>
                  <td>
                    {notice.isPinned ? (
                      <span className="badge badge-warning">Pinned Alert</span>
                    ) : (
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Standard</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button onClick={() => handleOpenForm(notice)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}><Edit3 size={16} /></button>
                      <button onClick={() => handleDelete(notice._id)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fef2f2', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              style={{ position: 'relative', width: '500px', height: '100%', background: 'white', padding: '0', boxShadow: '-20px 0 50px rgba(0,0,0,0.1)', overflowY: 'auto' }}
            >
              <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 10, padding: '32px 40px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>{editingNotice ? 'Edit Notice' : 'Broadcast Notice'}</h3>
                <button onClick={() => setShowForm(false)} style={{ border: 'none', background: '#f1f5f9', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '40px' }}>
                <form onSubmit={handleSave} className="space-y-6">
                  <div className="field-group">
                    <label className="field-label">Notice Title</label>
                    <input 
                      type="text" 
                      className="field-input" 
                      placeholder="e.g. Summer Vacation 2026" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      required
                      minLength={5}
                    />
                  </div>

                  <div className="field-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="field-label">Date</label>
                      <input 
                        type="date" 
                        className="field-input" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="field-label">Category</label>
                      <select 
                        className="field-select"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                      >
                        <option>General</option>
                        <option>Academics</option>
                        <option>Exams</option>
                        <option>Events</option>
                        <option>Holidays</option>
                      </select>
                    </div>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Detailed Content</label>
                    <textarea 
                      className="field-textarea" 
                      style={{ height: '180px' }} 
                      placeholder="Write the announcement details..." 
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      required
                      minLength={10}
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Attachment (PDF/Image)</label>
                    <input 
                      type="file" 
                      className="field-input" 
                      style={{ paddingTop: '8px' }}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          let sizeMB = (file.size / 1024 / 1024).toFixed(2);
                          let sizeStr = sizeMB > 1 ? `${sizeMB} MB` : `${(file.size / 1024).toFixed(0)} KB`;
                          setFormData({...formData, attachment: { name: file.name, size: sizeStr }})
                        } else {
                          setFormData({...formData, attachment: null})
                        }
                      }}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {formData.attachment && (
                      <p style={{ marginTop: '8px', fontSize: '0.85rem', color: '#64748b' }}>
                        Selected: {formData.attachment.name} ({formData.attachment.size})
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', cursor: 'pointer' }} onClick={() => setFormData({...formData, isPinned: !formData.isPinned})}>
                     <input 
                        type="checkbox" 
                        checked={formData.isPinned}
                        onChange={() => {}} // Handled by div click
                        style={{ width: '20px', height: '20px', accentColor: 'var(--brand-primary)' }} 
                      />
                     <div>
                       <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700 }}>Pin to Top</p>
                       <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b' }}>Make this notice primary on the board</p>
                     </div>
                  </div>

                  <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
                    <button type="submit" className="primary-button" style={{ flex: 1, padding: '16px', justifyContent: 'center' }}>
                      {editingNotice ? 'Update Broadcast' : 'Broadcast Now'}
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
