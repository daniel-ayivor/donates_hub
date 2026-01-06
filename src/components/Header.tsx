import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/impact', label: 'Our Impact' },
    { path: '/activities', label: 'Activities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-white/60 backdrop-blur-lg shadow-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.jpeg" 
              alt="African Assistance Plan Logo" 
              className="h-12 w-12 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-900">
              African Assistance Plan
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-brand-blue font-semibold'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              Donate Now
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md"
        >
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-medium py-2 ${
                  location.pathname === item.path
                    ? 'text-brand-blue'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors duration-300"
            >
              Donate Now
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;