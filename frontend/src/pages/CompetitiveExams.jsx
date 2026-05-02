import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Book, Star, Target, GraduationCap, Award, ArrowRight, ShieldCheck, TrendingUp, Laptop, ClipboardList, Medal, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const CompetitiveExams = () => {
  const [activeExam, setActiveExam] = useState(0);

  const examsList = [
    { 
      icon: Trophy, 
      title: 'Olympiads', 
      desc: 'Scientific and mathematical challenges at a global level.', 
      rank: 'National Tier',
      image: '/images/exams/olympiads.png'
    },
    { 
      icon: Book, 
      title: 'Hindi Prachar Samiti', 
      desc: 'Linguistic excellence and cultural depth in the national language.', 
      rank: 'Institutional Tier',
      image: '/images/exams/hindi_prachar.png'
    },
    { 
      icon: GraduationCap, 
      title: 'Sanskrit Bharti', 
      desc: 'Connecting students with spiritual wisdom and heritage foundations.', 
      rank: 'Legacy Tier',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: Star, 
      title: 'Humming Bird', 
      desc: 'Logical reasoning and technical brilliance for junior scholars.', 
      rank: 'Academic Tier',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
    },
    { 
      icon: Target, 
      title: 'Spell Bee', 
      desc: 'Building vocabulary and linguistic precision through competitive spelling.', 
      rank: 'Skill Tier',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=800'
    },
  ];

  const nextExam = () => setActiveExam((prev) => (prev + 1) % examsList.length);
  const prevExam = () => setActiveExam((prev) => (prev - 1 + examsList.length) % examsList.length);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Light) ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 md:pt-52 md:pb-44 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/40 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block italic">The Elite Academic Path</span>
            <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.75] mb-12">
              Competitive <br /><span className="text-gray-300 font-light">Exams</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed italic border-t border-gray-100 pt-10">
              "Nurturing analytical minds and building global recognition through strategic preparation."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. BIG STATEMENT (Blue gradient) ──────────────────────── */}
      <section className="py-28 md:py-44 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-12 block text-blue-200 italic">Institutional Mission</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
              "We don't prepare <br />students for exams. <br />
              <span className="text-blue-200 font-light">We prepare them <br />for excellence"</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── 3. EXAMS CAROUSEL (White) ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-white px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="text-left">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Academic Recognition</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">The Exams <br className="hidden md:block"/><span className="text-brand-blue font-light">We Master</span></h2>
            </div>
            <div className="flex gap-4">
              <button onClick={prevExam} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextExam} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex flex-col md:flex-row shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeExam}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-gray-200 overflow-hidden"
              >
                <img src={examsList[activeExam].image} alt={examsList[activeExam].title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest">
                    {examsList[activeExam].rank}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExam}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 md:space-y-8"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                    {React.createElement(examsList[activeExam].icon, { className: "w-8 h-8 md:w-10 md:h-10" })}
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">{examsList[activeExam].title}</h3>
                  <p className="text-gray-500 text-xl md:text-2xl font-light italic leading-relaxed max-w-xl">"{examsList[activeExam].desc}"</p>
                  
                  <div className="pt-8 border-t border-gray-100 mt-8">
                    <Link to="/inquiry" className="inline-flex items-center gap-4 text-brand-orange font-bold uppercase tracking-widest text-sm hover:text-orange-600 transition-colors group">
                      Explore Details
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {examsList.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveExam(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${i === activeExam ? 'w-8 bg-brand-blue' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PREP JOURNEY (Light gray) ─────────────────────────── */}
      <section className="py-24 md:py-36 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Institutional Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">The Prep <span className="text-brand-blue font-light">Journey</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Laptop, title: '01. Learning', desc: 'Expert conceptual clarity through specialist faculty guidance.' },
              { icon: ClipboardList, title: '02. Practice', desc: 'Rigorous drills focused on speed and problem-solving accuracy.' },
              { icon: ClipboardList, title: '03. Testing', desc: 'Real-world exam simulations to build enduring stamina.' },
              { icon: Medal, title: '04. Success', desc: 'Recognition on national platforms and global certification.' },
            ].map((step, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:translate-x-1 transition-all duration-300">{step.title}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-loose italic">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. RESULTS STATS (Orange gradient) ───────────────────── */}
      <section className="py-32 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-orange-200">Proved Performance</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">Excellence <span className="text-orange-200 font-light">Numbers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-center">
            {[
              { number: '100+', label: 'Success Stories', desc: 'Students achieving distinction and national tier certification.' },
              { number: 'Top 10', label: 'National Ranks', desc: 'Consistent presence in the highest percentile of academic tests.' },
              { number: 'Strong', label: 'Performance', desc: 'Measured success across linguistic, logic, and scientific platforms.' },
            ].map((stat, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }} className="space-y-4"
              >
                <div className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none">{stat.number}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-orange-200 mt-6 block">{stat.label}</div>
                <p className="text-orange-100 text-xs font-bold uppercase tracking-widest leading-loose max-w-[200px] mx-auto mt-4 italic">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOLISTIC GROWTH (White) ───────────────────────────── */}
      <section className="py-36 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Strategic Advantages</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic text-gray-900 leading-none">Holistic <span className="text-brand-blue font-light">Growth</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {[
              { title: 'Confidence', icon: ShieldCheck, desc: 'Building unshakable academic ego through national success.' },
              { title: 'Recognition', icon: Medal, desc: 'Earning certifications recognized by leading institutional boards.' },
              { title: 'Skill Mastery', icon: TrendingUp, desc: 'Logic and reasoning skills that ensure life-long academic depth.' },
            ].map((block, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}
                className="text-center space-y-8 group"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm">
                  <block.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">{block.title}</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] leading-loose italic max-w-[200px] mx-auto group-hover:text-gray-700 transition-colors">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CTA (Dark) ──────────────────────────────────────────── */}
      <section className="py-36 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-orange block">Institutional Inquiry</span>
            <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.82] italic">
              Enroll at <br /><span className="text-gray-500 font-light">Sunrise</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/inquiry" className="px-14 py-6 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.4em] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-5 group rounded-full shadow-2xl hover:-translate-y-1">
                Ready to Join
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CompetitiveExams;
