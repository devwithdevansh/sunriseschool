import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  X,
  Award,
  Briefcase,
  Quote
} from 'lucide-react'

const MOCK_ALUMNI = [
  { id: 1, name: 'Anjali Sharma', batch: '2020', achievement: 'District Topper (SSC)', currentPos: 'MBBS Student', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop' },
  { id: 2, name: 'Rahul Varma', batch: '2018', achievement: 'Gold Medalist (Science Fair)', currentPos: 'Software Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop' },
]

export default function AlumniPage() {
  const [alumni, setAlumni] = useState(MOCK_ALUMNI)
  const [showForm, setShowForm] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Notable Alumni</h2>
          <p className="text-slate-500 font-medium">Celebrate the success stories of Sunrise School graduates.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <Plus size={20} />
          Add Alumni Record
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {alumni.map((person) => (
          <motion.div
            key={person.id}
            whileHover={{ y: -5 }}
            className="card group bg-white border-slate-100 hover:border-brand-orange transition-all"
          >
            <div className="flex gap-6">
              <div className="w-24 h-24 rounded-[32px] overflow-hidden border-4 border-slate-50 shadow-md shrink-0">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-slate-900">{person.name}</h3>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-xl transition-all"><Edit3 size={16} className="text-slate-400" /></button>
                    <button className="p-2 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} className="text-red-400" /></button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Award size={10} /> Batch {person.batch}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    <Briefcase size={10} /> {person.currentPos}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl relative">
                  <Quote size={20} className="absolute -top-2 -left-2 text-slate-200" />
                  <p className="text-sm font-bold text-slate-600 italic leading-relaxed">
                    "{person.achievement}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alumni Form Overlay */}
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
                  <h3 className="text-2xl font-black text-slate-900">Add Achievement Story</h3>
                  <p className="text-slate-500 font-medium">Highlight a graduate's journey and success.</p>
                </div>
                <button onClick={() => setShowForm(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8">
                <div className="field-group">
                  <label className="field-label">Full Name</label>
                  <input type="text" className="field-input" placeholder="e.g. Anjali Sharma" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Batch Year</label>
                    <input type="text" className="field-input" placeholder="e.g. 2020" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Current Position / Profession</label>
                    <input type="text" className="field-input" placeholder="e.g. Medical Student" />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Achievement / Quote</label>
                  <textarea className="field-textarea" placeholder="Describe their major achievements..." />
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" className="primary-button flex-1 py-4">Save Alumni Profile</button>
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
