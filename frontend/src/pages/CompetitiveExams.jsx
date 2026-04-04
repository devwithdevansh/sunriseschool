import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Book, Star, Target, GraduationCap, Award, ArrowRight, ShieldCheck, TrendingUp, Laptop, ClipboardList, Medal } from 'lucide-react';
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

      {/* ── 3. EXAMS LIST (White) ─────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Academic Recognition</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">The Exams <span className="text-brand-blue font-light">We Master</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {[
              { icon: Trophy, title: 'Olympiads', desc: 'Scientific and mathematical challenges at a global level.', rank: 'National Tier' },
              { icon: Book, title: 'Hindi Prachar Samiti', desc: 'Linguistic excellence and cultural depth in the national language.', rank: 'Institutional Tier' },
              { icon: GraduationCap, title: 'Sanskrit Bharti', desc: 'Connecting students with spiritual wisdom and heritage foundations.', rank: 'Legacy Tier' },
              { icon: Star, title: 'Humming Bird', desc: 'Logical reasoning and technical brilliance for junior scholars.', rank: 'Academic Tier' },
              { icon: Target, title: 'Spell Bee', desc: 'Building vocabulary and linguistic precision through competitive spelling.', rank: 'Skill Tier' },
            ].map((exam, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ x: 12 }}
                className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 border border-gray-100 rounded-3xl bg-gray-50 hover:bg-brand-blue hover:border-brand-blue group transition-all duration-500 cursor-default"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white text-gray-900 flex items-center justify-center shrink-0 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <exam.icon className="w-9 h-9 md:w-11 md:h-11" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange group-hover:text-blue-200 transition-colors">{exam.rank}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">{exam.title}</h3>
                  <p className="text-gray-500 group-hover:text-blue-100 transition-colors text-lg md:text-xl font-light italic leading-relaxed max-w-2xl">"{exam.desc}"</p>
                </div>
                <ArrowRight className="hidden md:block w-8 h-8 text-gray-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
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
