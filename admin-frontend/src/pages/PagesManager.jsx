import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  ChevronRight, 
  Layout, 
  Type, 
  AlignLeft, 
  Eye, 
  Save, 
  RotateCcw,
  Info
} from 'lucide-react'

const MOCK_PAGES = [
  { slug: 'home-page', title: 'Home Page Hero', lastUpdated: 'Just now' },
  { slug: 'about-school', title: 'About Our School', lastUpdated: '2 hours ago' },
  { slug: 'mission-vision', title: 'Mission & Vision', lastUpdated: 'Yesterday' },
  { slug: 'facilities', title: 'School Facilities', lastUpdated: '3 days ago' },
  { slug: 'principals-message', title: 'Principal\'s Message', lastUpdated: 'May 01, 2026' },
  { slug: 'trustee-message', title: 'Trustee Message', lastUpdated: '1 month ago' },
  { slug: 'downloads-center', title: 'Downloads & Circulars', lastUpdated: 'New' },
  { slug: 'contact-settings', title: 'Global Contact Info', lastUpdated: 'Just now' },
]

const PAGE_SECTION_DATA = {
  'home-page': [
    { 
      id: 'hero', 
      label: 'Main Banner (Hero)', 
      fields: [
        { id: 'h_title', label: 'Main School Name (Line 1)', type: 'text', value: 'SUNRISE' },
        { id: 'h_subtitle', label: 'Main Catchphrase', type: 'text', value: 'Empowering students with knowledge, discipline, and excellence.' },
        { id: 'h_cta_1', label: 'Primary Button Label', type: 'text', value: 'Explore Our Campus' },
        { id: 'h_cta_2', label: 'Secondary Button Label', type: 'text', value: 'Contact Admissions' }
      ]
    },
    { 
      id: 'seasonal', 
      label: 'Seasonal Banners', 
      fields: [
        { id: 's_alert', label: 'Urgent Alert Ribbon (Optional)', type: 'text', value: 'Admissions Open 2026-27' },
        { id: 's_status', label: 'Show Ribbon?', type: 'text', value: 'Yes' }
      ]
    }
  ],
  'about-school': [
    { 
      id: 'hero', 
      label: 'Hero Section', 
      fields: [
        { id: 'est_year', label: 'Established Year Text', type: 'text', value: 'Established 2016' },
        { id: 'h_title', label: 'Main Heading', type: 'text', value: 'About Sunrise' },
        { id: 'h_sub', label: 'Hero Subtitle', type: 'textarea', value: 'Excellence in education, discipline, and holistic development — a modern foundation for life.' }
      ]
    },
    { 
      id: 'intro', 
      label: 'Overview / Intro', 
      fields: [
        { id: 'intro_label', label: 'Section Label', type: 'text', value: 'Who We Are' },
        { id: 'intro_content', label: 'Main Introduction Text', type: 'textarea', value: 'Sunrise School Rajkot provides quality education from kindergarten to higher secondary level. We focus on discipline, academic excellence, and overall student development.' }
      ]
    },
    { 
      id: 'vision_mission', 
      label: 'Vision & Mission', 
      fields: [
        { id: 'v_text', label: 'Vision Statement', type: 'textarea', value: 'To cultivate a generation of forward-thinking students anchored in absolute integrity.' },
        { id: 'm_text', label: 'Mission Statement', type: 'textarea', value: 'To deliver an educational ecosystem where discipline and creativity flourish together.' }
      ]
    },
    { 
      id: 'stats', 
      label: 'School Statistics', 
      fields: [
        { id: 's_students', label: 'Students Count', type: 'text', value: '1000+' },
        { id: 's_teachers', label: 'Instructors Count', type: 'text', value: '50+' },
        { id: 's_years', label: 'Academic Years', type: 'text', value: '10+' }
      ]
    }
  ],
  'trustee-message': [
    {
      id: 'content',
      label: 'Trustee Content',
      fields: [
        { id: 't_heading', label: 'Message Heading', type: 'text', value: 'Our Leadership Vision' },
        { id: 't_text', label: 'Full Message Body', type: 'textarea', value: 'We believe that education is the most powerful weapon which you can use to change the world...' }
      ]
    }
  ],
  'downloads-center': [
    {
      id: 'files',
      label: 'Document Management',
      fields: [
        { id: 'f_homework', label: 'Holiday Homework PDF Link', type: 'text', value: '/files/homework_2026.pdf' },
        { id: 'f_fees', label: 'Fee Structure PDF Link', type: 'text', value: '/files/fees_2026.pdf' },
        { id: 'f_timetable', label: 'Annual Timetable PDF Link', type: 'text', value: '/files/timetable.pdf' }
      ]
    }
  ],
  'contact-settings': [
    {
      id: 'primary',
      label: 'Primary Contact Info',
      fields: [
        { id: 'c_phone', label: 'Display Phone Number', type: 'text', value: '+91 99799 00000' },
        { id: 'c_email', label: 'Official Email Address', type: 'text', value: 'info@sunriseraikot.com' },
        { id: 'c_address', label: 'Physical Address', type: 'textarea', value: 'Main Campus, Mavdi Main Road, Rajkot, Gujarat 360004' }
      ]
    }
  ]
}

