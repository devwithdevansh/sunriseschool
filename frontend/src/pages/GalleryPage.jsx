import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)', scale: 0.95 },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const images = [
  { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800', title: 'Classroom Learning', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1577891729319-f4871c6ec217?auto=format&fit=crop&q=80&w=800', title: 'Science Lab' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', title: 'Sports Day' },
  { src: 'https://images.unsplash.com/photo-1516534775068-ba3e84529fe1?auto=format&fit=crop&q=80&w=800', title: 'Cultural Event', span: 'md:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800', title: 'Library' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800', title: 'Art Class' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800', title: 'Athletics', span: 'md:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1523050335392-9bef86f199ec?auto=format&fit=crop&q=80&w=800', title: 'Group Study' },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-brand-blue selection:text-white">

      {/* ── 1. HERO (Orange gradient) ────────────────────────────── */}
      <section className="relative pt-36 pb-32 md:pt-52 md:pb-44 overflow-hidden bg-gradient-to-br from-brand-blue via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-blue-200 mb-6 block">Visual Stories</span>
            <h1 className="text-[clamp(3rem,8vw,9rem)] font-black tracking-tighter mb-8 uppercase leading-[0.82]">
              Our <span className="text-blue-200 font-light">Gallery</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 font-medium leading-relaxed">
              Capturing moments of learning, joy, and achievement at Sunrise School.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }} className="mt-14 flex justify-center">
            <div className="w-px h-20 bg-gradient-to-b from-blue-200 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ── 2. GALLERY GRID (White) ──────────────────────────────── */}
      <section className="py-24 md:py-36 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-4 block text-brand-orange">Life at Sunrise</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-4">Campus <span className="text-brand-blue font-light">Moments</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">A glimpse into our vibrant campus and student activities.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[260px]"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(img)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${img.span || ''}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-all duration-[2500ms] group-hover:scale-110 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-black uppercase tracking-widest text-sm">{img.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                    <ZoomIn className="w-4 h-4" /> View Full
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. QUOTE SECTION (Light gray) ─────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 block text-brand-orange italic">Our Community</span>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-gray-900 leading-[0.9]">
              "Every moment at Sunrise <br /><span className="text-brand-blue">is a memory for life"</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── 4. CTA (Dark) ──────────────────────────────────────── */}
      <section className="py-28 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block">Join Our Family</span>
            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-black mb-10 tracking-tighter uppercase leading-[0.9] italic">
              Be Part of <br /><span className="text-gray-500 font-light">the Story</span>
            </h2>
            <a href="/inquiry"
              className="inline-flex items-center gap-4 px-12 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 group"
            >
              Apply Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full max-h-[85vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.title} className="w-full h-full object-contain rounded-2xl shadow-2xl max-h-[75vh]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-white font-black uppercase tracking-widest text-lg">{selected.title}</h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-600 hover:scale-110 transition-all duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;
