import React from 'react';
import Section from '../components/Section.jsx';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-brand-blue to-[#1e3a8a] overflow-hidden">
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
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-200/60 mb-6 block">Our Heritage</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase text-white leading-tight">
              Our <span className="text-blue-300/40">Story</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto font-medium"
          >
            Building a foundation of excellence and shaping future leaders since 1995.
          </motion.p>
        </div>
      </section>

      {/* 2. OVERLAPPING MISSION SECTION */}
      <section className="py-32 relative bg-gray-50 w-full overflow-hidden -mt-12 rounded-t-[4rem] z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter uppercase">Our Mission</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-12"></div>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              Our mission is to provide a nurturing and challenging academic environment that encourages students to be lifelong learners and responsible global citizens. We focus on holistic development, integrating modern technology with traditional values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { label: "Integrity", desc: "Honesty and ethical behavior in all our actions.", color: "bg-blue-50 border-blue-100 text-brand-blue" },
              { label: "Excellence", desc: "Striving for the highest quality in every endeavor.", color: "bg-orange-50 border-orange-100 text-brand-orange" },
              { label: "Community", desc: "Fostering a sense of belonging and mutual respect.", color: "bg-gray-100 border-gray-200 text-brand-dark" }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-10 rounded-[2.5rem] border ${v.color} shadow-sm transition-all duration-500 flex flex-col items-center text-center group`}
              >
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{v.label}</h3>
                <p className="text-sm font-medium opacity-80">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-gray-50 py-12 text-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          © {new Date().getFullYear()} Sunrise School • Excellence in Education
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
