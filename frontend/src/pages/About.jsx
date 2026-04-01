import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, BookOpen, Globe, ArrowRight, MessageCircle, Info, Users, GraduationCap, Languages, Shield, Zap, Trophy, Heart, Award, Sparkles, Binary, ShieldCheck, TrendingUp, MapPin, Phone, Mail, Camera } from 'lucide-react';

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
              About <span className="text-neutral-500">Sunrise</span> School
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Excellence in education, discipline, and holistic development.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-1 h-20 bg-gradient-to-b from-neutral-900 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 1.1 FULL-WIDTH IMAGE SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[400px] md:h-[500px] relative overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-neutral-400">
              Who We Are
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Sunrise School Rajkot provides quality education from kindergarten to higher secondary level. We focus on <span className="font-bold border-b-2 border-neutral-900">discipline</span>, academic excellence, and overall student development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2.1 WHY CHOOSE US */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
            >
              Why Choose <span className="text-neutral-500">Sunrise School</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-500 max-w-2xl mx-auto font-medium"
            >
              Building strong foundations for academic and personal growth
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl bg-white border border-neutral-100 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2.2 OUR CORE VALUES */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
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
              { icon: Shield, title: "Discipline", desc: "Foundation of every successful student's journey." },
              { icon: ShieldCheck, title: "Integrity", desc: "Strong moral principles and honesty in all actions." },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in academics and beyond." },
              { icon: TrendingUp, title: "Growth", desc: "Continuous improvement and holistic development." }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{value.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2.3 STATS SECTION */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-neutral-500">Our Impact</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { number: "1000+", label: "Students" },
              { number: "50+", label: "Teachers" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Focus on Discipline" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">{stat.number}</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HISTORY - TIMELINE STYLE */}
      <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our Journey</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">A path defined by constant growth and commitment to excellence</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16 relative">
              {[
                { year: "2016", title: "Established", desc: "Sunrise School was founded with a clear vision to provide quality education and nurture future leaders." },
                { year: "2016", title: "Inauguration", desc: "A sacred start to our journey, inaugurated by Morari Bapu, setting the foundation for our core values." },
                { year: "Present", title: "Growing Institution", desc: "Continuing to excel with 1000+ students and expanded facilities for holistic development." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className={`${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase italic mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-neutral-500 leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-12 h-12 rounded-full bg-neutral-900 border-4 border-white shadow-lg flex items-center justify-center z-10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.1 MORARI BAPU INAUGURATION */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-square overflow-hidden rounded-xl shadow-2xl group"
            >
              <img 
                src="https://chitrakutdhamtalgajarda.org/wp-content/uploads/2020/05/image-bapu-ram-katha-049.jpg" 
                alt="Morari Bapu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-[0.3em] text-neutral-400 uppercase mb-4 block">
                Blessed Beginning
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
                Inaugurated by <br /> <span className="text-neutral-500">Morari Bapu</span>
              </h2>
              
              <div className="relative mb-8 pt-8">
                <div className="absolute top-0 left-0 w-12 h-1 bg-neutral-900"></div>
                <blockquote className="text-2xl md:text-3xl font-light italic text-neutral-800 leading-relaxed">
                  "A foundation built on values, spirituality, and wisdom"
                </blockquote>
              </div>

              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Sunrise School Rajkot was inaugurated by Morari Bapu, a globally respected spiritual leader known for spreading truth, love, and compassion. This sacred beginning reflects the strong values and cultural roots of our institution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-16 bg-neutral-900 text-white flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
            >
              <div>
                <Target className="w-12 h-12 mb-10 text-neutral-400 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Vision</h3>
                <p className="text-xl text-neutral-300 font-light leading-relaxed">
                  "To create future-ready students with strong values and knowledge"
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 md:p-16 border-2 border-neutral-900 flex flex-col justify-between group hover:bg-neutral-50 transition-all duration-500"
            >
              <div>
                <Lightbulb className="w-12 h-12 mb-10 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-500" />
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">Mission</h3>
                <p className="text-xl text-neutral-600 font-light leading-relaxed">
                  "To provide quality education with discipline and growth"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MEDIUM */}
      <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            Medium of <span className="text-neutral-400">Instruction</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 md:p-12 border border-neutral-200 flex items-center justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300 text-neutral-600 group-hover:text-white">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">English Medium</h4>
                </div>
                <p className="text-neutral-500 max-w-xs">Global standard curriculum focusing on international integration.</p>
              </div>
              <ArrowRight className="w-8 h-8 text-neutral-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-12 border border-neutral-200 flex items-center justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300 text-neutral-600 group-hover:text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Gujarati Medium</h4>
                </div>
                <p className="text-neutral-500 max-w-xs">Deeply rooted in native culture providing strong academic foundation.</p>
              </div>
              <ArrowRight className="w-8 h-8 text-neutral-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CAMPUS LIFE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Campus Life</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Capturing the vibrant spirit of our educational environment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1523050335392-9bef86f199ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Active Students" },
              { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Modern Classrooms" },
              { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Sports Excellence" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISIT OUR CAMPUS (GOOGLE MAP) */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[400px] md:h-[500px] w-full bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                title="Sunrise School Rajkot Map"
                src="https://www.google.com/maps?q=Sunrise+School+Rajkot&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                Visit Our <br /><span className="text-neutral-500">Campus</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Location</h4>
                    <p className="text-lg text-neutral-300">A-1, Sunrise Street, Rajkot, Gujarat - 360001</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Call Us</h4>
                    <p className="text-lg text-neutral-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</h4>
                    <p className="text-lg text-neutral-300">info@sunriseschool.edu.in</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 md:py-40 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Join <span className="text-neutral-500">Sunrise</span> <br /> School Rajkot
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <button className="px-10 py-5 bg-white text-neutral-900 font-black text-lg uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-3 group">
                Contact Us
                <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border-2 border-white text-white font-black text-lg uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-300 flex items-center justify-center gap-3 group">
                Inquiry
                <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Academic Excellence
        </p>
      </div>
    </div>
  );
};

export default About;
