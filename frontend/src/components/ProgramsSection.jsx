import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "English Medium",
      description: "Nursery to Std 12",
      features: ["Global Curriculum", "Modern Lab Facilities", "English Language Mastery"]
    },
    {
      title: "Gujarati Medium",
      description: "Std 1 to Std 10",
      features: ["Strong Foundation", "Cultural Values", "State Board Excellence"]
    },
    {
      title: "Commerce Stream",
      description: "Std 11 & 12",
      features: ["Expert Faculty", "Practical Accounting", "Career Guidance"]
    }
  ];

  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase"
          >
            Our Programs
          </motion.h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[2.5rem] border-2 border-gray-50 bg-gray-50/30 hover:bg-white hover:border-gray-900 transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-500">
                {program.title}
              </h3>
              <p className="text-gray-500 font-semibold mb-8 group-hover:text-gray-700 transition-colors duration-500 uppercase tracking-widest text-xs">
                {program.description}
              </p>
              
              <ul className="space-y-4">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors duration-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 h-[2px] w-full bg-gray-100 group-hover:bg-gray-900 transition-all duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
