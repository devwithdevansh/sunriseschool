import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, BookOpen, Globe, ArrowRight, MessageCircle, Users, Languages, Shield, Zap, Trophy, Award, ShieldCheck, TrendingUp, MapPin, Phone, Mail, Quote } from 'lucide-react';

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

      {/* ── 1. HERO (Light + dot grid + cinematic) ─────────────────────── */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50/40 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">Established 2016</span>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              About <br /><span className="text-gray-400 font-light">Sunrise</span> School
            </h1>
            <p className="max-w-xl mx-auto text-lg text-gray-500 font-medium leading-relaxed">
              Excellence in education, discipline, and holistic development — since 2016.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-px h-24 bg-gradient-to-b from-brand-orange to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. FULL-WIDTH IMAGE ─────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[420px] md:h-[600px] relative overflow-hidden group"
      >
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="School Spirit"
          className="w-full h-full object-cover brightness-75 transition-all duration-[2500ms] group-hover:scale-110 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-brand-orange/20 group-hover:opacity-0 transition-opacity duration-1000" />
      </motion.section>

      {/* ── 3. INTRODUCTION (White section) ────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.span variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 block text-brand-orange">Overview</motion.span>
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-10 text-gray-400">Who We Are</motion.h2>
            <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-gray-800">
              Sunrise School Rajkot provides quality education from kindergarten to higher secondary level. We focus on{' '}
              <span className="font-bold border-b-2 border-brand-orange">discipline</span>, academic excellence, and overall student development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 4. SIGNATURE STATEMENT (Light gray) ───────────────────────── */}
      <section className="py-24 bg-gray-50 px-4 flex items-center justify-center border-y border-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-brand-orange italic">Signature Statement</span>
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-gray-900 leading-[0.9]">
            "Not just a school, <br />
            <span className="text-brand-blue">but a foundation for life"</span>
          </h2>
        </motion.div>
      </section>

      {/* ── 5. WHY CHOOSE US (White) ───────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Academic Excellence</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">
              Why <span className="text-brand-blue">Choose Us</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
              A unique blend of modern learning and traditional discipline.
            </motion.p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Experienced Teachers', desc: 'Our faculty brings years of expertise and dedication to student success.' },
              { icon: Languages, title: 'English & Gujarati Medium', desc: 'Offering dual medium choices to cater to diverse educational needs.' },
              { icon: Shield, title: 'Discipline & Values', desc: 'Instilling core ethical values and maintaining a disciplined environment.' },
              { icon: Trophy, title: 'Competitive Exams', desc: 'Special focus on preparing students for various competitive milestones.' },
              { icon: Zap, title: 'Holistic Development', desc: 'Focusing on physical, mental, and emotional growth of every child.' },
              { icon: Award, title: 'Sports & Activities', desc: 'Wide range of extracurricular activities for all-round excellence.' },
            ].map((item, index) => (
              <motion.div
                key={index} variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-10 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. CORE VALUES (Light gray) ───────────────────────────────── */}
      <section className="py-24 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Guiding Principles</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic">
              Our Core <span className="text-gray-500 font-light">Values</span>
            </motion.h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Discipline', desc: 'The foundation of academic success.' },
              { icon: ShieldCheck, title: 'Integrity', desc: 'Honesty in every single action.' },
              { icon: Award, title: 'Excellence', desc: 'Striving for brilliant educational results.' },
              { icon: TrendingUp, title: 'Growth', desc: 'Continuous improvement for students.' },
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-blue text-white flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-bold uppercase tracking-widest">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. STATS (Blue gradient) ──────────────────────────────────── */}
      <section className="py-32 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-200 italic">Institutional Impact</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: '1000+', label: 'Students' },
              { number: '50+', label: 'Instructors' },
              { number: '10+', label: 'Academic Years' },
              { number: '100%', label: 'Safe Campus' },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 1 }}>
                <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter tabular-nums">{stat.number}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. JOURNEY / TIMELINE (White) ────────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Chronicle</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Our <span className="text-gray-400 font-light">Journey</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium italic">"Tracing our path from vision to institutional excellence."</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2 hidden md:block" />
            <div className="space-y-28 relative">
              {[
                { year: '2016', title: 'Inception', desc: 'Sunrise School was founded with a singular purpose: to deliver high-quality, value-based education to the families of Rajkot.' },
                { year: '2016', title: 'Divine Start', desc: 'Our journey officially began with an inauguration by Morari Bapu, setting an eternal standard for our values.' },
                { year: 'Today', title: 'Growing Legacy', desc: 'We are now a thriving educational hub with modern facilities and a community of 1000+ happy learners.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-xl font-black tracking-widest text-brand-orange uppercase italic mb-4 block">{item.year}</span>
                    <h3 className="text-3xl font-black mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-sm ml-auto mr-auto md:mr-0 md:ml-0 text-sm">{item.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-brand-orange border-8 border-white shadow-2xl flex items-center justify-center z-10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. VISION & MISSION (Light gray) ────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Strategic Vision</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              whileHover={{ scale: 1.01 }}
              className="p-16 md:p-20 bg-gradient-to-br from-brand-blue to-blue-700 text-white flex flex-col justify-between group shadow-2xl rounded-3xl"
            >
              <div>
                <Target className="w-16 h-16 mb-12 text-blue-200 group-hover:rotate-12 transition-all duration-500" />
                <h3 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Vision</h3>
                <p className="text-xl text-blue-100 font-light leading-relaxed">"To cultivate a generation of forward-thinking students anchored in absolute integrity."</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              whileHover={{ scale: 1.01 }}
              className="p-16 md:p-20 border-2 border-brand-orange flex flex-col justify-between group hover:bg-brand-orange hover:text-white transition-all duration-500 rounded-3xl"
            >
              <div>
                <Lightbulb className="w-16 h-16 mb-12 text-brand-orange group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                <h3 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Mission</h3>
                <p className="text-xl text-gray-600 font-light leading-relaxed group-hover:text-white transition-colors duration-500">"To deliver an educational ecosystem where discipline and creativity flourish together."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. DUAL MEDIUMS (White) ─────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-brand-orange italic">Curriculum Focus</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Dual <span className="text-gray-400 font-light">Mediums</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: Globe, title: 'English', desc: 'Global standard instruction for international fluency.' },
              { icon: BookOpen, title: 'Gujarati', desc: 'Deep cultural roots and state-aligned academic excellence.' },
            ].map((lang, index) => (
              <motion.div key={index} whileHover={{ y: -12, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gray-50 p-12 md:p-16 border border-gray-100 flex items-center justify-between group cursor-default rounded-3xl shadow-sm hover:shadow-2xl hover:border-brand-orange/30 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-brand-orange transition-all duration-500 text-gray-500 group-hover:text-white shadow-sm">
                      <lang.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-3xl font-black uppercase tracking-tight">{lang.title}</h4>
                  </div>
                  <p className="text-gray-500 max-w-xs font-bold text-xs uppercase tracking-widest leading-loose">{lang.desc}</p>
                </div>
                <ArrowRight className="w-10 h-10 text-gray-300 group-hover:text-brand-orange transition-all duration-500 group-hover:translate-x-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. CAMPUS PHOTOS (Light gray) ──────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-brand-orange">Environment</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic">Campus <span className="text-gray-400 font-light">Life</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium italic">"Captured moments from our vibrant, disciplined, and nurturing campus."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: 'https://images.unsplash.com/photo-1523050335392-9bef86f199ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Collaborative Learning' },
              { img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Digital Library' },
              { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Sports Culture' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="group p-2 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-[2500ms] group-hover:scale-110 group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 text-center pb-4 italic">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. TESTIMONIALS (White) ──────────────────────────────── */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-brand-orange">What Parents Say</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none text-gray-900">Voices of <span className="text-brand-blue">Trust</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Rajesh Patel', role: 'Parent (Class 8)', quote: 'The focus on discipline at Sunrise transformed my child\'s outlook on learning entirely.' },
              { name: 'Anita Shah', role: 'Parent (Class 12)', quote: 'Incredible preparation for board exams. The teaching staff is truly unparalleled in Rajkot.' },
              { name: 'Manoj Kumar', role: 'Parent (KG)', quote: 'A secure and loving environment. Our daughter loves coming to school every single day.' },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
              >
                <Quote className="w-10 h-10 text-brand-orange/30 mb-8 group-hover:text-brand-orange transition-colors duration-500" />
                <p className="text-xl text-gray-600 font-light mb-10 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-[10px] text-brand-orange uppercase tracking-widest font-black mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 13. CAMPUS MAP (Blue dark) ──────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-blue-800 to-blue-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
              className="h-[450px] md:h-[550px] w-full bg-blue-900 rounded-3xl overflow-hidden shadow-3xl relative border-4 border-white/5"
            >
              <iframe title="Sunrise School Campus Map" src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
                width="100%" height="100%"
                className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-[1500ms]"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-300 uppercase mb-8 block">Accessibility</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
                Tour Our <br /><span className="text-blue-300 font-light italic">Campus</span>
              </h2>
              <div className="space-y-10">
                {[
                  { icon: MapPin, title: 'Location', val: 'A-1, Sunrise Street, Rajkot' },
                  { icon: Phone, title: 'Inquiry', val: '+91 98765 43210' },
                  { icon: Mail, title: 'Admissions', val: 'join@sunriseschool.edu' },
                ].map((contact, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-all duration-500">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-300 mb-2">{contact.title}</h4>
                      <p className="text-xl text-white font-bold uppercase tracking-tight leading-none group-hover:translate-x-3 transition-all duration-500">{contact.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 14. ORANGE CTA ─────────────────────────────────────────── */}
      <section className="py-36 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-8 block text-orange-200">Join Our Legacy Today</span>
            <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter uppercase leading-[0.82] italic">
              Enroll at <br /><span className="text-orange-200 font-light">Sunrise</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <Link to="/contact" className="px-12 py-5 bg-white text-brand-orange font-black text-sm uppercase tracking-[0.3em] hover:bg-orange-50 transition-all duration-500 flex items-center justify-center gap-4 group rounded-full shadow-2xl hover:-translate-y-1">
                Contact Office
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-all duration-500" />
              </Link>
              <Link to="/inquiry" className="px-12 py-5 border-2 border-white/60 text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-brand-orange transition-all duration-500 flex items-center justify-center gap-4 group rounded-full hover:-translate-y-1">
                Admission Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
