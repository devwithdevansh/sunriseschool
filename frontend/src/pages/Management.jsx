import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Info, Users, GraduationCap, Shield, Award, Sparkles, Binary, ShieldCheck, TrendingUp, MapPin, Phone, Mail, Camera, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Management = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-400 mb-6 block italic">Institutional Leadership</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.8] md:leading-[0.8]">
              Leadership <br /><span className="text-neutral-500">That Shapes</span> <br /> Futures
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-500 font-medium leading-relaxed italic">
              "A dedicated team of visionaries committed to student success and institutional excellence."
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

      {/* 2. SIGNATURE STATEMENT [NEW] */}
      <section className="py-20 bg-neutral-50 px-4 flex items-center justify-center border-y border-neutral-100">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
        >
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-neutral-300 italic">Signature Foundation</span>
             <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-neutral-900 leading-[0.9]">
                "Strong leadership <br />
                <span className="text-neutral-200">builds strong institutions"</span>
             </h2>
        </motion.div>
      </section>

      {/* 3. KEY MEMBERS HIGHLIGHT [UPGRADED] */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Global Perspective</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Senior <span className="text-neutral-300 font-normal">Leadership</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Guiding the institution with wisdom, experience, and a student-first mindset.</p>
          </div>

          <div className="space-y-32">
            {[
              {
                name: "Dr. Rajesh Vardar",
                role: "Principal",
                desc: "With over 25 years of experience in educational leadership, Dr. Vardar is dedicated to academic excellence and nurturing holistic student growth. He believes that every child has a unique potential that must be identified and polished.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
                message: "Education is not only about information; it is about building the character that defines a person’s life."
              },
              {
                name: "Mrs. Sneha Ganatra",
                role: "Vice Principal",
                desc: "A visionary educator focusing on creative learning methodologies and building strong character among students through value-based education. She oversees the daily academic operations and ensures the highest standards of discipline.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                message: "Every child is a story waiting to be written. We provide the pen and the ink for their journey."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 w-full relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl relative">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale brightness-90 transition-all duration-[2000ms] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100" 
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 text-white rounded-full flex items-center justify-center p-6 text-center shadow-3xl text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                    {member.role}
                  </div>
                </div>

                <div className="flex-1 space-y-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 italic">{member.role}</span>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">{member.name}</h3>
                  </div>
                  
                  <div className="relative pt-10 border-t border-neutral-100">
                    <Quote className="absolute top-0 left-0 w-8 h-8 text-neutral-100 -translate-y-1/2" />
                    <p className="text-2xl md:text-3xl font-light italic text-neutral-800 leading-relaxed group-hover:text-neutral-900 transition-colors duration-500">
                      "{member.message}"
                    </p>
                  </div>

                  <p className="text-lg text-neutral-500 leading-relaxed font-medium">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP VALUES [NEW] */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">The Pillars</span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">Foundational <span className="text-neutral-300">Values</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { icon: Shield, title: "Discipline", desc: "Setting the standard for behavior and academic focus." },
              { icon: Sparkles, title: "Vision", desc: "Always looking ahead to integrate future pedagogies." },
              { icon: ShieldCheck, title: "Responsibility", desc: "Absolute accountability for every student’s path." },
              { icon: Award, title: "Excellence", desc: "Unwavering commitment to highest institutional results." }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-12 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:rotate-12 transition-all duration-500">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-black uppercase tracking-widest leading-loose">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. ADMIN TEAM SECTION [REFINED] */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Operational Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Strategic <span className="text-neutral-500 font-normal">Admin Team</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium italic">"The backend force ensuring smooth operations and quality standards across all departments."</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
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
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center group"
              >
                <div className="w-28 h-28 rounded-full bg-white overflow-hidden mx-auto mb-8 shadow-inner ring-8 ring-white p-2">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-neutral-900 leading-none">{member.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mt-4 italic">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION [UPGRADED] */}
      <section className="py-40 bg-neutral-900 text-white overflow-hidden relative border-t border-white/5">
         <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <span className="text-[10px] font-black tracking-[0.5em] uppercase mb-12 block text-neutral-700 italic">Direct Channel</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black mb-16 tracking-tighter uppercase leading-[0.8] md:leading-[0.8] italic">
              Connect with <br /> <span className="text-neutral-500 font-normal italic">Our Leadership</span>
            </h2>
            <div className="flex justify-center mt-20">
              <Link to="/contact">
                <button className="px-16 py-8 bg-white text-neutral-900 font-black text-sm uppercase tracking-[0.4em] hover:bg-neutral-200 transition-all duration-500 flex items-center justify-center gap-6 group rounded-full shadow-3xl">
                  Contact Office
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-all duration-500" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-16 border-t border-neutral-50 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-300 italic">
          © {new Date().getFullYear()} Sunrise School Rajkot • Institutional Authority • Leadership Group
        </p>
      </div>
    </div>
  );
};

export default Management;
