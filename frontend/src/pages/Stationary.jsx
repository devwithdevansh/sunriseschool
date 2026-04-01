import React from 'react';
import { motion } from 'framer-motion';
import { Book, BookOpen, NotebookIcon as Notebook, Shirt, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stationary = () => {
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
              Stationary & <span className="text-neutral-500">Uniform</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Everything students need for a smooth academic journey and professional look.
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
              Student Essentials
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Sunrise School provides all necessary <span className="font-bold border-b-2 border-neutral-900">books</span>, notebooks, and <span className="font-bold border-b-2 border-neutral-900">uniforms</span> to ensure students are well-prepared.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. BOOKS SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Books & <span className="text-neutral-500">Study Materials</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Equipping our learners with the best preparatory resources</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Book, title: "Textbooks", desc: "Grade-specific textbooks following the Gujarat Board and NCERT guidelines." },
              { icon: Notebook, title: "Notebooks", desc: "Specially designed school-branded notebooks for all academic subjects." },
              { icon: BookOpen, title: "Study materials", desc: "Supplementary worksheets and research papers for deeper subject clarity." }
            ].map((book, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-10 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <book.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-center">{book.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-center group-hover:text-neutral-700 transition-colors">{book.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. UNIFORM SECTION */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">School <span className="text-neutral-500">Uniform</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Uniformity reflects discipline and professional outlook</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Shirt, title: "Standard Uniform", desc: "A clean and professional dress code prescribed for daily campus life." },
              { icon: Info, title: "Dress Code Guidelines", desc: "Meticulous guidelines on footwear, hair, and overall presentation." },
              { icon: CheckCircle2, title: "Availability", desc: "Full sets including sports uniforms available for procurement on campus." }
            ].map((uniform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-neutral-50 p-10 rounded-2xl border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:rotate-12 transition-transform">
                  <uniform.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-center leading-none">{uniform.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-center text-sm">{uniform.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. AVAILABILITY SECTION */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic leading-none text-white">
              Availability
            </h2>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-10">
              All essential books and uniforms are exclusively available at the <span className="text-white font-bold leading-none border-b border-neutral-700">school premises</span>. Parents are requested to contact the administrative office for size fittings and material pickup.
            </p>
            <div className="flex justify-center items-center gap-4 text-neutral-500 font-black tracking-[0.2em] uppercase text-[10px]">
              <CheckCircle2 className="w-4 h-4" /> Ready for Procurement
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Get Your <br /> <span className="text-neutral-500 tracking-tighter">Essentials</span>
            </h2>
            <div className="flex justify-center mt-16 group">
              <Link to="/inquiry" className="relative shadow-xl">
                <button className="px-10 py-5 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3">
                  Contact / Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Academic Preparedness
        </p>
      </div>
    </div>
  );
};

export default Stationary;
