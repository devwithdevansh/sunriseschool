import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Send, Globe, Clock } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const contactMethods = [
    { id: 'phone', icon: Phone, title: 'Call Us', value: '+91 98765 43210', sub: 'Mon-Sat, 8am to 4pm', link: 'tel:+919876543210', color: 'bg-brand-blue' },
    { id: 'email', icon: Mail, title: 'Email Us', value: 'hello@sunriseschool.edu', sub: 'Online support 24/7', link: 'mailto:hello@sunriseschool.edu', color: 'bg-brand-orange' },
    { id: 'whatsapp', icon: MessageCircle, title: 'WhatsApp', value: 'Quick Chat', sub: 'Instant replies', link: 'https://wa.me/919876543210', color: 'bg-green-500' }
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
                    <Globe size={18} className="text-brand-blue" /> Rajkot, Gujarat
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
                <a href={method.link} key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 active:bg-white/10">
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
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-white p-10 rounded-3xl shadow-xl text-center border border-gray-100">
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Message Sent!</h3>
                    <p className="text-gray-500 font-medium mb-8 leading-relaxed">Your message has been delivered to our administrative desk. We will respond to the provided email shortly.</p>
                    <button onClick={() => setIsSubmitted(false)} className="px-8 py-4 bg-gray-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-brand-blue transition-all">Send Another</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input type="text" id="name" required className="w-full pb-4 bg-transparent border-b-2 border-gray-200 text-lg focus:outline-none focus:border-brand-blue transition-colors peer" placeholder=" " />
                        <label htmlFor="name" className="absolute left-0 top-0 text-gray-400 font-medium text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-500 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">Your Name *</label>
                      </div>
                      <div className="relative group">
                        <input type="tel" id="phone" required className="w-full pb-4 bg-transparent border-b-2 border-gray-200 text-lg focus:outline-none focus:border-brand-blue transition-colors peer" placeholder=" " />
                        <label htmlFor="phone" className="absolute left-0 top-0 text-gray-400 font-medium text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-500 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">Phone Number *</label>
                      </div>
                    </div>
                    <div className="relative group mt-10">
                      <input type="email" id="email" required className="w-full pb-4 bg-transparent border-b-2 border-gray-200 text-lg focus:outline-none focus:border-brand-blue transition-colors peer" placeholder=" " />
                      <label htmlFor="email" className="absolute left-0 top-0 text-gray-400 font-medium text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-500 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">Email Address *</label>
                    </div>
                    <div className="relative group mt-10">
                      <textarea id="message" required rows={4} className="w-full pb-4 bg-transparent border-b-2 border-gray-200 text-lg focus:outline-none focus:border-brand-blue transition-colors peer resize-none" placeholder=" " />
                      <label htmlFor="message" className="absolute left-0 top-0 text-gray-400 font-medium text-lg pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:text-gray-500 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest">How can we help? *</label>
                    </div>
                    <button type="submit" className="mt-8 flex items-center justify-between w-full md:w-auto px-10 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.2em] rounded-full shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_40px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all duration-300 group">
                      Submit Request
                      <Send className="w-5 h-5 ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
              <p className="text-gray-600 font-medium leading-relaxed mb-6">123 Knowledge Lane,<br/>Education City, Rajkot<br/>Gujarat, India 360005</p>
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

    </div>
  );
};

export default Contact;
