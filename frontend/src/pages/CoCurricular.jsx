import React from 'react';
import { motion } from 'framer-motion';
import { Music, Mic, Palette, Theater, Trophy, Award, Sparkles, ArrowRight, PaletteIcon, MicIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const CoCurricular = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Light + dot grid) ────────────────────────────────── */}
      <section className="relative pt-36 pb-28 md:pt-52 md:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-50/40 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block italic">Beyond the Classroom</span>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Where Talent <br /><span className="text-gray-400 font-light">Meets</span> <br />Opportunity
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed italic">
              "Nurturing the creative, athletic, and rhetorical potential of every student through structured discovery."
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-16 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-brand-orange to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. SIGNATURE STATEMENT (Light gray) ────────────────────── */}
      <section className="py-24 bg-gray-50 px-4 flex items-center justify-center border-y border-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="text-center"
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-brand-orange italic">Talent Discovery</span>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-gray-900 leading-[0.9]">
            "Every child has a talent — <br /><span className="text-brand-blue">we help them discover it"</span>
          </h2>
        </motion.div>
      </section>

      {/* ── 3. LIFE STAGE CATEGORIES (White) ─────────────────────── */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Structural Growth</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">Life Stage <span className="text-brand-blue font-light">Activities</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: Trophy, title: 'Primary Section', desc: 'Foundational activities focused on curiosity, imagination, and basic skills development.' },
              { icon: Award, title: 'Secondary Section', desc: 'Structured programs to develop critical thinking, artistic expression, and athletic skills.' },
              { icon: Sparkles, title: 'Higher Secondary', desc: 'Advanced workshops and competitive platforms for professional and creative pursuits.' },
            ].map((card, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-loose">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. FEATURED ACTIVITIES (Light gray) ─────────────────── */}
      <section className="py-24 md:py-36 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Signature Highlights</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Featured <span className="text-gray-400 font-light">Experience</span></h2>
          </div>
          <div className="space-y-28">
            {[
              {
                title: 'The Creative Arts',
                desc: 'A sanctuary for visual storytellers and creative minds. Our arts program spans traditional craft to modern digital aesthetics, encouraging students to define their unique visual language.',
                img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1471',
                icon: PaletteIcon
              },
              {
                title: 'Rhetorical Excellence',
                desc: 'Building the voices of tomorrow. Our debating and public speaking workshops empower students with the rhetorical tools needed to articulate complex ideas with confidence and precision.',
                img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1470',
                icon: MicIcon
              }
            ].map((feature, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 w-full group">
                  <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl relative">
                    <img src={feature.img} alt={feature.title}
                      className="w-full h-full object-cover brightness-90 transition-all duration-[2500ms] group-hover:scale-110 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-orange/10 group-hover:opacity-0 transition-opacity duration-1000" />
                  </div>
                </div>
                <div className="flex-1 space-y-10">
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center text-white shadow-sm">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-500 leading-relaxed font-light italic">"{feature.desc}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ACTIVITIES GRID (White) ─────────────────────────────── */}
      <section className="py-24 md:py-36 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange italic">Academic Synergy</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">The Activities <span className="text-gray-400 font-light">Spectrum</span></h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Music, title: 'Music Academy', desc: 'Vocal and instrumental training covering classical and contemporary genres.' },
              { icon: Sparkles, title: 'Dance & Motion', desc: 'Expressive movement through various traditional and modern dance forms.' },
              { icon: Palette, title: 'Visual Arts', desc: 'Exploring colors, shapes, and textures to inspire visual storytelling.' },
              { icon: Theater, title: 'Theater Group', desc: 'Workshops for building confidence, speech, and performance skills.' },
              { icon: Trophy, title: 'Athletic Club', desc: 'Strength and teamwork training across multiple sporting disciplines.' },
              { icon: Mic, title: 'Public Speaking', desc: 'Sharpening rhetorical skills and encouraging eloquent expression.' },
            ].map((activity, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:rotate-12 transition-all duration-500">
                  <activity.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{activity.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{activity.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. WHY ACTIVITIES MATTER (Orange gradient) ────────────── */}
      <section className="py-32 bg-gradient-to-br from-brand-orange via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <span className="text-[10px] font-black tracking-[0.4em] text-orange-200 uppercase mb-8 block italic">Strategic Impact</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.85] italic">
                Why Activities <br /><span className="text-orange-200 font-light">Matter</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Confidence', desc: 'Empowering students to find their voice and own the stage.' },
                  { title: 'Teamwork', desc: 'Building collaboration through collective creative pursuits.' },
                  { title: 'Creativity', desc: 'Unlocking lateral thinking and unique problem-solving skills.' },
                  { title: 'Leadership', desc: 'Fostering initiative and ownership of talent development.' },
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-brand-orange transition-all duration-500">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:translate-x-3 transition-all duration-500">{benefit.title}</h4>
                      <p className="text-sm text-orange-100 uppercase tracking-widest font-bold mt-1 italic">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 p-3"
            >
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1470"
                alt="Student Collaboration" className="w-full h-full object-cover rounded-[1.5rem] brightness-90"
              />
              <div className="absolute inset-0 bg-brand-orange/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. CTA (Dark) ─────────────────────────────────────────────── */}
      <section className="py-36 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.6em] uppercase mb-8 block text-brand-orange">Admissions 2024-25 Open</span>
            <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter uppercase leading-[0.82] italic">
              Enroll at <br /><span className="text-gray-500 font-light">Sunrise</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link to="/inquiry" className="px-12 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-4 group rounded-full shadow-2xl hover:-translate-y-1">
                Ready to Join
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="px-12 py-5 border-2 border-white/30 text-white font-black text-sm uppercase tracking-[0.3em] hover:border-brand-orange hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-4 group rounded-full hover:-translate-y-1">
                Contact Office
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CoCurricular;
