import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowRight, Expand } from 'lucide-react';
import { Link } from 'react-router-dom';

const RESULT_IMAGES = [
  // 2024-25
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop', label: 'Class 10 EM — Board Results', year: '2024-25' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop', label: 'School Toppers — Group Photo', year: '2024-25' },
  { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop', label: 'Annual Results Ceremony', year: '2024-25' },
  { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop', label: 'Outstanding Performers', year: '2024-25' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop', label: 'Academic Excellence Award', year: '2024-25' },
  { src: 'https://images.unsplash.com/photo-1513258496099-481a8041cb15?q=80&w=1000&auto=format&fit=crop', label: 'Top 10 Achievers', year: '2024-25' },
  // 2023-24
  { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop', label: 'Class 10 EM — Board Results', year: '2023-24' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop', label: 'School Toppers — Group Photo', year: '2023-24' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop', label: 'Subject Wise Toppers', year: '2023-24' },
  { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop', label: 'Felicitation Ceremony', year: '2023-24' },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop', label: 'Gold Medalists', year: '2023-24' },
  // 2022-23
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop', label: 'Class 10 EM — Board Results', year: '2022-23' },
  { src: 'https://images.unsplash.com/photo-1503676382385-40dc1678280a?q=80&w=1000&auto=format&fit=crop', label: 'Valedictorian Award', year: '2022-23' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop', label: 'Results Day Celebration', year: '2022-23' },
  { src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop', label: 'Proud Parents Moment', year: '2022-23' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop', label: 'Graduation Batch', year: '2022-23' },
  { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop', label: 'Principal\'s Honor List', year: '2022-23' },
];

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
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{images[current].label}</h3>
            <p className="text-brand-orange text-xs md:text-sm tracking-[0.2em] uppercase mt-3 font-bold">Academic Year {images[current].year}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const Result10EMPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const uniqueYears = [...new Set(RESULT_IMAGES.map(img => img.year))].sort().reverse();
  const [selectedYear, setSelectedYear] = useState(uniqueYears[0]);
  const filteredImages = RESULT_IMAGES.filter(img => img.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-brand-orange selection:text-white">
      {/* HERO */}
      <section className="pt-40 pb-20 px-4 md:px-8 max-w-[100rem] mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-brand-orange">Hall of Fame</span>
          </div>
          <h1 className="text-[clamp(4rem,10vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-slate-900">
            Class 10 <span className="text-brand-blue">EM</span><br />
            <span className="text-slate-300">Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
            A visual celebration of academic excellence. Explore the outstanding achievements of our English Medium students through the years.
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
              className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedYear === year 
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-100'
              }`}
            >
              Academic Year {year}
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
              <div className="relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-brand-blue/10">
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-xl">
                  <Expand size={20} className="text-brand-blue" />
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start">
                  <span className="px-3 py-1 bg-brand-orange text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-3 shadow-lg">
                    Year {img.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
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
      <section className="py-32 bg-brand-blue text-white text-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-blue-300 block mb-6">Admissions 2026-27 Open</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Be Part of Our <br/><span className="text-white border-b-4 border-brand-orange pb-2">Legacy</span>
            </h2>
            <p className="text-blue-100 font-light mb-12 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Join Sunrise School and add your name to our hall of excellence. Your journey to success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry" className="px-10 py-5 bg-brand-orange text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-xl shadow-brand-orange/20 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                Admission Inquiry <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-transparent border border-white/30 text-white font-black text-[11px] uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors duration-300">
                Contact Office
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

export default Result10EMPage;
