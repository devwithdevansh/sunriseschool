import React from 'react';
import { motion } from 'framer-motion';
import { Book, BookOpen, NotebookIcon as Notebook, Shirt, CheckCircle2, Info, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const Stationary = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Orange gradient) ────────────────────────────── */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-orange-200 mb-6 block">Student Essentials</span>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Stationary & <br /><span className="text-orange-200 font-light">Uniform</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-orange-100 font-medium leading-relaxed">
              Everything students need for a smooth academic journey and professional look.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-14 flex justify-center">
            <div className="w-px h-20 bg-gradient-to-b from-orange-200 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION (White) ────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.span variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 block text-brand-orange">What We Provide</motion.span>
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-gray-400">Student Essentials</motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-gray-800">
              Sunrise School provides all necessary{' '}
              <span className="font-bold border-b-2 border-brand-orange">books</span>, notebooks, and{' '}
              <span className="font-bold border-b-2 border-brand-blue">uniforms</span>{' '}
              to ensure students are well-prepared.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. BOOKS SECTION (Light gray) ────────────────────────── */}
      <section className="py-24 md:py-32 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Learning Materials</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Books & <span className="text-brand-blue font-light">Study Materials</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Equipping our learners with the best preparatory resources</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Book, title: 'Textbooks', desc: 'Grade-specific textbooks following the Gujarat Board and NCERT guidelines.' },
              { icon: Notebook, title: 'Notebooks', desc: 'Specially designed school-branded notebooks for all academic subjects.' },
              { icon: BookOpen, title: 'Study Materials', desc: 'Supplementary worksheets and research papers for deeper subject clarity.' },
            ].map((book, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                  <book.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{book.title}</h3>
                <p className="text-gray-500 leading-relaxed">{book.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. UNIFORM SECTION (White) ───────────────────────────── */}
      <section className="py-24 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Smart Appearance</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">School <span className="text-gray-400 font-light">Uniform</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Uniformity reflects discipline and professional outlook</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Shirt, title: 'Standard Uniform', desc: 'A clean and professional dress code prescribed for daily campus life.' },
              { icon: Info, title: 'Dress Code Guidelines', desc: 'Meticulous guidelines on footwear, hair, and overall presentation.' },
              { icon: CheckCircle2, title: 'Availability', desc: 'Full sets including sports uniforms available for procurement on campus.' },
            ].map((uniform, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                  <uniform.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight leading-none">{uniform.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{uniform.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. AVAILABILITY (Blue gradient) ─────────────────────── */}
      <section className="py-28 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-blue-200 italic">Where To Get</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Availability
            </h2>
            <p className="text-xl text-blue-100 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              All essential books and uniforms are exclusively available at the{' '}
              <span className="text-white font-bold border-b border-blue-400">school premises</span>. Parents are requested to contact the administrative office for size fittings and material pickup.
            </p>
            <div className="flex justify-center items-center gap-4 text-blue-200 font-black tracking-[0.2em] uppercase text-[10px]">
              <CheckCircle2 className="w-5 h-5 text-white" /> Ready for Procurement
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA (Dark) ─────────────────────────────────────────── */}
      <section className="py-36 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block">Academic Preparedness</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tighter uppercase leading-[0.85] italic">
              Get Your <br /><span className="text-gray-500 font-light">Essentials</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/inquiry" className="px-12 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-4 group rounded-full shadow-2xl hover:-translate-y-1">
                Contact / Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Stationary;
