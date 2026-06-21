import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Landmark, LineChart, FileText, Target, Award, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgHero from '../assets/images/BHARTIYA SANSKRITI/IMG_0326.JPG';
import imgGallery1 from '../assets/images/GYAN SADHANA/IMG_0332.JPG';
import imgGallery2 from '../assets/images/BHARTIYA SANSKRITI/IMG_0330.JPG';
import imgGallery3 from '../assets/images/GYAN SADHANA/IMG_0334.JPG';
import imgGallery4 from '../assets/images/BHARTIYA SANSKRITI/IMG_0328.JPG';

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const HigherSecondaryPage = () => {
  const subjects = [
    { title: "Accountancy", icon: <FileText size={24} />, desc: "Mastering financial records, balance sheets, and corporate accounting.", color: "from-blue-500 to-indigo-600" },
    { title: "Business Studies", icon: <Briefcase size={24} />, desc: "Understanding management principles, marketing, and business environments.", color: "from-violet-500 to-purple-600" },
    { title: "Economics", icon: <TrendingUp size={24} />, desc: "Macro and micro economics, market trends, and financial policies.", color: "from-emerald-500 to-teal-600" },
    { title: "Statistics / Math", icon: <LineChart size={24} />, desc: "Data analysis, probability, and quantitative techniques crucial for commerce.", color: "from-amber-500 to-orange-600" }
  ];

  return (
    <div className="w-full bg-white overflow-hidden pb-10">

      {/* ═══ 1. IMMERSIVE FULL-BLEED HERO ═══ */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <img src={imgHero} alt="Commerce Education" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30" />
        </div>

        {/* Animated accent lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/40 to-transparent origin-top hidden md:block"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-indigo-300 font-bold uppercase tracking-[0.3em] text-[11px] mb-8"
            >
              <Landmark size={14} />
              <span>Grades 11–12 · Commerce Stream</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-[0.95] tracking-tight mb-8"
            >
              Higher<br />
              Secondary<br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Commerce.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-300 font-medium mb-10 max-w-md leading-relaxed"
            >
              Empowering future entrepreneurs, financial analysts, and corporate leaders with advanced academic rigor and practical insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-all inline-flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-300">
                  <span>Apply Now</span>
                  <ArrowUpRight size={18} />
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all inline-flex items-center space-x-2 duration-300">
                <span>Subject Details</span>
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ═══ 2. OVERVIEW — Split Image + Text ═══ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Stacked image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={imgGallery1} alt="Students" className="w-full h-full object-cover" />
            </div>
            {/* Offset accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <img src={imgGallery3} alt="Commerce" className="w-full h-full object-cover" />
            </motion.div>
            {/* Decorative blob */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-80 -z-10" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-indigo-600">Why Commerce at Sunrise</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Career-Focused<br /><span className="text-indigo-600">Education</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-600 rounded-full" />
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Our Higher Secondary Commerce curriculum bridges academic theory with real-world business dynamics. We prepare students for board exams and professional courses like CA, CS, and CMA.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-6">
              {[
                { val: '100%', label: 'Board Pass Rate' },
                { val: 'CA/CS', label: 'Prep Included' },
                { val: '15+', label: 'Years Legacy' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="text-3xl font-black text-slate-900">{stat.val}</span>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. KEY STRENGTHS — Image-backed cards ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-indigo-600 mb-4 block">Our Edge</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">What Sets Us <span className="text-indigo-600">Apart</span></h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { tag: "Career Counseling", desc: "Expert guidance for college placements and professional degrees.", icon: <Target size={28} />, img: imgGallery2 },
              { tag: "Outstanding Results", desc: "Consistent track record of board toppers and distinctions.", icon: <Award size={28} />, img: imgGallery3 },
              { tag: "Practical Exposure", desc: "Workshops, seminars by industry experts, and project works.", icon: <Briefcase size={28} />, img: imgGallery4 }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-[380px]"
              >
                {/* Background image */}
                <img src={item.img} alt={item.tag} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-indigo-500 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.tag}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. CORE SUBJECTS — Clean with accent gradients ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-indigo-600 mb-4 block">Academics</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Core Curriculum</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${sub.color} text-white rounded-xl flex items-center justify-center shrink-0 mr-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  {sub.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sub.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{sub.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center text-slate-400 font-medium text-sm">
            * Plus mandatory subjects: English (First/Second Language) and Computer Studies / PE.
          </div>
        </div>
      </section>

      {/* ═══ 5. STUDENT COMMUNITY GALLERY ═══ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-indigo-600 mb-4 block">Campus Life</span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Student Community</h2>
            <p className="text-slate-500 text-lg font-medium">Collaboration, networking, and leadership experiences.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group shadow-md"
            >
              <img src={imgGallery1} alt="Students collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            {[
              { img: imgGallery2, alt: 'Campus', span: 'aspect-square' },
              { img: imgGallery3, alt: 'Activities', span: 'aspect-square' },
              { img: imgGallery4, alt: 'Events', span: 'col-span-2 h-48' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                className={`rounded-3xl overflow-hidden group shadow-md ${item.span}`}
              >
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. CTA — Immersive image background ═══ */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          {/* Background image */}
          <img src={imgGallery4} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-indigo-800/90 to-indigo-700/80" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Take the Next Step<br />in Your Career</h2>
            <p className="text-indigo-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Secure your admission for the 11th Commerce batch. Limited seats available for the upcoming session.
            </p>
            <Link to="/contact">
              <button className="px-10 py-5 bg-white text-indigo-700 rounded-full font-bold text-lg hover:bg-indigo-50 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2 group">
                <span>Contact Admissions Desk</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HigherSecondaryPage;
