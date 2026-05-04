import React from 'react';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import { BookOpen, FlaskConical, Languages, Calculator, Music, Dumbbell } from 'lucide-react';

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-brand-orange to-orange-600 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)", y: 40 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-orange-100/60 mb-6 block">Intellectual Growth</span>
            <h1 className="text-[clamp(3.75rem,8vw,8rem)] font-black tracking-tighter mb-8 uppercase text-white leading-tight">
              Academic <span className="text-orange-900/20">Programs</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-orange-50 max-w-2xl mx-auto font-medium"
          >
            A rigorous curriculum designed for comprehensive growth and future readiness.
          </motion.p>
        </div>
      </section>

      {/* 2. OVERLAPPING OVERVIEW SECTION */}
      <section className="py-32 relative bg-white w-full overflow-hidden -mt-12 rounded-t-[4rem] z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-black text-brand-dark mb-4 tracking-tighter uppercase"
            >
              Our Departments
            </motion.h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Science Lab", icon: FlaskConical, description: "Modern laboratories for physics, chemistry, and biology to foster scientific inquiry." },
              { title: "Mathematics", icon: Calculator, description: "Focus on logical reasoning, problem-solving, and analytical skills from a young age." },
              { title: "Languages", icon: Languages, description: "Multilingual proficiency in English, Hindi, and Gujarati with a focus on communication." },
              { title: "Humanities", icon: BookOpen, description: "Exploring history, geography, and social sciences to understand our world." },
              { title: "Fine Arts", icon: Music, description: "Nurturing creative expression through music, dance, and visual arts." },
              { title: "Physical Ed", icon: Dumbbell, description: "Promoting health, fitness, and teamwork through a variety of sports and activities." }
            ].map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-orange/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-orange transition-all duration-500">
                  <dept.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-brand-orange transition-colors">
                  {dept.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {dept.description}
                </p>
                <div className="mt-8 h-[2px] w-0 bg-brand-orange group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-gray-50 py-12 text-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          © {new Date().getFullYear()} Sunrise School • Intellectual Excellence
        </p>
      </div>
    </div>
  );
};

export default AcademicsPage;
