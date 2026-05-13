import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Image as ImageIcon, 
  Upload, 
  Search, 
  Trash2, 
  ExternalLink, 
  Filter,
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
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Events', 'Infrastructure', 'Classrooms', 'Sports']

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Media Library</h2>
          <p className="text-slate-500 font-medium">Upload and organize school photos and videos.</p>
        </div>
        <button 
          onClick={() => setShowUpload(true)}
          className="primary-button flex items-center gap-2 self-start"
        >
          <Upload size={20} />
          Upload New Media
        </button>
      </header>

      {/* Media Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shrink-0 ${
                selectedCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="flex bg-white border border-slate-100 p-1.5 rounded-2xl">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-slate-100 text-blue-600 shadow-sm' : 'text-slate-400'}`}
            >
              <Grid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-slate-100 text-blue-600 shadow-sm' : 'text-slate-400'}`}
            >
              <List size={20} />
            </button>
          </div>
          <div className="flex-1 lg:w-64 bg-white border border-slate-100 px-4 py-2.5 rounded-2xl flex items-center gap-2">
            <Search size={18} className="text-slate-400" />
            <input type="text" placeholder="Search files..." className="bg-transparent border-none outline-none text-sm font-medium w-full" />
          </div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_MEDIA.map((item) => (
            <motion.div
              layout
              key={item.id}
              whileHover={{ y: -8 }}
              className="card p-0 overflow-hidden group cursor-pointer border-slate-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                  <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="badge badge-blue shadow-lg">{item.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 truncate mb-1">{item.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.type}</span>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Preview</th>
                  <th>Filename</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_MEDIA.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100">
                        <img src={item.url} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td><div className="font-bold text-slate-900">{item.title}</div></td>
                    <td><span className="badge badge-blue">{item.category}</span></td>
                    <td><span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.type}</span></td>
                    <td><span className="text-xs font-bold text-slate-500 tracking-widest">{item.size}</span></td>
                    <td>
                      <div className="table-actions">
                        <button className="p-2 hover:bg-slate-50 text-slate-600 rounded-lg"><ExternalLink size={18} /></button>
                        <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Upload Overlay */}
      <AnimatePresence>
        {showUpload && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUpload(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl p-10 text-center overflow-hidden"
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Upload size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Upload Media</h3>
                <p className="text-slate-500 font-medium mt-2">Add photos or videos to the school gallery.</p>
              </div>

              <div className="border-4 border-dashed border-slate-50 rounded-[32px] p-16 mb-8 hover:border-blue-100 hover:bg-slate-50 transition-all group cursor-pointer">
                <FolderOpen size={48} className="mx-auto text-slate-200 group-hover:text-blue-400 mb-4 transition-colors" />
                <p className="font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Drag and drop files here</p>
                <span className="text-xs font-bold text-slate-300 mt-2 block">PNG, JPG or MP4 (Max 100MB)</span>
              </div>

              <div className="flex gap-4">
                <button className="primary-button flex-1 py-4">Start Upload</button>
                <button onClick={() => setShowUpload(false)} className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-all">Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
