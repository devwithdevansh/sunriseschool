import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Search, 
  Eye, 
  Trash2, 
  CheckCircle, 
  Download,
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
  const [inquiries] = useState(MOCK_INQUIRIES)
  const [filter, setFilter] = useState('All')

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
        <div>
          <h2>Admission Inquiries</h2>
          <p>Manage and respond to lead submissions from the website.</p>
        </div>
        <button className="primary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Download size={18} /> Export Data
        </button>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '48px', padding: '16px', background: 'white', borderRadius: '24px', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1 }}>
          {['All', 'New', 'Replied', 'Closed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                transition: '0.2s',
                background: filter === tab ? '#1a1a1a' : '#f5f5f5',
                color: filter === tab ? 'white' : '#8c8c8c'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#8c8c8c' }} />
          <input 
            type="text" 
            placeholder="Search inquiries..." 
            style={{ width: '100%', padding: '12px 12px 12px 44px', borderRadius: '14px', border: '1px solid var(--border-subtle)', background: '#fcfcfc', fontSize: '0.85rem', fontWeight: 600, outline: 'none' }} 
          />
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <div className="table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Student Info</th>
                <th>Contact</th>
                <th>Grade</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f5f5f5', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={18} />
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>{inquiry.studentName}</p>
                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#8c8c8c' }}>Parent: {inquiry.parentName}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                        <Phone size={12} color="#8c8c8c" /> {inquiry.phone}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#8c8c8c' }}>
                        <Mail size={12} /> {inquiry.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-gray" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                      <GraduationCap size={12} /> {inquiry.class}
                    </span>
                  </td>
                  <td>
                    {inquiry.status === 'new' && (
                      <span className="badge badge-orange" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                         <div style={{ width: '6px', height: '6px', background: 'var(--brand-orange)', borderRadius: '50%' }}></div> New Lead
                      </span>
                    )}
                    {inquiry.status === 'replied' && (
                      <span className="badge badge-gray" style={{ background: '#dcfce7', color: '#166534' }}>Responded</span>
                    )}
                    {inquiry.status === 'read' && (
                      <span className="badge badge-gray">Viewed</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'white', cursor: 'pointer' }}><Eye size={16} /></button>
                      <button style={{ padding: '8px', borderRadius: '8px', border: '1px solid #fee2e2', background: '#fff1f1', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
