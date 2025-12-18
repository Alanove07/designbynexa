import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Default services (fallback if Firebase not configured)
  const defaultServices = [
    {
      id: 1,
      title: 'Logo & Branding',
      description: 'Create memorable brand identities with custom logo designs that capture your brand essence and stand out in the market.',
      icon: '/Icons/logo_18362129.svg',
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 2,
      title: 'Posters & Promotional Design',
      description: 'Eye-catching posters and promotional materials that grab attention and effectively communicate your message.',
      icon: '/Icons/poster_2139871.svg',
      color: 'from-purple-500 to-primary-500'
    },
    {
      id: 3,
      title: 'Illustrations & Portraits',
      description: 'Custom digital and traditional illustrations that bring your ideas to life with artistic flair and attention to detail.',
      icon: '/Icons/artist_15198397.svg',
      color: 'from-pink-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Social Media Creatives',
      description: 'Engaging social media graphics optimized for all platforms to boost your online presence and engagement.',
      icon: '/Icons/social-media_18172766.svg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'Brand Identity Packages',
      description: 'Complete visual identity systems including logos, color palettes, typography, and brand guidelines.',
      icon: '/Icons/brand-identity_3419234.svg',
      color: 'from-primary-600 to-teal-500'
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'User-centered interface designs and mockups that enhance user experience and drive conversions.',
      icon: '/Icons/wireframe_11812006.svg',
      color: 'from-indigo-500 to-purple-500'
    },
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const servicesCol = collection(db, 'services');
      const servicesSnapshot = await getDocs(servicesCol);
      const servicesList = servicesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).sort((a, b) => (a.order || 0) - (b.order || 0));

      setServices(servicesList.length > 0 ? servicesList : defaultServices);
    } catch (error) {
      console.log('Using default services:', error);
      setServices(defaultServices);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-light-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6"
          >
            WHAT WE DO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
            Perfect Solution for
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"> Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse projects showcasing innovative solutions and creative designs that promote brands and enhance user experiences across various industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full filter brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold mr-2">Learn More</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