export default function PagesManager() {
  const [selectedPage, setSelectedPage] = useState(null)
  const [activeSection, setActiveSection] = useState('')

  const handlePageSelect = (page) => {
    setSelectedPage(page)
    const sections = PAGE_SECTION_DATA[page.slug] || []
    if (sections.length > 0) {
      setActiveSection(sections[0].id)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <header className="topbar">
        <div>
          <h2>Pages Manager</h2>
          <p>Control the text, banners, and settings of your website pages.</p>
        </div>
      </header>

      {!selectedPage ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PAGES.map((page) => (
            <motion.div
              key={page.slug}
              whileHover={{ y: -5 }}
              onClick={() => handlePageSelect(page)}
              className="card cursor-pointer group hover:border-blue-400 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{page.title}</h3>
                  <span className="text-xs text-slate-400 font-medium">/{page.slug}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Updated {page.lastUpdated}</span>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </section>
      ) : (
        <div className="grid grid-cols-12 gap-8">
          {/* Section Navigation */}
          <aside className="col-span-12 lg:col-span-3 space-y-4">
            <button 
              onClick={() => setSelectedPage(null)}
              className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-6"
            >
              <RotateCcw size={16} /> Back to List
            </button>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Sections</h3>
            <div className="flex flex-col gap-2">
              {(PAGE_SECTION_DATA[selectedPage.slug] || []).map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold transition-all ${
                    activeSection === sec.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Layout size={18} />
                  {sec.label}
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-100">
              <div className="flex gap-3 text-orange-700">
                <Info size={18} className="shrink-0" />
                <p className="text-xs font-semibold leading-relaxed">
                  The sections for <strong>{selectedPage.title}</strong> are mapped to keep the design stable while you edit content.
                </p>
              </div>
            </div>
          </aside>

          {/* Editor Area */}
          <main className="col-span-12 lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {(PAGE_SECTION_DATA[selectedPage.slug] || []).find(s => s.id === activeSection)?.label}
                    </h3>
                    <p className="text-sm text-slate-500">Updating /{selectedPage.slug}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all text-slate-600">
                      <Eye size={20} />
                    </button>
                    <button className="primary-button flex items-center gap-2">
                      <Save size={18} />
                      Save Changes
                    </button>
                  </div>
                </div>

                <form className="space-y-8">
                  {(PAGE_SECTION_DATA[selectedPage.slug] || []).find(s => s.id === activeSection)?.fields.map((field) => (
                    <div key={field.id} className="field-group">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          {field.type === 'text' ? <Type size={14} className="text-blue-500" /> : <AlignLeft size={14} className="text-blue-500" />}
                          {field.label}
                        </label>
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">KEY: {field.id}</span>
                      </div>
                      
                      {field.type === 'text' ? (
                        <input 
                          type="text" 
                          defaultValue={field.value} 
                          className="field-input w-full"
                        />
                      ) : (
                        <textarea 
                          rows={4} 
                          defaultValue={field.value} 
                          className="field-textarea w-full"
                        />
                      )}
                    </div>
                  ))}
                </form>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      )}
    </motion.div>
  )
}
