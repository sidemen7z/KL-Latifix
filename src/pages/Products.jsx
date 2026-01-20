import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Layers, 
  Droplets, 
  Sparkles, 
  Hammer, 
  Home, 
  Filter,
  Search,
  Star,
  CheckCircle,
  ArrowRight,
  X,
  Download,
  Palette,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('tile-adhesives');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categories = [
    { id: 'tile-adhesives', name: 'Tile Adhesives', icon: Layers, count: 5 },
    { id: 'tile-grout', name: 'Tile Grout', icon: Sparkles, count: 6 },
    { id: 'epoxy-grout', name: 'Epoxy Grout', icon: Hammer, count: 4 },
    { id: 'waterproofing', name: 'Waterproofing', icon: Droplets, count: 3 },
    { id: 'ready-mix', name: 'Ready Mix Plaster', icon: Home, count: 2 }
  ];

  const products = [
    // Tile Adhesives
    {
      id: 1,
      name: 'Latifix 515',
      category: 'tile-adhesives',
      type: 'C1TE',
      color: 'Grey',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Polymer modified adhesive for flooring & wall application with high bond strength.',
      application: 'Flooring & Wall Application',
      features: ['Single component – just add water', 'High bond strength', 'Polymer modified', 'Easy application'],
      specifications: {
        'Open Time': '20 minutes',
        'Pot Life': '3-4 hours',
        'Coverage': '4-6 sq.m per 20kg',
        'Setting Time': '24 hours'
      },
      rating: 4.9,
      price: '₹450/bag',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      name: 'Latifix 525',
      category: 'tile-adhesives',
      type: 'C2TE',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Enhanced polymer modified adhesive with improved flexibility and water resistance.',
      application: 'Wall & Floor Tiles',
      features: ['Enhanced flexibility', 'Water resistant', 'Improved adhesion', 'Suitable for large tiles'],
      specifications: {
        'Open Time': '30 minutes',
        'Pot Life': '4-5 hours',
        'Coverage': '3-5 sq.m per 20kg',
        'Setting Time': '24 hours'
      },
      rating: 4.8,
      price: '₹520/bag',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 3,
      name: 'Latifix 535',
      category: 'tile-adhesives',
      type: 'C2TES1',
      color: 'Grey',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium grade adhesive with slip resistance for vertical applications.',
      application: 'Vertical Wall Applications',
      features: ['Slip resistant', 'Premium grade', 'Vertical application', 'High performance'],
      specifications: {
        'Open Time': '25 minutes',
        'Pot Life': '4 hours',
        'Coverage': '4-5 sq.m per 20kg',
        'Setting Time': '24 hours'
      },
      rating: 4.9,
      price: '₹580/bag',
      gradient: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 4,
      name: 'Latifix 545',
      category: 'tile-adhesives',
      type: 'C2TE',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Fast setting adhesive for quick installation and reduced project time.',
      application: 'Fast Track Projects',
      features: ['Fast setting', 'Quick installation', 'Time saving', 'Professional grade'],
      specifications: {
        'Open Time': '15 minutes',
        'Pot Life': '2-3 hours',
        'Coverage': '4-6 sq.m per 20kg',
        'Setting Time': '12 hours'
      },
      rating: 4.7,
      price: '₹620/bag',
      gradient: 'from-green-500 to-green-700'
    },
    {
      id: 5,
      name: 'Latifix 555',
      category: 'tile-adhesives',
      type: 'C2TES1',
      color: 'Grey',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Ultra-high performance adhesive for demanding applications and extreme conditions.',
      application: 'Heavy Duty Applications',
      features: ['Ultra-high performance', 'Extreme conditions', 'Heavy duty', 'Maximum strength'],
      specifications: {
        'Open Time': '35 minutes',
        'Pot Life': '5-6 hours',
        'Coverage': '3-4 sq.m per 20kg',
        'Setting Time': '24 hours'
      },
      rating: 5.0,
      price: '₹750/bag',
      gradient: 'from-purple-500 to-purple-700'
    },

    // Tile Grout
    {
      id: 6,
      name: 'KL Grout Black',
      category: 'tile-grout',
      type: 'Standard',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium tile grout with seamless filling and smooth polished finish.',
      application: 'Interior & Exterior Tiles',
      features: ['Seamless filling', 'Smooth polished finish', 'High durability', 'Stain resistant'],
      specifications: {
        'Joint Width': '2-20mm',
        'Coverage': '1-3 sq.m per kg',
        'Working Time': '30 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.6,
      price: '₹280/kg',
      gradient: 'from-gray-800 to-black'
    },
    {
      id: 7,
      name: 'KL Grout Grey',
      category: 'tile-grout',
      type: 'Standard',
      color: 'Grey',
      image: 'https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Versatile grey grout suitable for most tile applications with excellent durability.',
      application: 'General Purpose',
      features: ['Versatile application', 'Excellent durability', 'Easy to clean', 'Consistent color'],
      specifications: {
        'Joint Width': '2-20mm',
        'Coverage': '1-3 sq.m per kg',
        'Working Time': '30 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.5,
      price: '₹260/kg',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      id: 8,
      name: 'KL Grout Ivory',
      category: 'tile-grout',
      type: 'Premium',
      color: 'Ivory',
      image: 'https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant ivory grout for premium applications with superior finish quality.',
      application: 'Premium Interiors',
      features: ['Premium quality', 'Elegant finish', 'Superior durability', 'Luxury applications'],
      specifications: {
        'Joint Width': '2-15mm',
        'Coverage': '1-2.5 sq.m per kg',
        'Working Time': '25 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.8,
      price: '₹320/kg',
      gradient: 'from-yellow-200 to-yellow-400'
    },
    {
      id: 9,
      name: 'KL Grout Slate Grey',
      category: 'tile-grout',
      type: 'Premium',
      color: 'Slate Grey',
      image: 'https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Modern slate grey grout perfect for contemporary designs and natural stone.',
      application: 'Contemporary Designs',
      features: ['Modern aesthetic', 'Natural stone compatible', 'Weather resistant', 'Contemporary look'],
      specifications: {
        'Joint Width': '2-20mm',
        'Coverage': '1-3 sq.m per kg',
        'Working Time': '30 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.7,
      price: '₹300/kg',
      gradient: 'from-slate-500 to-slate-700'
    },
    {
      id: 10,
      name: 'KL Grout Maroon Red',
      category: 'tile-grout',
      type: 'Decorative',
      color: 'Maroon Red',
      image: 'https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Bold maroon red grout for decorative applications and accent features.',
      application: 'Decorative Features',
      features: ['Bold color', 'Decorative applications', 'Accent features', 'Unique aesthetic'],
      specifications: {
        'Joint Width': '2-15mm',
        'Coverage': '1-2.5 sq.m per kg',
        'Working Time': '25 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.4,
      price: '₹350/kg',
      gradient: 'from-red-700 to-red-900'
    },
    {
      id: 11,
      name: 'KL Grout White',
      category: 'tile-grout',
      type: 'Standard',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1562113530-57ba4cea1867?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Classic white grout providing clean, bright finish for all tile types.',
      application: 'Universal Application',
      features: ['Classic white', 'Clean finish', 'Bright appearance', 'Universal compatibility'],
      specifications: {
        'Joint Width': '2-20mm',
        'Coverage': '1-3 sq.m per kg',
        'Working Time': '30 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.6,
      price: '₹270/kg',
      gradient: 'from-gray-100 to-gray-300'
    },

    // Epoxy Grout
    {
      id: 12,
      name: 'KL Epoxy Pro 1kg',
      category: 'epoxy-grout',
      type: 'Premium Epoxy',
      color: 'Multiple Colors',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium epoxy grout with chemical resistance and high strength for demanding applications.',
      application: 'Industrial & Commercial',
      features: ['Chemical resistance', 'High strength', 'Stain proof', 'Easy maintenance'],
      specifications: {
        'Joint Width': '1-15mm',
        'Coverage': '1-2 sq.m per kg',
        'Working Time': '45 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.9,
      price: '₹1,200/kg',
      gradient: 'from-emerald-500 to-emerald-700'
    },
    {
      id: 13,
      name: 'KL Epoxy Pro 5kg',
      category: 'epoxy-grout',
      type: 'Premium Epoxy',
      color: 'Multiple Colors',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Bulk pack premium epoxy grout for large projects with consistent quality.',
      application: 'Large Projects',
      features: ['Bulk packaging', 'Consistent quality', 'Cost effective', 'Professional grade'],
      specifications: {
        'Joint Width': '1-15mm',
        'Coverage': '5-10 sq.m per pack',
        'Working Time': '45 minutes',
        'Curing Time': '24 hours'
      },
      rating: 4.8,
      price: '₹5,500/pack',
      gradient: 'from-teal-500 to-teal-700'
    },

    // Waterproofing
    {
      id: 14,
      name: 'KL Waterproof Bathroom',
      category: 'waterproofing',
      type: 'Liquid Membrane',
      color: 'Blue',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Specialized waterproofing solution for bathrooms preventing leakage and moisture damage.',
      application: 'Bathrooms',
      features: ['Prevent leakage', 'Moisture protection', 'Easy application', 'Long lasting'],
      specifications: {
        'Coverage': '1-1.5 sq.m per liter',
        'Dry Time': '4-6 hours',
        'Recoat Time': '6-8 hours',
        'Full Cure': '7 days'
      },
      rating: 4.7,
      price: '₹850/liter',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 15,
      name: 'KL Waterproof Terrace',
      category: 'waterproofing',
      type: 'Elastomeric',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Heavy-duty waterproofing for terraces and balconies with UV resistance.',
      application: 'Terraces & Balconies',
      features: ['UV resistant', 'Heavy duty', 'Weather proof', 'Crack bridging'],
      specifications: {
        'Coverage': '0.8-1.2 sq.m per liter',
        'Dry Time': '6-8 hours',
        'Recoat Time': '8-12 hours',
        'Full Cure': '7 days'
      },
      rating: 4.8,
      price: '₹950/liter',
      gradient: 'from-cyan-500 to-cyan-700'
    },

    // Ready Mix Plaster
    {
      id: 16,
      name: 'KL Ready Mix Standard',
      category: 'ready-mix',
      type: 'Standard Grade',
      color: 'Grey',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Ready mix plaster with crack resistance, high strength and minimal material wastage.',
      application: 'Interior & Exterior Walls',
      features: ['Crack resistant', 'High strength', 'Less curing', 'Minimal wastage'],
      specifications: {
        'Coverage': '12-15 sq.m per bag',
        'Thickness': '12-15mm',
        'Setting Time': '2-3 hours',
        'Curing Time': '7 days'
      },
      rating: 4.5,
      price: '₹380/bag',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      id: 17,
      name: 'KL Ready Mix Premium',
      category: 'ready-mix',
      type: 'Premium Grade',
      color: 'White',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium ready mix plaster for superior finish and enhanced durability.',
      application: 'Premium Interiors',
      features: ['Superior finish', 'Enhanced durability', 'Smooth texture', 'Premium quality'],
      specifications: {
        'Coverage': '10-12 sq.m per bag',
        'Thickness': '10-12mm',
        'Setting Time': '2-3 hours',
        'Curing Time': '7 days'
      },
      rating: 4.7,
      price: '₹450/bag',
      gradient: 'from-amber-500 to-amber-700'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Product Detail Modal Component
  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-80`}></div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="font-display font-bold text-3xl mb-2">{product.name}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {product.type}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {product.color}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Product Details</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg text-gray-900 mb-3">Application</h4>
                      <p className="text-gray-600">{product.application}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                        <div className="text-sm text-gray-500">Price per unit</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Specifications</h3>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-semibold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <button className={`w-full bg-gradient-to-r ${product.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                        <Download size={20} />
                        <span>Download Datasheet</span>
                      </button>
                      
                      <button className="w-full border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 py-4 rounded-xl font-semibold transition-all duration-300">
                        Request Quote
                      </button>
                      
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all duration-300">
                        Contact Technical Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Discover our comprehensive range of premium construction solutions designed for every project need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Search */}
            <motion.div variants={itemVariants} className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </motion.div>

            {/* Results Count */}
            <motion.div variants={itemVariants} className="text-gray-600">
              Showing {filteredProducts.length} products
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sticky Category Menu */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-80 flex-shrink-0 sticky top-24 h-fit hidden lg:block"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      variants={itemVariants}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {React.createElement(category.icon, { size: 20 })}
                        <span>{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className="flex-1">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60`}></div>
                      
                      {/* Type & Color Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        <span className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                          {product.type}
                        </span>
                        <span className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-gray-700">
                          {product.color}
                        </span>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <span className="font-bold text-gray-900">{product.price}</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-gray-500 mb-3">{product.application}</p>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <div className={`w-0 h-1 bg-gradient-to-r ${product.gradient} rounded-full group-hover:w-full transition-all duration-500 mb-4`}></div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Click for details</span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">No Products Found</h3>
                  <p className="text-gray-600 mb-6">Try selecting a different category or adjusting your search.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('tile-adhesives');
                      setSearchTerm('');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-white mb-6"
            >
              Need Help Choosing?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Our experts are here to help you select the perfect products for your specific project requirements.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Expert Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Download Catalog
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;