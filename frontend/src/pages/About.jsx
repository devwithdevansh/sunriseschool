import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, BookOpen, Globe, ArrowRight, MessageCircle, Info } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
              About <span className="text-neutral-500">Sunrise</span> School
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Excellence in education, discipline, and holistic development.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-1 h-20 bg-gradient-to-b from-neutral-900 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-neutral-400">
              Who We Are
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Sunrise School Rajkot provides quality education from kindergarten to higher secondary level. We focus on <span className="font-bold border-b-2 border-neutral-900">discipline</span>, academic excellence, and overall student development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. HISTORY */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Our Journey</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Founded with a vision to nurture the leaders of tomorrow, Sunrise School has been a beacon of knowledge since its inception. Our journey is defined by a commitment to value-based learning.
              </p>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-lg tracking-wide uppercase">Established in 2016</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 md:p-12 bg-white border border-neutral-200 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900 transition-transform duration-500 group-hover:scale-110 -mr-16 -mt-16 rotate-45"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1bg-neutral-900"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Milestone</span>
                </div>
                <blockquote className="text-3xl md:text-4xl font-black mb-8 italic">
                  "Inaugurated by Morari Bapu"
                </blockquote>
                <p className="text-neutral-500 font-medium">
                  A sacred beginning that set the foundation for our values and spiritual growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-16 bg-neutral-900 text-white flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <Target className="w-12 h-12 mb-10 text-neutral-400 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Vision</h3>
                <p className="text-xl text-neutral-300 font-light leading-relaxed">
                  "To create future-ready students with strong values and knowledge"
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-16 border-2 border-neutral-900 flex flex-col justify-between group hover:bg-neutral-50 transition-all duration-500"
            >
              <div>
                <Lightbulb className="w-12 h-12 mb-10 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-500" />
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Mission</h3>
                <p className="text-xl text-neutral-600 font-light leading-relaxed">
                  "To provide quality education with discipline and growth"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MEDIUM */}
      <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            Medium of <span className="text-neutral-400">Instruction</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 md:p-12 border border-neutral-200 flex items-center justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300 text-neutral-600 group-hover:text-white">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">English Medium</h4>
                </div>
                <p className="text-neutral-500 max-w-xs">Global standard curriculum focusing on international integration.</p>
              </div>
              <ArrowRight className="w-8 h-8 text-neutral-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-12 border border-neutral-200 flex items-center justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300 text-neutral-600 group-hover:text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Gujarati Medium</h4>
                </div>
                <p className="text-neutral-500 max-w-xs">Deeply rooted in native culture providing strong academic foundation.</p>
              </div>
              <ArrowRight className="w-8 h-8 text-neutral-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 md:py-40 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Join <span className="text-neutral-500">Sunrise</span> <br /> School Rajkot
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <button className="px-10 py-5 bg-white text-neutral-900 font-black text-lg uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 group">
                Contact Us
                <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-black text-lg uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-300 flex items-center justify-center gap-3 group">
                Inquiry
                <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Academic Excellence
        </p>
      </div>
    </div>
  );
};

export default About;
