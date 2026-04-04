import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const stats = [
    {
      number: "50+",
      label: "School Level",
      description: "Awards in sports and cultural activities",
      icon: <Star className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition-colors duration-500" />,
      delay: 0.1
    },
    {
      number: "25+",
      label: "District Level",
      description: "First place finishes in inter-school competitions",
      icon: <Award className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition-colors duration-500" />,
      delay: 0.2
    },
    {
      number: "15+",
      label: "State Level",
      description: "Recognition for academic and creative excellence",
      icon: <Medal className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition-colors duration-500" />,
      delay: 0.3
    },
    {
      number: "5+",
      label: "National Level",
      description: "Selections for national talent search programs",
      icon: <Trophy className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition-colors duration-500" />,
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-[#020617] w-full relative overflow-hidden -mt-12 rounded-t-[4rem] z-[60] shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase"
          >
            Our Achievements
          </motion.h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: stat.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center group hover:border-brand-orange/40 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(234,88,12,0.15)] transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-white/10 rounded-2xl shadow-sm group-hover:bg-brand-orange/20 transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                {stat.number}
              </h3>
              <p className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3 group-hover:text-white transition-colors duration-500">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
