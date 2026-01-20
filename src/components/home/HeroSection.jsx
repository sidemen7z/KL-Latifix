import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const bgRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // GSAP background zoom animation
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 20,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });
    }

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${parallax}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Fallback */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: `linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Additional Gradient Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 z-1"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center text-white pt-20 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium">Leading Construction Solutions Since 2010</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 sm:mb-6"
          >
            <span className="block text-white">Premium</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Tile Adhesive
            </span>
            <span className="block text-white">Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            KL Latifix Pvt. Ltd. is one of the leading tile adhesive companies in the construction industry, 
            delivering cutting-edge solutions with advanced technology and global expertise.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary-400">15+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary-400">50+</div>
              <div className="text-xs sm:text-sm text-gray-400">Product Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary-400">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Quality Assured</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Link
              to="/products"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Contact Us</span>
              <Play size={20} className="group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary-500/10 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-secondary-500/10 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/2 right-10 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-primary-400/10 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;