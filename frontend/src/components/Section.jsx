import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, title, subtitle, className = "", bgColor = "bg-white", id }) => {
  return (
    <section id={id} className={`section-padding ${bgColor} ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-20 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
