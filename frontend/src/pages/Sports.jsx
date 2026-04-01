import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Users, LayoutGrid, Zap, Heart, Award, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sports = () => {
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight">
              Sports & <br /><span className="text-neutral-500">Athletics</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed italic">
              Building strength, discipline, and team spirit.
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
              Importance of Sports
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Sports play a vital role in the <span className="font-bold border-b-2 border-neutral-900">overall development</span> of students by improving fitness, teamwork, and <span className="font-bold border-b-2 border-neutral-900">leadership</span> skills.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. ACHIEVEMENT LEVELS SECTION */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Our <span className="text-neutral-500">Achievement Levels</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-medium">From campus grounds to national arenas, we strive for glory at every stage.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: LayoutGrid, title: "School Level", desc: "Inter-class competitions fostering basic skills and introductory competitive spirit." },
              { icon: Medal, title: "District Level", desc: "Competing against top schools across the district to showcase local excellence." },
              { icon: Award, title: "State Level", desc: "Representing the school in state-wide championships with focus on high performance." },
              { icon: Trophy, title: "National Level", desc: "Our ultimate benchmark, producing athletes who compete at the highest national forums." }
            ].map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-neutral-800 p-10 rounded-2xl border border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white text-neutral-900 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <level.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{level.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{level.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SPORTS ACTIVITIES GRID */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Sports <span className="text-neutral-500">Activities</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">A diverse range of athletic avenues for physical excellence</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: Zap, title: "Cricket", img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400" },
              { icon: Zap, title: "Football", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400" },
              { icon: Zap, title: "Athletics", img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400" },
              { icon: Zap, title: "Indoor Games", img: "https://images.unsplash.com/photo-1629904853716-f0bc54ea4813?auto=format&fit=crop&q=80&w=400" },
              { icon: Zap, title: "Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" }
            ].map((sport, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-xl border border-neutral-100 shadow-md hover:shadow-2xl transition-all duration-300 group text-center"
              >
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                  <img src={sport.img} alt={sport.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors"></div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{sport.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight italic">
                Benefits of <br /> <span className="text-neutral-500">Sports</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Physical Fitness", desc: "Improves posture, coordination, and overall long-term health." },
                  { title: "Teamwork", desc: "Fosters cooperation and shared goal-oriented thinking." },
                  { title: "Discipline", desc: "Develops mental toughness and adherence to structured growth." },
                  { title: "Leadership Skills", desc: "Taking initiative on the field prepares for life's challenges." }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-center group">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 group-hover:bg-neutral-700 transition-colors">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight">{benefit.title}</h4>
                      <p className="text-neutral-500 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-900 p-12 rounded-3xl text-white text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <Target className="w-16 h-16 text-neutral-500 mx-auto mb-10 group-hover:scale-125 transition-transform" />
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter italic leading-none">Victory Favors <br />The Disciplined</h3>
              <p className="text-neutral-400 font-medium leading-relaxed italic max-w-sm mx-auto">
                "Our athletes are trained not just to win games, but to win at life through persistence and integrity."
              </p>
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
              Join Our <br /> <span className="text-neutral-500">Sports</span> Programs
            </h2>
            <div className="flex justify-center mt-16 group">
              <Link to="/inquiry" className="relative">
                <button className="px-10 py-5 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3 shadow-2xl">
                  Inquiry / Contact
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
          © {new Date().getFullYear()} Sunrise School Rajkot • Athletic Excellence
        </p>
      </div>
    </div>
  );
};

export default Sports;
