import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-400 pt-20 pb-10">
      <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <h3 className="text-gray-900 text-2xl font-black tracking-tighter">SUNRISE</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering students to achieve excellence through innovation, character building, and academic success since 1995.
          </p>
          <div className="flex space-x-6">
            <Facebook className="hover:text-gray-900 cursor-pointer transition-colors" size={20} />
            <Instagram className="hover:text-gray-900 cursor-pointer transition-colors" size={20} />
            <Twitter className="hover:text-gray-900 cursor-pointer transition-colors" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gray-900 transition-colors">Academics</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-900 transition-colors">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-8">Support</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start space-x-4">
              <MapPin className="text-gray-900 shrink-0" size={18} />
              <span className="leading-relaxed">123 Knowledge Lane, Education City, Rajkot, Gujarat</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-gray-900 shrink-0" size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-gray-900 shrink-0" size={18} />
              <span>info@sunriseschool.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
        <p>&copy; {new Date().getFullYear()} Sunrise School Rajkot.</p>
        <p className="mt-4 md:mt-0">Designed with excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
