import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Book, Star, Target, GraduationCap, Award, CheckCircle2, ArrowRight, Quote, Sparkles, TrendingUp, ShieldCheck, Zap, Laptop, ClipboardList, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Section from '../components/Section.jsx';

const CompetitiveExams = () => {
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
      {/* 1. HERO SECTION [REDESIGNED] */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-300 mb-8 block italic">The Elite Academic Path</span>
            <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter uppercase leading-[0.7] md:leading-[0.7] mb-12">
              Competitive <br /> <span className="text-neutral-200">Exams</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-medium leading-relaxed italic border-t border-neutral-100 pt-10">
              "Nurturing analytical minds and building global recognition through strategic preparation."
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
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-12 block text-neutral-700 italic">Institutional Mission</span>
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
                    "We don’t prepare <br /> students for exams. <br />
                    <span className="text-neutral-700">We prepare them <br /> for excellence"</span>
                </h2>
            </motion.div>
         </div>
      </section>

      {/* 3. EXAMS LIST LAYOUT [UPGRADED] */}
      <section className="py-20 md:py-32 bg-white px-4 border-b border-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Academic Recognition</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">The Exams <span className="text-neutral-100 font-normal italic">We Master</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              { icon: Trophy, title: "Olympiads", desc: "Scientific and mathematical challenges at a global level.", rank: "National Tier" },
              { icon: Book, title: "Hindi Prachar Samiti", desc: "Linguistic excellence and cultural depth in the national language.", rank: "Institutional Tier" },
              { icon: GraduationCap, title: "Sanskrit Bharti", desc: "Connecting students with spiritual wisdom and heritage foundations.", rank: "Legacy Tier" },
              { icon: Star, title: "Humming Bird", desc: "Logical reasoning and technical brilliance for junior scholars.", rank: "Academic Tier" },
              { icon: Target, title: "Spell Bee", desc: "Building vocabulary and linguistic precision through competitive spelling.", rank: "Skill Tier" }
            ].map((exam, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 20 }}
                className="flex flex-col md:flex-row items-center gap-10 p-10 md:p-14 border border-neutral-50 rounded-[2.5rem] bg-neutral-50 hover:bg-neutral-900 group transition-all duration-700"
              >
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white text-neutral-900 flex items-center justify-center shrink-0 shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                    <exam.icon className="w-8 h-8 md:w-10 md:h-10" />
                 </div>
                 <div className="flex-1 text-center md:text-left space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 group-hover:text-neutral-500 transition-colors">{exam.rank}</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">{exam.title}</h3>
                    <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors text-lg md:text-xl font-light italic leading-relaxed max-w-2xl">
                        "{exam.desc}"
                    </p>
                 </div>
                 <ArrowRight className="hidden md:block w-10 h-10 text-neutral-100 group-hover:text-white group-hover:translate-x-4 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PREPARATION JOURNEY [NEW] */}
      <section className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Institutional Strategy</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">The Prep <span className="text-neutral-300 font-normal">Journey</span></h2>
            </div>

            <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {[
                    { icon: Laptop, title: "01. Learning", desc: "Expert conceptual clarity through specialist faculty guidance." },
                    { icon: ClipboardList, title: "02. Practice", desc: "Rigorous drills focused on speed and problem-solving accuracy." },
                    { icon: ClipboardList, title: "03. Testing", desc: "Real-world exam simulations to build enduring stamina." },
                    { icon: Medal, title: "04. Success", desc: "Recognition on national platforms and global certification." }
                ].map((step, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-12 space-y-8 flex flex-col justify-between group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-4 group-hover:rotate-12 transition-all duration-500 shadow-sm">
                            <step.icon className="w-8 h-8" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:translate-x-2 transition-all duration-500">{step.title}</h3>
                            <p className="text-neutral-500 text-xs font-black uppercase tracking-widest leading-loose italic">{step.desc}</p>
                        </div>
                        {index < 3 && <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-neutral-200"></div>}
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* 5. RESULTS SECTION [REFINED] */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase block text-neutral-600">Proved Performance</span>
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">Excellence <span className="text-neutral-700 font-normal italic">Numbers</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 text-center items-center">
            {[
              { number: "100+", label: "Success Stories", desc: "Students achieving distinction and national tier certification." },
              { number: "Top 10", label: "National Ranks", desc: "Consistent presence in the highest percentile of academic tests." },
              { number: "Strong", label: "Performance", desc: "Measured success across linguistic, logic, and scientific platforms." }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="space-y-4"
              >
                <div className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none">{stat.number}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-500 mt-6 block">{stat.label}</div>
                <p className="text-neutral-700 text-xs font-black uppercase tracking-widest leading-loose max-w-[200px] mx-auto mt-6 italic">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GROWTH BLOCKS [NEW/UPGRADED] */}
      <section className="py-40 bg-white px-4 border-t border-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Strategic Advantages</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic text-neutral-900 leading-none">Holistic <span className="text-neutral-200 font-normal italic">Growth</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {[
              { title: "Confidence", icon: ShieldCheck, desc: "Building unshakable academic ego through national success." },
              { title: "Recognition", icon: Medal, desc: "Earning certifications recognized by leading institutional boards." },
              { title: "Skill Mastery", icon: TrendingUp, desc: "Logic and reasoning skills that ensure life-long academic depth." }
            ].map((block, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="text-center space-y-8 group"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto group-hover:bg-neutral-900 group-hover:text-white transition-all duration-700 shadow-sm">
                  <block.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">{block.title}</h3>
                  <p className="text-neutral-400 text-xs font-black uppercase tracking-[0.2em] leading-loose italic max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">{block.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION [UPGRADED] */}
      <section className="py-40 bg-white overflow-hidden relative border-t border-neutral-50 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
          >
             <span className="text-[10px] font-black tracking-[0.6em] uppercase text-neutral-200 mb-20 block">Institutional Inquiry</span>
            <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] md:leading-[0.8] text-neutral-900 italic">
              Enroll at <br /> <span className="text-neutral-100 font-normal italic">Sunrise</span>
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
      <div className="bg-neutral-50 py-16 text-center border-t border-neutral-100">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-neutral-300 italic">
          © {new Date().getFullYear()} Sunrise School Rajkot • Institutional Excellence Group
        </p>
      </div>
    </div>
  );
};

export default CompetitiveExams;
