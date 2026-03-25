import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const AcademicsSection = () => {
  const academicLevels = [
    {
      title: 'Kindergarten',
      description: 'Playhouse to HKG',
      details: 'A nurturing environment where little ones begin their journey of discovery and learning through play and structured activities.',
      icon: <GraduationCap className="w-12 h-12 text-gray-900 mb-6" />,
      delay: 0.1
    },
    {
      title: 'School Education',
      description: 'Std 1–10',
      extra: 'English & Gujarati Medium',
      details: 'Comprehensive curriculum focused on academic excellence, character building, and holistic development for primary and secondary students.',
      icon: <School className="w-12 h-12 text-gray-900 mb-6" />,
      delay: 0.2
    },
    {
      title: 'Higher Secondary',
      description: 'Std 11–12',
      extra: 'Commerce Stream',
      details: 'Specialized education preparation for professional careers, emphasizing core concepts and practical understanding in commerce.',
      icon: <BookOpen className="w-12 h-12 text-gray-900 mb-6" />,
      delay: 0.3
    }
  ];

  return (
    <section className="py-12 bg-white w-full border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase"
          >
            Our Academics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Comprehensive education from kindergarten to higher secondary
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicLevels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: level.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(level.icon, { className: 'w-10 h-10 group-hover:text-white transition-colors duration-500' })}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-2 tracking-tight">
                {level.title}
              </h3>
              
              <p className="text-lg font-semibold text-gray-900/80 mb-1">
                {level.description}
              </p>
              
              {level.extra && (
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
                  {level.extra}
                </p>
              )}
              
              <div className="w-10 h-1 bg-gray-100 rounded-full my-6 group-hover:w-20 group-hover:bg-gray-900 transition-all duration-500"></div>
              
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                {level.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
