import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Music2, Brain, Users2, Trophy, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: 'blur(15px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const activities = [
  { title: 'Photography Club', icon: Camera, description: 'Capture the world through your lens. Learn the art of visual storytelling.' },
  { title: 'Music & Choir', icon: Music2, description: 'Developing vocal and instrumental skills. Join our school band or choir.' },
  { title: 'Robotics & AI', icon: Brain, description: 'Build and program robots. Explore the future of technology in our STEM lab.' },
  { title: 'Debate & Elocution', icon: Users2, description: 'Master the art of public speaking and critical argumentation.' },
  { title: 'Sports Academy', icon: Trophy, description: 'State-of-the-art facilities for cricket, football, and athletics.' },
  { title: 'Nature Club', icon: Heart, description: 'Environment awareness and sustainability projects within our campus.' },
];

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. CINEMATIC HERO (Dark + orange glow) ──────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)', y: 40 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange/80 mb-6 block">Beyond the Classroom</span>
            <h1 className="text-[clamp(3.75rem,8vw,8rem)] font-black tracking-tighter mb-8 uppercase text-white leading-[0.85]">
              Student <br /><span className="text-brand-orange/60">Activities</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium"
          >
            "Unlocking potential through diverse extracurricular engagement and creative exploration."
          </motion.p>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full fill-white">
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,56C1120,59,1280,53,1360,50.7L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* ── 2. ACTIVITY CARDS (White) ────────────────────────────── */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Explore</span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic"
            >
              Club <span className="text-brand-blue font-light">Activities</span>
            </motion.h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activities.map((activity, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-500">
                  <activity.icon className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-brand-blue transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed text-sm">{activity.description}</p>
                <div className="mt-8 h-[2px] w-0 bg-brand-orange group-hover:w-full transition-all duration-700 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. QUOTE (Light gray) ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-brand-orange italic">Holistic Growth</span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-gray-900 leading-[0.9]">
              "Activities shape character <br /><span className="text-brand-blue">as much as academics"</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA (Orange gradient) ──────────────────────────────── */}
      <section className="py-32 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-orange-200 mb-8 block">Admissions Open</span>
            <h2 className="text-[clamp(3rem,8vw,8rem)] font-black mb-12 tracking-tighter uppercase leading-[0.85] italic">
              Discover Your <br /><span className="text-orange-200 font-light">Passion Here</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/inquiry" className="px-12 py-5 bg-white text-brand-orange font-black text-sm uppercase tracking-[0.3em] hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-4 group rounded-full shadow-2xl hover:-translate-y-1">
                Join Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/co-curricular" className="px-12 py-5 border-2 border-white/60 text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-4 group rounded-full hover:-translate-y-1">
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ActivitiesPage;
