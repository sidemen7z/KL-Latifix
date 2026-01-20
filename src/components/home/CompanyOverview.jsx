import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Award, Globe, Shield } from 'lucide-react';

const CompanyOverview = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Cutting-edge tile & stone fixing solutions powered by innovative technology and research-driven formulations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Long-lasting performance with superior adhesion strength, ensuring your projects stand the test of time.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "International standards and best practices combined with local market understanding and expertise.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Trusted Solutions",
      description: "Reliable and consistent quality that builders, contractors, and architects trust for their critical projects.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-6 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
            <span className="font-medium">Company Overview</span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
          >
            Vision & <span className="text-blue-600">Strength</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We combine cutting-edge technology with deep industry expertise to deliver 
            tile adhesive solutions that exceed expectations and build lasting relationships.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(feature.icon, { className: "w-8 h-8 text-white" })}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={cardVariants}>
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <div className="text-4xl font-bold text-secondary-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Successful Projects</div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Product Variants</div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Quality Assurance</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;