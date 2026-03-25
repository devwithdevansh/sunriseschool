import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, icon: Icon, image, className = "", children }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 card-hover ${className}`}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
      )}
      <div className="p-6">
        {Icon && (
          <div className="w-12 h-12 bg-orange-100 text-brand-orange rounded-xl flex items-center justify-center mb-4">
            <Icon size={24} />
          </div>
        )}
        {title && <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>}
        {description && <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>}
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
