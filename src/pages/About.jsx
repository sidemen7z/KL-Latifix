import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Lightbulb, Users, Heart, Leaf } from 'lucide-react';

const About = () => {
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

  const timelineEvents = [
    { year: '2010', title: 'Company Founded', description: 'KL Latifix established with a vision to revolutionize tile adhesive solutions' },
    { year: '2013', title: 'First Major Contract', description: 'Secured our first major commercial project, marking our entry into large-scale construction' },
    { year: '2016', title: 'Product Innovation', description: 'Launched our eco-friendly product line with reduced carbon footprint' },
    { year: '2019', title: 'Market Expansion', description: 'Expanded operations across multiple states with regional distribution centers' },
    { year: '2022', title: 'Technology Upgrade', description: 'Implemented advanced manufacturing technology for enhanced product quality' },
    { year: '2024', title: 'Sustainability Leader', description: 'Achieved 100% eco-friendly product certification and carbon-neutral operations' }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide innovative, high-quality tile adhesive solutions that exceed customer expectations while maintaining environmental responsibility.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading tile adhesive company globally, known for innovation, quality, and sustainable construction solutions.",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Continuous research and development to create cutting-edge solutions that meet evolving construction industry needs.",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      icon: Users,
      title: "Commitment to Customers",
      description: "Building long-term relationships through exceptional service, technical support, and reliable product performance.",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Heart,
      title: "Health & Safety",
      description: "Prioritizing the health and safety of our workers, customers, and communities through safe product formulations.",
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: Leaf,
      title: "Environment Focus",
      description: "Committed to sustainable practices and eco-friendly products that minimize environmental impact.",
      gradient: "from-teal-500 to-teal-700"
    }
  ];

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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">KL Latifix</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Building trust through innovation, quality, and sustainable construction solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-6 py-2 mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span className="font-medium">Who We Are</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Leading the Future of Construction
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KL Latifix Pvt. Ltd. has been at the forefront of the tile adhesive industry for over a decade. 
                We combine advanced technology with deep industry expertise to deliver solutions that not only 
                meet but exceed the expectations of builders, contractors, and architects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our commitment to quality, innovation, and sustainability has made us a trusted partner for 
                construction projects of all scales, from residential homes to large commercial complexes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction site"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Quality Assured</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide everything we do and drive our commitment to excellence.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  {React.createElement(value.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A timeline of milestones that shaped KL Latifix into the industry leader we are today.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{event.year}</div>
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;