import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    School: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Management', to: '/about/management' },
      { label: 'Gallery', to: '/gallery' },
    ],
    Academics: [
      { label: 'KG Program', to: '/academics/kg' },
      { label: 'Primary', to: '/academics/primary' },
      { label: 'Higher Secondary', to: '/academics/higher-secondary' },
      { label: 'Competitive Exams', to: '/competitive-exams' },
    ],
    Campus: [
      { label: 'Sports', to: '/sports' },
      { label: 'Co-Curricular', to: '/co-curricular' },
      { label: 'Transportation', to: '/transportation' },
      { label: 'Stationary', to: '/stationary' },
    ],
    Connect: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Admission Inquiry', to: '/inquiry' },
      { label: 'Activities', to: '/activities' },
    ],
  };

  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Orange top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-orange via-orange-400 to-brand-orange" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-white text-3xl font-black tracking-tighter">SUNRISE</h3>
              <span className="text-brand-orange text-[10px] font-black tracking-[0.4em] uppercase">School Rajkot</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              Empowering students to achieve excellence through innovation, character building, and academic success since 2016.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <button key={label} aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
            {/* Contact pills */}
            <div className="space-y-3 pt-2">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-500 hover:text-brand-orange transition-colors group">
                <Phone size={14} className="text-brand-orange shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@sunriseschool.edu" className="flex items-center gap-3 text-sm text-gray-500 hover:text-brand-orange transition-colors group">
                <Mail size={14} className="text-brand-orange shrink-0" />
                info@sunriseschool.edu
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={14} className="text-brand-orange shrink-0 mt-0.5" />
                123 Knowledge Lane, Rajkot, Gujarat
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to}
                      className="text-sm text-gray-500 hover:text-brand-orange transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      {item.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0 transition-transform duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 border border-white/5 p-8 md:p-10 mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <p className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-2">Admissions 2024-25</p>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Ready to Join Sunrise School?</h3>
            </div>
            <Link to="/inquiry"
              className="shrink-0 px-10 py-4 bg-brand-orange text-white font-black text-sm uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group"
            >
              Apply Now
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
            © {currentYear} Sunrise School Rajkot. All rights reserved.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700">
            Excellence in Education Since 2016
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
