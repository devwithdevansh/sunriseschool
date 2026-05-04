import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Landmark, LineChart, FileText, Target, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HigherSecondaryPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const subjects = [
    { title: "Accountancy", icon: <FileText size={24} />, desc: "Mastering financial records, balance sheets, and corporate accounting." },
    { title: "Business Studies", icon: <Briefcase size={24} />, desc: "Understanding management principles, marketing, and business environments." },
    { title: "Economics", icon: <TrendingUp size={24} />, desc: "Macro and micro economics, market trends, and financial policies." },
    { title: "Statistics / Math", icon: <LineChart size={24} />, desc: "Data analysis, probability, and quantitative techniques crucial for commerce." }
  ];

  return (
    <div className="w-full bg-slate-50 overflow-hidden pb-10">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center max-w-[96%] mx-auto mt-4 rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-200">
        <div className="absolute inset-0 flex">
          <div className="w-full md:w-1/2 bg-slate-900 p-12 flex items-center relative overflow-hidden">
             {/* Abstract grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          </div>
          <div className="hidden md:block w-1/2 bg-slate-100 relative">
             <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" alt="Commerce Education" className="object-cover w-full h-full opacity-80 mix-blend-multiply" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left text-white py-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-indigo-400 font-bold uppercase tracking-widest text-xs mb-6"
            >
              <Landmark size={16} />
              <span>Grades 11-12</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(3rem,6vw,4.5rem)] font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Commerce <br/>
              Stream.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-300 font-medium mb-10 max-w-md leading-relaxed"
            >
              Empowering future entrepreneurs, financial analysts, and corporate leaders with advanced academic rigor and practical insights.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center space-x-2">
                <span>Subject Details</span>
                <ArrowUpRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & FEATURES */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Career-Focused Education</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Our Higher Secondary Commerce curriculum is designed to bridge the gap between academic theory and real-world business dynamics. We prepare students not just for board exams, but for competitive professional courses like CA, CS, and CMA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
          {[
            { tag: "Career Counseling", desc: "Expert guidance for college placements and professional degrees.", icon: <Target className="text-indigo-600 mb-4" size={32} /> },
            { tag: "Outstanding Results", desc: "Consistent track record of board toppers and distinctions.", icon: <Award className="text-indigo-600 mb-4" size={32} /> },
            { tag: "Practical Exposure", desc: "Workshops, seminars by industry experts, and project works.", icon: <Briefcase className="text-indigo-600 mb-4" size={32} /> }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.tag}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE SUBJECTS STRUCTURE */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Core Curriculum</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((sub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-500/30 hover:shadow-lg hover:bg-white transition-all duration-300"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 mr-6 group-hover:scale-110 transition-transform">
                  {sub.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{sub.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{sub.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center text-slate-500 font-medium">
            * Plus mandatory subjects: English (First/Second Language) and Computer Studies / PE.
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Student Community</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
            <p className="mt-6 text-slate-600 text-lg font-medium">Collaboration, networking, and leadership experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group shadow-sm bg-slate-200"
            >
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Students collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }} 
              className="col-span-1 rounded-2xl overflow-hidden aspect-square group shadow-sm bg-slate-200"
            >
               <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }} 
              className="col-span-1 rounded-2xl overflow-hidden aspect-square group shadow-sm bg-slate-200"
            >
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3 }} 
              className="col-span-2 rounded-2xl overflow-hidden md:h-48 group shadow-sm bg-slate-200"
            >
               <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" alt="Group discussion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Take the Next Step in Your Career</h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Secure your admission for the 11th Commerce batch. Limited seats available for the upcoming session.
            </p>
            <Link to="/contact">
              <button className="px-10 py-5 bg-white text-indigo-700 rounded-xl font-bold text-lg hover:bg-indigo-50 shadow-xl transition-colors">
                Contact Admissions Desk
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HigherSecondaryPage;
