import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Info, Users, GraduationCap, Shield, Award, Sparkles, Binary, ShieldCheck, TrendingUp, MapPin, Phone, Mail, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Management = () => {
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
              Management <span className="text-neutral-500">Team</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Guiding the institution with vision, discipline, and excellence.
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

      {/* 2. INTRO SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-neutral-400">
              Leadership That Inspires
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Our management team plays a vital role in shaping the future of our students by maintaining <span className="font-bold border-b-2 border-neutral-900">discipline</span>, quality education, and a positive learning environment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY MEMBERS SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Dr. Rajesh Vardar",
                role: "Principal",
                desc: "With over 25 years of experience in educational leadership, Dr. Vardar is dedicated to academic excellence and nurturing holistic student growth.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Mrs. Sneha Ganatra",
                role: "Vice Principal",
                desc: "A visionary educator focusing on creative learning methodologies and building strong character among students through value-based education.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 md:p-12 border border-neutral-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neutral-900 group-hover:scale-105 transition-transform duration-500 shrink-0">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 mb-2 block">
                      {member.role}
                    </span>
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{member.name}</h3>
                    <p className="text-neutral-600 leading-relaxed font-medium">{member.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ADMIN TEAM SECTION */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Strategic <span className="text-neutral-500">Admin Team</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">The backend force ensuring smooth operations and quality standards.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Rahul Mehta", role: "Academic Coordinator", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Priya Shah", role: "Administrative Head", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
              { name: "Amit Trivedi", role: "Examination Head", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
              { name: "Neha Vyas", role: "Activities Coordinator", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-neutral-100 overflow-hidden mx-auto mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. MESSAGE SECTION */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ShieldCheck className="w-16 h-16 text-neutral-500 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Our Commitment</h2>
            <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              "We are committed to providing quality education and nurturing responsible citizens for the future. Every decision we make is driven by the potential of our students."
            </p>
          </motion.div>
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
              Connect with <br /> <span className="text-neutral-500">Our Team</span>
            </h2>
            <div className="flex justify-center mt-16">
              <Link to="/contact">
                <button className="px-10 py-5 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3 group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-8 border-t border-neutral-100 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-300">
          © {new Date().getFullYear()} Sunrise School Rajkot • Leading with Vision
        </p>
      </div>
    </div>
  );
};

export default Management;
