import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * ── RESULTS IMAGE GALLERY ─────────────────────────────────────────────
 * Drop your result brochures / group photos here.
 * Each item: { src: '/path/to/image.jpg', label: 'Caption', year: '2024-25' }
 * ─────────────────────────────────────────────────────────────────────
 */
const RESULT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop',
    label: 'Class 10 EM — Board Results 2024-25',
    year: '2024-25',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1400&auto=format&fit=crop',
    label: 'Class 10 GM — Board Results 2023-24',
    year: '2023-24',
  },
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1400&auto=format&fit=crop',
    label: 'Class 12 — Board Results 2022-23',
    year: '2022-23',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop',
    label: 'School Toppers — Group Photo 2024',
    year: '2024-25',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1400&auto=format&fit=crop',
    label: 'School Toppers — Group Photo 2023',
    year: '2023-24',
  },
  {
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1400&auto=format&fit=crop',
    label: 'Annual Results Ceremony 2022',
    year: '2022-23',
  },
];


/* ── Lightbox ─────────────────────────────────────────────────── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setCurrent(c => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-widest">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <button onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="px-16 max-w-5xl w-full max-h-[80vh] flex flex-col items-center gap-5"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[current].src}
            alt={images[current].label}
            className="max-h-[70vh] w-full object-contain rounded-2xl shadow-2xl"
          />
          <div className="text-center">
            <p className="text-white font-black uppercase tracking-tight text-lg">{images[current].label}</p>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mt-1">Academic Year {images[current].year}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight size={22} />
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4">
        {images.map((img, i) => (
          <button key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-orange w-6' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ── Main featured carousel ───────────────────────────────────── */
const FeaturedCarousel = ({ images, onImageClick }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % images.length);
    }, 5000);
  }, [images.length]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const go = (dir) => {
    setCurrent(c => (c + dir + images.length) % images.length);
    resetTimer();
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[16/9] md:aspect-[21/9] bg-gray-100 group">
      <AnimatePresence mode="wait">
        <motion.div key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={images[current].src}
            alt={images[current].label}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => onImageClick(current)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 flex items-end justify-between">
        <AnimatePresence mode="wait">
          <motion.div key={current}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-orange block mb-1">
              Academic Year {images[current].year}
            </span>
            <p className="text-white font-black uppercase tracking-tight text-xl md:text-3xl leading-tight">
              {images[current].label}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Expand icon */}
        <button
          onClick={() => onImageClick(current)}
          className="shrink-0 ml-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Controls */}
      <button onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        {images.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); resetTimer(); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-orange' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Thumbnail grid ───────────────────────────────────────────── */
const ThumbnailGrid = ({ images, onImageClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {images.map((img, i) => (
      <motion.div key={i}
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ delay: i * 0.05 }}
        whileHover={{ y: -4, scale: 1.03 }}
        className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
        onClick={() => onImageClick(i)}
      >
        <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-[10px] font-black uppercase tracking-wider leading-tight line-clamp-2">{img.label}</p>
        </div>
        {/* Expand icon */}
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={12} className="text-white" />
        </div>
      </motion.div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
const Result10EMPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* Blue glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-brand-orange mb-6"
          >
            Sunrise School · Academic Excellence
          </motion.p>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[clamp(3rem,9vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] text-white"
            >
              Our Results
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="text-[clamp(3rem,9vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] text-transparent"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              Speak for Us
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg font-light mt-8 max-w-lg"
          >
            A visual record of our students' hard work, dedication, and academic brilliance — year after year.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3">Latest Results</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Featured <span className="text-gray-200">Highlights</span>
            </h2>
          </div>
          <FeaturedCarousel images={RESULT_IMAGES} onImageClick={setLightboxIndex} />
        </div>
      </section>

      {/* ── THUMBNAIL GALLERY ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange block mb-3">All Results</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Complete <span className="text-gray-200">Gallery</span>
            </h2>
            <p className="text-gray-500 font-light mt-3 text-sm">Click any image to view full size</p>
          </div>
          <ThumbnailGrid images={RESULT_IMAGES} onImageClick={setLightboxIndex} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[16vw] font-black uppercase text-gray-50 leading-none tracking-tighter whitespace-nowrap">Excellence</span>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange block mb-6">Admissions 2026-27 Open</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
              Be Part of Our <span className="text-gray-200">Legacy</span>
            </h2>
            <p className="text-gray-500 font-light mb-10 text-lg">
              Join Sunrise School and add your name to our hall of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry"
                className="px-10 py-4 bg-brand-blue text-white font-black text-[11px] uppercase tracking-widest rounded-full shadow-lg hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-3 group"
              >
                Admission Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact"
                className="px-10 py-4 bg-white border border-gray-200 text-gray-900 font-black text-[11px] uppercase tracking-widest rounded-full hover:border-gray-400 transition-colors"
              >
                Contact Office
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={RESULT_IMAGES}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Result10EMPage;
