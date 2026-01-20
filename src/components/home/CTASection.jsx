import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full translate-x-48 translate-y-48 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 text-primary-300 rounded-full px-6 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></span>
            <span className="font-medium">Ready to Get Started?</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-6xl text-white mb-6"
          >
            Browse Our Range Today
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Find the perfect tile adhesive for your next project and experience 
            the difference that premium quality makes.
          </motion.p>

          {/* Main CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/products"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-2xl"
            >
              <span>Explore Products</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group bg-transparent border-2 border-secondary-500 hover:bg-secondary-500 text-secondary-400 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3"
            >
              <span>Get Consultation</span>
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-4">Call Us</h3>
            <p className="text-gray-400 mb-4">Speak directly with our experts</p>
            <a 
              href="tel:+919876543210" 
              className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
            >
              +91 98765 43210
            </a>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-secondary-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-4">Email Us</h3>
            <p className="text-gray-400 mb-4">Get detailed information</p>
            <a 
              href="mailto:sales@kllatifix.com" 
              className="text-secondary-400 hover:text-secondary-300 font-semibold transition-colors"
            >
              sales@kllatifix.com
            </a>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-4">Visit Us</h3>
            <p className="text-gray-400 mb-4">See our products in person</p>
            <span className="text-purple-400 font-semibold">
              Mumbai, Maharashtra
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Transform Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust KL Latifix for their construction needs. 
              Let's build something amazing together.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                <span className="text-gray-300">Free Consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                <span className="text-gray-300">Expert Guidance</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Quality Assurance</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              <span>Start Your Project Today</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;