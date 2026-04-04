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
    <section className="py-24 bg-gradient-to-br from-brand-blue to-blue-800 w-full relative overflow-hidden -mt-12 rounded-t-[4rem] z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase"
            >
            Our Programs
          </motion.h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2.5rem] border border-white/10 bg-white/10 backdrop-blur-md shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:border-white/30 transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold text-white mb-2 transition-colors duration-500">
                {program.title}
              </h3>
              <p className="text-blue-100 font-semibold mb-8 group-hover:text-white transition-colors duration-500 uppercase tracking-widest text-xs">
                {program.description}
              </p>
              
              <ul className="space-y-4">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-white/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange transition-colors duration-500 group-hover:scale-110" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 h-[2px] w-full bg-white/10 group-hover:bg-brand-orange transition-all duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
