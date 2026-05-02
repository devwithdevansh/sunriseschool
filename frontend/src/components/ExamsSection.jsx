import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Book, GraduationCap, Star, Target, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ExamsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const exams = [
    { 
      name: "Olympiads", 
      icon: Trophy, 
      image: '/images/exams/olympiads.png',
      desc: "Global scientific & mathematical challenges."
    },
    { 
      name: "Hindi Prachar Samiti", 
      icon: Book, 
      image: '/images/exams/hindi_prachar.png',
      desc: "Linguistic excellence and cultural depth."
    },
    { 
      name: "Sanskrit Bharti", 
      icon: GraduationCap, 
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
      desc: "Connecting with spiritual wisdom & heritage."
    },
    { 
      name: "Humming Bird", 
      icon: Star, 
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      desc: "Logical reasoning for junior scholars."
    },
    { 
      name: "Spell Bee", 
      icon: Target, 
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=800',
      desc: "Building vocabulary and linguistic precision."
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % exams.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + exams.length) % exams.length);

  return (
    <section className="py-24 bg-mesh-light w-full relative overflow-hidden -mt-12 rounded-t-[4rem] z-[70] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic"
            >
              Competitive <span className="text-brand-blue font-light">Exams</span>
            </motion.h2>
            <p className="text-gray-500 font-medium italic">"Preparing students for national and international milestones"</p>
          </div>
          
          <div className="flex gap-4">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col md:flex-row">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden"
            >
              <img 
                src={exams[currentIndex].image} 
                alt={exams[currentIndex].name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  {React.createElement(exams[currentIndex].icon, { size: 28 })}
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">{exams[currentIndex].name}</h3>
                <p className="text-gray-500 text-lg font-light italic leading-relaxed">{exams[currentIndex].desc}</p>
                
                <div className="pt-6">
                  <Link 
                    to="/competitive-exams" 
                    className="inline-flex items-center gap-3 text-brand-orange font-bold uppercase tracking-widest text-xs group hover:text-orange-600 transition-colors"
                  >
                    View Exam Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-8 md:left-12 flex gap-2">
              {exams.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-brand-blue' : 'w-2 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
