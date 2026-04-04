import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

const AdmissionCTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-brand-blue via-brand-dark to-[#1e1b4b] w-full overflow-hidden relative -mt-12 rounded-t-[4rem] z-[80] shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
            Admissions Open <br className="hidden md:block" />
            <span className="text-brand-orange">for 2026</span>
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
