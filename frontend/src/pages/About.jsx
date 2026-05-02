import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, BookOpen, Globe, Users, Languages, Shield, Zap, Trophy, Award, ShieldCheck, Quote, Sun } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Light + clean with Watermark & Inline Image) ─────────────────────── */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-white">
        {/* Subtle Watermark using Icon */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 text-gray-50 opacity-70 pointer-events-none">
          <Sun className="w-[800px] h-[800px]" strokeWidth={0.5} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">Established 2016</span>

            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              About <br />
              <div className="flex items-center justify-center gap-4 md:gap-8 mt-2">
                <span className="text-gray-400 font-light">Sunrise</span>
              </div>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-gray-500 font-medium leading-relaxed">
              Excellence in education, discipline, and holistic development — a modern foundation for life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION (Clean with logo placeholder) ────────────────────────────── */}
      <section className="py-32 bg-gray-50 relative border-y border-gray-100 overflow-hidden">
        {/* Placeholder for real school logo watermark */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.03] hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full border-[16px] border-gray-900 flex items-center justify-center">
            <span className="font-black text-6xl text-gray-900 tracking-widest">LOGO</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.span variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 block text-brand-orange">Overview</motion.span>
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-10 text-gray-400">Who We Are</motion.h2>
            <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-gray-800">
              Sunrise School Rajkot provides quality education from kindergarten to higher secondary level. We focus on{' '}
              <span className="font-bold border-b-2 border-brand-orange text-gray-900">discipline</span>, academic excellence, and overall student development.
            </motion.p>
          </motion.div>
        </div>
      </section>``

      {/* ── 3. WHY CHOOSE US (Image Background Cards) ───────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Academic Excellence</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Why <span className="text-brand-blue font-light">Choose Us</span>
            </motion.h2>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Experienced Teachers', desc: 'Our faculty brings years of expertise.', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop' },
              { icon: Languages, title: 'Dual Medium', desc: 'English & Gujarati options.', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop' },
              { icon: Shield, title: 'Discipline', desc: 'Core ethical values instilled.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop' },
              { icon: Trophy, title: 'Exams', desc: 'Competitive milestone prep.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop' },
              { icon: Zap, title: 'Holistic Growth', desc: 'Mental and emotional care.', img: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=600&auto=format&fit=crop' },
              { icon: Award, title: 'Sports', desc: 'Extracurricular excellence.', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop' },
            ].map((item, index) => (
              <motion.div
                key={index} variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-80"
              >
                {/* Background Image */}
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-end p-8 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. VISION & MISSION (Image Background Cards) ────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Strategic Direction</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative p-10 md:p-14 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden h-[400px] flex items-end"
            >
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Vision" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 text-white w-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic">Vision</h3>
                <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base max-w-md">"To cultivate a generation of forward-thinking students anchored in absolute integrity."</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative p-10 md:p-14 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden h-[400px] flex items-end"
            >
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Mission" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 text-white w-full">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-blue-100" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic">Mission</h3>
                <p className="text-blue-100 font-light leading-relaxed text-sm md:text-base max-w-md">"To deliver an educational ecosystem where discipline and creativity flourish together."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. TIMELINE (Vertical with small image bubbles) ────────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Chronicle</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic text-gray-900">Our <span className="text-gray-400 font-light">Journey</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />
            <div className="space-y-24 relative">
              {[
                { year: '2016', title: 'Inception', desc: 'Sunrise School was founded to deliver value-based education.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=200&auto=format&fit=crop' },
                { year: '2016', title: 'Divine Start', desc: 'Inauguration by Morari Bapu, setting an eternal standard.', img: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?q=80&w=200&auto=format&fit=crop' },
                { year: 'Today', title: 'Growing Legacy', desc: 'A thriving educational hub with a community of 1000+ learners.', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=200&auto=format&fit=crop' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-xl font-black tracking-widest text-brand-orange uppercase italic mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-black mb-3 uppercase tracking-tight leading-none text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm max-w-xs md:mx-0 ml-auto mr-auto">{item.desc}</p>
                  </div>

                  {/* Small Image Bubble instead of just a dot */}
                  <div className="absolute left-0 md:static w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 z-10 bg-gray-100 group hover:scale-110 transition-transform duration-300">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DUAL MEDIUMS (Clean cards with logo watermark) ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-brand-orange italic">Curriculum Focus</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none text-gray-900">Dual <span className="text-gray-400 font-light">Mediums</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: Globe, title: 'English', desc: 'Global standard instruction for international fluency.' },
              { icon: BookOpen, title: 'Gujarati', desc: 'Deep cultural roots and state-aligned academic excellence.' },
            ].map((lang, index) => (
              <motion.div key={index} whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white p-10 md:p-14 border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle Abstract Watermark */}
                <div className="absolute -right-12 -top-12 text-gray-50 opacity-60 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <Sun className="w-56 h-56" strokeWidth={1} />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <lang.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-3xl font-black uppercase tracking-tight mb-3 text-gray-900">{lang.title}</h4>
                    <p className="text-gray-500 max-w-[200px] text-sm leading-relaxed">{lang.desc}</p>
                  </div>

                  {/* Small Polaroid-style image */}
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-white border border-gray-100 rounded-3xl p-2 rotate-6 group-hover:rotate-0 shadow-lg group-hover:shadow-xl transition-all duration-500 shrink-0">
                    <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-${index === 0 ? '1456513080510-7bf3a84b82f8' : '1544716278-ca5e3f4abd8c'}?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. STATS (Clean Blue) ──────────────────────────────────── */}
      <section className="py-24 bg-brand-blue relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Students' },
              { number: '50+', label: 'Instructors' },
              { number: '10+', label: 'Academic Years' },
              { number: '100%', label: 'Safe Campus' },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter tabular-nums">{stat.number}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ─────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic text-gray-900">
              Join Our <span className="font-light text-brand-orange">Legacy</span>
            </h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto text-lg">Become a part of Sunrise School today and give your child the foundation they deserve.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/inquiry" className="px-10 py-4 bg-brand-orange text-white font-bold text-sm uppercase tracking-widest rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                Admission Inquiry
              </Link>
              <Link to="/contact" className="px-10 py-4 bg-gray-50 border border-gray-200 text-gray-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-gray-100 transition-colors">
                Contact Office
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
