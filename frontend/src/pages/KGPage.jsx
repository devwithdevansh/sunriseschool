import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Heart, CheckCircle2, ChevronRight, Contact, ArrowRight, Star, Music, Puzzle, Gamepad2, Blocks, Dices } from 'lucide-react';
import { Link } from 'react-router-dom';

const KGPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    { icon: <Palette size={32} />, title: "Activity-Based Learning", desc: "Learning through play, arts, and crafts to keep young minds engaged.", color: "bg-pink-100 text-pink-600" },
    { icon: <Heart size={32} />, title: "Safe & Nurturing Environment", desc: "A home away from home with caring mentors and secure facilities.", color: "bg-red-100 text-red-600" },
    { icon: <Puzzle size={32} />, title: "Cognitive Development", desc: "Puzzles, building blocks, and games that spark logical thinking.", color: "bg-orange-100 text-orange-600" },
    { icon: <Music size={32} />, title: "Rhythm & Expression", desc: "Music and dance activities to build confidence and coordination.", color: "bg-purple-100 text-purple-600" }
  ];

  return (
    <div className="w-full bg-white overflow-hidden  pb-10">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mx-auto max-w-[96%] mt-4">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 opacity-90"></div>
        {/* Playful background blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-yellow-400 blur-3xl opacity-50 mix-blend-multiply"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-pink-400 blur-3xl opacity-50 mix-blend-multiply"
        />

        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            className="inline-block mb-6 px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg text-orange-900 font-bold tracking-wider text-sm uppercase"
          >
            Playhouse to HKG
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(3.75rem,8vw,6rem)] font-black text-white drop-shadow-lg tracking-tight leading-none mb-6"
          >
            Kindergarten <br/>
            <span className="text-yellow-100 text-[clamp(3rem,6vw,4.5rem)]">Program</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            Where little minds dream big, explore joyfully, and build the foundation for lifelong learning.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center mx-auto space-x-2 group">
              <span>Explore Curriculum</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              A Magical Journey <br/>
              <span className="text-orange-500">Begins Here</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Kindergarten section is designed to be a vibrant, welcoming space where children feel safe to explore, make friends, and discover their unique talents. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on holistic development, ensuring that every child builds strong cognitive, social, and emotional skills through our carefully crafted play-way curriculum.
            </p>
            <ul className="space-y-3 pt-4">
              {['Personalized Attention', 'Joyful Learning Appraoch', 'Foundational Literacy & Numeracy'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium text-lg border-b border-gray-100 pb-2">
                  <Star className="text-yellow-500 mr-3" size={20} fill="#EAB308" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Placeholder for an image */}
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-pink-200 mix-blend-overlay"></div>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" alt="Kids playing" className="object-cover w-full h-full" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-24 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Choose Our KG?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CURRICULUM STRUCTURE */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-4">Our Progression</h2>
          <p className="text-xl text-gray-500">A step-by-step journey of growth and discovery.</p>
        </motion.div>

        <div className="space-y-8">
          {[
            { level: 'Playhouse', age: '2-3 Years', focus: 'Socialization, sensory play, and basic motor skills.' },
            { level: 'Nursery', age: '3-4 Years', focus: 'Language basics, pre-math concepts, and early independence.' },
            { level: 'LKG', age: '4-5 Years', focus: 'Alphabets, numbers, phonics, and creative expression.' },
            { level: 'HKG', age: '5-6 Years', focus: 'Reading, writing sentence formation, and school readiness.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-8 md:w-64 flex flex-col justify-center text-white">
                <h3 className="text-3xl font-black">{item.level}</h3>
                <span className="font-medium text-white/80 mt-1">{item.age}</span>
              </div>
              <div className="p-8 flex-1 flex items-center">
                <p className="text-xl text-gray-700 leading-relaxed">{item.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. KG FACILITIES */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Child-Friendly Facilities</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Soft Play Area", icon: <Dices size={40} className="text-pink-500" />, desc: "A safe, cushioned environment with indoor slides and ball pits." },
              { title: "Toy & Activity Room", icon: <Gamepad2 size={40} className="text-purple-500" />, desc: "Filled with educational toys, puzzles, and sensory games." },
              { title: "Creative Arts Corner", icon: <Blocks size={40} className="text-orange-500" />, desc: "A dedicated space for painting, crafting, and storytelling." }
            ].map((facility, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. STUDENT LIFE GALLERY */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-4">A Glimpse of Joy</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg">Memorable moments from our kindergarten classrooms and activities.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[400px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="w-full md:w-1/2 rounded-[3.5rem] overflow-hidden shadow-2xl relative group"
          >
            <img src="https://images.unsplash.com/photo-1545607315-9afae5bbfc4e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Kids playing" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="h-[200px] md:h-1/2 rounded-[2rem] overflow-hidden shadow-lg relative group"
            >
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Kids art" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="h-[200px] md:h-1/2 rounded-[2rem] overflow-hidden shadow-lg relative group"
            >
              <img src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Kids reading" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Give Your Child the Best Start!</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Admissions are now open for the upcoming academic year. Join the Sunrise family today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
                  Enroll Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-pink-600/30 text-white rounded-full font-bold text-lg border border-white/50 hover:bg-pink-600/50 transition-colors w-full sm:w-auto backdrop-blur-sm">
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
