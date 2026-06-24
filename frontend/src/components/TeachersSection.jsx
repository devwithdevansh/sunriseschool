import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'Highly Qualified', desc: 'All our teachers hold advanced degrees and relevant certifications in their subjects.' },
  { icon: Award, label: 'Experienced Faculty', desc: 'With years of classroom experience, our educators deliver lessons that truly inspire.' },
  { icon: BookOpen, label: 'Student-Centred', desc: 'Every lesson is crafted with the student\'s growth, curiosity, and confidence in mind.' },
  { icon: Heart, label: 'Caring & Dedicated', desc: 'Our teachers go beyond academics — they mentor, support, and encourage each child.' },
];

const TeachersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-orange to-orange-600 w-full relative overflow-hidden -mt-12 rounded-t-[4rem] z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
      {/* Decorative blur blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-black tracking-[0.5em] uppercase text-orange-100 mb-4 block"
          >
            Our Educators
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            Our Teachers
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-1 bg-white/50 mx-auto rounded-full"
          />
        </div>

        {/* Main description paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-12 shadow-lg"
        >
          <p className="text-white text-lg md:text-xl leading-relaxed font-light mb-6">
            At <span className="font-bold text-orange-100">Sunrise School</span>, our teachers are the heart of everything we do. Each member of our faculty is a highly educated, passionate professional who brings deep subject expertise and a genuine love for teaching into every classroom.
          </p>
          <p className="text-white/85 text-base md:text-lg leading-relaxed font-light mb-6">
            Our educators hold postgraduate and professional qualifications in their respective fields, ensuring that students receive the highest quality of instruction — from foundational Kindergarten learning all the way through Higher Secondary Commerce. They participate in regular training workshops and adopt modern, research-backed teaching methodologies to keep their skills sharp and their classrooms engaging.
          </p>
          <p className="text-white/85 text-base md:text-lg leading-relaxed font-light">
            Beyond academics, our teachers serve as mentors, role models, and guides. They nurture not just intellectual growth but also character, values, and confidence in every student. At Sunrise School, we firmly believe that a great teacher does not just teach — they <span className="font-semibold text-orange-100">inspire</span>.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-start gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                <item.icon className="w-6 h-6 text-white group-hover:text-brand-orange transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base uppercase tracking-wide mb-1">{item.label}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeachersSection;
