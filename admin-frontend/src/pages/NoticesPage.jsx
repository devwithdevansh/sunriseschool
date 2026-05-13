import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Pin, 
  Paperclip, 
  X,
  Calendar,
  Filter,
  Megaphone
} from 'lucide-react'

const MOCK_NOTICES = [
  { id: 1, title: 'Urgent: School Closure due to Heavy Rainfall', category: 'General', date: 'May 04, 2026', isPinned: true, content: 'School will remain closed tomorrow due to red alert issued by the weather department...' },
  { id: 2, title: 'Term 2 Final Examination Timetable', category: 'Exams', date: 'May 02, 2026', isPinned: true, content: 'Official timetable for Term 2 has been released. Students can download the PDF from the attachments.' },
  { id: 3, title: 'Annual Sports Meet 2026', category: 'Events', date: 'Apr 28, 2026', isPinned: false, content: 'Registration for the upcoming meet is now open for all houses. Please contact your house captain.' },
]

export default function NoticesPage() {
  const [notices, setNotices] = useState(MOCK_NOTICES)
  const [isAdding, setIsAdding] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Notice Board</h2>
          <p className="text-slate-500 font-medium">Broadcast announcements and official circulars to the community.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <Plus size={20} />
          Create New Notice
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search announcements..." 
            className="w-full bg-white border border-slate-100 px-14 py-4 rounded-[20px] text-sm font-medium focus:border-blue-200 transition-all outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button className="px-6 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:bg-slate-50 transition-all">
            <Filter size={16} /> Filter by Category
          </button>
        </div>
      </div>

      <article className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="table-wrap border-none">
          <table className="data-table">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="!pl-8">Notice Content</th>
                <th>Category</th>
                <th>Publish Date</th>
                <th>Visibility</th>
                <th className="!pr-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {notices.map((notice) => (
                <tr key={notice.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="!pl-8">
                    <div className="flex items-center gap-4 py-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${notice.isPinned ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                        {notice.isPinned ? <Pin size={20} className="fill-orange-500" /> : <Megaphone size={20} />}
                      </div>
                      <div>
                        <span className="block font-black text-slate-900 line-clamp-1">{notice.title}</span>
                        <span className="text-xs font-medium text-slate-400 line-clamp-1">{notice.content}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-blue">{notice.category}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                      <Calendar size={14} className="text-slate-300" /> {notice.date}
                    </div>
                  </td>
                  <td>
                    {notice.isPinned ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-orange-100">
                        Pinned Alert
                      </span>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Standard</span>
                    )}
                  </td>
                  <td className="!pr-8">
                    <div className="flex items-center gap-2">
                      <button className="p-3 bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-400 rounded-2xl transition-all">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-3 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-2xl transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Notice Form Overlay */}
      <AnimatePresence>
        {isAdding && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdding(false)}
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
                  <h3 className="text-2xl font-black text-slate-900">Create Announcement</h3>
                  <p className="text-slate-500 font-medium">Compose a new notice for the school community.</p>
                </div>
                <button onClick={() => setIsAdding(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="field-group">
                  <label className="field-label">Announcement Title</label>
                  <input type="text" placeholder="e.g. Annual Day Schedule Update" className="field-input" required />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Category</label>
                    <select className="field-input">
                      <option>General</option>
                      <option>Exams</option>
                      <option>Events</option>
                      <option>Holidays</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Publish Date</label>
                    <input type="date" className="field-input" />
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Notice Details</label>
                  <textarea rows={6} className="field-textarea" placeholder="Write the full announcement here..."></textarea>
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm">
                      <Pin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Pin to Top</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Always visible at the top of the board</p>
                    </div>
                  </div>
                  <input type="checkbox" className="w-6 h-6 accent-blue-600 rounded-lg" />
                </div>

                <div className="field-group">
                  <label className="field-label">PDF Attachment</label>
                  <div className="border-4 border-dashed border-slate-50 rounded-[32px] p-12 text-center hover:border-blue-100 hover:bg-slate-50 transition-all group cursor-pointer">
                    <Paperclip size={40} className="mx-auto text-slate-200 group-hover:text-blue-400 mb-4 transition-colors" />
                    <p className="font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Click to attach official circular</p>
                    <p className="text-xs font-bold text-slate-300 mt-2 block">Maximum size: 10MB</p>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <button type="submit" className="primary-button flex-1 py-4">Broadcast Notice</button>
                  <button type="button" onClick={() => setIsAdding(false)} className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-all">Discard Draft</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
