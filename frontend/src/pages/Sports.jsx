import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Users, LayoutGrid, Zap, Heart, Award, ArrowRight, ShieldCheck, Dumbbell, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const Sports = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Light) ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 md:pt-52 md:pb-44 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-50/30 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, x: -60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block italic">The Athletic Spirit</span>
            <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.75] mb-12">
              Sports & <br /><span className="text-gray-300 font-light italic">Athletics</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed italic border-t border-gray-100 pt-10">
              "Building strength, discipline, and champions through elite training and competitive rigor."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. MANTRA (Blue gradient) ────────────────────────────── */}
      <section className="py-28 md:py-44 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-12 block text-blue-200 italic">Core Athletic Mantra</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
              "Champions are <br />not born. <br />
              <span className="text-blue-200 font-light">They are trained."</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── 3. ACHIEVEMENT LEVELS (White) ─────────────────────────── */}
      <section className="py-28 md:py-40 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Progression Path</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Achievement <span className="text-brand-blue font-light">Levels</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 relative"
          >
            <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0" />
            {[
              { icon: LayoutGrid, title: 'School', desc: 'First stage of skill mastery.' },
              { icon: Medal, title: 'District', desc: 'Showcasing regional excellence.' },
              { icon: Award, title: 'State', desc: 'Elite state-wide performance.' },
              { icon: Trophy, title: 'National', desc: 'Ultimate institutional glory.' },
            ].map((level, index) => (
              <motion.div key={index} variants={itemVariants}
                className="flex flex-col items-center text-center space-y-6 relative z-10 group"
              >
                <div className="w-24 h-24 rounded-full bg-brand-blue text-white flex items-center justify-center group-hover:bg-brand-orange group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <level.icon className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic">{level.title}</h3>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{level.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. SPORTS SHOWCASE (Light gray) ──────────────────────── */}
      <section className="py-24 md:py-36 bg-gray-50 border-y border-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Disciplines</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic text-gray-900 leading-none">Athletic <span className="text-gray-400 font-light">Showcase</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Cricket', img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800', size: 'lg:col-span-2' },
              { title: 'Football', img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800' },
              { title: 'Athletics', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800' },
              { title: 'Indoor Games', img: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800', size: 'lg:col-span-2' },
            ].map((sport, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden group rounded-3xl aspect-video lg:aspect-auto h-[360px] ${sport.size || ''}`}
              >
                <img src={sport.img} alt={sport.title}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2500ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/30 transition-all duration-700" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">{sport.title}</h3>
                  <div className="w-0 group-hover:w-full h-[2px] bg-brand-orange transition-all duration-700 mt-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TRAINING SYSTEM (White) ─────────────────────────── */}
      <section className="py-24 md:py-36 bg-white border-b border-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">The Methodology</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">Training <span className="text-gray-400 font-light">System</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { icon: Users, title: 'Coaching', desc: 'Expert guidance from professional athletic mentors.' },
              { icon: Timer, title: 'Practice', desc: 'Rigorous daily drills focusing on stamina and skill.' },
              { icon: Zap, title: 'Competition', desc: 'Periodic tournaments to build elite psychological endurance.' },
            ].map((step, index) => (
              <motion.div key={index} variants={itemVariants}
                className="flex flex-col items-center text-center space-y-8 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-gray-50 text-gray-700 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-gray-100 group-hover:scale-110">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic group-hover:translate-x-1 transition-all duration-300">{step.title}</h3>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-loose italic max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. ATHLETIC ADVANTAGES (Orange gradient) ──────────── */}
      <section className="py-32 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <span className="text-[10px] font-black tracking-[0.4em] text-orange-200 uppercase mb-8 block italic">Athlete Transformation</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.85] italic">
                Athletic <br /><span className="text-orange-200 font-light">Advantages</span>
              </h2>
              <div className="space-y-10">
                {[
                  { icon: Heart, title: 'Fitness', desc: 'Long-term health and peak physical condition.' },
                  { icon: ShieldCheck, title: 'Teamwork', desc: 'Unified goals and collaborative achievement.' },
                  { icon: Dumbbell, title: 'Discipline', desc: 'Mental toughness and adherence to growth.' },
                  { icon: Zap, title: 'Leadership', desc: 'Taking initiative on the local and global field.' },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-brand-orange transition-all duration-500">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:translate-x-3 transition-all duration-500">{benefit.title}</h4>
                      <p className="text-sm text-orange-100 uppercase tracking-widest font-bold mt-1 italic">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 p-3"
            >
              <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1470"
                alt="Sprinter at Sunrise" className="w-full h-full object-cover rounded-[1.5rem] brightness-90"
              />
              <div className="absolute inset-0 bg-brand-orange/10 rounded-[1.5rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA (Dark) ─────────────────────────────────────────── */}
      <section className="py-36 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-orange block italic">Athlete Recruitment Open</span>
            <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.82] italic">
              Join Our <br /><span className="text-gray-500 font-light">Programs</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/inquiry" className="px-14 py-6 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.4em] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-5 group rounded-full shadow-2xl hover:-translate-y-1">
                Ready to Join
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="px-14 py-6 border-2 border-white/30 text-white font-black text-sm uppercase tracking-[0.4em] hover:border-brand-orange hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-5 group rounded-full hover:-translate-y-1">
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
