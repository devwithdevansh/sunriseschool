import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/ANNUAL/0D5A5278.JPG';

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Sunrise School campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-900/70 to-gray-900/30" />
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-black tracking-[0.4em] uppercase text-brand-orange mb-6 block drop-shadow-md">Our Community</span>
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter mb-6 uppercase text-white leading-[0.9] drop-shadow-2xl">
              Sunrise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-brand-orange">Alumni</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            We're building our alumni network and would love to hear from former students of Sunrise School Rajkot.
          </motion.p>
        </div>
      </section>

      {/* COMING SOON / CALL FOR ALUMNI */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 inline-flex p-5 rounded-full bg-blue-50">
              <Users size={36} className="text-brand-blue" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 tracking-tighter uppercase">Alumni Network — Coming Soon</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              We're in the process of putting together our official alumni network, with real stories and profiles
              from students who've graduated from Sunrise School Rajkot. If you're a former student and would like
              to be featured, or if you'd like to help us organize a reunion, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-brand-orange text-white text-sm font-black uppercase tracking-widest rounded-full shadow-lg hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-white py-12 text-center border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          © {new Date().getFullYear()} Sunrise School Alumni Network
        </p>
      </div>
    </div>
  );
};

export default AlumniPage;
