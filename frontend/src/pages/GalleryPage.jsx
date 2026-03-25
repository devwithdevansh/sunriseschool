import React from 'react';
import Section from '../components/Section.jsx';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1577891729319-f4871c6ec217?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516534775068-ba3e84529fe1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div>
      <section className="bg-brand-dark py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl opacity-90">Capturing moments of learning, joy, and achievement.</p>
        </div>
      </section>

      <Section title="Life at Sunrise" subtitle="A glimpse into our campus and student activities.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-72 overflow-hidden rounded-2xl shadow-lg border border-slate-100"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">View Full Screen</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default GalleryPage;
