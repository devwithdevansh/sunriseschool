import React from 'react';
import { motion } from 'framer-motion';

const AboutVisionSection = () => {
  return (
    <section className="py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter uppercase relative">
              About Sunrise School
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gray-900 rounded-full"></span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Sunrise School is an established institution dedicated to providing high-quality education in a supportive and discipline-oriented environment.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                We believe in nurturing the unique potential of every student, focusing on academic rigour, holistic growth, and character development. Our campus provides modern facilities that inspire learning and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-12 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
            
            <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase relative z-10">
              Our Vision
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-white/20 rounded-full"></span>
            </h2>
            <div className="space-y-6 relative z-10">
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                Our vision is to empower students to become future-ready citizens who are academically competent, socially responsible, and ethically strong.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We aim to create a learning ecosystem that encourages critical thinking, innovation, and a lifelong passion for knowledge, ensuring our graduates excel in the global landscape of the 21st century.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
