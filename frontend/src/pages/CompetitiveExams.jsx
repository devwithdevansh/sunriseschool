import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Book, Star, Target, GraduationCap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompetitiveExams = () => {
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
              Competitive <span className="text-neutral-500">Exams</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Preparing students for excellence beyond the classroom.
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
              Why Competitive Exams?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light leading-snug text-neutral-800">
              Competitive exams help students develop <span className="font-bold border-b-2 border-neutral-900">analytical thinking</span>, confidence, and a deeper understanding of subjects beyond the <span className="font-bold border-b-2 border-neutral-900">regular curriculum</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. EXAMS GRID SECTION */}
      <section className="py-20 md:py-32 bg-neutral-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our <span className="text-neutral-500">Academic Benchmarks</span></h2>
            <p className="text-neutral-500 max-w-2xl mx-auto font-medium">Empowering students through national and international recognition platforms</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Trophy, title: "Olympiad", desc: "Enhances subject knowledge and problem-solving skills at a global level." },
              { icon: Book, title: "Hindi Prachar Samiti", desc: "Promoting linguistic excellence and cultural depth in the national language." },
              { icon: GraduationCap, title: "Sanskrit Bharti", desc: "Connecting students with ancient wisdom and language foundations." },
              { icon: Star, title: "Humming Bird Exam", desc: "Focusing on logical reasoning and conceptual clarity across grades." },
              { icon: Target, title: "Spell Bee", desc: "Building vocabulary and linguistic precision through competitive spelling." }
            ].map((exam, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-10 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <exam.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-center">{exam.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-center">{exam.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PREPARATION SUPPORT SECTION */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight italic">
                Our <span className="text-neutral-500">Support System</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Expert teacher guidance",
                  "Regular practice sessions",
                  "Special preparation classes",
                  "Performance tracking"
                ].map((point, index) => (
                  <div key={index} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">{point}</h4>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral-900 p-12 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter italic">Benefits for Students</h3>
              <ul className="space-y-8">
                {[
                  { title: "Builds Confidence", desc: "Success in competitive platforms boosts overall self-esteem." },
                  { title: "Academic Performance", desc: "Deep conceptual understanding reflects in regular grades." },
                  { title: "National Recognition", desc: "Opportunities to represent the school at the highest levels." },
                  { title: "Skill Development", desc: "Logical reasoning and time management skills for the future." }
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-6 items-start group">
                    <div className="text-neutral-500 font-black text-2xl group-hover:text-white transition-colors">0{index + 1}</div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-1">{benefit.title}</h4>
                      <p className="text-neutral-400 text-sm">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
              Start Your <br /> <span className="text-neutral-500">Competitive</span> Journey
            </h2>
            <div className="flex justify-center mt-16 group">
              <Link to="/inquiry" className="relative">
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
          © {new Date().getFullYear()} Sunrise School Rajkot • Academic Excellence
        </p>
      </div>
    </div>
  );
};

export default CompetitiveExams;
