import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Users, GraduationCap, Shield, Award, Sparkles, ShieldCheck, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const Management = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Light) ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/40 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block italic">Institutional Leadership</span>
            <h1 className="text-[clamp(3rem,8vw,9rem)] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Leadership <br /><span className="text-gray-400 font-light">That Shapes</span> <br />Futures
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed italic">
              "A dedicated team of visionaries committed to student success and institutional excellence."
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-16 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-brand-orange to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. SIGNATURE STATEMENT (Light gray) ───────────────────── */}
      <section className="py-24 bg-gray-50 px-4 flex items-center justify-center border-y border-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="text-center"
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-brand-orange italic">Signature Foundation</span>
          <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-black italic tracking-tighter text-gray-900 leading-[0.9]">
            "Strong leadership <br /><span className="text-brand-blue">builds strong institutions"</span>
          </h2>
        </motion.div>
      </section>

      {/* ── 3. SENIOR LEADERSHIP (White) ──────────────────────────── */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Our People</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Senior <span className="text-brand-blue font-light">Leadership</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Guiding the institution with wisdom, experience, and a student-first mindset.</p>
          </div>

          <div className="space-y-28">
            {[
              {
                name: 'Dr. Rajesh Vardar', role: 'Principal',
                desc: 'With over 25 years of experience in educational leadership, Dr. Vardar is dedicated to academic excellence and nurturing holistic student growth. He believes that every child has a unique potential that must be identified and polished.',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
                message: 'Education is not only about information; it is about building the character that defines a person\'s life.'
              },
              {
                name: 'Mrs. Sneha Ganatra', role: 'Vice Principal',
                desc: 'A visionary educator focusing on creative learning methodologies and building strong character among students through value-based education. She ensures the highest standards of discipline.',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
                message: 'Every child is a story waiting to be written. We provide the pen and the ink for their journey.'
              }
            ].map((member, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 w-full relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl relative">
                    <img src={member.img} alt={member.name}
                      className="w-full h-full object-cover brightness-90 transition-all duration-[2500ms] group-hover:scale-110 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent group-hover:opacity-0 transition-opacity duration-1000" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange text-white rounded-full flex items-center justify-center p-6 text-center shadow-2xl text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                    {member.role}
                  </div>
                </div>
                <div className="flex-1 space-y-10">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange italic">{member.role}</span>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">{member.name}</h3>
                  </div>
                  <div className="relative pt-10 border-t border-gray-100">
                    <Quote className="absolute top-0 left-0 w-8 h-8 text-brand-orange/40 -translate-y-1/2" />
                    <p className="text-2xl md:text-3xl font-light italic text-gray-700 leading-relaxed">"{member.message}"</p>
                  </div>
                  <p className="text-lg text-gray-500 leading-relaxed font-medium">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FOUNDATIONAL VALUES (Blue gradient) ─────────────────── */}
      <section className="py-28 bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-blue-200 italic">The Pillars</span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">Foundational <span className="text-blue-200">Values</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: 'Discipline', desc: 'Setting the standard for behavior and academic focus.' },
              { icon: Sparkles, title: 'Vision', desc: 'Always looking ahead to integrate future pedagogies.' },
              { icon: ShieldCheck, title: 'Responsibility', desc: 'Absolute accountability for every student\'s path.' },
              { icon: Award, title: 'Excellence', desc: 'Unwavering commitment to highest institutional results.' },
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-500 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="text-blue-100 text-xs leading-relaxed font-bold uppercase tracking-widest">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. ADMIN TEAM (Light gray) ──────────────────────────────── */}
      <section className="py-32 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Operational Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">Strategic <span className="text-gray-400 font-light">Admin Team</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium italic">"The backend force ensuring smooth operations and quality standards across all departments."</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { name: 'Rahul Mehta', role: 'Academic Coordinator', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Priya Shah', role: 'Administrative Head', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
              { name: 'Amit Trivedi', role: 'Examination Head', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
              { name: 'Neha Vyas', role: 'Activities Coordinator', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
            ].map((member, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 text-center group"
              >
                <div className="w-28 h-28 rounded-full bg-white overflow-hidden mx-auto mb-8 shadow-inner ring-4 ring-gray-100 p-1">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 leading-none">{member.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mt-3 italic">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. ORANGE CTA ─────────────────────────────────────────────── */}
      <section className="py-36 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase mb-8 block text-orange-200 italic">Direct Channel</span>
            <h2 className="text-[clamp(3rem,8vw,9rem)] font-black mb-12 tracking-tighter uppercase leading-[0.85] italic">
              Connect with <br /><span className="text-orange-200 font-light italic">Our Leadership</span>
            </h2>
            <div className="flex justify-center mt-16">
              <Link to="/contact">
                <button className="px-14 py-6 bg-white text-brand-orange font-black text-sm uppercase tracking-[0.4em] hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-5 group rounded-full shadow-2xl hover:-translate-y-1">
                  Contact Office
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-all duration-500" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Management;
