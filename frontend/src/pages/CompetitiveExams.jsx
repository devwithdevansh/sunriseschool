import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Trophy, Book, Star, Target, GraduationCap, Award, ArrowRight, ShieldCheck, TrendingUp, Medal, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── Counter ─────────────────────────────────────────────────── */
const Counter = ({ to, suffix = '+', label }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = to / 60;
    const t = setInterval(() => {
      cur = Math.min(cur + step, to);
      setVal(Math.floor(cur));
      if (cur >= to) clearInterval(t);
    }, 1200 / 60);
    return () => clearInterval(t);
  }, [inView, to]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black tracking-tighter text-white tabular-nums">
        {val}<span className="text-brand-orange">{suffix}</span>
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-3">{label}</div>
    </div>
  );
};

/* ── Data ──────────────────────────────────────────────────────── */
const EXAMS = [
  {
    id: 1, icon: Trophy, title: 'Olympiads', rank: 'National Tier',
    desc: 'Scientific and mathematical challenges at a global level. Students compete on national platforms to earn distinctions that define academic careers.',
    highlights: ['Mathematics', 'Science', 'Reasoning'],
    img: '/images/exams/olympiads.png',
  },
  {
    id: 2, icon: Book, title: 'Hindi Prachar Samiti', rank: 'Institutional Tier',
    desc: 'Linguistic excellence and cultural depth in the national language. A gateway to understanding India\'s rich literary and cultural heritage.',
    highlights: ['Language', 'Literature', 'Culture'],
    img: '/images/exams/hindi_prachar.png',
  },
  {
    id: 3, icon: GraduationCap, title: 'Sanskrit Bharti', rank: 'Legacy Tier',
    desc: 'Connecting students with ancient wisdom and heritage foundations. Sanskrit is the mother of all languages — and mastering it is a mark of excellence.',
    highlights: ['Heritage', 'Grammar', 'Philosophy'],
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4, icon: Star, title: 'Humming Bird', rank: 'Academic Tier',
    desc: 'Logical reasoning and technical brilliance for junior scholars. A holistic challenge testing aptitude, creativity, and analytical thinking.',
    highlights: ['Logic', 'Aptitude', 'Creativity'],
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5, icon: Target, title: 'Spell Bee', rank: 'Skill Tier',
    desc: 'Building vocabulary and linguistic precision through competitive spelling. Students develop a love for language that benefits every subject.',
    highlights: ['Vocabulary', 'Spelling', 'Pronunciation'],
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=800',
  },
];

const STEPS = [
  { num: '01', title: 'Foundation', desc: 'Expert faculty builds deep conceptual clarity from the ground up.' },
  { num: '02', title: 'Practice', desc: 'Rigorous drills focused on speed, accuracy, and confidence.' },
  { num: '03', title: 'Simulation', desc: 'Real exam conditions to build stamina and strategic thinking.' },
  { num: '04', title: 'Victory', desc: 'Recognition on national platforms and lifelong skill mastery.' },
];

