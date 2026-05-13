import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Search, 
  Filter, 
  Eye, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Download,
  ChevronRight,
  User,
  Phone,
  GraduationCap
} from 'lucide-react'

const MOCK_INQUIRIES = [
  { id: 1, studentName: 'Aarav Mehta', parentName: 'Sanjay Mehta', phone: '+91 98250 12345', email: 'aarav@example.com', class: 'Class 8', date: 'May 10, 2026', status: 'new' },
  { id: 2, studentName: 'Isha Patel', parentName: 'Deepak Patel', phone: '+91 94260 67890', email: 'patel.isha@example.com', class: 'KG', date: 'May 08, 2026', status: 'read' },
  { id: 3, studentName: 'Rohan Shah', parentName: 'Viral Shah', phone: '+91 99040 11223', email: 'rohan.shah@example.com', class: 'Class 11 Commerce', date: 'May 05, 2026', status: 'replied' },
  { id: 4, studentName: 'Priya Verma', parentName: 'Amit Verma', phone: '+91 97230 44556', email: 'priya.v@example.com', class: 'Class 5', date: 'May 01, 2026', status: 'new' },
]

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState(MOCK_INQUIRIES)
  const [search, setSearch] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Admission Inquiries</h2>
          <p className="text-slate-500 font-medium">Manage and respond to lead submissions from the website.</p>
        </div>
        <button className="primary-button flex items-center gap-2 self-start">
          <Download size={20} />
          Export to Excel
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search student or parent name..." 
            className="w-full bg-white border border-slate-100 px-14 py-4 rounded-[20px] text-sm font-medium focus:border-blue-200 transition-all outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
          {['All Inquiries', 'New', 'Follow-up', 'Closed'].map((tab) => (
            <button key={tab} className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              tab === 'All Inquiries' ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
            }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <article className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="table-wrap border-none">
          <table className="data-table">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="!pl-8">Prospective Student</th>
                <th>Contact Details</th>
                <th>Target Grade</th>
                <th>Status</th>
                <th className="!pr-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="!pl-8">
                    <div className="flex items-center gap-4 py-2">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <span className="block font-black text-slate-900">{inquiry.studentName}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parent: {inquiry.parentName}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                        <Phone size={14} className="text-slate-300" /> {inquiry.phone}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <Mail size={14} className="text-slate-300" /> {inquiry.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-xl">
                      <GraduationCap size={14} className="text-blue-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{inquiry.class}</span>
                    </div>
                  </td>
                  <td>
                    {inquiry.status === 'new' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-orange-100">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div> New
                      </span>
                    )}
                    {inquiry.status === 'read' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-blue-100">
                        <Eye size={12} /> Seen
                      </span>
                    )}
                    {inquiry.status === 'replied' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-green-100">
                        <CheckCircle size={12} /> Responded
                      </span>
                    )}
                  </td>
                  <td className="!pr-8">
                    <div className="flex items-center gap-2">
                      <button className="p-3 bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-400 rounded-2xl transition-all">
                        <Eye size={18} />
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

      {/* Pagination / Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 pb-8">
        <span className="text-sm font-bold text-slate-400">Showing <span className="text-slate-900">4</span> of <span className="text-slate-900">124</span> inquiries</span>
        <div className="flex gap-2">
          <button className="px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-xs font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all">Previous</button>
          <button className="px-5 py-2.5 bg-slate-900 border border-slate-900 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-slate-200">Next</button>
        </div>
      </div>
    </motion.div>
  )
}
