import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Technical Support', path: '/technical-support' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>sales@kllatifix.com</span>
            </div>
          </div>
          <div className="text-xs">
            Leading Tile Adhesive Solutions Since 2010
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white backdrop-blur-md shadow-xl border-b-2 border-gray-100' 
            : 'bg-transparent'
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="flex items-center">
                <img 
                  src="/logo.jpeg" 
                  alt="KL Latifix Logo" 
                  className="h-10 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={`hidden w-10 h-10 md:w-12 md:h-12 rounded-lg items-center justify-center transition-colors ${
                  scrolled ? 'bg-blue-600' : 'bg-blue-600'
                }`}>
                  <span className="text-white font-bold text-lg md:text-xl">KL</span>
                </div>
              </div>
              <div>
                <h1 className={`font-display font-bold text-lg md:text-xl transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  KL Latifix
                </h1>
                <p className={`text-xs transition-colors ${
                  scrolled ? 'text-blue-600' : 'text-green-300'
                }`}>
                  Premium Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`font-semibold text-base transition-all duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? scrolled 
                        ? 'text-white bg-blue-600 shadow-md' 
                        : 'text-white bg-blue-600 shadow-md'
                      : scrolled
                        ? 'text-gray-900 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-300 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`block py-3 px-4 font-semibold text-base transition-all duration-200 rounded-lg mb-2 ${
                  location.pathname === item.path
                    ? 'text-white bg-blue-600 shadow-md'
                    : 'text-gray-900 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-4 transition-all duration-200 shadow-md"
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;