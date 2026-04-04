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
    <section className="py-24 relative bg-gray-50 w-full overflow-hidden -mt-12 rounded-t-[4rem] z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
      {/* Decorative ambient background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter uppercase"
          >
            Our Academics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Comprehensive education from kindergarten to higher secondary
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicLevels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: level.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-lg hover:shadow-[0_30px_60px_rgba(37,99,235,0.12)] hover:border-brand-blue/20 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="p-5 bg-brand-blue/5 rounded-2xl group-hover:bg-brand-blue group-hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] group-hover:-translate-y-2 transition-all duration-500">
                {React.cloneElement(level.icon, { className: 'w-10 h-10 text-brand-blue group-hover:text-white transition-colors duration-500' })}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-2 tracking-tight group-hover:text-brand-blue transition-colors duration-500">
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
              
              <div className="w-10 h-1 bg-gray-100 rounded-full my-6 group-hover:w-24 group-hover:bg-brand-orange transition-all duration-500"></div>
              
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
