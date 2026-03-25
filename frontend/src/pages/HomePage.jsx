import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AcademicsSection from '../components/AcademicsSection.jsx';
import TeachersSection from '../components/TeachersSection.jsx';
import AboutVisionSection from '../components/AboutVisionSection.jsx';
import ProgramsSection from '../components/ProgramsSection.jsx';
import AchievementsSection from '../components/AchievementsSection.jsx';
import ExamsSection from '../components/ExamsSection.jsx';
import AdmissionCTA from '../components/AdmissionCTA.jsx';

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-white overflow-hidden pb-10">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
        
        <div className="w-full px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-9xl font-black text-gray-900 tracking-tighter leading-none mb-8">
                SUNRISE<br />
                <span className="text-gray-300">SCHOOL</span><br />
                RAJKOT
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Empowering students with knowledge, discipline, and excellence for a future of unlimited possibilities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <button className="btn-premium group flex items-center">
                Explore Our Campus <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="btn-outline">
                Contact Admissions
              </button>
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gray-200 to-transparent"></div>
        </motion.div>
      </section>

      <AcademicsSection />
      <ProgramsSection />
      <AboutVisionSection />
      <TeachersSection />
      <AchievementsSection />
      <ExamsSection />
      <AdmissionCTA />

    </div>
  );
};

export default HomePage;
