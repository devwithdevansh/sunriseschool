import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  Plus, 
  Calendar, 
  Clock, 
  Trash2, 
  Edit3, 
  X,
  FileDown,
  AlertCircle,
  BookOpen
} from 'lucide-react'

const MOCK_EXAMS = [
  { id: 1, title: 'Quarterly Examination 2026', classes: 'Class 5 to 12', startDate: 'Oct 12, 2026', status: 'Published' },
  { id: 2, title: 'Preliminary Board Exam', classes: 'Class 10 & 12', startDate: 'Jan 05, 2027', status: 'Draft' },
]

export default function ExamsPage() {
  const [exams, setExams] = useState(MOCK_EXAMS)
  const [showForm, setShowForm] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Exam Schedules</h2>
          <p className="text-slate-500 font-medium">Publish and manage exam timetables and internal schedules.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <Plus size={20} />
          Add Exam Schedule
        </button>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {exams.map((exam) => (
          <motion.div
            key={exam.id}
            whileHover={{ x: 5 }}
            className="card group hover:border-blue-200 transition-all"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 flex-1">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <BookOpen size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{exam.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500" /> Starts {exam.startDate}</span>
                    <span className="flex items-center gap-1.5"><FileText size={14} className="text-blue-500" /> {exam.classes}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="hidden sm:block">
                  <span className={`badge ${exam.status === 'Published' ? 'badge-green' : 'badge-orange'}`}>
                    {exam.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="primary-button !bg-slate-100 !text-slate-600 hover:!bg-slate-200 flex items-center gap-2 text-xs">
                    <FileDown size={16} /> View Timetable
                  </button>
                  <button className="p-3 hover:bg-slate-50 text-slate-400 rounded-xl"><Edit3 size={20} /></button>
                  <button className="p-3 hover:bg-red-50 text-red-500 rounded-xl"><Trash2 size={20} /></button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 flex gap-4">
          <AlertCircle className="text-orange-500 shrink-0" size={24} />
          <p className="text-sm font-bold text-orange-900 leading-relaxed">
            <span className="block mb-1">Upcoming Board Exams Tip:</span>
            Ensure all timetable PDFs are clearly named and smaller than 2MB for faster student downloads.
          </p>
        </div>
      </div>

      {/* Exam Form Overlay */}
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
                  <h3 className="text-2xl font-black text-slate-900">New Exam Schedule</h3>
                  <p className="text-slate-500 font-medium">Upload the timetable and set the date range.</p>
                </div>
                <button onClick={() => setShowForm(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8">
                <div className="field-group">
                  <label className="field-label">Examination Name</label>
                  <input type="text" className="field-input" placeholder="e.g. Annual Exams March 2026" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Tentative Start Date</label>
                    <input type="date" className="field-input" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Target Classes</label>
                    <input type="text" className="field-input" placeholder="e.g. Class 1 to 5" />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Timetable PDF</label>
                  <div className="border-4 border-dashed border-slate-50 rounded-[32px] p-12 text-center hover:border-blue-100 hover:bg-slate-50 transition-all group cursor-pointer">
                    <FileText size={40} className="mx-auto text-slate-200 group-hover:text-blue-400 mb-4 transition-colors" />
                    <p className="font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Click to upload Timetable PDF</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" className="primary-button flex-1 py-4">Publish Schedule</button>
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-all">Save as Draft</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
