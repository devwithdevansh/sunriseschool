import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroRevealImg from '../assets/hero-reveal.png';
import AcademicsSection from '../components/AcademicsSection.jsx';
import TeachersSection from '../components/TeachersSection.jsx';
import AboutVisionSection from '../components/AboutVisionSection.jsx';
import ProgramsSection from '../components/ProgramsSection.jsx';
import AchievementsSection from '../components/AchievementsSection.jsx';
import ExamsSection from '../components/ExamsSection.jsx';
import AdmissionCTA from '../components/AdmissionCTA.jsx';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Refined Spring - smoother but more responsive
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  // High-Fidelity Mask - 3-stage feathering per user request
  const maskImage = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(15, 23, 42, 0.9) 200px, rgba(15, 23, 42, 0.4) 260px, transparent 360px)`
  );

  // Subtle Ambient Glow - Adds premium lighting depth
  const glowImage = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 400px)`
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center bg-mesh-light overflow-hidden pb-10"
      >
        {/* Ambient Glow Layer (Behind) */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: glowImage,
            }}
          />
        )}

        {/* Enhanced Reveal Image Layer */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none opacity-65"
            style={{
              backgroundImage: `url(${heroRevealImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitMaskImage: maskImage,
              maskImage: maskImage,
            }}
          />
        )}

        {/* Static Background Image (Mobile Only) */}
        {isMobile && (
          <div
            className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroRevealImg})` }}
          />
        )}

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>

        <div className="w-full px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)", y: 30 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[clamp(4.5rem,10vw,8rem)] font-black text-brand-dark tracking-tighter leading-none mb-8 drop-shadow-sm">
                SUNRISE<br />
                <span className="text-brand-blue bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange animate-gradient-xy">SCHOOL</span><br />
                RAJKOT
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Empowering students with knowledge, discipline, and excellence for a future of unlimited possibilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
