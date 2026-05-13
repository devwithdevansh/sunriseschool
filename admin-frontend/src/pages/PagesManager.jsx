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
  Info,
  ArrowLeft
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
    <div className="page-container">
      <div className="topbar">
        <h2>Pages Manager</h2>
        <p>Control the text, banners, and settings of your website pages.</p>
      </div>

      {!selectedPage ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {MOCK_PAGES.map((page) => (
            <div
              key={page.slug}
              onClick={() => handlePageSelect(page)}
              className="card"
              style={{ cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: '#f5f5f5', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a1a' }}>
                  <FileText size={24} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 900 }}>{page.title}</h3>
                  <span style={{ fontSize: '0.75rem', color: '#8c8c8c' }}>/{page.slug}</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#ccc', textTransform: 'uppercase' }}>Last Updated: {page.lastUpdated}</span>
                <ChevronRight size={16} color="#ccc" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '48px', alignItems: 'flex-start' }}>
          <aside style={{ position: 'sticky', top: '128px' }}>
            <button 
              onClick={() => setSelectedPage(null)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#8c8c8c', fontWeight: 700, fontSize: '0.85rem', marginBottom: '32px' }}
            >
              <ArrowLeft size={16} /> Back to List
            </button>
            
            <h3 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: '#8c8c8c', letterSpacing: '0.1em', marginBottom: '16px' }}>Page Sections</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {(PAGE_SECTION_DATA[selectedPage.slug] || []).map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '14px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer',
                    transition: '0.2s',
                    background: activeSection === sec.id ? '#1a1a1a' : 'white',
                    color: activeSection === sec.id ? 'white' : '#8c8c8c',
                    boxShadow: activeSection === sec.id ? '0 8px 16px rgba(0,0,0,0.05)' : 'none'
                  }}
                >
                  {sec.label}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '48px', padding: '24px', background: '#f8fafc', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
               <div style={{ display: 'flex', gap: '12px' }}>
                 <Info size={18} color="#3b82f6" style={{ shrink: 0 }} />
                 <p style={{ margin: 0, fontSize: '0.8rem', color: '#475569', lineHeight: '1.5', fontWeight: 600 }}>
                   Changes saved here will reflect on the public website immediately after saving.
                 </p>
               </div>
            </div>
          </aside>

          <main className="card" style={{ padding: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>
                  {(PAGE_SECTION_DATA[selectedPage.slug] || []).find(s => s.id === activeSection)?.label}
                </h3>
                <p style={{ margin: '4px 0 0', color: '#8c8c8c', fontWeight: 600 }}>Editing /{selectedPage.slug}</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="secondary-button" style={{ padding: '12px 20px' }}>
                   <Eye size={18} />
                </button>
                <button className="primary-button" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 24px' }}>
                   <Save size={18} /> Save Changes
                </button>
              </div>
            </div>

            <form className="space-y-8">
              {(PAGE_SECTION_DATA[selectedPage.slug] || []).find(s => s.id === activeSection)?.fields.map((field) => (
                <div key={field.id} className="field-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label className="field-label">{field.label}</label>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#ccc' }}>ID: {field.id}</span>
                  </div>
                  
                  {field.type === 'text' ? (
                    <input 
                      type="text" 
                      defaultValue={field.value} 
                      className="field-input" 
                    />
                  ) : (
                    <textarea 
                      rows={4} 
                      defaultValue={field.value} 
                      className="field-textarea"
                      style={{ height: '120px' }}
                    />
                  )}
                </div>
              ))}
            </form>
          </main>
        </div>
      )}
    </div>
  )
}
