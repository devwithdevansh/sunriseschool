import React from 'react';
import Section from '../components/Section.jsx';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div>
      <section className="bg-brand-dark py-20 text-white text-center">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Story & Vision
          </motion.h1>
          <p className="text-xl text-slate-300">Building a foundation of excellence since 1995.</p>
        </div>
      </section>

      <Section title="Our Mission" subtitle="Empowering excellence every day.">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Our mission is to provide a nurturing and challenging academic environment that encourages students to be lifelong learners and responsible global citizens. We focus on holistic development, integrating modern technology with traditional values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { label: "Integrity", desc: "Honesty and ethical behavior in all our actions." },
              { label: "Excellence", desc: "Striving for the highest quality in every endeavor." },
              { label: "Community", desc: "Fostering a sense of belonging and mutual respect." }
            ].map((v, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-brand-blue mb-2">{v.label}</h3>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
