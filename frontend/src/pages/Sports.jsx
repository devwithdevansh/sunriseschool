import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Users, LayoutGrid, Zap, Heart, Award, ArrowRight, MessageCircle, Quote, ShieldCheck, Dumbbell, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Section from '../components/Section.jsx';

const Sports = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. HERO SECTION [REDESIGNED] */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-400 mb-8 block italic">The Athletic Spirit</span>
            <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter uppercase leading-[0.7] md:leading-[0.7] mb-12">
              Sports & <br /> <span className="text-neutral-200 italic">Athletics</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-medium leading-relaxed italic border-t border-neutral-100 pt-10">
              "Building strength, discipline, and champions through elite training and competitive rigor."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BIG STATEMENT SECTION [NEW] */}
      <section className="py-24 md:py-40 bg-neutral-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-12 block text-neutral-700 italic">Core Athletic Mantra</span>
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
                    "Champions are <br /> not born. <br />
                    <span className="text-neutral-700">They are trained."</span>
                </h2>
            </motion.div>
         </div>
      </section>

      {/* 3. ACHIEVEMENT FLOW [RESTRUCTURED] */}
      <section className="py-20 md:py-40 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Progression Path</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Achievement <span className="text-neutral-200 font-normal italic">Levels</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 relative"
          >
             {/* Progress Line */}
             <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] bg-neutral-100 z-0"></div>

            {[
              { icon: LayoutGrid, title: "School", desc: "First stage of skill mastery." },
              { icon: Medal, title: "District", desc: "Showcasing regional excellence." },
              { icon: Award, title: "State", desc: "Elite state-wide performance." },
              { icon: Trophy, title: "National", desc: "Ultimate institutional glory." }
            ].map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center space-y-6 relative z-10 group"
              >
                 <div className="w-24 h-24 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-xl">
                    <level.icon className="w-10 h-10" />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">{level.title}</h3>
                    <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest">{level.desc}</p>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SPORTS SHOWCASE [REDESIGNED] */}
      <section className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Disciplines</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic text-neutral-900 leading-none">Athletic <span className="text-neutral-400 font-normal italic">Showcase</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cricket", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800", size: "lg:col-span-2" },
              { title: "Football", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800" },
              { title: "Athletics", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800" },
              { title: "Indoor Games", img: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800", size: "lg:col-span-2" }
            ].map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden group rounded-[2.5rem] bg-neutral-900 aspect-video lg:aspect-auto h-[400px] ${sport.size || ""}`}
              >
                <img src={sport.img} alt={sport.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2000ms]" />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">{sport.title}</h3>
                    <div className="w-0 group-hover:w-full h-[2px] bg-white transition-all duration-700 mt-2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRAINING SYSTEM [NEW] */}
      <section className="py-20 md:py-32 bg-white border-b border-neutral-100 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">The Methodology</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">Training <span className="text-neutral-500 font-normal italic">System</span></h2>
            </div>

            <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-3 gap-16"
            >
                {[
                    { icon: Users, title: "Coaching", desc: "Expert guidance from professional athletic mentors." },
                    { icon: Timer, title: "Practice", desc: "Rigorous daily drills focusing on stamina and skill." },
                    { icon: Zap, title: "Competition", desc: "Periodic tournaments to build elite psychological endurance." }
                ].map((step, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center space-y-8 group"
                    >
                        <div className="w-20 h-20 rounded-[1.5rem] bg-neutral-50 text-neutral-900 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-neutral-100">
                            <step.icon className="w-8 h-8" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black uppercase tracking-tighter italic group-hover:translate-x-2 transition-all duration-500">{step.title}</h3>
                            <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest leading-loose italic max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* 6. BENEFITS SECTION [REFINED] */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
               <span className="text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase mb-8 block italic">Athlete Transformation</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.8] italic">
                Athletic <br /> <span className="text-neutral-500 font-normal">Advantages</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: Heart, title: "Fitness", desc: "Long-term health and peak physical condition." },
                  { icon: ShieldCheck, title: "Teamwork", desc: "Unified goals and collaborative achievement." },
                  { icon: Dumbbell, title: "Discipline", desc: "Mental toughness and adherence to growth." },
                  { icon: Zap, title: "Leadership", desc: "Taking initiative on the local and global field." }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-10 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-500 shadow-inner">
                        <benefit.icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-2xl font-black uppercase tracking-tight text-white group-hover:translate-x-4 transition-all duration-700">{benefit.title}</h4>
                      <p className="text-sm text-neutral-500 uppercase tracking-widest font-black mt-2 italic">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl bg-neutral-900 p-4 border-4 border-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1470" 
                alt="Sprinter at Sunrise" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2000ms] brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-all duration-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION [UPGRADED] */}
      <section className="py-40 bg-white overflow-hidden relative border-t border-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
          >
             <span className="text-[10px] font-black tracking-[0.6em] uppercase text-neutral-200 mb-20 block italic italic">Athlete Recruitment Open</span>
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] md:leading-[0.8] text-neutral-900 italic">
              Join Our <br /> <span className="text-neutral-100 font-normal italic italic">Programs</span>
            </h2>
            <div className="flex justify-center mt-24">
              <Link to="/inquiry" className="px-20 py-10 bg-neutral-900 text-white font-black text-sm uppercase tracking-[0.5em] hover:bg-neutral-800 transition-all duration-700 flex items-center justify-center gap-8 group rounded-full shadow-3xl">
                Ready to Join
                <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-neutral-900 py-16 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-neutral-700">
          © {new Date().getFullYear()} Sunrise Athletic Excellence Group • Elite Athlete Care
        </p>
      </div>
    </div>
  );
};

export default Sports;
