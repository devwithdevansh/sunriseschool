import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const TeachersSection = () => {
  const teachers = [
    { name: "Mr. Patel", subject: "Mathematics", std: "Std 10" },
    { name: "Mrs. Shah", subject: "Science", std: "Std 9" },
    { name: "Mr. Mehta", subject: "English", std: "Std 12" },
    { name: "Ms. Joshi", subject: "Social Studies", std: "Std 8" },
    { name: "Mr. Dave", subject: "Physics", std: "Std 11" },
    { name: "Mrs. Bhatt", subject: "Gujarati", std: "Std 7" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-orange to-orange-600 w-full relative overflow-hidden -mt-12 rounded-t-[4rem] z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase"
          >
            Our Teachers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            Dedicated educators guiding every student towards success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-white/40 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-white/20 group-hover:bg-white transition-all duration-300 overflow-hidden shadow-sm">
                <User className="w-12 h-12 text-white group-hover:text-brand-orange transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 transition-colors">{teacher.name}</h3>
              <p className="text-white/70 font-medium">{teacher.subject} — {teacher.std}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-brand-orange px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 flex items-center gap-2 transition-all duration-300"
          >
            View All Teachers
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
