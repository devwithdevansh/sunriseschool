import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Truck, ShieldCheck, Users, MapPin, ClipboardList, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transportation = () => {
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
              Transportation <br /><span className="text-neutral-500">Facilities</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Safe and reliable transport for students, ensuring peace of mind for parents.
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
              Convenient School Transport
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Sunrise School provides <span className="font-bold border-b-2 border-neutral-900">safe</span> and <span className="font-bold border-b-2 border-neutral-900">reliable</span> transportation facilities for students across various areas of Rajkot.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. TRANSPORT TYPES SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {[
              { icon: Bus, title: "School Bus", desc: "Our fleet of modern buses provides safe transit with optimized routes across the city." },
              { icon: Truck, title: "School Van", desc: "Reliable van services for areas with narrow access, maintaining high safety standards." }
            ].map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-12 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-8 group-hover:bg-neutral-800 group-hover:scale-105 transition-all">
                  <type.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{type.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-lg">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SAFETY FEATURES SECTION */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Safety <span className="text-neutral-500">First</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Built on a foundation of trust and meticulous planning</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, title: "Experienced Drivers", desc: "Verified professionals with extensive training and record." },
              { icon: ShieldCheck, title: "Well-Maintained", desc: "Regular vehicle safety checks and fitness certifications." },
              { icon: MapPin, title: "Monitored Routes", desc: "Strategically planned routes for timely and safe arrivals." },
              { icon: ClipboardList, title: "Staff Supervision", desc: "Assigned staff on every vehicle to oversee student safety." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 border border-neutral-100 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 leading-none">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. COVERAGE & 6. PROCESS SECTION */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic leading-none">
                Areas Covered
              </h2>
              <p className="text-xl text-neutral-400 font-light leading-relaxed mb-10 max-w-md">
                Our transportation services cover major residential areas and arterial routes of <span className="text-white font-bold leading-none">Rajkot</span> with efficient route planning for minimum transit time.
              </p>
              <div className="flex items-center gap-4 text-neutral-500 font-black tracking-widest uppercase text-xs">
                <CheckCircle2 className="w-4 h-4" /> Comprehensive Local Reach
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic leading-none text-neutral-500">
                How to Avail
              </h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Contact school office", desc: "Visit our administrative desk for initial inquiry." },
                  { step: "02", title: "Select your route", desc: "Choose from our pre-defined pickup and drop nodes." },
                  { step: "03", title: "Confirm registration", desc: "Formalize the application with basic documentation." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="text-4xl font-black tracking-tighter text-neutral-800 group-hover:text-white transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-neutral-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Enroll for <br /> <span className="text-neutral-500 tracking-tighter">Transportation</span>
            </h2>
            <div className="flex justify-center mt-16 group">
              <Link to="/inquiry" className="relative shadow-2xl">
                <button className="px-10 py-5 bg-neutral-900 text-white font-black text-lg uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 flex items-center gap-3">
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
          © {new Date().getFullYear()} Sunrise School Rajkot • Safe Transit
        </p>
      </div>
    </div>
  );
};

export default Transportation;
