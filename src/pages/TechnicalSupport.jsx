import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  BookOpen, 
  Download, 
  Phone,
  Mail,
  MessageCircle,
  Video,
  FileText,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

const TechnicalSupport = () => {
  const [selectedService, setSelectedService] = useState('training');
  
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

  const services = [
    {
      id: 'training',
      icon: Users,
      title: 'On-site Training',
      description: 'Comprehensive hands-on training programs for your team at your project location.',
      features: [
        'Expert trainers with 15+ years experience',
        'Customized training modules',
        'Hands-on practical sessions',
        'Certification upon completion',
        'Follow-up support included'
      ],
      duration: '1-3 days',
      availability: 'Pan India',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 'education',
      icon: BookOpen,
      title: 'Contractor Education',
      description: 'Educational programs designed to enhance contractor skills and knowledge.',
      features: [
        'Product application techniques',
        'Best practices and standards',
        'Quality control methods',
        'Safety protocols',
        'Troubleshooting guides'
      ],
      duration: '2-5 days',
      availability: 'Regional Centers',
      gradient: 'from-green-500 to-green-700'
    },
    {
      id: 'guidance',
      icon: MessageCircle,
      title: 'Application Guidance',
      description: '24/7 technical support for product application and troubleshooting.',
      features: [
        '24/7 helpline support',
        'Video call assistance',
        'Real-time problem solving',
        'Application recommendations',
        'Quality assurance guidance'
      ],
      duration: 'Immediate',
      availability: '24/7 Support',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      id: 'resources',
      icon: Download,
      title: 'Technical Resources',
      description: 'Comprehensive library of technical documents and application guides.',
      features: [
        'Product datasheets',
        'Application guides',
        'Video tutorials',
        'Case studies',
        'Technical specifications'
      ],
      duration: 'Instant Access',
      availability: 'Online Portal',
      gradient: 'from-orange-500 to-orange-700'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Direct phone support from our technical experts',
      contact: '+91 98765 43210',
      availability: '24/7 Available',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      contact: 'technical@kllatifix.com',
      availability: 'Response within 2 hours',
      color: 'green'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Live video calls for complex technical issues',
      contact: 'Schedule Online',
      availability: 'Mon-Sat 9AM-6PM',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Quick support via WhatsApp messaging',
      contact: '+91 98765 43211',
      availability: 'Instant Response',
      color: 'emerald'
    }
  ];

  const trainingPrograms = [
    {
      title: 'Basic Application Training',
      duration: '1 Day',
      participants: 'Up to 20',
      topics: ['Product overview', 'Basic application', 'Safety measures', 'Quality checks'],
      level: 'Beginner'
    },
    {
      title: 'Advanced Techniques Workshop',
      duration: '2 Days',
      participants: 'Up to 15',
      topics: ['Complex applications', 'Problem solving', 'Quality optimization', 'Advanced tools'],
      level: 'Advanced'
    },
    {
      title: 'Contractor Certification Program',
      duration: '3 Days',
      participants: 'Up to 12',
      topics: ['Complete product range', 'Best practices', 'Business development', 'Certification exam'],
      level: 'Professional'
    }
  ];

  const resources = [
    { name: 'Product Datasheets', type: 'PDF', size: '2.5 MB', downloads: '15K+' },
    { name: 'Application Guide', type: 'PDF', size: '8.2 MB', downloads: '12K+' },
    { name: 'Video Tutorials', type: 'Video', size: '250 MB', downloads: '8K+' },
    { name: 'Technical Specifications', type: 'PDF', size: '1.8 MB', downloads: '10K+' },
    { name: 'Safety Guidelines', type: 'PDF', size: '3.1 MB', downloads: '7K+' },
    { name: 'Troubleshooting Guide', type: 'PDF', size: '4.5 MB', downloads: '9K+' }
  ];

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary-500 rounded-full -translate-x-24 sm:-translate-x-48 -translate-y-24 sm:-translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-secondary-500 rounded-full translate-x-24 sm:translate-x-48 translate-y-24 sm:translate-y-48"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Support</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed px-4 sm:px-0">
              Expert guidance, comprehensive training, and 24/7 support to ensure your projects achieve perfect results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Our Support Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive technical support designed to help you achieve the best results with our products.
            </motion.p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                variants={itemVariants}
                onClick={() => setSelectedService(service.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                {React.createElement(service.icon, { size: 20 })}
                <span>{service.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Service Details */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            {services.map((service) => (
              selectedService === service.id && (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h3 className="font-display font-bold text-3xl text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Clock className="w-6 h-6 text-primary-600 mb-2" />
                        <div className="font-semibold text-gray-900">{service.duration}</div>
                        <div className="text-sm text-gray-600">Duration</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Award className="w-6 h-6 text-secondary-600 mb-2" />
                        <div className="font-semibold text-gray-900">{service.availability}</div>
                        <div className="text-sm text-gray-600">Availability</div>
                      </div>
                    </div>

                    <button className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}>
                      <span>Get Started</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-xl text-gray-900 mb-6">What's Included</h4>
                    <div className="space-y-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
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
              Get Support Now
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Multiple ways to reach our technical experts for immediate assistance.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 bg-${channel.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {React.createElement(channel.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {channel.description}
                </p>
                <div className="font-semibold text-gray-900 mb-2">
                  {channel.contact}
                </div>
                <div className={`text-xs text-${channel.color}-600 bg-${channel.color}-50 rounded-full px-3 py-1`}>
                  {channel.availability}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
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
              Training Programs
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Structured training programs designed for different skill levels and requirements.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    program.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    program.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {program.level}
                  </span>
                  <Play className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                  {program.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{program.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Participants</div>
                    <div className="font-semibold text-gray-900">{program.participants}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Topics Covered</div>
                  <div className="space-y-1">
                    {program.topics.map((topic, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Book Training
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
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
              Technical Resources
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Access our comprehensive library of technical documents and resources.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-8 h-8 text-primary-600" />
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{resource.name}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{resource.size}</span>
                  <span>{resource.downloads} downloads</span>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupport;