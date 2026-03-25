import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const MENU_ITEMS = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    dropdown: [
      { name: 'About School', path: '/about' },
      { name: 'Management Team', path: '/about/management' },
      { name: 'Trustees Message', path: '/about/message' },
      { name: 'Inquiry', path: '/contact' },
    ]
  },
  {
    name: 'Academics',
    path: '/academics',
    dropdown: [
      { name: 'KG (Playhouse to HKG)', path: '/academics/kg' },
      { name: 'Primary (1–10)', path: '/academics/primary' },
      { name: 'Higher Secondary (11–12 Commerce)', path: '/academics/higher-secondary' },
    ]
  },
  {
    name: 'Activities',
    path: '/activities',
    dropdown: [
      { name: 'Co-Curricular', path: '/activities/co-curricular' },
      { name: 'Competitive Exams', path: '/activities/exams' },
      { name: 'Sports', path: '/activities/sports' },
    ]
  },
  {
    name: 'Results',
    path: '/results',
    dropdown: [
      { name: '10 EM', path: '/results/10-em' },
      { name: '10 GM', path: '/results/10-gm' },
      { name: '12 Commerce', path: '/results/12-commerce' },
    ]
  },
  {
    name: 'Facilities',
    path: '/facilities',
    dropdown: [
      { name: 'Transportation', path: '/facilities/transport' },
      { name: 'Stationary', path: '/facilities/stationary' },
    ]
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Alumni', path: '/alumni' },
  { name: 'Notice', path: '/notice' },
  { name: 'Contact', path: '/contact' },
];

const NavItem = ({ item, scrolled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.some(d => location.pathname === d.path));

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.path}
        className={`flex items-center space-x-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-4 ${
          isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
        }`}
      >
        <span>{item.name}</span>
        {item.dropdown && (
          <ChevronDown 
            size={12} 
            className={`transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} 
          />
        )}
      </Link>

      {/* Underline for active/hover - only for main items without dropdown or for active parent */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gray-900"
        initial={{ width: 0 }}
        animate={{ width: (isHovered || isActive) && !item.dropdown ? '100%' : '0' }}
        transition={{ duration: 0.3 }}
      />

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {item.dropdown && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 py-4 z-50 rounded-b-xl overflow-hidden"
          >
            {item.dropdown.map((sub, idx) => (
              <Link
                key={idx}
                to={sub.path}
                className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white py-5'
    }`}>
      <div className="w-full px-6 md:px-12 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-gray-900 leading-none">
            SUNRISE<br />
            <span className="text-[10px] tracking-[0.5em] text-gray-400 font-bold uppercase">School</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 h-full">
          {MENU_ITEMS.map((item, idx) => (
            <NavItem key={idx} item={item} scrolled={scrolled} />
          ))}
          <button className="btn-premium !py-3 !px-8 !text-[10px] uppercase tracking-[0.2em]">
            Portal
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto pt-24 px-6 pb-20"
          >
            <div className="flex flex-col space-y-2">
              {MENU_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-gray-50 pb-2">
                  <div className="flex justify-between items-center py-4">
                    <Link
                      to={item.path}
                      className="text-2xl font-black uppercase tracking-tighter text-gray-900"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button 
                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === idx ? null : idx)}
                        className="p-2 bg-gray-50 rounded-full"
                      >
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${activeMobileDropdown === idx ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {item.dropdown && (
                    <motion.div
                      initial={false}
                      animate={{ height: activeMobileDropdown === idx ? 'auto' : 0, opacity: activeMobileDropdown === idx ? 1 : 0 }}
                      className="overflow-hidden bg-gray-50 rounded-2xl"
                    >
                      <div className="py-2 px-6 flex flex-col space-y-4">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            className="text-sm font-bold uppercase tracking-widest text-gray-500 py-2 border-b border-gray-100 last:border-0"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="pt-10">
                <button className="btn-premium w-full py-6 text-sm uppercase tracking-[0.3em]">Portal Login</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
