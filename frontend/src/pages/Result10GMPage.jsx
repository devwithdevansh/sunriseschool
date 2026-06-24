import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowRight, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/Students/IMG_1383.JPG.jpeg';

const RESULT_IMAGES = [];

const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [prev, next, onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20"><X size={36} strokeWidth={1.5} /></button>
      
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-20"><ChevronLeft size={48} strokeWidth={1} /></button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-20"><ChevronRight size={48} strokeWidth={1} /></button>
      
      <AnimatePresence mode="wait">
        <motion.div key={current}
          initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl w-full max-h-[85vh] px-16 flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={images[current].src} alt={images[current].label} className="max-h-[70vh] w-auto object-contain drop-shadow-2xl rounded-sm" />
          <div className="mt-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">{images[current].label}</h3>
            <p className="text-brand-orange text-sm tracking-wide mt-3 font-bold">શૈક્ષણિક વર્ષ {images[current].year}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const Result10GMPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [resultImages, setResultImages] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [academicYears, setAcademicYears] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resResults, resYears] = await Promise.all([
          fetch('http://localhost:5000/api/results'),
          fetch('http://localhost:5000/api/academic-years')
        ]);
        const dataResults = await resResults.json();
        const dataYears = await resYears.json();

        let fetchedYears = [];
        if (dataYears.status === 'success') {
          fetchedYears = dataYears.data.map(y => y.year);
          setAcademicYears(fetchedYears);
          if (fetchedYears.length > 0) setSelectedYear(fetchedYears[0]);
        }

        if (dataResults.status === 'success') {
          const formatted = dataResults.data
            .filter(r => r.classLevel === '10 GM')
            .map(r => ({ src: r.imageSrc, label: r.title, year: r.academicYear }));
          setResultImages(formatted);
          
          if (fetchedYears.length === 0) {
             const fallbackYears = [...new Set(formatted.map(img => img.year))].sort().reverse();
             setAcademicYears(fallbackYears);
             if (fallbackYears.length > 0) setSelectedYear(fallbackYears[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredImages = resultImages.filter(img => img.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-brand-orange selection:text-white">
      {/* HERO (Exhibition Glassmorphism) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="10 GM Results Hero"
            className="w-full h-full object-cover"
          />
          {/* Lighter, brighter overlay for the glass effect */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-8 py-14 md:px-16 md:py-20 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-brand-orange/40" />
              <span className="text-[14px] font-black tracking-widest text-brand-orange">ગૌરવ ગાથા</span>
              <div className="h-[2px] w-8 bg-brand-orange/40" />
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.2] text-slate-900 mb-6">
              ધોરણ ૧૦ <span className="text-brand-orange">ગુજરાતી માધ્યમ</span><br />
              <span className="font-light text-slate-400">બોર્ડ પરિણામ</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              ગુજરાતી માધ્યમના વિદ્યાર્થીઓની અથાગ મહેનત અને શૈક્ષણિક સિદ્ધિઓની શાનદાર ઝલક.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="px-4 md:px-8 pb-32 max-w-[100rem] mx-auto">
        
        {/* Timeline Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative">
          <div className="absolute top-1/2 left-4 right-4 h-px bg-slate-200 -z-10 hidden sm:block" />
          {academicYears.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`relative px-8 py-3 bg-white rounded-full font-black text-[14px] tracking-wide transition-all duration-300 border ${
                selectedYear === year 
                  ? 'border-brand-orange text-brand-orange shadow-[0_8px_30px_rgba(249,115,22,0.15)]' 
                  : 'border-slate-200 text-slate-400 hover:border-brand-orange/30 hover:text-brand-orange shadow-sm'
              }`}
            >
              વર્ષ {year}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div 
                layout
                key={img.src + img.year + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group cursor-pointer"
                onClick={() => setLightboxIndex(i)}
              >
              <div className="relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-brand-orange/10">
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-xl text-white">
                  <Expand size={20} />
                </div>
                
                {/* Overlay Text */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1.5 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 text-[12px] font-bold tracking-wide rounded-full mb-3 shadow-sm">
                      વર્ષ {img.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                      {img.label}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[13px] font-black tracking-widest text-brand-orange block mb-6">વર્ષ ૨૦૨૬-૨૭ માટે પ્રવેશ પ્રક્રિયા શરૂ થઈ ગઈ છે</span>
            <h2 className="text-4xl md:text-6xl font-black leading-[1.3] mb-8">
              અમારી આ ગૌરવશાળી પરંપરાનો <br/><span className="text-white border-b-4 border-brand-orange pb-2">હિસ્સો બનો</span>
            </h2>
            <p className="text-slate-400 font-light mb-12 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              સનરાઈઝ સ્કૂલમાં જોડાઈને સફળતાના શિખરો સર કરો અને શાળાનું નામ રોશન કરો.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry" className="px-10 py-5 bg-brand-orange text-white font-bold text-[14px] tracking-wide rounded-full shadow-xl shadow-brand-orange/20 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                પ્રવેશ અંગે પૂછપરછ <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-transparent border border-white/30 text-white font-bold text-[14px] tracking-wide rounded-full hover:bg-white/10 transition-colors duration-300">
                ઓફિસનો સંપર્ક કરો
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox images={filteredImages} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Result10GMPage;