/* ═══════════════════════════════════════════════════════════════ */
const CompetitiveExams = () => {
  const [activeExam, setActiveExam] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ── 1. HERO (Dark with animated ring) ─────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-950">
        {/* Animated concentric rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[400, 600, 800, 1000].map((size, i) => (
            <motion.div key={i}
              className="absolute rounded-full border border-white/5"
              style={{ width: size, height: size }}
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
            />
          ))}
          {/* Center glow */}
          <div className="absolute w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.3) 0%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:30px_30px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-orange mb-8"
          >
            Sunrise School · The Elite Academic Path
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[clamp(3rem,9vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-white"
            >
              Competitive
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="text-[clamp(3rem,9vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-transparent"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              Excellence
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 max-w-2xl"
          >
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We don't just prepare students for exams — we prepare them for excellence.
            </p>
            <Link to="/inquiry" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-brand-blue text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-brand-orange hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all duration-300 group">
              Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Exam name pills */}
          <motion.div initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } } }}
            className="flex flex-wrap gap-3 mt-16"
          >
            {EXAMS.map((e, i) => (
              <motion.span key={i}
                variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] font-bold uppercase tracking-widest text-white/40"
              >
                {e.title}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-brand-blue to-transparent"
          />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Scroll</span>
        </motion.div>
      </section>

      {/* ── 2. STATS BAND ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter to={100}  suffix="+" label="Success Stories" />
          <Counter to={5}    suffix=""  label="Exam Categories" />
          <Counter to={10}   suffix=""  label="Years of Excellence" />
          <Counter to={1000} suffix="+" label="Students Guided" />
        </div>
      </section>

      {/* ── 3. EXAM ACCORDION SELECTOR ────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3"
            >Academic Recognition</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
            >
              Exams We <span className="text-gray-200">Master</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left: Accordion list */}
            <div className="lg:col-span-2 space-y-3">
              {EXAMS.map((exam, i) => (
                <motion.button key={exam.id}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setActiveExam(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    activeExam === i
                      ? 'bg-brand-blue text-white border-brand-blue shadow-[0_8px_30px_rgba(37,99,235,0.25)]'
                      : 'bg-white text-gray-700 border-gray-100 hover:border-brand-blue/30 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${activeExam === i ? 'text-blue-200' : 'text-gray-400'}`}>
                      0{exam.id}
                    </span>
                    <div>
                      <div className="font-black uppercase tracking-tight text-sm">{exam.title}</div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${activeExam === i ? 'text-blue-200' : 'text-gray-400'}`}>
                        {exam.rank}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeExam === i ? 'rotate-180 text-blue-200' : 'text-gray-300'}`} />
                </motion.button>
              ))}
            </div>

            {/* Right: Detail panel */}
            <div className="lg:col-span-3 sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div key={activeExam}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img src={EXAMS[activeExam].img} alt={EXAMS[activeExam].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 bg-brand-orange rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                        {EXAMS[activeExam].rank}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      {React.createElement(EXAMS[activeExam].icon, { className: 'w-6 h-6' })}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="bg-gray-50 p-8 border-x border-b border-gray-100 rounded-b-[2rem]">
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{EXAMS[activeExam].title}</h3>
                    <p className="text-gray-500 text-base font-light leading-relaxed mb-6">{EXAMS[activeExam].desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {EXAMS[activeExam].highlights.map((h, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-[11px] font-black uppercase tracking-widest border border-brand-blue/20">
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link to="/inquiry" className="inline-flex items-center gap-3 text-brand-orange font-black text-[11px] uppercase tracking-widest hover:text-orange-600 transition-colors group">
                      Register for this Exam
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. PREP JOURNEY (Horizontal timeline) ─────────────────── */}
      <section className="py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3">Institutional Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              The Prep <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden lg:block" />
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-8 left-0 right-0 h-px bg-brand-blue hidden lg:block origin-left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {STEPS.map((step, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Circle on timeline */}
                  <div className="w-16 h-16 rounded-full border-2 border-brand-blue bg-gray-950 flex items-center justify-center mb-8 relative z-10">
                    <span className="text-[11px] font-black text-brand-orange tracking-widest">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SPLIT CINEMATIC (Why it matters) ───────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden min-h-[50vh] lg:min-h-0 group"
        >
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
            alt="Excellence" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/40 to-transparent" />
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-4">Our Promise</span>
            <blockquote className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight">
              "We prepare students <br />for <span className="text-brand-orange">excellence</span>, <br />not just exams."
            </blockquote>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white flex items-center p-12 md:p-16"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-6">Strategic Advantages</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-10">
              Holistic <span className="text-gray-200">Growth</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Confidence', desc: 'Unshakable academic confidence built through national success.' },
                { icon: Medal,       title: 'Recognition', desc: 'Certifications recognized by leading institutional boards.' },
                { icon: TrendingUp, title: 'Skill Mastery', desc: 'Logic and reasoning skills that last a lifetime.' },
                { icon: Award,       title: 'Legacy',       desc: 'Part of a tradition of excellence since 2016.' },
              ].map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-sm text-gray-900 mb-1">{b.title}</div>
                    <div className="text-sm text-gray-500 font-light">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 6. CTA ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50 text-center relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[16vw] font-black uppercase text-gray-100 leading-none tracking-tighter whitespace-nowrap">Achieve</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange block mb-6">Admissions 2026-27 Open</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
              Ready to <span className="text-gray-200">Compete?</span>
            </h2>
            <p className="text-gray-500 text-lg font-light mb-12 max-w-md mx-auto">
              Join Sunrise School and be part of a legacy of national excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry" className="px-10 py-4 bg-brand-blue text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-lg hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-3 group">
                Admission Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-10 py-4 bg-white border border-gray-200 text-gray-900 font-black text-[11px] uppercase tracking-widest rounded-full hover:border-gray-400 transition-colors">
                Contact Office
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CompetitiveExams;
