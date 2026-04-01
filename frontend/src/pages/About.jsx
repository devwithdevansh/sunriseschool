import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, BookOpen, Globe, ArrowRight, MessageCircle, Info, Users, Languages, Shield, Zap, Trophy, Award, ShieldCheck, TrendingUp, MapPin, Phone, Mail, Camera, Quote } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. HERO SECTION (py-32 rhythm) */}
      <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-400 mb-6 block">Established 2016</span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.8] md:leading-[0.8]">
              About <br /><span className="text-neutral-500">Sunrise</span> School
            </h1>
            <p className="max-w-xl mx-auto text-lg text-neutral-500 font-medium leading-relaxed italic">
              "Excellence in education, discipline, and holistic development."
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-px h-24 bg-gradient-to-b from-neutral-900 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 1.1 FULL-WIDTH IMAGE SECTION (Divider Transition) */}
      <motion.section 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[500px] md:h-[700px] relative overflow-hidden group border-y border-neutral-100"
      >
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="School Spirit" 
          className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[2000ms] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
      </motion.section>

      {/* 2. INTRODUCTION (py-32 rhythm) */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-neutral-300">Overview</motion.span>
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-12 text-neutral-400">
              Who We Are
            </motion.h2>
            <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-light leading-snug text-neutral-800">
              Sunrise School Rajkot provides quality education from kindergarten to higher secondary level. We focus on <span className="font-bold border-b-2 border-neutral-900">discipline</span>, academic excellence, and overall student development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2.1 SIGNATURE STATEMENT [NEW] (py-20 rhythm) */}
      <section className="py-20 bg-neutral-50 px-4 flex items-center justify-center border-y border-neutral-100">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
        >
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-neutral-300 italic">Signature Statement</span>
             <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-neutral-900 leading-[0.9]">
                "Not just a school, <br />
                <span className="text-neutral-200">but a foundation for life"</span>
             </h2>
        </motion.div>
      </section>

      {/* 2.2 WHY CHOOSE US (py-32 rhythm) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300"
            >
              Academic Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic"
            >
              Why <span className="text-neutral-300">Choose Us</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 max-w-2xl mx-auto font-medium"
            >
              Providing a unique blend of modern learning and traditional discipline.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              { icon: Users, title: "Experienced Teachers", desc: "Our faculty brings years of expertise and dedication to student success." },
              { icon: Languages, title: "English & Gujarati Medium", desc: "Offering dual medium choices to cater to diverse educational needs." },
              { icon: Shield, title: "Discipline & Values", desc: "Instilling core ethical values and maintaining a disciplined environment." },
              { icon: Trophy, title: "Competitive Exams", desc: "Special focus on preparing students for various competitive milestones." },
              { icon: Zap, title: "Holistic Development", desc: "Focusing on physical, mental, and emotional growth of every child." },
              { icon: Award, title: "Sports & Activities", desc: "Wide range of extracurricular activities for all-round excellence." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="p-12 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-8 group-hover:bg-neutral-800 transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2.3 OUR CORE VALUES (py-20 rhythm) */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300"
            >
              Guiding Principles
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic"
            >
              Our Core <span className="text-neutral-500">Values</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: "Discipline", desc: "The foundation of academic success." },
              { icon: ShieldCheck, title: "Integrity", desc: "Honesty in every single action." },
              { icon: Award, title: "Excellence", desc: "Striving for brilliant educational results." },
              { icon: TrendingUp, title: "Growth", desc: "Continuous improvement for students." }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-10 rounded-2xl border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-500 group text-center"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-black uppercase tracking-widest">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2.4 STATS SECTION (py-32 rhythm) */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-600 italic">Institutional Impact</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: "1000+", label: "Students" },
              { number: "50+", label: "Instructors" },
              { number: "10+", label: "Academic Years" },
              { number: "100%", label: "Safe Campus" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
              >
                <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter tabular-nums">{stat.number}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HISTORY (py-32 rhythm) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Chronicle</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Our <span className="text-neutral-300 font-normal">Journey</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium italic">"Tracing our path from vision to institutional excellence."</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-100 -translate-x-1/2 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-32 relative">
              {[
                { year: "2016", title: "Inception", desc: "Sunrise School was founded with a singular purpose: to deliver high-quality, value-based education to the families of Rajkot." },
                { year: "2016", title: "Divine Start", desc: "Our journey officially began with an inauguration by Morari Bapu, setting an eternal standard for our values." },
                { year: "Today", title: "Growing Legacy", desc: "We are now a thriving educational hub with modern facilities and a community of 1000+ happy learners." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className={`${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      <span className="text-xl font-black tracking-widest text-neutral-900 uppercase italic mb-4 block">{item.year}</span>
                      <h3 className="text-3xl font-black mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                      <p className="text-neutral-500 leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-16 h-16 rounded-full bg-neutral-900 border-8 border-white shadow-2xl flex items-center justify-center z-10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION (py-20 rhythm) */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300">Strategic Vision</span>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.01 }}
              className="p-16 md:p-24 bg-neutral-900 text-white flex flex-col justify-between group shadow-2xl transition-all duration-500 rounded-[2.5rem]"
            >
              <div>
                <Target className="w-16 h-16 mb-16 text-neutral-700 group-hover:text-white transition-all duration-500 group-hover:rotate-12" />
                <h3 className="text-5xl font-black mb-10 uppercase tracking-tighter italic">Vision</h3>
                <p className="text-2xl text-neutral-500 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                  "To cultivate a generation of forward-thinking students anchored in absolute integrity."
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.01 }}
              className="p-16 md:p-24 border-2 border-neutral-900 flex flex-col justify-between group hover:bg-white transition-all duration-500 rounded-[2.5rem]"
            >
              <div>
                <Lightbulb className="w-16 h-16 mb-16 text-neutral-200 group-hover:text-neutral-900 transition-all duration-500 group-hover:scale-110" />
                <h3 className="text-5xl font-black mb-10 uppercase tracking-tighter italic">Mission</h3>
                <p className="text-2xl text-neutral-600 font-light leading-relaxed group-hover:text-neutral-900 transition-colors duration-500">
                  "To deliver an educational ecosystem where discipline and creativity flourish together."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MEDIUM (py-32 rhythm) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-neutral-300 italic">Curriculum Focus</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Dual <span className="text-neutral-400 font-normal">Mediums</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-neutral-50 p-12 md:p-16 border border-neutral-100 flex items-center justify-between group cursor-default rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-neutral-900 transition-all duration-500 text-neutral-400 group-hover:text-white shadow-sm">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tight">English</h4>
                </div>
                <p className="text-neutral-500 max-w-xs font-bold text-xs uppercase tracking-widest leading-loose">Global standard instruction for international fluency.</p>
              </div>
              <ArrowRight className="w-12 h-12 text-neutral-200 group-hover:text-neutral-900 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>

            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-neutral-50 p-12 md:p-16 border border-neutral-100 flex items-center justify-between group cursor-default rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:bg-neutral-900 transition-all duration-500 text-neutral-400 group-hover:text-white shadow-sm">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tight">Gujarati</h4>
                </div>
                <p className="text-neutral-500 max-w-xs font-bold text-xs uppercase tracking-widest leading-loose">Deep cultural roots and state-aligned academic excellence.</p>
              </div>
              <ArrowRight className="w-12 h-12 text-neutral-200 group-hover:text-neutral-900 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CAMPUS LIFE (py-20 rhythm) */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-neutral-300">Environment</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic">Campus <span className="text-neutral-400 font-light">Life</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium italic">"Captured moments from our vibrant, disciplined, and nurturing campus."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: "https://images.unsplash.com/photo-1523050335392-9bef86f199ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Collaborative Learning" },
              { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Digital Library" },
              { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Sports Culture" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="group p-2 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-8">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-[2000ms] group-hover:scale-125 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-neutral-900 text-center pb-6 italic">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS [NEW] (py-32 rhythm) */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-neutral-300">What Parents Say</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none text-neutral-900">Voices of <span className="text-neutral-200">Trust</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { name: "Rajesh Patel", role: "Parent (Class 8)", quote: "The focus on discipline at Sunrise transformed my child's outlook on learning entirely." },
              { name: "Anita Shah", role: "Parent (Class 12)", quote: "Incredible preparation for board exams. The teaching staff is truly unparalleled in Rajkot." },
              { name: "Manoj Kumar", role: "Parent (KG)", quote: "A secure and loving environment. Our daughter loves coming to school every single day." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-neutral-50 p-12 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
              >
                <Quote className="w-12 h-12 text-neutral-100 mb-10 group-hover:text-neutral-900 transition-colors duration-500" />
                <p className="text-xl text-neutral-600 font-light mb-12 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neutral-100 pt-8">
                  <h4 className="text-lg font-black text-neutral-900 uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-black mt-1 italic">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. VISIT OUR CAMPUS (py-20 rhythm) */}
      <section className="py-20 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="h-[500px] md:h-[650px] w-full bg-neutral-800 rounded-[3rem] overflow-hidden shadow-3xl relative border-4 border-white/5"
            >
              <iframe
                title="Sunrise School Campus Map"
                src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
                width="100%"
                height="100%"
                className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-[1500ms]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
               <span className="text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase mb-8 block font-mono">Accessibility</span>
              <h2 className="text-4xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
                Tour Our <br /><span className="text-neutral-500 font-light italic">Campus</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: MapPin, title: "Location", val: "A-1, Sunrise Street, Rajkot" },
                  { icon: Phone, title: "Inquiry", val: "+91 98765 43210" },
                  { icon: Mail, title: "Admissions", val: "join@sunriseschool.edu" }
                ].map((contact, index) => (
                  <div key={index} className="flex gap-10 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-500">
                      <contact.icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-700 mb-2">{contact.title}</h4>
                      <p className="text-2xl text-white font-bold uppercase tracking-tight leading-none group-hover:translate-x-4 transition-all duration-700">{contact.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION (py-40 rhythm) */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
             <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-12 block text-neutral-200">Join Our Legacy Today</span>
            <h2 className="text-6xl md:text-9xl font-black mb-20 tracking-tighter uppercase leading-[0.8] md:leading-[0.8] text-neutral-900 italic">
              Enroll at <br /> <span className="text-neutral-200 font-normal">Sunrise</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-24">
              <Link to="/contact" className="px-16 py-8 bg-neutral-900 text-white font-black text-sm uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all duration-700 flex items-center justify-center gap-6 group rounded-full shadow-2xl">
                Contact Office
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-all duration-500" />
              </Link>
              <Link to="/inquiry" className="px-16 py-8 border-2 border-neutral-900 text-neutral-900 font-black text-sm uppercase tracking-[0.4em] hover:bg-neutral-900 hover:text-white transition-all duration-700 flex items-center justify-center gap-6 group rounded-full">
                Admission Inquiry
                <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-neutral-900 py-16 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-neutral-700">
          © {new Date().getFullYear()} Sunrise Institution • Premium Education Rajkot
        </p>
      </div>
    </div>
  );
};

export default About;
