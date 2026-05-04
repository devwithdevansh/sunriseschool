import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Target, Users, Zap, Heart, Award, ArrowRight, ShieldCheck, Dumbbell, Timer, LayoutGrid } from 'lucide-react';
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
      <div className="text-[clamp(3rem,6vw,4.5rem)] font-black tracking-tighter tabular-nums text-white">
        {val}<span className="text-brand-orange">{suffix}</span>
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-2">{label}</div>
    </div>
  );
};

/* ── Sports data ─────────────────────────────────────────────── */
const SPORTS = [
  { title: 'Cricket',      tag: 'Team',     img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=900&auto=format&fit=crop', span: 'lg:col-span-2 h-80' },
  { title: 'Football',     tag: 'Team',     img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600&auto=format&fit=crop', span: 'h-64' },
  { title: 'Athletics',    tag: 'Track',    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop', span: 'h-64' },
  { title: 'Indoor Games', tag: 'Skill',    img: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=900&auto=format&fit=crop', span: 'lg:col-span-2 h-80' },
  { title: 'Yoga',         tag: 'Wellness', img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop', span: 'h-64' },
];

const BENEFITS = [
  { icon: Heart,      title: 'Fitness',     desc: 'Long-term health and peak physical conditioning.' },
  { icon: ShieldCheck,title: 'Teamwork',    desc: 'Unified goals and collaborative achievement.' },
  { icon: Dumbbell,   title: 'Discipline',  desc: 'Mental toughness and adherence to growth routines.' },
  { icon: Zap,        title: 'Leadership',  desc: 'Initiative on and off the field.' },
];

const LEVELS = [
  { icon: LayoutGrid, label: 'School',   color: 'bg-gray-200 text-gray-500' },
  { icon: Medal,      label: 'District', color: 'bg-brand-blue/20 text-brand-blue' },
  { icon: Award,      label: 'State',    color: 'bg-brand-orange/20 text-brand-orange' },
  { icon: Trophy,     label: 'National', color: 'bg-yellow-100 text-yellow-600' },
];

/* ═══════════════════════════════════════════════════════════════ */
const Sports = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ── 1. HERO — Full-bleed image background ─────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1800&auto=format&fit=crop"
          alt="Athletics Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-transparent" />

        {/* Animated energy lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[15, 35, 55, 75].map((pos, i) => (
            <motion.div key={i}
              className="absolute top-0 bottom-0 w-px bg-white/5"
              style={{ left: `${pos}%` }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-40">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-orange mb-8"
          >
            Sunrise School · The Athletic Spirit
          </motion.p>

          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="text-[clamp(4rem,10vw,9rem)] font-black uppercase tracking-tighter leading-[0.85] text-white"
            >
              Sports &
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="text-[clamp(4rem,10vw,9rem)] font-black uppercase tracking-tighter leading-[0.85] text-transparent"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}
            >
              Athletics
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-sm">
              Champions are not born — they are trained. Building strength, discipline, and winners.
            </p>
            <Link to="/inquiry" className="shrink-0 flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(234,88,12,0.5)] hover:shadow-[0_0_60px_rgba(234,88,12,0.7)] hover:bg-orange-500 transition-all duration-300 group">
              Join Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Sport tags */}
          <motion.div initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 1 } } }}
            className="flex flex-wrap gap-3 mt-14"
          >
            {['Cricket', 'Football', 'Athletics', 'Indoor Games', 'Yoga', 'Gymnastics'].map((s, i) => (
              <motion.span key={i}
                variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] font-bold uppercase tracking-widest text-white/40"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-brand-orange to-transparent"
          />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Scroll</span>
        </motion.div>
      </section>

      {/* ── 2. STATS BAND ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter to={5}   suffix="+"  label="Sports Disciplines" />
          <Counter to={200} suffix="+"  label="Athletes" />
          <Counter to={15}  suffix="+"  label="Tournaments / Year" />
          <Counter to={10}  suffix="+"  label="Years of Glory" />
        </div>
      </section>

      {/* ── 3. SPORTS SHOWCASE (Hover-reveal masonry) ─────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3"
            >Disciplines</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
            >
              Athletic <span className="text-gray-200">Showcase</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPORTS.map((sport, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[2rem] group cursor-pointer ${sport.span}`}
              >
                <img src={sport.img} alt={sport.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                {/* Hover: orange tint */}
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-all duration-500" />

                <div className="absolute inset-0 p-7 flex flex-col justify-between z-10">
                  {/* Tag top-right */}
                  <div className="self-end px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white border border-white/15">
                    {sport.tag}
                  </div>
                  {/* Title bottom */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-0">{sport.title}</h3>
                    {/* Animated underline */}
                    <div className="h-0.5 bg-brand-orange w-0 group-hover:w-full transition-all duration-700 mt-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ACHIEVEMENT TRACK ──────────────────────────────────── */}
      <section className="py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3">Progression Path</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              Achievement <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Track</span>
            </h2>
          </div>

          <div className="relative">
            {/* Track base */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-white/10 rounded-full hidden lg:block" />
            {/* Animated fill */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-brand-blue via-brand-orange to-yellow-400 rounded-full hidden lg:block origin-left"
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {LEVELS.map((level, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-4 border-gray-950 relative z-10 transition-transform duration-300 group-hover:scale-110 ${level.color}`}>
                    <level.icon className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-black uppercase tracking-tight text-white">{level.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-1">Level {i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TRAINING SYSTEM (Bold 3-col on dark band) ──────────── */}
      <section className="py-24 bg-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3">The Methodology</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
              Training <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>System</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {[
              { icon: Users,  title: 'Expert Coaching',  desc: 'Professional athletic mentors guiding every student with personalized attention and proven methods.' },
              { icon: Timer,  title: 'Rigorous Practice', desc: 'Daily structured drills building stamina, reflexes, and technical excellence on every front.' },
              { icon: Zap,    title: 'Live Tournaments',  desc: 'Regular inter-school and district-level competitions to sharpen competitive instinct under pressure.' },
            ].map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center p-10 md:p-14 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                  <step.icon className="w-7 h-7 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SPLIT (Benefits + Image) ───────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left: Benefits */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white flex items-center p-12 md:p-16 order-2 lg:order-1"
        >
          <div className="w-full">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-6">Athlete Transformation</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
              Athletic <span className="text-gray-200">Advantages</span>
            </h2>
            <div className="space-y-5">
              {BENEFITS.map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
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

        {/* Right: Image with floating card */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden min-h-[50vh] lg:min-h-0 order-1 lg:order-2 group"
        >
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
            alt="Team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-950/30" />
          {/* Floating quote */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-300 mb-2">Our Mantra</p>
            <p className="text-xl font-black uppercase tracking-tight leading-tight">
              "Champions are <span className="text-brand-orange">not born</span>. They are trained."
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── 7. CTA ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50 text-center relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[16vw] font-black uppercase text-gray-100 leading-none tracking-tighter whitespace-nowrap">Champion</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange block mb-6">Athlete Recruitment Open</span>
            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-black tracking-tighter uppercase leading-[0.85] mb-8">
              Ready to <span className="text-gray-200">Compete?</span>
            </h2>
            <p className="text-gray-500 text-lg font-light mb-12 max-w-md mx-auto">
              Join our sports programs and start your journey to becoming a champion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry"
                className="px-10 py-4 bg-brand-orange text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-3 group"
              >
                Join Our Program
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

export default Sports;
