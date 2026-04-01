import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Palette, Theater, School, Trophy, Award, Sparkles, Users, GraduationCap, ArrowRight, BookOpen, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoCurricular = () => {
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
              Co-Curricular <span className="text-neutral-500">Activities</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Nurturing creativity, confidence, and overall development.
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
              Beyond Academics
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              At Sunrise School, we believe education goes beyond textbooks. Our co-curricular activities help students <span className="font-bold border-b-2 border-neutral-900">explore</span> their talents and build <span className="font-bold border-b-2 border-neutral-900">confidence</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: School, title: "Primary Section", desc: "Foundational activities focused on curiosity, imagination, and basic skills development." },
              { icon: GraduationCap, title: "Secondary Section", desc: "Structured programs to develop critical thinking, artistic expression, and athletic skills." },
              { icon: Award, title: "Higher Secondary Section", desc: "Advanced workshops and competitive platforms to prepare for professional and creative pursuits." }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-10 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ACTIVITIES GRID */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our <span className="text-neutral-500">Talent Pool</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">A wide spectrum of creative and athletic pursuits for every child</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Music, title: "Music", desc: "Vocal and instrumental training covering classical and contemporary genres." },
              { icon: Sparkles, title: "Dance", desc: "Expressive movement through various traditional and modern dance forms." },
              { icon: Palette, title: "Art & Craft", desc: "Exploring colors, shapes, and textures to inspire visual storytelling." },
              { icon: Theater, title: "Drama", desc: "Theater workshops for building confidence, speech, and performance skills." },
              { icon: Trophy, title: "Sports", desc: "Physical education programs fostering teamwork, discipline, and healthy competition." },
              { icon: Mic, title: "Debate & Public Speaking", desc: "Sharpening rhetorical skills and encouraging articulate expression." }
            ].map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  <activity.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{activity.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{activity.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight italic">
                Why Activities <br /> <span className="text-neutral-500">Matter</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Builds Confidence", desc: "Platforms to perform and present help overcome stage fright." },
                  { title: "Improves Teamwork", desc: "Collaborative activities foster mutual respect and coordination." },
                  { title: "Enhances Creativity", desc: "Freedom to explore and innovate beyond standard curricula." },
                  { title: "Develops Leadership", desc: "Taking initiative in group settings prepares for future roles." }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="w-2 h-2 rounded-full bg-neutral-500 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight text-white group-hover:translate-x-2 transition-transform">{benefit.title}</h4>
                      <p className="text-neutral-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-neutral-700"
            >
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?auto=format&fit=crop&q=80&w=1471" 
                alt="Activities Hub" 
                className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <Sparkles className="w-12 h-12 text-white mb-4 animate-pulse" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Innovation Center</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Explore Your <br /> <span className="text-neutral-500">Talents</span> at Sunrise
            </h2>
            <div className="flex justify-center mt-16 group">
              <Link to="/inquiry" className="relative">
                <button className="px-10 py-5 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3">
                  Contact/Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Holistic Excellence
        </p>
      </div>
    </div>
  );
};

export default CoCurricular;
