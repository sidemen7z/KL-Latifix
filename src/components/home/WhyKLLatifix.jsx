import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Clock, Users, Leaf, Heart } from 'lucide-react';

const WhyKLLatifix = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const rightCardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const reasons = [
    {
      icon: Clock,
      title: "Quick & Responsive Service",
      description: "Lightning-fast response times with dedicated support teams ensuring your projects never face delays.",
      stats: { number: 24, suffix: "hrs", label: "Response Time" },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "On-site Training",
      description: "Comprehensive training programs for your team to ensure perfect application and maximum performance.",
      stats: { number: 1000, suffix: "+", label: "Professionals Trained" },
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Leaf,
      title: "Reduced Carbon Footprint",
      description: "Eco-friendly formulations that minimize environmental impact while maintaining superior performance.",
      stats: { number: 30, suffix: "%", label: "Carbon Reduction" },
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Long-term Relationships",
      description: "Building lasting partnerships through consistent quality, reliability, and exceptional customer service.",
      stats: { number: 95, suffix: "%", label: "Client Retention" },
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full translate-x-48 translate-y-48"></div>
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
            variants={cardVariants}
            className="inline-flex items-center bg-secondary-100 text-secondary-700 rounded-full px-6 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
            <span className="font-medium">Why Choose Us</span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
          >
            Why <span className="text-green-600">KL Latifix</span>?
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We go beyond just providing products. We deliver complete solutions with 
            unmatched service quality and environmental responsibility.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? cardVariants : rightCardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(reason.icon, { className: "w-8 h-8 text-white" })}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {reason.description}
                  </p>

                  {/* Stats */}
                  <div 
                    ref={statsRef}
                    className={`inline-flex items-center bg-gradient-to-r ${reason.gradient} text-white rounded-full px-4 py-2`}
                  >
                    <span className="text-2xl font-bold mr-1">
                      {statsInView && (
                        <CountUp
                          end={reason.stats.number}
                          duration={2}
                          separator=","
                        />
                      )}
                      {reason.stats.suffix}
                    </span>
                    <span className="text-sm opacity-90 ml-2">{reason.stats.label}</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`w-0 h-1 bg-gradient-to-r ${reason.gradient} rounded-full mt-6 group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust KL Latifix for their construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Our Products
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Request Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKLLatifix;