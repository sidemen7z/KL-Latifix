import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { 
  Leaf, 
  Recycle, 
  Heart, 
  Globe, 
  Award,
  TreePine,
  Droplets,
  Sun,
  Wind,
  Factory
} from 'lucide-react';

const Sustainability = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const leafRef = useRef(null);
  const earthRef = useRef(null);

  useEffect(() => {
    // Animated leaf floating effect
    if (leafRef.current) {
      gsap.to(leafRef.current, {
        y: -20,
        rotation: 5,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });
    }

    // Earth rotation animation
    if (earthRef.current) {
      gsap.to(earthRef.current, {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });
    }
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

  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: "Eco Materials",
      description: "We use environmentally friendly raw materials that minimize ecological impact while maintaining superior performance.",
      stats: "95% Natural Components",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Recycle,
      title: "Reduced Waste",
      description: "Our manufacturing processes are optimized to minimize waste generation and promote circular economy principles.",
      stats: "60% Waste Reduction",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Long-lasting Performance",
      description: "Durable products that last longer reduce the need for frequent replacements, minimizing environmental impact.",
      stats: "25+ Years Lifespan",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Health-safe Products",
      description: "Non-toxic formulations that prioritize the health and safety of workers, users, and the environment.",
      stats: "100% Non-toxic",
      color: "from-red-500 to-red-600"
    }
  ];

  const initiatives = [
    {
      icon: TreePine,
      title: "Carbon Neutral Operations",
      description: "Achieved carbon neutrality through renewable energy adoption and carbon offset programs.",
      impact: "Zero Net Emissions"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water recycling systems reduce water consumption by 40% in our manufacturing processes.",
      impact: "40% Water Saved"
    },
    {
      icon: Sun,
      title: "Solar Energy",
      description: "70% of our energy needs are met through solar power installations across our facilities.",
      impact: "70% Renewable Energy"
    },
    {
      icon: Wind,
      title: "Clean Air Initiative",
      description: "State-of-the-art filtration systems ensure minimal air pollution from our operations.",
      impact: "95% Emission Reduction"
    },
    {
      icon: Factory,
      title: "Green Manufacturing",
      description: "Eco-friendly production processes that minimize environmental footprint while maximizing efficiency.",
      impact: "50% Energy Efficient"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Waste-to-resource programs that convert production waste into useful materials for other industries.",
      impact: "80% Waste Recycled"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div ref={leafRef} className="absolute top-20 left-10 w-16 h-16 text-green-400 opacity-30">
            <Leaf size={64} />
          </div>
          <div ref={earthRef} className="absolute bottom-20 right-10 w-24 h-24 text-blue-400 opacity-20">
            <Globe size={96} />
          </div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-blue-400 rounded-full opacity-15 animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6"
            >
              <Leaf className="w-5 h-5 mr-3" />
              <span className="font-medium">Sustainability Promise</span>
            </motion.div>

            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
              Building a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Greener Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Our commitment to sustainability drives every decision we make, from eco-friendly materials 
              to carbon-neutral operations, ensuring a healthier planet for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Our Sustainability Pillars
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Four core principles guide our sustainable approach to construction solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(feature.icon, { className: "w-10 h-10 text-white" })}
                </div>
                
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className={`inline-flex items-center bg-gradient-to-r ${feature.color} text-white rounded-full px-4 py-2 text-sm font-semibold`}>
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Green Initiatives */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Green Initiatives
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Concrete actions we've taken to minimize our environmental impact and promote sustainability.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.createElement(initiative.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {initiative.description}
                    </p>
                    <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl mb-6"
            >
              Our Environmental Impact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-green-100 mb-16 max-w-3xl mx-auto"
            >
              Measurable results from our commitment to sustainable practices and environmental responsibility.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "30%", label: "Carbon Footprint Reduction", desc: "Since 2020" },
                { number: "100%", label: "Renewable Energy", desc: "By 2025 Target" },
                { number: "50+", label: "Green Certifications", desc: "Achieved" },
                { number: "1M+", label: "Trees Equivalent", desc: "CO2 Saved Annually" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-green-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-green-200">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Join Our Green Mission
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Partner with us in building a sustainable future. Choose eco-friendly construction solutions 
              that make a positive impact on our planet.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Sustainability Report
              </button>
              <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More About Our Initiatives
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;