import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, 
  Plus, 
  Calendar, 
  MapPin, 
  Trash2, 
  Edit3, 
  X,
  Trophy,
  Users,
  Image as ImageIcon
} from 'lucide-react'

const MOCK_ACTIVITIES = [
  { id: 1, title: 'Annual Sports Meet', date: 'Dec 15, 2026', location: 'School Ground', participants: 'All Houses', status: 'Upcoming' },
  { id: 2, title: 'Science Fair', date: 'Nov 10, 2026', location: 'Science Lab / Hall', participants: 'Classes 6-12', status: 'Planning' },
  { id: 3, title: 'Cultural Night', date: 'Jan 20, 2027', location: 'Main Auditorium', participants: 'All Students', status: 'Draft' },
]

export default function ActivitiesPage() {
  const [activities, setActivities] = useState(MOCK_ACTIVITIES)
  const [showForm, setShowForm] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Co-Curricular Activities</h2>
          <p className="text-slate-500 font-medium">Manage events, competitions, and school festivals.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <Plus size={20} />
          Create New Activity
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {activities.map((act) => (
          <motion.div
            key={act.id}
            whileHover={{ scale: 1.01 }}
            className="card group hover:border-blue-200 transition-all"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-48 h-48 rounded-3xl bg-slate-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <ImageIcon size={40} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`badge ${
                    act.status === 'Upcoming' ? 'badge-blue' : 
                    act.status === 'Planning' ? 'badge-green' : 'badge-orange'
                  }`}>
                    {act.status}
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{act.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500" /> {act.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-500" /> {act.location}</span>
                    <span className="flex items-center gap-1.5"><Users size={14} className="text-blue-500" /> {act.participants}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2">
                  A celebration of talent and spirit. Join us for a day filled with exciting competitions and memorable performances.
                </p>
                <div className="flex gap-3 pt-2">
                  <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all">Manage Event</button>
                  <button className="p-2 hover:bg-slate-50 text-slate-400 rounded-xl transition-all"><Edit3 size={18} /></button>
                  <button className="p-2 hover:bg-red-50 text-red-500 rounded-xl transition-all"><Trash2 size={18} /></button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.button 
          onClick={() => setShowForm(true)}
          whileHover={{ scale: 1.01 }}
          className="card border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center py-12 group hover:border-blue-400 transition-all"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:text-blue-500 shadow-sm mb-4 transition-all">
            <Plus size={32} />
          </div>
          <span className="font-bold text-slate-500 group-hover:text-blue-600 transition-all">Add New Activity</span>
        </motion.button>
      </div>

      {/* Activity Form Overlay */}
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
                  <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                    <Activity className="text-blue-600" /> New Activity
                  </h3>
                  <p className="text-slate-500 font-medium">Define the event details and schedule.</p>
                </div>
                <button onClick={() => setShowForm(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8">
                <div className="field-group">
                  <label className="field-label">Activity Title</label>
                  <input type="text" className="field-input" placeholder="e.g. Annual Cultural Night 2026" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Date</label>
                    <input type="date" className="field-input" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Location</label>
                    <input type="text" className="field-input" placeholder="e.g. Auditorium" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Target Participants</label>
                    <input type="text" className="field-input" placeholder="e.g. Classes 5 to 10" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Short Tag (e.g. Creative, Physical)</label>
                    <input type="text" className="field-input" placeholder="e.g. Creative" />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Description</label>
                  <textarea className="field-textarea" placeholder="Describe the activity..." />
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" className="primary-button flex-1 py-4">Create Activity</button>
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
