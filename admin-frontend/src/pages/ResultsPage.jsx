import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  Plus, 
  Search, 
  FileDown, 
  Trash2, 
  Edit3, 
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

const MOCK_RESULTS = [
  { id: 1, title: 'Class 10th Board Results', year: '2025-26', category: '10th Board', toppers: 5, status: 'Published' },
  { id: 2, title: 'Class 12th Science Stream', year: '2025-26', category: '12th Science', toppers: 3, status: 'Published' },
  { id: 3, title: 'Class 12th Commerce Stream', year: '2025-26', category: '12th Commerce', toppers: 4, status: 'Draft' },
]

export default function ResultsPage() {
  const [results, setResults] = useState(MOCK_RESULTS)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Academic Results</h2>
          <p className="text-slate-500 font-medium">Manage and publish board results and topper lists.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <Plus size={20} />
          New Result Entry
        </button>
      </header>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-blue-50 border-blue-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <GraduationCap size={24} />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Total Results</span>
            <h4 className="text-2xl font-black text-slate-900">12</h4>
          </div>
        </div>
        <div className="card bg-green-50 border-green-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Published</span>
            <h4 className="text-2xl font-black text-slate-900">10</h4>
          </div>
        </div>
        <div className="card bg-orange-50 border-orange-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
            <AlertCircle size={24} />
          </div>
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Drafts</span>
            <h4 className="text-2xl font-black text-slate-900">2</h4>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center gap-4 mb-8 bg-slate-50 p-2 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-2 flex-1 px-4">
            <Search size={20} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter by year or title..." 
              className="bg-transparent border-none outline-none py-2 w-full font-medium text-slate-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Result Title</th>
                <th>Academic Year</th>
                <th>Category</th>
                <th>Toppers</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res) => (
                <tr key={res.id}>
                  <td>
                    <div className="font-bold text-slate-900">{res.title}</div>
                  </td>
                  <td><span className="font-semibold text-slate-600">{res.year}</span></td>
                  <td>
                    <span className="badge badge-blue">{res.category}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">+{res.toppers}</div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${res.status === 'Published' ? 'badge-green' : 'badge-orange'}`}>
                      {res.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"><Edit3 size={18} /></button>
                      <button className="p-2 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors"><FileDown size={18} /></button>
                      <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-over Form Overlay */}
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
                  <h3 className="text-2xl font-black text-slate-900">New Result Entry</h3>
                  <p className="text-slate-500 font-medium">Fill in the details and upload the PDF file.</p>
                </div>
                <button onClick={() => setShowForm(false)} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-8">
                <div className="field-group">
                  <label className="field-label">Result Title</label>
                  <input type="text" className="field-input" placeholder="e.g. SSC Board March 2026" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="field-group">
                    <label className="field-label">Academic Year</label>
                    <select className="field-input">
                      <option>2025-26</option>
                      <option>2024-25</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Category</label>
                    <select className="field-input">
                      <option>10th Board</option>
                      <option>12th Science</option>
                      <option>12th Commerce</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Medium</label>
                    <select className="field-input">
                      <option>English Medium (EM)</option>
                      <option>Gujarati Medium (GM)</option>
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label className="field-label">Result PDF File</label>
                  <div className="border-4 border-dashed border-slate-100 rounded-3xl p-10 text-center hover:border-blue-200 transition-all cursor-pointer">
                    <FileDown size={40} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-sm font-bold text-slate-500">Drag and drop or click to upload PDF</p>
                    <span className="text-[10px] text-slate-400">Max size: 5MB</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button type="button" className="primary-button flex-1 py-4">Publish Result</button>
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
