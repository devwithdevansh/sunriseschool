import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Image as ImageIcon, 
  Upload, 
  Search, 
  Trash2, 
  ExternalLink, 
  X,
  Grid,
  List,
  FolderOpen
} from 'lucide-react'

const MOCK_MEDIA = [
  { id: 1, title: 'Annual Sports Day 2026', type: 'image', size: '2.4 MB', category: 'Events', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400&h=300&fit=crop' },
  { id: 2, title: 'New Computer Lab', type: 'image', size: '1.8 MB', category: 'Infrastructure', url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=400&h=300&fit=crop' },
  { id: 3, title: 'Cultural Festival Video', type: 'video', size: '45 MB', category: 'Events', url: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=400&h=300&fit=crop' },
  { id: 4, title: 'Science Exhibition', type: 'image', size: '3.1 MB', category: 'Events', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&h=300&fit=crop' },
  { id: 5, title: 'Main Campus View', type: 'image', size: '4.2 MB', category: 'Infrastructure', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&h=300&fit=crop' },
]

export default function MediaPage() {
  const [viewMode, setViewMode] = useState('grid')
  const [showUpload, setShowUpload] = useState(false)
  const [filter, setFilter] = useState('All')

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h2>Media Library</h2>
          <p>Upload and organize school photos and videos for the public gallery.</p>
        </div>
        <button 
          onClick={() => setShowUpload(true)}
          className="primary-button" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Upload size={18} /> Upload Media
        </button>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '48px', padding: '16px', background: 'white', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1 }}>
          {['All', 'Events', 'Infrastructure', 'Sports'].map((cat) => (
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
        <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-100">
          <button onClick={() => setViewMode('grid')} style={{ padding: '8px', borderRadius: '10px', background: viewMode === 'grid' ? 'white' : 'transparent', border: 'none', cursor: 'pointer', boxShadow: viewMode === 'grid' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none' }}>
            <Grid size={18} color={viewMode === 'grid' ? '#1a1a1a' : '#8c8c8c'} />
          </button>
          <button onClick={() => setViewMode('list')} style={{ padding: '8px', borderRadius: '10px', background: viewMode === 'list' ? 'white' : 'transparent', border: 'none', cursor: 'pointer', boxShadow: viewMode === 'list' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none' }}>
            <List size={18} color={viewMode === 'list' ? '#1a1a1a' : '#8c8c8c'} />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
          {MOCK_MEDIA.map((item) => (
            <div key={item.id} className="card" style={{ padding: 0, overflow: 'hidden', group: 'true' }}>
              <div style={{ height: '200px', background: '#f5f5f5', position: 'relative' }}>
                <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span className="badge badge-orange" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', color: '#1a1a1a' }}>{item.category}</span>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 900 }}>{item.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#8c8c8c', textTransform: 'uppercase' }}>{item.type} • {item.size}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ border: 'none', background: 'none', color: '#8c8c8c', cursor: 'pointer' }}><ExternalLink size={16} /></button>
                    <button style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: 0 }}>
          <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Size</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_MEDIA.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', overflow: 'hidden' }}>
                        <img src={item.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </td>
                    <td><span style={{ fontWeight: 700 }}>{item.title}</span></td>
                    <td><span className="badge badge-gray">{item.category}</span></td>
                    <td><span style={{ color: '#8c8c8c', fontSize: '0.85rem' }}>{item.size}</span></td>
                    <td style={{ textAlign: 'right' }}>
                       <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'white', cursor: 'pointer' }}><ExternalLink size={16} /></button>
                          <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid #fee2e2', background: '#fff1f1', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Polish Upload Modal */}
      <AnimatePresence>
        {showUpload && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowUpload(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              style={{ position: 'relative', width: '100%', maxWidth: '500px', background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Upload Media</h3>
                <button onClick={() => setShowUpload(false)} style={{ border: 'none', background: '#f5f5f5', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ border: '2px dashed var(--border-subtle)', borderRadius: '24px', padding: '48px', textAlign: 'center', background: '#fcfcfc', marginBottom: '32px' }}>
                <FolderOpen size={40} color="#8c8c8c" style={{ margin: '0 auto 16px' }} />
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700 }}>Drag files here to upload</p>
                <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: '#8c8c8c' }}>Supports JPG, PNG, MP4 (Max 50MB)</p>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="primary-button" style={{ flex: 1, padding: '18px' }}>Select Files</button>
                <button onClick={() => setShowUpload(false)} className="secondary-button" style={{ flex: 1, padding: '18px' }}>Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
