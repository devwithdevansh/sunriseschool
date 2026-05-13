import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Mail, 
  Phone, 
  Trash2, 
  Edit3, 
  X,
  UserPlus,
  ShieldCheck,
} from 'lucide-react'

const MOCK_STAFF = [
  { id: 1, name: 'Dr. Ramesh Mehta', designation: 'Principal', department: 'Management', experience: '25 Years', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&fit=crop' },
  { id: 2, name: 'Mrs. Sunita Sharma', designation: 'HOD - Science', department: 'Academics', experience: '15 Years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop' },
  { id: 3, name: 'Mr. Arvind Patel', designation: 'Senior Teacher', department: 'Mathematics', experience: '12 Years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop' },
  { id: 4, name: 'Ms. Priya Shah', designation: 'Primary Coordinator', department: 'Academics', experience: '8 Years', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop' },
]

export default function StaffPage() {
  const [staff, setStaff] = useState(MOCK_STAFF)
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('All')

  const departments = ['All', 'Management', 'Academics', 'Mathematics', 'Sports']

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h2>Staff Directory</h2>
          <p>Manage your institution's faculty and management profiles.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <UserPlus size={18} /> Add Staff Member
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '48px', padding: '16px', background: 'white', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1 }}>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              style={{
                padding: '8px 20px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: '0.2s',
                background: filter === dept ? '#1a1a1a' : '#f5f5f5',
                color: filter === dept ? 'white' : '#8c8c8c'
              }}
            >
              {dept}
            </button>
          ))}
        </div>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8c8c8c' }} />
          <input 
            type="text" 
            placeholder="Search staff..." 
            style={{ width: '100%', padding: '12px 12px 12px 44px', borderRadius: '14px', border: '1px solid var(--border-subtle)', background: '#fcfcfc', fontSize: '0.85rem', fontWeight: 600, outline: 'none' }} 
          />
        </div>
      </div>

      {/* Staff Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
        {staff.map((member) => (
          <div key={member.id} className="card" style={{ padding: 0, overflow: 'hidden', transition: 'all 0.3s ease' }}>
            <div style={{ height: '140px', background: '#f8fafc', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
               <div style={{ position: 'absolute', bottom: '-40px', left: '32px' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '80px', height: '80px', borderRadius: '20px', border: '4px solid white', objectCover: 'cover', boxShadow: '0 8px 16px rgba(0,0,0,0.05)' }} 
                  />
               </div>
            </div>
            <div style={{ padding: '56px 32px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900 }}>{member.name}</h3>
                {member.department === 'Management' && <ShieldCheck size={16} color="var(--brand-orange)" />}
              </div>
              <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 800, color: 'var(--brand-orange)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.designation}</p>
              
              <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
                <span className="badge badge-gray">{member.department}</span>
                <span className="badge badge-gray">{member.experience}</span>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                <button style={{ flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid var(--border-subtle)', background: 'white', color: '#1a1a1a', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Edit3 size={16} /> Edit
                </button>
                <button style={{ padding: '12px', borderRadius: '12px', border: '1px solid #fee2e2', background: '#fff1f1', color: '#ef4444', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
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
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Add New Staff</h3>
                <button onClick={() => setShowForm(false)} style={{ border: 'none', background: '#f5f5f5', padding: '8px', borderRadius: '10px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form className="space-y-6">
                <div className="field-group">
                  <label className="field-label">Full Name</label>
                  <input type="text" className="field-input" placeholder="e.g. Dr. John Doe" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="field-group">
                    <label className="field-label">Designation</label>
                    <input type="text" className="field-input" placeholder="e.g. HOD Mathematics" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Department</label>
                    <select className="field-input">
                      <option>Academics</option>
                      <option>Management</option>
                      <option>Sports</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Experience</label>
                  <input type="text" className="field-input" placeholder="e.g. 10 Years" />
                </div>

                <div className="field-group">
                  <label className="field-label">Brief Biography</label>
                  <textarea className="field-textarea" style={{ height: '120px' }} placeholder="Write a short intro..." />
                </div>

                <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
                  <button type="button" className="primary-button" style={{ flex: 1, padding: '18px' }}>Save Profile</button>
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
