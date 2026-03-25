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
    <section className="py-16 bg-gray-50/50 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase"
          >
            Our Teachers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Dedicated educators guiding every student towards success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                <User className="w-12 h-12 text-gray-300 group-hover:text-gray-900 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
              <p className="text-gray-500 font-medium">{teacher.subject} — {teacher.std}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium flex items-center gap-2"
          >
            View All Teachers
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
