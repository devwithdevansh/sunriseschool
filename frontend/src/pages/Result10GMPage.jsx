import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowRight, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/results');
        const data = await response.json();
        if (data.status === 'success') {
          const formatted = data.data
            .filter(r => r.classLevel === '10 GM')
            .map(r => ({ src: r.imageSrc, label: r.title, year: r.academicYear }));
          setResultImages(formatted);
          const uniqueYears = [...new Set(formatted.map(img => img.year))].sort().reverse();
          if (uniqueYears.length > 0) setSelectedYear(uniqueYears[0]);
        }
      } catch (error) {
        console.error("Failed to fetch results:", error);
      }
    };
    fetchResults();
  }, []);

  const uniqueYears = [...new Set(resultImages.map(img => img.year))].sort().reverse();
  const filteredImages = resultImages.filter(img => img.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-brand-orange selection:text-white">
      {/* HERO */}
      <section className="pt-40 pb-20 px-4 md:px-8 max-w-[100rem] mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-[14px] font-black tracking-widest text-brand-orange">ગૌરવ ગાથા</span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[1.1] mb-8 text-slate-900">
            ધોરણ ૧૦ <span className="text-brand-orange">ગુજરાતી માધ્યમ</span><br />
            <span className="text-slate-300">બોર્ડ પરિણામ</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
            ગુજરાતી માધ્યમના વિદ્યાર્થીઓની અથાગ મહેનત અને શૈક્ષણિક સિદ્ધિઓની શાનદાર ઝલક. 
          </p>
        </motion.div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="px-4 md:px-8 pb-32 max-w-[100rem] mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {uniqueYears.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2.5 rounded-full font-bold text-[14px] tracking-wide transition-all duration-300 ${
                selectedYear === year 
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-100'
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-xl">
                  <Expand size={20} className="text-brand-orange" />
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start">
                  <span className="px-3 py-1 bg-brand-orange text-white text-[12px] font-bold tracking-wide rounded-full mb-3 shadow-lg">
                    વર્ષ {img.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug drop-shadow-md">
                    {img.label}
                  </h3>
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
