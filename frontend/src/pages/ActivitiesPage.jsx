import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import { Camera, Music2, Brain, Users2, Trophy, Heart } from 'lucide-react';

const ActivitiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const activities = [
    { title: "Photography Club", icon: Camera, description: "Capture the world through your lens. Learn the art of visual storytelling." },
    { title: "Music & Choir", icon: Music2, description: "Developing vocal and instrumental skills. Join our school band or choir." },
    { title: "Robotics & AI", icon: Brain, description: "Build and program robots. Explore the future of technology in our STEM lab." },
    { title: "Debate & Elocution", icon: Users2, description: "Master the art of public speaking and critical argumentation." },
    { title: "Sports Academy", icon: Trophy, description: "State-of-the-art facilities for cricket, football, and athletics." },
    { title: "Nature Club", icon: Heart, description: "Environment awareness and sustainability projects within our campus." }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-neutral-500 mb-6 block">Beyond the Classroom</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase text-white leading-none">
              Student <br /> <span className="text-neutral-500">Activities</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed italic"
          >
            "Unlocking potential through diverse extracurricular engagement and creative exploration."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-neutral-500 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. CLUB ACTIVITIES GRID */}
      <Section title="Club Activities" subtitle="Finding passion through varied engagement." className="py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {activities.map((activity, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                title={activity.title} 
                icon={activity.icon} 
                description={activity.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FOOTER STRIP */}
      <div className="bg-neutral-50 py-12 text-center border-t border-neutral-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-300 italic">
          © {new Date().getFullYear()} Sunrise School • Holistic Development Program
        </p>
      </div>
    </div>
  );
};

export default ActivitiesPage;

