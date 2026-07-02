import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Send, Globe, Clock, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    class: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('https://sunriseschool.onrender.com/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          studentName: '',
          parentName: '',
          phone: '',
          email: '',
          class: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        let errorMessage = errorData.message || 'Unknown error occurred.';
        
        // Attempt to parse stringified JSON array from Zod
        try {
          const parsed = JSON.parse(errorMessage);
          if (Array.isArray(parsed)) {
            errorMessage = parsed.map(err => {
              const field = err.path && err.path.length > 0 ? err.path[0] : 'Input';
              return `${field.charAt(0).toUpperCase() + field.slice(1)}: ${err.message || 'Invalid format'}`;
            }).join('\n');
          }
        } catch (e) {
          // If it's not a JSON string, fallback to checking errorData.errors
          if (errorData.errors) {
            if (Array.isArray(errorData.errors)) {
              errorMessage = errorData.errors.map(err => {
                if (err.message && err.path) return `${err.path}: ${err.message}`;
                if (err.message) return err.message;
                if (typeof err === 'string') return err;
                return 'Invalid input provided.';
              }).join('\n');
            } else if (typeof errorData.errors === 'object') {
              errorMessage = 'Please check your inputs and try again.';
            }
          }
        }
        setSubmitError(errorMessage);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError("Error connecting to server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { id: 'phone', icon: Phone, title: 'Call Us', value: '9723655151 / 9574800051', sub: 'Mon-Sat, 8am to 4pm', link: 'tel:9723655151', color: 'bg-brand-blue' },
    { id: 'email', icon: Mail, title: 'Email Us', value: 'info@sunriseschoolrajkot.com', sub: 'Online support 24/7', link: 'mailto:info@sunriseschoolrajkot.com', color: 'bg-brand-orange' },
    { id: 'whatsapp', icon: MessageCircle, title: 'WhatsApp', value: 'Quick Chat', sub: 'Instant replies', link: 'https://wa.me/919723655151', color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-brand-orange selection:text-white">
      
      {/* ── 1. PREMIUM DARK HERO ─────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-4 overflow-hidden">
        {/* Abstract Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Typography */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-brand-orange" />
                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-brand-orange">Let's Connect</span>
              </div>
              <h1 className="text-[clamp(4rem,8vw,8rem)] font-black tracking-tighter leading-[0.85] uppercase mb-8">
                Get In <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Touch.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg leading-relaxed mb-12">
                Whether you have a question about admissions, fees, or campus tours, our team is ready to answer all your questions.
              </p>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Office Hours</span>
                  <div className="flex items-center gap-2 text-gray-300 font-medium">
                    <Clock size={18} className="text-brand-orange" /> 08:00 AM - 04:00 PM
                  </div>
                </div>
                <div className="w-px bg-gray-800" />
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Global Presence</span>
                  <div className="flex items-center gap-2 text-gray-300 font-medium">
                    <Globe size={18} className="text-brand-blue" /> Sadhuvasvani Kunj road, near railnagar, rajkot
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Floating Contact Cards */}
            <div className="relative h-[400px] md:h-[500px] w-full hidden lg:block">
              {contactMethods.map((method, index) => (
                <motion.a
                  href={method.link}
                  key={method.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveCard(method.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={(e) => {
                    if (method.id === 'whatsapp') {
                      e.preventDefault();
                      alert('WhatsApp messaging coming soon temporarily.');
                    }
                  }}
                  className={`absolute p-8 rounded-3xl border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col justify-between group
                    ${index === 0 ? 'top-0 right-10 w-72 h-48 bg-white/5 z-20' : ''}
                    ${index === 1 ? 'top-32 left-0 w-80 h-52 bg-white/10 z-30' : ''}
                    ${index === 2 ? 'bottom-0 right-20 w-64 h-48 bg-white/5 z-10' : ''}
                    ${activeCard && activeCard !== method.id ? 'opacity-40 scale-95 blur-sm' : 'opacity-100 scale-100'}
                  `}
                >
                  <div className={`w-14 h-14 rounded-full ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{method.title}</h3>
                    <p className="text-gray-400 font-medium">{method.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{method.sub}</p>
                  </div>
                  <ArrowRight className="absolute bottom-8 right-8 text-white/20 group-hover:text-white group-hover:-rotate-45 transition-all" size={28} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
              {contactMethods.map((method, index) => (
                <a 
                  href={method.link} 
                  key={index} 
                  onClick={(e) => {
                    if (method.id === 'whatsapp') {
                      e.preventDefault();
                      alert('WhatsApp messaging coming soon temporarily.');
                    }
                  }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 active:bg-white/10"
                >
                  <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center shrink-0`}>
                    <method.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">{method.title}</h3>
                    <p className="text-sm text-gray-400">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. FORM & MAP SPLIT SECTION ──────────────────────────────── */}
      <section className="bg-white text-gray-900 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden relative z-20">
        <div className="flex flex-col xl:flex-row">
          
          {/* Left: The Form */}
          <div className="w-full xl:w-1/2 p-8 md:p-20 lg:p-32 flex flex-col justify-center bg-gray-50">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange mb-4 block">Drop a Line</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">Send a <span className="text-brand-blue">Message</span></h2>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-gray-900">Message Sent!</h3>
                    <p className="text-gray-500 font-medium mb-8 leading-relaxed">Thank you for reaching out. Our team will contact you shortly regarding your request.</p>
                    <button onClick={() => setIsSubmitted(false)} className="px-8 py-4 bg-brand-orange text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5">Send Another Message</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Student Name</label>
                        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Enter student name" required
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all duration-300 font-medium bg-white focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Parent Name</label>
                        <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Enter parent name" required
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all duration-300 font-medium bg-white focus:bg-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all duration-300 font-medium bg-white focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" required
                          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all duration-300 font-medium bg-white focus:bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Class Interested</label>
                      <div className="relative">
                        <select name="class" value={formData.class} onChange={handleChange} required className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all duration-300 appearance-none bg-white focus:bg-white font-medium">
                          <option value="">Select a class</option>
                          <option value="Playhouse">Playhouse</option>
                          <option value="KG">KG</option>
                          <option value="Class 1-5">1 – 5</option>
                          <option value="Class 6-10">6 – 10</option>
                          <option value="Class 11-12 Commerce">11 – 12 Commerce</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your requirements..." required
                        className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none transition-all duration-300 resize-none font-medium bg-white focus:bg-white"
                      />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-3 group disabled:opacity-70">
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right: The Interactive Map */}
          <div className="w-full xl:w-1/2 h-[500px] xl:h-auto relative bg-gray-200 group overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-1000" />
            
            {/* Custom Overlay Card on Map */}
            <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-80 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">Sunrise School</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">Sadhuvasvani Kunj road,<br/>near railnagar, rajkot</p>
              <a href="https://maps.google.com/?q=Sunrise+School+Rajkot" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange hover:text-brand-blue transition-colors flex items-center gap-2">
                Open in Google Maps <ArrowRight size={14} />
              </a>
            </div>

            <iframe
              title="Sunrise School Location"
              src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* Error Modal */}
      <AnimatePresence>
        {submitError && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
            onClick={() => setSubmitError(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight text-center">Action Required</h3>
              <div className="text-gray-500 mb-8 whitespace-pre-wrap text-center font-medium text-sm leading-relaxed">
                {submitError}
              </div>
              <button 
                onClick={() => setSubmitError(null)}
                className="w-full py-4 bg-brand-orange text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-brand-orange/20"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;
