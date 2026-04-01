import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

const Inquiry = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white pt-20">
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              Inquiry <span className="text-neutral-500">Form</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Get in touch with Sunrise School for admissions and information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO TEXT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
              We're Here to Help
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-neutral-500 leading-relaxed">
              Fill out the form below and our team will get back to you with all the details you need about admissions and school facilities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. FORM SECTION */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-neutral-200 rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Student Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter student name"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Parent Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter parent name"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Class Interested</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors appearance-none bg-white">
                    <option value="">Select a class</option>
                    <option value="playhouse">Playhouse</option>
                    <option value="kg">KG</option>
                    <option value="1-5">1–5</option>
                    <option value="6-10">6–10</option>
                    <option value="11-12">11–12 Commerce</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-4 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 shadow-lg active:scale-[0.98]"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 4. CONTACT INFO SECTION */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Call Us</h4>
              <p className="text-xl font-bold">+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Email Us</h4>
              <p className="text-xl font-bold">info@sunriseschool.edu.in</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Visit Us</h4>
              <p className="text-lg font-bold">Sunrise Street, Rajkot, Gujarat - 360001</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MAP SECTION */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our Location</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] bg-neutral-100 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <iframe
              title="Sunrise School Rajkot Map"
              src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Admissions Open
        </p>
      </div>
    </div>
  );
};

export default Inquiry;
