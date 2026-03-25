import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const AchievementsSection = () => {
  const stats = [
    {
      number: "50+",
      label: "School Level",
      description: "Awards in sports and cultural activities",
      icon: <Star className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors" />,
      delay: 0.1
    },
    {
      number: "25+",
      label: "District Level",
      description: "First place finishes in inter-school competitions",
      icon: <Award className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors" />,
      delay: 0.2
    },
    {
      number: "15+",
      label: "State Level",
      description: "Recognition for academic and creative excellence",
      icon: <Medal className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors" />,
      delay: 0.3
    },
    {
      number: "5+",
      label: "National Level",
      description: "Selections for national talent search programs",
      icon: <Trophy className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors" />,
      delay: 0.4
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
            Our Achievements
          </motion.h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ y: -5 }}
              className="bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black text-gray-900 mb-2 tracking-tighter">
                {stat.number}
              </h3>
              <p className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">
                {stat.label}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
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
