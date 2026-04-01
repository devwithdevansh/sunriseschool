import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Palette, Theater, School, Trophy, Award, Sparkles, Users, GraduationCap, ArrowRight, BookOpen, Globe, MessageCircle, Quote, PaletteIcon, MusicIcon, MicIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Section from '../components/Section.jsx';

const CoCurricular = () => {
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
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-400 mb-6 block italic">Beyond the Classroom</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.8] md:leading-[0.8]">
              Where Talent <br /><span className="text-neutral-500">Meets</span> <br /> Opportunity
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-500 font-medium leading-relaxed italic">
              "Nurturing the creative, athletic, and rhetorical potential of every student through structured discovery."
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-neutral-900 to-transparent"></div>
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
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-neutral-300 italic">Talent Discovery</span>
             <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-neutral-900 leading-[0.9]">
                "Every child has a talent — <br />
                <span className="text-neutral-200">we help them discover it"</span>
             </h2>
        </motion.div>
      </section>

      {/* 3. CATEGORY SECTION [REFINED] */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Structural Growth</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">Life Stage <span className="text-neutral-300 font-normal">Activities</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: School, title: "Primary Section", desc: "Foundational activities focused on curiosity, imagination, and basic skills development." },
              { icon: GraduationCap, title: "Secondary Section", desc: "Structured programs to develop critical thinking, artistic expression, and athletic skills." },
              { icon: Award, title: "Higher Secondary Section", desc: "Advanced workshops and competitive platforms for professional and creative pursuits." }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-neutral-50 p-12 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-8 mx-auto group-hover:rotate-12 transition-all duration-500 shadow-sm">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className="text-neutral-500 text-xs font-black uppercase tracking-widest leading-loose">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED ACTIVITIES [NEW] */}
      <section className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Signature Highlights</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Featured <span className="text-neutral-400 font-normal">Experience</span></h2>
            </div>

            <div className="space-y-32">
                {[
                    {
                        title: "The Creative Arts",
                        desc: "A sanctuary for visual storytellers and creative minds. Our arts program spans traditional craft to modern digital aesthetics, encouraging students to define their unique visual language.",
                        img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1471",
                        icon: PaletteIcon
                    },
                    {
                        title: "Rhetorical Excellence",
                        desc: "Building the voices of tomorrow. Our debating and public speaking workshops empower students with the rhetorical tools needed to articulate complex ideas with confidence and precision.",
                        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1470",
                        icon: MicIcon
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                    >
                        <div className="flex-1 w-full relative group">
                            <div className="aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl relative">
                                <img 
                                    src={feature.img} 
                                    alt={feature.title} 
                                    className="w-full h-full object-cover grayscale brightness-90 transition-all duration-[2000ms] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100" 
                                />
                                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-10">
                            <div className="space-y-4">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">{feature.title}</h3>
                            </div>
                            <p className="text-xl text-neutral-500 leading-relaxed font-light italic">
                                "{feature.desc}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. ACTIVITIES GRID [UPGRADED] */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-neutral-300 italic">Academic Synergy</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">The Activities <span className="text-neutral-500 font-normal">Spectrum</span></h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              { icon: Music, title: "Music Academy", desc: "Vocal and instrumental training covering classical and contemporary genres." },
              { icon: Sparkles, title: "Dance & Motion", desc: "Expressive movement through various traditional and modern dance forms." },
              { icon: Palette, title: "Visual Arts", desc: "Exploring colors, shapes, and textures to inspire visual storytelling." },
              { icon: Theater, title: "Theater Group", desc: "Workshops for building confidence, speech, and performance skills." },
              { icon: Trophy, title: "Athletic Club", desc: "Strength and teamwork training across multiple sporting disciplines." },
              { icon: Mic, title: "Public Speaking", desc: "Sharpening rhetorical skills and encouraging eloquent expression." }
            ].map((activity, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="h-full"
              >
                  <Card 
                    title={activity.title} 
                    icon={activity.icon} 
                    description={activity.desc}
                    className="h-full border-neutral-50"
                  />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. BENEFITS SECTION [STANDARDIZED] */}
      <section className="py-32 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
               <span className="text-[10px] font-black tracking-[0.4em] text-neutral-600 uppercase mb-8 block italic">Strategic Impact</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.8] italic">
                Why Activities <br /> <span className="text-neutral-500 font-normal">Matter</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { title: "Confidence", desc: "Empowering students to find their voice and own the stage." },
                  { title: "Teamwork", desc: "Building collaboration through collective creative pursuits." },
                  { title: "Creativity", desc: "Unlocking lateral thinking and unique problem-solving skills." },
                  { title: "Leadership", desc: "Fostering initiative and ownership of talent development." }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-10 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-500 shadow-inner">
                        <Sparkles className="w-6 h-6" />
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
              className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl border-4 border-white/5 p-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1470" 
                alt="Student Collaboration" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-neutral-900/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION [UPGRADED] */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
             <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-12 block text-neutral-200">Admissions 2024-25 Open</span>
            <h2 className="text-6xl md:text-9xl font-black mb-20 tracking-tighter uppercase leading-[0.8] md:leading-[0.8] text-neutral-900 italic">
              Enroll at <br /> <span className="text-neutral-200 font-normal italic">Sunrise</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-24">
              <Link to="/inquiry" className="px-16 py-8 bg-neutral-900 text-white font-black text-sm uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all duration-700 flex items-center justify-center gap-6 group rounded-full shadow-2xl">
                Ready to Join
                <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-neutral-900 py-16 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-neutral-700">
          © {new Date().getFullYear()} Sunrise Talent Group • Premium Holistic Care
        </p>
      </div>
    </div>
  );
};

export default CoCurricular;
