import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Heart, ArrowRight, Star, Music, Puzzle, Gamepad2, Blocks, Dices } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgPlayarea from '../assets/images/Playarea_for_kindergarden_kids/IMG_1372.JPG.jpeg';
import imgPlayarea2 from '../assets/images/Playarea_for_kindergarden_kids/IMG_1373.JPG.jpeg';
import imgPrep1 from '../assets/images/PREP/IMG-20250823-WA0029.jpg';
import imgPrep2 from '../assets/images/PREP/_IMG_9803.JPG';
import imgRainy1 from '../assets/images/RAINY DAY/IMG_6445.JPG';
import imgRainy2 from '../assets/images/RAINY DAY/IMG_6433.JPG';
import imgRainy3 from '../assets/images/RAINY DAY/IMG_6501.JPG';

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const KGPage = () => {
  const features = [
    { icon: <Palette size={28} />, title: "Activity-Based Learning", desc: "Learning through play, arts, and crafts to keep young minds engaged.", color: "from-pink-500 to-rose-500", img: imgPrep1 },
    { icon: <Heart size={28} />, title: "Safe & Nurturing", desc: "A home away from home with caring mentors and secure facilities.", color: "from-red-500 to-orange-500", img: imgPlayarea },
    { icon: <Puzzle size={28} />, title: "Cognitive Development", desc: "Puzzles, building blocks, and games that spark logical thinking.", color: "from-orange-500 to-amber-500", img: imgRainy2 },
    { icon: <Music size={28} />, title: "Rhythm & Expression", desc: "Music and dance activities to build confidence and coordination.", color: "from-purple-500 to-violet-500", img: imgRainy3 }
  ];

  return (
    <div className="w-full bg-white overflow-hidden pb-10">

      {/* ═══ 1. IMMERSIVE HERO — Full image with warm overlay ═══ */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={imgPrep2} alt="Kindergarten" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-pink-500/70 to-yellow-400/40" />
        </div>

        {/* Playful animated blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-72 h-72 rounded-full bg-yellow-300/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-pink-400/20 blur-3xl"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-[0.3em] text-[11px] uppercase"
            >
              ✦ Playhouse to HKG
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.5rem,8vw,6rem)] font-black text-white leading-[0.92] tracking-tight mb-8 drop-shadow-lg"
            >
              Kindergarten<br />
              <span className="text-yellow-200">Program</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-white/90 font-medium mb-10 max-w-lg leading-relaxed drop-shadow-md"
            >
              Where little minds dream big, explore joyfully, and build the foundation for lifelong learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 group">
                <span>Explore Curriculum</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ═══ 2. OVERVIEW — Offset image collage + text ═══ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-orange-500">About Our KG</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              A Magical Journey<br /><span className="text-orange-500">Begins Here</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Kindergarten is designed to be a vibrant, welcoming space where children feel safe to explore, make friends, and discover their unique talents.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on holistic development, ensuring that every child builds strong cognitive, social, and emotional skills through our carefully crafted play-way curriculum.
            </p>
            <ul className="space-y-3 pt-4">
              {['Personalized Attention', 'Joyful Learning Approach', 'Foundational Literacy & Numeracy'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium text-lg">
                  <Star className="text-yellow-500 mr-3 shrink-0" size={18} fill="#EAB308" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={imgPlayarea2} alt="Kids playing" className="w-full h-full object-cover" />
            </div>
            {/* Offset image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <img src={imgRainy1} alt="Rainy day" className="w-full h-full object-cover" />
            </motion.div>
            {/* Decorative blobs */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-yellow-200 rounded-full blur-2xl opacity-70 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-60 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. KEY FEATURES — Image-backed hover cards ═══ */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-orange-500 mb-4 block">Our Approach</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Choose Our KG?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-[340px]"
              >
                {/* Background image */}
                <img src={feature.img} alt={feature.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Warm gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. CURRICULUM PROGRESSION ═══ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-black tracking-[0.4em] uppercase text-orange-500 mb-4 block">Stages</span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Our Progression</h2>
          <p className="text-xl text-gray-500">A step-by-step journey of growth and discovery.</p>
        </motion.div>

        <div className="space-y-6">
          {[
            { level: 'Playhouse', age: '2-3 Years', focus: 'Socialization, sensory play, and basic motor skills.', gradient: 'from-yellow-400 to-orange-400' },
            { level: 'Nursery', age: '3-4 Years', focus: 'Language basics, pre-math concepts, and early independence.', gradient: 'from-orange-400 to-pink-400' },
            { level: 'LKG', age: '4-5 Years', focus: 'Alphabets, numbers, phonics, and creative expression.', gradient: 'from-pink-400 to-rose-400' },
            { level: 'HKG', age: '5-6 Years', focus: 'Reading, writing sentence formation, and school readiness.', gradient: 'from-rose-400 to-purple-400' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="flex flex-col md:flex-row bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${item.gradient} p-8 md:w-56 flex flex-col justify-center text-white shrink-0`}>
                <h3 className="text-3xl font-black">{item.level}</h3>
                <span className="font-medium text-white/80 mt-1">{item.age}</span>
              </div>
              <div className="p-8 flex-1 flex items-center">
                <p className="text-lg text-gray-700 leading-relaxed">{item.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ 5. FACILITIES — Image-card style ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-orange-500 mb-4 block">Infrastructure</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Child-Friendly Facilities</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Soft Play Area", icon: <Dices size={36} />, desc: "A safe, cushioned environment with indoor slides and ball pits.", gradient: "from-pink-500 to-rose-500", img: imgPlayarea },
              { title: "Toy & Activity Room", icon: <Gamepad2 size={36} />, desc: "Filled with educational toys, puzzles, and sensory games.", gradient: "from-purple-500 to-violet-500", img: imgRainy2 },
              { title: "Creative Arts Corner", icon: <Blocks size={36} />, desc: "A dedicated space for painting, crafting, and storytelling.", gradient: "from-orange-500 to-amber-500", img: imgPrep1 }
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image top */}
                <div className="h-48 overflow-hidden relative">
                  <img src={facility.img} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${facility.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {facility.icon}
                  </div>
                </div>
                {/* Text bottom */}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. GALLERY — Masonry-style ═══ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-black tracking-[0.4em] uppercase text-orange-500 mb-4 block">Memories</span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">A Glimpse of Joy</h2>
          <p className="text-gray-500 text-lg">Memorable moments from our kindergarten classrooms and activities.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:row-span-2 rounded-3xl overflow-hidden group shadow-lg"
          >
            <img src={imgPrep1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kids playing" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden group shadow-lg aspect-square"
          >
            <img src={imgPrep2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Prep activities" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden group shadow-lg aspect-square"
          >
            <img src={imgRainy1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Rainy day fun" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 rounded-3xl overflow-hidden group shadow-lg h-56"
          >
            <img src={imgRainy3} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Activities" />
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. CTA — Immersive background ═══ */}
      <section className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Background image */}
          <img src={imgRainy1} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/95 via-pink-500/90 to-purple-500/85" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Give Your Child the Best Start!</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Admissions are now open for the upcoming academic year. Join the Sunrise family today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
                  Enroll Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white rounded-full font-bold text-lg border border-white/30 hover:bg-white/25 transition-all duration-300 w-full sm:w-auto">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default KGPage;
