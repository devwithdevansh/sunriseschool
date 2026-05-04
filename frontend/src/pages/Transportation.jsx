import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Truck, ShieldCheck, Users, MapPin, ClipboardList, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const Transportation = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Blue gradient) ──────────────────────────────── */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-200 mb-6 block">Safe Transit</span>
            <h1 className="text-[clamp(2.5rem,7.5vw,9rem)] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Transportation <br /><span className="text-blue-200 font-light">Facilities</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 font-medium leading-relaxed">
              Safe and reliable transport for students, ensuring peace of mind for parents.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-14 flex justify-center">
            <div className="w-px h-20 bg-gradient-to-b from-blue-200 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. INTRODUCTION (White) ────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.span variants={itemVariants} className="text-[10px] font-black tracking-[0.4em] uppercase mb-6 block text-brand-orange">Reliable Commute</motion.span>
            <motion.h2 variants={itemVariants} className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-gray-400">Convenient School Transport</motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-gray-800">
              Sunrise School provides{' '}
              <span className="font-bold border-b-2 border-brand-orange">safe</span> and{' '}
              <span className="font-bold border-b-2 border-brand-blue">reliable</span>{' '}
              transportation facilities for students across various areas of Rajkot.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. TRANSPORT TYPES (Light gray) ─────────────────────── */}
      <section className="py-24 md:py-32 bg-gray-50 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Fleet</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-4">Our <span className="text-brand-blue font-light">Vehicles</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {[
              { icon: Bus, title: 'School Bus', desc: 'Our fleet of modern buses provides safe transit with optimized routes across the city.' },
              { icon: Truck, title: 'School Van', desc: 'Reliable van services for areas with narrow access, maintaining high safety standards.' },
            ].map((type, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-full bg-brand-blue text-white flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500">
                  <type.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{type.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. SAFETY FEATURES (White) ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Commitment</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Safety <span className="text-gray-400 font-light">First</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Built on a foundation of trust and meticulous planning</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, title: 'Experienced Drivers', desc: 'Verified professionals with extensive training and record.' },
              { icon: ShieldCheck, title: 'Well-Maintained', desc: 'Regular vehicle safety checks and fitness certifications.' },
              { icon: MapPin, title: 'Monitored Routes', desc: 'Strategically planned routes for timely and safe arrivals.' },
              { icon: ClipboardList, title: 'Staff Supervision', desc: 'Assigned staff on every vehicle to oversee student safety.' },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }}
                className="p-8 border border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-brand-orange/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3 leading-none">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. COVERAGE & PROCESS (Orange gradient) ─────────────── */}
      <section className="py-28 md:py-40 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">Areas <span className="text-orange-200 font-light">Covered</span></h2>
              <p className="text-xl text-orange-100 font-light leading-relaxed mb-10 max-w-md">
                Our transportation services cover major residential areas and arterial routes of{' '}
                <span className="text-white font-bold">Rajkot</span> with efficient route planning for minimum transit time.
              </p>
              <div className="flex items-center gap-4 text-orange-200 font-black tracking-widest uppercase text-xs">
                <CheckCircle2 className="w-5 h-5 text-white" /> Comprehensive Local Reach
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none text-orange-200">How to <span className="text-white font-normal">Avail</span></h2>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Contact school office', desc: 'Visit our administrative desk for initial inquiry.' },
                  { step: '02', title: 'Select your route', desc: 'Choose from our pre-defined pickup and drop nodes.' },
                  { step: '03', title: 'Confirm registration', desc: 'Formalize the application with basic documentation.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="text-4xl font-black tracking-tighter text-white/30 group-hover:text-white transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-orange-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA (Dark) ─────────────────────────────────────────── */}
      <section className="py-36 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block">Enroll for Transport</span>
            <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-black mb-12 tracking-tighter uppercase leading-[0.85] italic">
              Enroll for <br /><span className="text-gray-500 font-light">Transportation</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/inquiry" className="px-12 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-4 group rounded-full shadow-2xl hover:-translate-y-1">
                Inquiry / Contact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Transportation;
