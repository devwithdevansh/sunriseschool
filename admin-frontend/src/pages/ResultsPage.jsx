import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import {
  Plus,
  Search,
  Trash2,
  Edit3,
  X,
  FileText,
  Image as ImageIcon,
  Expand,
  Filter,
  ChevronRight,
  Loader2,
  Upload,
  Calendar,
  Layers
} from 'lucide-react'

const INITIAL_RESULTS = [];

const CATEGORIES = ['10 EM', '10 GM', '12 Commerce']
const YEARS = ['2025-26', '2024-25', '2023-24', '2022-23']

export default function ResultsPage() {
  const { getAuthHeader, token } = useAuth()
  const [results, setResults] = useState(INITIAL_RESULTS)
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingResult, setEditingResult] = useState(null)
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [uploading, setUploading] = useState(false)

  const fetchResults = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/results');
      const data = await response.json();
      if (data.status === 'success') {
        setResults(data.data);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    academicYear: '2024-25',
    classLevel: '10 EM',
    imageSrc: ''
  })

  // Filtering logic
  const filteredResults = results.filter(res => {
    const matchesYear = selectedYear === 'All' || res.academicYear === selectedYear
    const matchesCategory = selectedCategory === 'All' || res.classLevel === selectedCategory
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesYear && matchesCategory && matchesSearch
  })

  const handleOpenForm = (result = null) => {
    if (result) {
      setEditingResult(result)
      setFormData({
        title: result.title,
        academicYear: result.academicYear,
        classLevel: result.classLevel,
        imageSrc: result.imageSrc || ''
      })
    } else {
      setEditingResult(null)
      setFormData({
        title: '',
        academicYear: '2024-25',
        classLevel: '10 EM',
        imageSrc: ''
      })
    }
    setShowForm(true)
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const form = new FormData();
    form.append('image', file);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: form
      });
      const data = await res.json();
      if (res.ok && data.status === 'success') {
        setFormData({ ...formData, imageSrc: data.url });
        toast.success('Image uploaded successfully');
      } else {
        toast.error(data.message || 'Image upload failed');
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error('Error uploading image');
    } finally {
      setUploading(false);
    }
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true);

    try {
      if (editingResult) {
        const res = await fetch(`http://localhost:5000/api/results/${editingResult._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          fetchResults();
          toast.success('Result updated successfully');
        } else {
          toast.error('Failed to update result');
        }
      } else {
        const res = await fetch('http://localhost:5000/api/results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          fetchResults();
          toast.success('Result added successfully');
        } else {
          toast.error('Failed to add result');
        }
      }
    } catch (error) {
      console.error("Error saving result:", error);
      toast.error('An error occurred while saving');
    } finally {
      setLoading(false);
      setShowForm(false);
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this result?")) {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/results/${id}`, { 
          method: 'DELETE',
          headers: getAuthHeader()
        });
        if (res.ok) {
          fetchResults();
          toast.success('Result deleted');
        } else {
          toast.error('Failed to delete result');
        }
      } catch (error) {
        console.error("Error deleting result:", error);
        toast.error('Error deleting result');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* Premium Header Section */}
      <div className="bg-white border-b border-slate-200 pt-12 pb-8 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-[#ea580c]" />
                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-[#ea580c]">Management Console</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-[#0f172a] tracking-tight uppercase leading-none">
                Results <span className="text-slate-300">Gallery</span>
              </h1>
              <p className="mt-4 text-slate-500 font-medium max-w-xl">
                Curate and organize student achievements. These records will be directly reflected on the main website's Hall of Fame.
              </p>
            </div>
            <button
              onClick={() => handleOpenForm()}
              className="flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1d4ed8] transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/20 whitespace-nowrap"
            >
              <Plus size={20} strokeWidth={3} />
              Add New Record
            </button>
          </div>

          {/* Filters Bar */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by title..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setSelectedYear('All')}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${selectedYear === 'All' ? 'bg-[#0f172a] text-white' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                All Years
              </button>
              {YEARS.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${selectedYear === year ? 'bg-[#2563eb] text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${selectedCategory === 'All' ? 'bg-[#0f172a] text-white' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                All Categories
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-[#ea580c] text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 mt-12">
        {filteredResults.length === 0 ? (
          <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 py-24 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No results found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your filters or add a new record.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredResults.map((res) => (
                <motion.div
                  layout
                  key={res._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500"
                >
                  {/* Image Preview */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img
                      src={res.imageSrc}
                      alt={res.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Action Buttons Overlay */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        onClick={() => handleOpenForm(res)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 text-blue-600 transition-colors"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(res._id)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 text-red-600 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 flex gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-3 py-1 bg-[#2563eb] text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        {res.classLevel}
                      </span>
                      <span className="px-3 py-1 bg-[#ea580c] text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        Year {res.academicYear}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0f172a] leading-tight mb-2 group-hover:text-[#2563eb] transition-colors">
                      {res.title}
                    </h3>
                    <div className="flex items-center justify-between text-slate-400 text-sm font-medium mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>Updated Recently</span>
                      </div>
                      <button className="text-slate-300 group-hover:text-[#2563eb] transition-colors">
                        <Expand size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Modern Form Drawer */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-xl h-full bg-white shadow-2xl overflow-y-auto"
            >
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {editingResult ? 'EDIT RECORD' : 'NEW GALLERY ENTRY'}
                  </h2>
                  <p className="text-slate-500 text-sm font-medium">Class 10 & 12 Board Results</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                <form onSubmit={handleSave} className="space-y-8">
                  {/* Title Field */}
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                      <FileText size={14} /> Record Label
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900"
                      placeholder="e.g. Class 10 EM — Subject Toppers"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  {/* Year & Category Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                        <Calendar size={14} /> Academic Year
                      </label>
                      <select
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 appearance-none cursor-pointer"
                        value={formData.academicYear}
                        onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      >
                        {YEARS.map(year => <option key={year} value={year}>{year}</option>)}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                        <Layers size={14} /> Category
                      </label>
                      <select
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 appearance-none cursor-pointer"
                        value={formData.classLevel}
                        onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                      >
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Image Upload Field */}
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                      <Upload size={14} /> Upload Image (Cloudinary)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className={`flex items-center justify-center gap-2 w-full px-6 py-4 bg-slate-50 border-2 border-dashed ${uploading ? 'border-blue-400 bg-blue-50/50' : 'border-slate-300 hover:border-blue-500 hover:bg-slate-100'} rounded-2xl cursor-pointer transition-all`}
                      >
                        {uploading ? (
                          <>
                            <Loader2 size={20} className="animate-spin text-blue-500" />
                            <span className="font-bold text-blue-500">Uploading to Cloudinary...</span>
                          </>
                        ) : (
                          <>
                            <Upload size={20} className="text-slate-400" />
                            <span className="font-bold text-slate-600">Click to browse or drag & drop</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Preview Area */}
                  <div className="mt-8">
                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Visual Preview</label>
                    <div className="aspect-video w-full rounded-3xl bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center">
                      {formData.imageSrc ? (
                        <img src={formData.imageSrc} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center">
                          <ImageIcon className="mx-auto text-slate-200 mb-3" size={48} />
                          <p className="text-slate-400 text-sm font-medium">Enter image URL to see preview</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-8 flex gap-4">
                    <button
                      type="submit"
                      className="flex-grow bg-[#2563eb] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
                    >
                      {editingResult ? 'Update Record' : 'Publish to Website'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-8 bg-slate-50 text-slate-500 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
