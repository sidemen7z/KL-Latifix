import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Layers, Sparkles, Hammer, Home } from 'lucide-react';

const ProductHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const products = [
    {
      icon: Layers,
      title: "Tile Adhesives",
      description: "Premium quality adhesives for ceramic, porcelain, and natural stone tiles with superior bonding strength.",
      features: ["Water Resistant", "High Strength", "Easy Application"],
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Droplets,
      title: "Waterproofing",
      description: "Advanced waterproofing solutions that provide long-lasting protection against moisture and water damage.",
      features: ["100% Waterproof", "Flexible", "UV Resistant"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-cyan-500 to-cyan-700",
      bgGradient: "from-cyan-50 to-cyan-100"
    },
    {
      icon: Sparkles,
      title: "Tile Grouts",
      description: "High-performance grouts available in multiple colors with excellent stain resistance and durability.",
      features: ["Stain Resistant", "Color Variety", "Anti-Fungal"],
      image: "https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      icon: Hammer,
      title: "Epoxy Grouts",
      description: "Chemical-resistant epoxy grouts perfect for industrial applications and high-traffic areas.",
      features: ["Chemical Resistant", "High Durability", "Industrial Grade"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-green-500 to-green-700",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: Home,
      title: "Ready Mix Plaster",
      description: "Pre-mixed plaster solutions that ensure consistent quality and reduce on-site mixing time.",
      features: ["Ready to Use", "Consistent Quality", "Time Saving"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-orange-500 to-orange-700",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="font-medium">Our Products</span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
          >
            Product <span className="text-blue-600">Highlights</span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our comprehensive range of construction solutions designed to meet 
            every project requirement with uncompromising quality.
          </motion.p>
        </motion.div>

        {/* Featured Product - Large Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${products[0].gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  {React.createElement(products[0].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="font-display font-bold text-3xl text-gray-900 mb-4">
                  {products[0].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {products[0].description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {products[0].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`bg-gradient-to-r ${products[0].bgGradient} text-gray-700 px-4 py-2 rounded-full text-sm font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  to="/products"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`inline-flex items-center bg-gradient-to-r ${products[0].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 w-fit group`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src={products[0].image}
                  alt={products[0].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${products[0].gradient} opacity-20`}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {products.slice(1).map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {React.createElement(product.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className={`w-0 h-1 bg-gradient-to-r ${product.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Explore Our Complete Range
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Browse our comprehensive product catalog and find the perfect solution for your construction needs.
              </p>
              <Link
                to="/products"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
              >
                <span>View All Products</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHighlights;