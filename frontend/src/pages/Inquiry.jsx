import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Inquiry = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
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
        console.error("Submission failed:", errorData);
        
        const tryParseZodJSON = (str) => {
          try {
            const parsed = JSON.parse(str);
            if (Array.isArray(parsed)) {
              return parsed.map(err => {
                const field = err.path && err.path.length > 0 ? err.path[err.path.length - 1] : 'Input';
                return `• ${String(field).charAt(0).toUpperCase() + String(field).slice(1)}: ${err.message || 'Invalid format'}`;
              }).join('\n');
            }
          } catch (e) {}
          return null;
        };

        let finalMessage = errorData.message || 'Unknown error occurred. Please try again.';

        if (errorData.errors && Array.isArray(errorData.errors)) {
          finalMessage = errorData.errors.map(err => {
            if (err.message) {
              const parsed = tryParseZodJSON(err.message);
              if (parsed) return parsed;
              return `• ${err.path && err.path !== 'unknown' ? err.path + ': ' : ''}${err.message}`;
            }
            if (typeof err === 'string') {
              const parsed = tryParseZodJSON(err);
              return parsed || `• ${err}`;
            }
            return '• Invalid input provided.';
          }).join('\n');
        } else if (errorData.message) {
          const parsed = tryParseZodJSON(errorData.message);
          if (parsed) finalMessage = parsed;
        }

        setSubmitError(finalMessage);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitError("Error connecting to server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Blue gradient) ─────────────────────────────────── */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-200 mb-6 block">Admission Inquiry</span>
            <h1 className="text-[clamp(3rem,8vw,9rem)] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Inquiry <br /><span className="text-blue-200 font-light">Form</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 font-medium leading-relaxed">
              Get in touch with Sunrise School for admissions and information.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-16 flex justify-center">
            <div className="w-px h-20 bg-gradient-to-b from-blue-200 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. INTRO TEXT (White) ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.span variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 block text-brand-orange">Reach Out</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 italic">
              We're Here to <span className="text-brand-blue">Help</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-500 leading-relaxed font-medium">
              Fill out the form below and our team will get back to you with all the details you need about admissions and school facilities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. FORM SECTION (Light gray) ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Inquiry Submitted!</h3>
                <p className="text-gray-500 font-medium mb-8">Thank you for your interest. Our admissions team will contact you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="px-8 py-4 bg-brand-orange text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5">Submit Another Inquiry</button>
              </motion.div>
            ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Student Name</label>
                    <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Enter student name" required
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Parent Name</label>
                    <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Enter parent name" required
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" required
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Class Interested</label>
                  <div className="relative">
                    <select name="class" value={formData.class} onChange={handleChange} required className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 appearance-none bg-gray-50 focus:bg-white font-medium">
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
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 resize-none font-medium bg-gray-50 focus:bg-white"
                  />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-3 group disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── 4. CONTACT INFO (White) ──────────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Contact <span className="text-brand-blue">Channels</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, label: 'Call Us', value: '9723655151 / 9574800051', color: 'bg-brand-blue' },
              { icon: Mail, label: 'Email Us', value: 'info@sunriseschoolrajkot.com', color: 'bg-brand-orange' },
              { icon: MapPin, label: 'Visit Us', value: 'Sadhuvasvani Kunj road, near railnagar, rajkot', color: 'bg-brand-blue' },
            ].map((info, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 ${info.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{info.label}</h4>
                <p className="text-xl font-bold text-gray-900 leading-tight">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MAP (Blue dark) ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Our <span className="text-gray-400 font-light">Location</span></h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/5"
          >
            <iframe title="Sunrise School Rajkot Map"
              src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 6. ORANGE CTA ─────────────────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase mb-8 block text-orange-200">Admissions Open</span>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black mb-10 tracking-tighter uppercase leading-[0.85] italic">
              Join the <br /><span className="text-orange-200 font-light">Sunrise Family</span>
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-white text-brand-orange font-black text-sm uppercase tracking-[0.3em] rounded-full shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all duration-300 group">
              Contact Office
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
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
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight text-center">Action Required</h3>
              <div className="text-gray-600 mb-8 whitespace-pre-wrap font-semibold text-sm leading-relaxed text-left w-full bg-red-50/50 p-4 rounded-xl border border-red-100">
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

export default Inquiry;
