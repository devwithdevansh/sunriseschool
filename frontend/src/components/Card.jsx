import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, icon: Icon, image, className = "", children }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 12,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-400 hover:shadow-2xl hover:border-brand-orange/50 group ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        variants={{
          hover: { y: -8, scale: 1.02 }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-full w-full"
      >
        {image && (
          <div className="h-48 overflow-hidden relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors duration-500"></div>
          </div>
        )}
        <div className="p-8">
          {Icon && (
            <motion.div 
              variants={iconVariants}
              className="w-14 h-14 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-sm"
            >
              <Icon size={28} />
            </motion.div>
          )}
          {title && <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">{title}</h3>}
          {description && <p className="text-gray-600 text-sm mb-6 leading-relaxed font-medium">{description}</p>}
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;

