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
    <section className="py-16 bg-gray-50/30 w-full border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#111827' }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default"
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
