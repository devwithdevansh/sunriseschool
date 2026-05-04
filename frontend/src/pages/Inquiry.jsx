import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Student Name</label>
                  <input type="text" placeholder="Enter student name" required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Parent Name</label>
                  <input type="text" placeholder="Enter parent name" required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input type="email" placeholder="example@email.com" required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 font-medium bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Class Interested</label>
                <div className="relative">
                  <select required className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 appearance-none bg-gray-50 focus:bg-white font-medium">
                    <option value="">Select a class</option>
                    <option value="playhouse">Playhouse</option>
                    <option value="kg">KG</option>
                    <option value="1-5">1 – 5</option>
                    <option value="6-10">6 – 10</option>
                    <option value="11-12">11 – 12 Commerce</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-all duration-300 resize-none font-medium bg-gray-50 focus:bg-white"
                />
              </div>
              <button type="submit"
                className="w-full py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                Submit Inquiry
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
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
              { icon: Phone, label: 'Call Us', value: '+91 98765 43210', color: 'bg-brand-blue' },
              { icon: Mail, label: 'Email Us', value: 'info@sunriseschool.edu.in', color: 'bg-brand-orange' },
              { icon: MapPin, label: 'Visit Us', value: 'Sunrise Street, Rajkot, Gujarat', color: 'bg-brand-blue' },
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

    </div>
  );
};

export default Inquiry;
