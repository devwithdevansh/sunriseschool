import React from 'react';
import Section from '../components/Section.jsx';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-brand-blue to-blue-800 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)", y: 40 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-200/60 mb-6 block">Get in Touch</span>
            <h1 className="text-[clamp(3.75rem,8vw,8rem)] font-black tracking-tighter mb-8 uppercase text-white leading-tight">
              Contact <span className="text-blue-300/40">Us</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto font-medium"
          >
            We'd love to hear from you. Reach out today and join our community.
          </motion.p>
        </div>
      </section>

      {/* 2. OVERLAPPING CONTACT SECTION */}
      <section className="py-32 relative bg-white w-full overflow-hidden -mt-12 rounded-t-[4rem] z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tighter uppercase">Reach Out</h2>
                <div className="w-20 h-1 bg-brand-orange rounded-full mb-8"></div>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                  Have questions about admissions, our curriculum, or campus tours? Our team is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 98765 43210", color: "bg-orange-50 text-brand-orange" },
                  { icon: Mail, label: "Email Us", value: "admissions@sunriseschool.edu", color: "bg-blue-50 text-brand-blue" },
                  { icon: MapPin, label: "Visit Us", value: "123 Knowledge Lane, Education City, Rajkot", color: "bg-gray-100 text-gray-700" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-6 group"
                  >
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-gray-900 tracking-tight">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tighter uppercase">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                    <input type="text" placeholder="Admissions Inquiry" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                    <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white transition-all"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button" 
                    className="w-full bg-brand-blue text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                  >
                    Send Message <Send size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-gray-50 py-12 text-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          © {new Date().getFullYear()} Sunrise School • Always Connected
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
