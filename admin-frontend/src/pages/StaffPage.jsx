import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  Plus, 
  Search, 
  Mail, 
  Phone, 
  Trash2, 
  Edit3, 
  X,
  UserPlus,
  ShieldCheck,
  GraduationCap
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Staff & Faculty</h2>
          <p className="text-slate-500 font-medium">Manage teacher profiles and school management directory.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <UserPlus size={20} />
          Add Staff Member
        </button>
      </header>

      {/* Filter Toolbar */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-4 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all shrink-0 ${
                filter === dept 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full lg:w-96 bg-slate-50 px-5 py-3 rounded-2xl">
          <Search size={18} className="text-slate-400" />
          <input type="text" placeholder="Search by name or designation..." className="bg-transparent border-none outline-none text-sm font-medium w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {staff.map((member) => (
          <motion.div
            layout
            key={member.id}
            whileHover={{ y: -10 }}
            className="card p-0 overflow-hidden group border-slate-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="p-8 text-center bg-gradient-to-b from-slate-50 to-white">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-white shadow-xl mx-auto">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                {member.department === 'Management' && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg">
                    <ShieldCheck size={16} />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">{member.name}</h3>
              <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">{member.designation}</p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest">{member.department}</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest">{member.experience}</span>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button className="w-10 h-10 bg-white border border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 rounded-xl flex items-center justify-center transition-all shadow-sm">
                  <Mail size={18} />
                </button>
                <button className="w-10 h-10 bg-white border border-slate-100 text-slate-400 hover:text-green-600 hover:border-green-100 rounded-xl flex items-center justify-center transition-all shadow-sm">
                  <Phone size={18} />
                </button>
                <div className="w-px h-6 bg-slate-100 mx-1" />
                <button className="w-10 h-10 bg-white border border-slate-100 text-slate-400 hover:text-red-600 hover:border-red-100 rounded-xl flex items-center justify-center transition-all shadow-sm">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="bg-slate-900 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white text-xs font-bold flex items-center justify-center gap-2 mx-auto">
                <Edit3 size={14} /> Edit Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Staff Form Overlay */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl h-full bg-white shadow-2xl p-10 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Add New Staff</h3>
                  <p className="text-slate-500 font-medium">Register a new faculty or management member.</p>
                </div>
                <button onClick={() => setShowForm(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8">
                <div className="flex items-center gap-8 p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                  <div className="w-24 h-24 bg-slate-200 rounded-[32px] flex items-center justify-center border-4 border-white shadow-xl shrink-0">
                    <Plus size={32} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Profile Photo</h4>
                    <p className="text-xs text-slate-500 mb-4">Upload a high-quality headshot.</p>
                    <button type="button" className="text-xs font-bold text-blue-600 px-4 py-2 bg-blue-50 rounded-lg">Upload Image</button>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Full Name</label>
                  <input type="text" className="field-input" placeholder="e.g. Mr. John Doe" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Designation</label>
                    <input type="text" className="field-input" placeholder="e.g. Senior Teacher" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Department</label>
                    <select className="field-input">
                      <option>Academics</option>
                      <option>Management</option>
                      <option>Sports</option>
                      <option>Administration</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Role Level / Section</label>
                    <select className="field-input">
                      <option>Faculty / Teacher</option>
                      <option>Senior Leadership</option>
                      <option>Admin / Operational Team</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Personal Message / Quote (For Leadership)</label>
                  <textarea className="field-textarea" placeholder="e.g. Education is the manifestation of perfection..." />
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" className="primary-button flex-1 py-4">Save Staff Profile</button>
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-all">Cancel</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
