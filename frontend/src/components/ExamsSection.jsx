import React from 'react';
import { motion } from 'framer-motion';

const ExamsSection = () => {
  const exams = [
    { name: "Olympiad", icon: "🧠" },
    { name: "Hindi Prachar Samiti", icon: "📚" },
    { name: "Sanskrit Bharti", icon: "📜" },
    { name: "Spell Bee", icon: "🐝" },
  ];

  return (
    <section className="py-24 bg-mesh-light w-full relative overflow-hidden -mt-12 rounded-t-[4rem] z-[70] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tighter uppercase"
          >
            Competitive Exams
          </motion.h2>
          <p className="text-gray-500 font-medium">Preparing students for national and international milestones</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {exams.map((exam, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, borderColor: '#ea580c' }}
              className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-[0_10px_25px_rgba(37,99,235,0.1)] flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                {exam.icon}
              </span>
              <h3 className="text-sm md:text-base font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                {exam.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
