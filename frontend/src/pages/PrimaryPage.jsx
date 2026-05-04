import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Monitor, ChevronRight, Globe, Microscope, Library } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrimaryPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const features = [
    { icon: <Monitor size={28} />, title: "Smart Classrooms", desc: "Interactive digital boards in every class.", color: "text-blue-500" },
    { icon: <BookOpen size={28} />, title: "Holistic Curriculum", desc: "Balancing core academics with life skills.", color: "text-indigo-500" },
    { icon: <Trophy size={28} />, title: "Extracurriculars", desc: "Sports, arts, and talent clubs.", color: "text-amber-500" },
    { icon: <Users size={28} />, title: "Expert Faculty", desc: "Highly trained and dedicated teachers.", color: "text-teal-500" }
  ];

  return (
    <div className="w-full bg-white overflow-hidden pb-10">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center mx-auto max-w-[96%] rounded-3xl overflow-hidden mt-4">
        {/* Background */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 opacity-90"></div>
          {/* Optional pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm text-blue-200 text-sm font-bold uppercase tracking-widest"
          >
            Grades 1 to 10
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(3rem,6vw,4.5rem)] font-black text-white tracking-tight leading-tight mb-6"
          >
            Primary & Secondary <br/>
            <span className="text-blue-400">Education</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl font-medium leading-relaxed"
          >
            Laying a strong foundation for excellence through balanced academics, innovative teaching, and character building.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
             <button className="btn-premium flex items-center space-x-2">
              <span>View Syllabi</span>
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop" alt="Students studying" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Shaping <span className="text-blue-600">Brilliant Minds</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              The primary and secondary years are crucial for developing critical thinking, problem-solving skills, and a thirst for knowledge.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our curriculum is structured to seamlessly transition students from foundational concepts to advanced theories. We integrate technology in our classrooms to make learning visual, interactive, and highly engaging. 
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900">100%</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-1">Board Result Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900">1:30</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-1">Teacher-Student Ratio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Academic Excellence</h2>
            <p className="text-gray-500 text-lg">Our core pillars for comprehensive student development.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`mb-6 p-4 rounded-xl inline-block bg-slate-50 group-hover:bg-slate-100 transition-colors ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FACILITIES/HIGHLIGHTS */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-4">World-Class Facilities</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { tag: "Science Labs", icon: <Microscope size={40} className="text-blue-500" />, desc: "Fully equipped Physics, Chemistry, and Biology labs for practical learning." },
            { tag: "Digital Library", icon: <Library size={40} className="text-indigo-500" />, desc: "Vast collection of books, journals, and e-resources to foster reading habits." },
            { tag: "Computer Center", icon: <Globe size={40} className="text-teal-500" />, desc: "Modern computer labs to build coding and digital literacy skills early on." }
          ].map((facility, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-colors"
            >
              <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-md">
                {facility.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{facility.tag}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4.5. CAMPUS LIFE GALLERY */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">Life at Primary</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
            <p className="mt-6 text-gray-500 text-lg">Diverse experiences inside and outside the classroom.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-md group relative"
            >
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" alt="Students learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }} 
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-md group relative"
            >
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" alt="Classroom activity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }} 
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-md group relative sm:col-span-2 md:col-span-1"
            >
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop" alt="Library study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[2.5rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 w-full md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Invest in Your Child's Future</h2>
            <p className="text-gray-400 text-lg">Find out more about our admission process, fee structure, and scholarships.</p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">
                Apply for Admission
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrimaryPage;
