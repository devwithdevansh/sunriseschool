import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { 
  Mail,
  Search,
  Eye,
  Trash2,
  Download,
  RefreshCw,
  User,
  Phone,
  GraduationCap,
  Loader2,
  X,
  Calendar,
  MessageSquare
} from 'lucide-react'
const INITIAL_INQUIRIES = [];

export default function InquiriesPage() {
  const { getAuthHeader } = useAuth()
  const [inquiries, setInquiries] = useState(INITIAL_INQUIRIES)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const currentToken = localStorage.getItem('admin_token');
      const response = await fetch('https://sunriseschool.onrender.com/api/inquiries', {
        headers: {
          'Authorization': `Bearer ${currentToken}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setInquiries(data.data);
      } else {
        toast.error('Fetch failed: ' + (data.message || 'Unknown error'));
        console.error("Fetch failed:", data);
      }
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      toast.error('Network error fetching inquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
    const interval = setInterval(fetchInquiries, 7200000); // 2 hours
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Remove this inquiry record?")) {
      try {
        setLoading(true);
        const res = await fetch(`https://sunriseschool.onrender.com/api/inquiries/${id}`, { 
          method: 'DELETE',
          headers: getAuthHeader()
        });
        if (res.ok) {
          fetchInquiries();
          toast.success('Inquiry deleted');
          if (selectedInquiry && selectedInquiry._id === id) {
            setSelectedInquiry(null);
          }
        } else {
          toast.error('Failed to delete inquiry');
        }
      } catch (error) {
        console.error("Error deleting inquiry:", error);
        toast.error('Error deleting inquiry');
      } finally {
        setLoading(false);
      }
    }
  }

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const response = await fetch(`https://sunriseschool.onrender.com/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        toast.success(`Marked as ${newStatus}`);
        fetchInquiries();
        if (selectedInquiry && selectedInquiry._id === id) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus });
        }
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error('Error updating status');
    }
  };

  const handleExport = () => {
    if (filteredInquiries.length === 0) {
      toast.error('No inquiries to export');
      return;
    }

    // CSV Headers
    const headers = ['Student Name', 'Parent Name', 'Phone', 'Email', 'Grade/Class', 'Status', 'Date', 'Message/Notes'];
    
    // CSV Rows
    const rows = filteredInquiries.map(inq => [
      inq.studentName || '',
      inq.parentName || '',
      inq.phone || '',
      inq.email || '',
      inq.class || '',
      inq.status || 'New',
      new Date(inq.createdAt).toLocaleString(),
      (inq.message || '').replace(/"/g, '""')
    ]);

    // Combine headers and rows with RFC 4180 escaping
    const csvContent = [
      headers.map(h => `"${h}"`).join(','),
      ...rows.map(row => row.map(val => `"${val}"`).join(','))
    ].join('\n');

    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const timestamp = new Date().toISOString().slice(0, 10);
    link.setAttribute('href', url);
    link.setAttribute('download', `sunrise_school_inquiries_${filter.toLowerCase()}_${timestamp}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`Exported ${filteredInquiries.length} inquiries to CSV!`);
  };

  const filteredInquiries = inquiries.filter(inq => {
    const statusMatch = (inq.status || 'New').toLowerCase();
    const filterLower = filter.toLowerCase();
    const matchesTab = filter === 'All' || statusMatch === filterLower;
    
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesTab;
    
    const matchesSearch = 
      (inq.studentName || '').toLowerCase().includes(query) ||
      (inq.parentName || '').toLowerCase().includes(query) ||
      (inq.phone || '').toLowerCase().includes(query) ||
      (inq.email || '').toLowerCase().includes(query) ||
      (inq.class || '').toLowerCase().includes(query);
      
    return matchesTab && matchesSearch;
  });

  return (
    <div className="page-container">
      <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h2>Admission Inquiries</h2>
          <p>Review and manage prospective student leads from the public website.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={handleExport} className="secondary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={18} /> Export
          </button>
          <button onClick={fetchInquiries} className="primary-button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RefreshCw size={18} /> Refresh
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1, padding: '4px' }}>
          {['All', 'New', 'Replied', 'Closed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={filter === tab ? 'primary-button' : 'secondary-button'}
              style={{ padding: '10px 24px', fontSize: '0.85rem' }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input 
            type="text" 
            placeholder="Search inquiries..." 
            className="field-input"
            style={{ paddingLeft: '48px' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
          <Loader2 className="animate-spin" size={40} color="var(--brand-primary)" />
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Student & Parent</th>
                <th>Contact Info</th>
                <th>Grade</th>
                <th>Status</th>
                <th>Date</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.map((inq) => (
                <tr key={inq._id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={20} />
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>{inq.studentName}</p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Parent: {inq.parentName}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                        <Phone size={14} color="#94a3b8" /> {inq.phone}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b' }}>
                        <Mail size={14} color="#94a3b8" /> {inq.email}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-info" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                      <GraduationCap size={14} /> {inq.class}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${inq.status === 'New' ? 'badge-error' : inq.status === 'Replied' ? 'badge-warning' : 'badge-success'}`}>
                      {inq.status || 'New'}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <button onClick={() => setSelectedInquiry(inq)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer' }}><Eye size={18} /></button>
                      <button onClick={() => handleDelete(inq._id)} style={{ padding: '8px', borderRadius: '10px', border: '1px solid #fee2e2', background: '#fef2f2', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredInquiries.length === 0 && (
            <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
              <Mail size={40} style={{ margin: '0 auto 16px', opacity: 0.2 }} />
              <p style={{ fontWeight: 600 }}>No inquiries found in this category.</p>
            </div>
          )}
        </div>
      )}

      {/* Inquiry Detail Modal */}
      <AnimatePresence>
        {selectedInquiry && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedInquiry(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              style={{ position: 'relative', width: '100%', maxWidth: '600px', background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800 }}>Inquiry Details</h3>
                  <p style={{ margin: '4px 0 0', color: '#64748b' }}>Submitted on {new Date(selectedInquiry.createdAt).toLocaleString()}</p>
                </div>
                <button onClick={() => setSelectedInquiry(null)} style={{ border: 'none', background: '#f1f5f9', padding: '10px', borderRadius: '12px', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
                <div className="space-y-4">
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Student Name</label>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>{selectedInquiry.studentName}</p>
                  </div>
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Parent Name</label>
                    <p style={{ margin: 0, fontWeight: 600 }}>{selectedInquiry.parentName}</p>
                  </div>
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Grade / Class</label>
                    <span className="badge badge-info">{selectedInquiry.class}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Phone Number</label>
                    <p style={{ margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Phone size={14} color="var(--brand-primary)" /> {selectedInquiry.phone}
                    </p>
                  </div>
                  <div>
                    <label className="field-label" style={{ marginBottom: '4px' }}>Email Address</label>
                    <p style={{ margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Mail size={14} color="var(--brand-primary)" /> {selectedInquiry.email}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0', marginBottom: '32px' }}>
                 <label className="field-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                   <MessageSquare size={16} /> Message / Notes
                 </label>
                 <p style={{ margin: 0, color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                   {selectedInquiry.message || "No additional message provided."}
                 </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', padding: '16px', background: '#f1f5f9', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Status:</span>
                  <span className={`badge ${selectedInquiry.status === 'New' ? 'badge-error' : selectedInquiry.status === 'Replied' ? 'badge-warning' : 'badge-success'}`}>
                    {selectedInquiry.status || 'New'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {selectedInquiry.status !== 'New' && (
                    <button onClick={() => handleStatusUpdate(selectedInquiry._id, 'New')} className="secondary-button" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Mark New</button>
                  )}
                  {selectedInquiry.status !== 'Replied' && (
                    <button onClick={() => handleStatusUpdate(selectedInquiry._id, 'Replied')} className="secondary-button" style={{ padding: '8px 16px', fontSize: '0.85rem', background: 'white', color: '#f59e0b', borderColor: '#fcd34d' }}>Mark Replied</button>
                  )}
                  {selectedInquiry.status !== 'Closed' && (
                    <button onClick={() => handleStatusUpdate(selectedInquiry._id, 'Closed')} className="secondary-button" style={{ padding: '8px 16px', fontSize: '0.85rem', background: 'white', color: '#10b981', borderColor: '#6ee7b7' }}>Mark Closed</button>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={`tel:${selectedInquiry.phone}`} className="primary-button" style={{ flex: 1, textDecoration: 'none', justifyContent: 'center' }}>
                  <Phone size={18} /> Call Parent
                </a>
                <button onClick={() => setSelectedInquiry(null)} className="secondary-button" style={{ flex: 1 }}>Close View</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
