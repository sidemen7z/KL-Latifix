import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Leaf, Recycle, Heart, Globe } from 'lucide-react';

const SustainabilityPromise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
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

  const floatVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: "Eco-Friendly Formulations",
      description: "Our products are developed with environmentally conscious ingredients that minimize ecological impact.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Recycle,
      title: "Sustainable Manufacturing",
      description: "We employ green manufacturing processes and promote recycling throughout our production cycle.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Heart,
      title: "Health & Safety First",
      description: "Non-toxic formulations that prioritize the health and safety of workers and end-users alike.",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Globe,
      title: "Global Responsibility",
      description: "Contributing to a sustainable future through responsible business practices and community engagement.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-blue-900/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300/30 rounded-full animate-bounce"></div>

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
            className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-100 rounded-full px-6 py-2 mb-6"
          >
            <Leaf className="w-4 h-4 mr-3" />
            <span className="font-medium">Sustainability Promise</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-6xl text-white mb-6"
          >
            Mindful of Both the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Planet & People
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            At KL Latifix, we believe in creating products that not only deliver exceptional performance 
            but also contribute to a sustainable and healthier future for generations to come.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {sustainabilityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={floatVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(feature.icon, { className: "w-8 h-8 text-white" })}
              </div>
              
              <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-green-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-green-100 leading-relaxed">
                {feature.description}
              </p>

              <div className={`w-0 h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-white font-medium">Carbon Footprint Reduction</div>
              <div className="text-green-200 text-sm mt-1">Compared to traditional methods</div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-white font-medium">Eco-Friendly Products</div>
              <div className="text-blue-200 text-sm mt-1">Certified sustainable materials</div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white font-medium">Green Initiatives</div>
              <div className="text-purple-200 text-sm mt-1">Environmental programs launched</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <h3 className="font-display font-bold text-3xl text-white mb-6">
            Join Us in Building a Sustainable Future
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Choose KL Latifix for construction solutions that care for both performance and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn About Our Initiatives
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Download Sustainability Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityPromise;