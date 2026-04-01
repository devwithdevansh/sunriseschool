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
  const isActive = item.path !== '#' && (location.pathname === item.path || (item.dropdown && !item.isMore && item.dropdown.some(d => location.pathname === d.path)));

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.isMore ? (
        <button
          className={`flex items-center space-x-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-4 text-gray-400 hover:text-gray-900`}
        >
          <span className="text-xl tracking-normal leading-none -mt-2">{item.name}</span>
        </button>
      ) : (
        <Link
          to={item.path}
          className={`flex items-center space-x-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-4 ${isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
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
      )}

      {/* Underline for active/hover - only for main items without dropdown or for active parent */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gray-900"
        initial={{ width: 0 }}
        animate={{ width: (isHovered || isActive) && (!item.dropdown || item.isMore) ? '100%' : '0' }}
        transition={{ duration: 0.3 }}
      />

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {item.dropdown && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute top-full ${item.isMore ? 'right-0 w-72' : 'left-0 w-64'} bg-white shadow-2xl border border-gray-100 py-4 z-50 rounded-b-xl overflow-hidden`}
          >
            {item.isMore ? (
              <div className="flex flex-col max-h-[70vh] overflow-y-auto">
                {item.dropdown.map((hiddenItem, idx) => (
                  <div key={idx} className="border-b border-gray-50 last:border-0 pb-2 mb-2 last:mb-0 last:pb-0 px-6">
                    <Link
                      to={hiddenItem.path}
                      className="block py-2 text-[11px] font-black uppercase tracking-widest text-gray-900 hover:text-orange-500 transition-colors"
                    >
                      {hiddenItem.name}
                    </Link>
                    {hiddenItem.dropdown && (
                      <div className="pl-4 flex flex-col space-y-1">
                        {hiddenItem.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            className="block py-1 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              item.dropdown.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.path}
                  className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {sub.name}
                </Link>
              ))
            )}
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
  const [visibleCount, setVisibleCount] = useState(MENU_ITEMS.length);

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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Dynamic item count based on screen width
      if (width < 1024) {
        setVisibleCount(MENU_ITEMS.length);
      } else if (width < 1280) {
        setVisibleCount(4);
      } else if (width < 1440) {
        setVisibleCount(6);
      } else {
        setVisibleCount(8);
      }
    };

    handleResize(); // Init based on current width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = MENU_ITEMS.slice(0, visibleCount);
  const hiddenItems = MENU_ITEMS.slice(visibleCount);
  const desktopItems = [...visibleItems];

  if (hiddenItems.length > 0) {
    desktopItems.push({
      name: '...',
      path: '#',
      isMore: true,
      dropdown: hiddenItems
    });
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
      : 'bg-white py-5'
      }`}>
      <div className="w-full flex items-center h-full relative pl-6 pr-4 sm:pr-6 lg:pr-8">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center group py-4" onClick={() => setIsOpen(false)}>
            <span className="text-2xl font-black tracking-tighter text-gray-900 leading-none group-hover:scale-105 transition-transform duration-300">
              SUNRISE<br />
              <span className="text-[10px] tracking-[0.5em] text-gray-400 font-bold uppercase group-hover:text-gray-900 transition-colors tracking-[0.5em]">School</span>
            </span>
          </Link>
        </div>

        {/* Right Side Group: Links + Portal */}
        <div className="hidden lg:flex items-center ml-auto h-full space-x-8 xl:space-x-12">
          <div className="flex items-center space-x-6 xl:space-x-8 h-full">
            {desktopItems.map((item, idx) => (
              <NavItem key={idx} item={item} scrolled={scrolled} />
            ))}
          </div>
          <button className="btn-premium flex-shrink-0 !py-2.5 !px-8 !text-[10px] uppercase tracking-[0.2em] shadow-md hover:shadow-xl">
            Portal
          </button>
        </div>

        {/* Mobile Menu Button - Hamburger */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button
            className="p-2 text-gray-900 focus:outline-none transition-transform active:scale-90"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
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
