import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Music, Mic, Palette, Theater, Trophy, Sparkles, ArrowRight, Users, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgCoCurricular1 from '../assets/images/ANNUAL/0D5A5278.JPG';
import imgCoCurricular2 from '../assets/images/ANNUAL/0D5A5514.JPG';
import imgCoCurricular3 from '../assets/images/ANNUAL/DSC05613.JPG';
import imgCoCurricular4 from '../assets/images/ANNUAL/DSC05687.JPG';
import imgCoCurricular5 from '../assets/images/BHARTIYA SANSKRITI/IMG_0326.JPG';
import imgCoCurricular6 from '../assets/images/BHARTIYA SANSKRITI/IMG_0328.JPG';

/* ── Animated counter ──────────────────────────────────────────── */
const Counter = ({ to, suffix = '', label }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, to);
      setVal(Math.floor(current));
      if (current >= to) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, to]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-[clamp(3rem,6vw,4.5rem)] font-black tracking-tighter text-white tabular-nums">
        {val}<span className="text-brand-orange">{suffix}</span>
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-3">{label}</div>
    </div>
  );
};

/* ── Data ──────────────────────────────────────────────────────── */
const CATEGORIES = ['All', 'Arts', 'Sports', 'Performance'];

const ACTIVITIES = [
  { id: 1, cat: 'Arts',        icon: Palette,  title: 'Visual Arts',     tag: 'Creative',      desc: 'Colors, shapes, and textures — students define their unique visual language.',       img: imgCoCurricular5 },
  { id: 2, cat: 'Performance', icon: Music,    title: 'Music Academy',   tag: 'Melodic',       desc: 'Vocal and instrumental mastery spanning classical and contemporary genres.',           img: imgCoCurricular1 },
  { id: 3, cat: 'Sports',      icon: Trophy,   title: 'Athletic Club',   tag: 'Physical',      desc: 'Strength, strategy, and teamwork across multiple sporting disciplines.',               img: imgCoCurricular2 },
  { id: 4, cat: 'Performance', icon: Theater,  title: 'Theater Group',   tag: 'Drama',         desc: 'Confidence, speech, and storytelling through the power of the stage.',                 img: imgCoCurricular3 },
  { id: 5, cat: 'Performance', icon: Mic,      title: 'Public Speaking', tag: 'Rhetoric',      desc: 'Equipping students with the tools to articulate ideas with precision and poise.',      img: imgCoCurricular4 },
  { id: 6, cat: 'Arts',        icon: Sparkles, title: 'Dance & Motion',  tag: 'Expressive',    desc: 'Traditional and modern movement forms that build grace, rhythm, and discipline.',      img: imgCoCurricular6 },
];

const PILLS = ['Music', 'Dance', 'Visual Arts', 'Theater', 'Public Speaking', 'Athletics', 'Debate', 'Craft'];

/* ═══════════════════════════════════════════════════════════════ */
const CoCurricular = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ACTIVITIES : ACTIVITIES.filter(a => a.cat === active);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ── 1. HERO (Full-bleed image background) ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <img
          src={imgCoCurricular2}
          alt="Co-Curricular Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-40">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-orange mb-8"
          >
            Sunrise School · Beyond the Classroom
          </motion.p>

          {/* Hero heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[clamp(3rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-white"
            >
              Co-Curricular
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="text-[clamp(3rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.85] text-transparent"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}
            >
              Excellence
            </motion.h1>
          </div>

          {/* Subtext + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              Nurturing every student's hidden genius — from the stage to the field.
            </p>
            <Link to="/inquiry"
              className="shrink-0 flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] hover:bg-orange-500 transition-all duration-300 group"
            >
              Join Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Floating activity pills */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 1 } } }}
            className="flex flex-wrap gap-3 mt-16"
          >
            {PILLS.map((pill, i) => (
              <motion.span key={i}
                variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] font-bold uppercase tracking-widest text-white/50"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-brand-orange to-transparent"
          />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Scroll</span>
        </motion.div>
      </section>

      {/* ── 2. STATS BAND (Dark) ──────────────────────────────────── */}
      <section className="py-16 bg-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter to={6}    suffix="+"  label="Activities" />
            <Counter to={1000} suffix="+"  label="Students" />
            <Counter to={12}   suffix=""   label="Events / Year" />
            <Counter to={100}  suffix="%"  label="Participation" />
          </div>
        </div>
      </section>

      {/* ── 3. FILTER + GRID ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3"
              >All Activities</motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
              >
                The <span className="text-gray-200">Spectrum</span>
              </motion.h2>
            </div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {CATEGORIES.map(cat => (
                <button key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest border transition-all duration-300 ${
                    active === cat
                      ? 'bg-brand-orange text-white border-brand-orange shadow-[0_0_20px_rgba(234,88,12,0.3)]'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-brand-orange/40 hover:text-brand-orange'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Animated card grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-[2rem] h-[26rem] group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background image */}
                  <img src={item.img} alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center mb-5 text-white shadow-lg">
                        <item.icon className="w-6 h-6" />
                      </div>
                      {/* Title */}
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">{item.title}</h3>
                      {/* Desc — reveals on hover */}
                      <p className="text-sm text-gray-200 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 4. FEATURED EXPERIENCES ────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3">Signature Programs</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Featured <span className="text-gray-300">Experiences</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative h-80 rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
              >
                <img src={item.img} alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="self-end px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white border border-white/15">
                    {item.cat}
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-xs font-light leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SPLIT CINEMATIC FEATURE ────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-5 min-h-[80vh]">
        {/* Left 60% — image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="lg:col-span-3 relative overflow-hidden min-h-[50vh] lg:min-h-0 group"
        >
          <img
            src={imgCoCurricular1}
            alt="Collaboration"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/30 to-transparent" />
          {/* Floating number */}
          <div className="absolute top-10 left-10 text-[120px] font-black text-white/5 leading-none select-none">01</div>
        </motion.div>

        {/* Right 40% — text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="lg:col-span-2 bg-gray-950 flex items-center p-12 md:p-16"
        >
          <div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-6">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-8">
              Every Child<br />Has a<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Talent</span>
            </h2>
            <p className="text-gray-400 text-base font-light leading-relaxed mb-10">
              Co-curricular activities at Sunrise School are not a supplement — they are central to our mission of developing complete, confident individuals ready for the real world.
            </p>
            <div className="space-y-5">
              {[
                { icon: Sparkles, label: 'Confidence & Self-expression' },
                { icon: Users,    label: 'Teamwork & Collaboration' },
                { icon: Globe,    label: 'Cultural & Global Awareness' },
                { icon: Zap,      label: 'Leadership & Initiative' },
              ].map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                    <b.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 6. CTA ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] font-black uppercase text-gray-50 leading-none tracking-tighter whitespace-nowrap">Sunrise</span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange block mb-6">Admissions 2026-27</span>
            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-black tracking-tighter uppercase leading-[0.85] mb-8 text-gray-900">
              Unlock Your<br /><span className="text-gray-200">Potential</span>
            </h2>
            <p className="text-gray-500 text-lg font-light mb-12 max-w-md mx-auto">
              Give your child the platform to discover, grow, and lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry"
                className="px-10 py-4 bg-gray-900 text-white font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-3 group"
              >
                Admission Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact"
                className="px-10 py-4 bg-white border border-gray-200 text-gray-900 font-black text-[11px] uppercase tracking-widest rounded-full hover:border-gray-400 transition-colors"
              >
                Contact Office
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CoCurricular;
