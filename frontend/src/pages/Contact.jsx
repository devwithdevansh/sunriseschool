import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Navigation, ArrowRight, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Light + dot grid) ─────────────────────────────── */}
      <section className="relative pt-36 pb-28 md:pt-52 md:pb-44 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">Reach Out</span>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Contact <span className="text-gray-300 font-light">Us</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
              We're here to help you with admissions and inquiries. Reach out to us today.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-14 flex justify-center">
            <div className="w-px h-20 bg-gradient-to-b from-brand-orange to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. CONTACT INFO CARDS (Light gray) ─────────────────────── */}
      <section className="py-20 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Phone, title: 'Phone Number', value: '+91 98765 43210', link: 'tel:+919876543210', color: 'bg-brand-blue' },
              { icon: Mail, title: 'Email Address', value: 'admissions@sunriseschool.edu', link: 'mailto:admissions@sunriseschool.edu', color: 'bg-brand-orange' },
              { icon: MapPin, title: 'School Address', value: '123 Knowledge Lane, Rajkot', link: 'https://maps.google.com/?q=Sunrise+School+Rajkot', color: 'bg-brand-blue' },
            ].map((info, index) => (
              <motion.a href={info.link} key={index} variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group text-center block"
              >
                <div className={`w-16 h-16 rounded-2xl ${info.color} text-white flex items-center justify-center mb-8 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{info.title}</h3>
                <p className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. QUICK ACTIONS (Blue gradient) ──────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-200 italic">Quick Connect</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+919876543210"
              className="flex items-center justify-center gap-4 bg-white text-gray-900 p-7 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 group shadow-2xl"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Call Now
            </a>
            <a href="https://wa.me/919876543210"
              className="flex items-center justify-center gap-4 bg-brand-orange text-white p-7 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 group shadow-2xl"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> WhatsApp
            </a>
            <a href="https://maps.google.com/?q=Sunrise+School+Rajkot" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-white/10 border border-white/20 text-white p-7 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-brand-blue hover:-translate-y-1 transition-all duration-300 group shadow-2xl"
            >
              <Navigation className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Directions
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. CONTACT FORM (White) ───────────────────────────────── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Message Us</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Send a <span className="text-brand-blue font-light">Message</span></h2>
            <p className="text-gray-500 font-medium leading-relaxed">Fill out the form below and our team will get back to you shortly.</p>
          </div>
          <motion.form variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 ml-1">Your Name</label>
              <input type="text" placeholder="John Doe"
                className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all font-medium"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 ml-1">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000"
                className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all font-medium"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 ml-1">Message</label>
              <textarea rows={5} placeholder="Tell us how we can help you..."
                className="w-full px-6 py-5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all font-medium resize-none"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="pt-2 group">
              <button className="w-full py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-4 rounded-2xl shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 active:scale-[0.98]">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* ── 5. MAP (Light gray) ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Visit Our <span className="text-gray-400 font-light">Campus</span></h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
              className="w-full h-[400px] md:h-[560px] border-0 grayscale hover:grayscale-0 transition-all duration-1000"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA (Dark) ──────────────────────────────────────── */}
      <section className="py-36 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block">Reach Us</span>
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9] italic">
              Visit Sunrise <br /><span className="text-gray-500 font-light">School</span> Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <a href="https://maps.google.com/?q=Sunrise+School+Rajkot" target="_blank" rel="noopener noreferrer"
                className="px-12 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-4 group rounded-full shadow-2xl hover:-translate-y-1"
              >
                Get Directions
                <Navigation className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
