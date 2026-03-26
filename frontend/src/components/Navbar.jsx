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

  // Mobile Drawer Effect: Lock Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-white py-5'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-black tracking-tighter text-gray-900 leading-none">
            SUNRISE<br />
            <span className="text-[10px] tracking-[0.5em] text-gray-400 font-bold uppercase">School</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-4 h-full">
          {MENU_ITEMS.map((item, idx) => (
            <NavItem key={idx} item={item} scrolled={scrolled} />
          ))}
          <div className="pl-4">
            <button className="btn-premium !py-2.5 !px-6 !text-[11px] uppercase tracking-widest">
              Portal
            </button>
          </div>
        </div>

        {/* Mobile Menu Button - Hamburger */}
        <button 
          className="lg:hidden p-2 text-gray-900 focus:outline-none transition-transform active:scale-90" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-[70] shadow-2xl overflow-y-auto lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-50">
                <span className="text-xl font-black tracking-tighter text-gray-900 uppercase">Menu</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col p-6 space-y-1">
                {MENU_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex justify-between items-center py-2">
                      <Link
                        to={item.path}
                        className="flex-grow py-3 text-lg font-black uppercase tracking-tight text-gray-900"
                        onClick={() => !item.dropdown && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <button 
                          onClick={() => setActiveMobileDropdown(activeMobileDropdown === idx ? null : idx)}
                          className="p-3 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 rounded-lg"
                        >
                          <ChevronDown 
                            size={18} 
                            className={`transition-transform duration-300 ${activeMobileDropdown === idx ? 'rotate-180' : ''}`} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {item.dropdown && (activeMobileDropdown === idx) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50/50 rounded-xl mb-2 ml-2"
                      >
                        <div className="py-2 flex flex-col border-l-2 border-gray-100 ml-2">
                          {item.dropdown.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              className="px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900"
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
                
                <div className="pt-10 pb-6">
                  <button className="btn-premium w-full py-5 text-sm font-bold uppercase tracking-widest shadow-xl">
                    Portal Login
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
