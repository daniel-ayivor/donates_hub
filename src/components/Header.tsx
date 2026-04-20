import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  // const dropdownRef = useRef(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/impact', label: 'Our Impact' },
    { path: '/current-project', label: 'Current Projects' },
    // { path: '/project', label: 'Project' },
    { path: '/get-involved', label: 'Get Involved' },

    { path: '/contact', label: 'Contact' },
  ];

  const aboutDropdownItems = [
    { path: '/about', label: 'About Us' },
    { path: '/activities', label: ' What We do' },
    { path: '/gallery', label: ' Gallery' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20'
          : 'bg-white/60 backdrop-blur-lg shadow-sm border-b border-white/10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.jpeg"
              alt="Africa Assistance Plan Logo"
              className="h-12 w-12 object-contain rounded-lg"
            />
            <span className="hidden md:block text-2xl font-bold text-gray-900">
              Africa Assistance Plan
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {/* 1. Home */}
            <Link
              to="/"
              className={`font-medium transition-colors duration-300 ${location.pathname === '/'
                  ? 'text-brand-blue font-semibold'
                  : 'text-gray-700 hover:text-brand-blue'
                }`}
            >
              Home
            </Link>

            {/* 2. About Us Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className={`font-medium transition-colors duration-300 flex items-center ${location.pathname === '/about' || location.pathname === '/activities'
                    ? 'text-brand-blue font-semibold'
                    : 'text-gray-700 hover:text-brand-blue'
                  }`}
              >
                About Us
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                  >
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className={`block px-4 py-3 font-medium transition-colors duration-200 ${location.pathname === item.path
                            ? 'bg-brand-blue/10 text-brand-blue'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Remaining links */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${location.pathname === item.path
                    ? 'text-brand-blue font-semibold'
                    : 'text-gray-700 hover:text-brand-blue'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* 4. Give */}
            <Link
              to="/donate"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              Give
            </Link>
          </nav>


          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100"
        >
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-medium py-3 px-4 rounded-lg transition-all duration-200 ${location.pathname === item.path
                      ? 'bg-brand-blue/10 text-brand-blue font-semibold shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                    }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile About Us Dropdown */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
            >
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className={`w-full flex items-center justify-between font-medium py-3 px-4 rounded-lg transition-all duration-200 ${location.pathname === '/about' || location.pathname === '/activities'
                    ? 'bg-brand-blue/10 text-brand-blue font-semibold shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                  }`}
              >
                About Us
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMobileAboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden ml-4 mt-1 space-y-1"
                  >
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileAboutOpen(false);
                        }}
                        className={`block font-medium py-2 px-4 rounded-lg transition-all duration-200 ${location.pathname === item.path
                            ? 'bg-brand-blue/10 text-brand-blue font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: (navItems.length + 1) * 0.1 + 0.1, duration: 0.3 }}
              className="pt-4"
            >
              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue text-white px-5 py-2.5 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Give
                </span>
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;