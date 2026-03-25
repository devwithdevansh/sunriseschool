import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

const AdmissionCTA = () => {
  return (
    <section className="py-24 bg-gray-900 w-full overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
            Admissions Open <br className="hidden md:block" />
            <span className="text-gray-400">for 2026</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
            Join Sunrise School Rajkot and shape your future with academic excellence and holistic development.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-black text-lg transition-all hover:bg-gray-200 shadow-xl flex items-center gap-2"
            >
              <Phone size={20} />
              Contact Admissions
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-black text-lg transition-all hover:bg-white/10 flex items-center gap-2"
            >
              <MessageSquare size={20} />
              WhatsApp Us
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/60 hover:text-white px-10 py-4 font-bold transition-all flex items-center gap-2"
            >
              <MapPin size={20} />
              Visit Campus
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
