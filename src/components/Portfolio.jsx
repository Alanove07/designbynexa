import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import PortfolioModal from './PortfolioModal';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Branding', 'Posters', 'Portraits', 'Illustrations', 'Social Media'];

  // Default portfolio items (fallback)
  const defaultPortfolio = [
    {
      id: 1,
      title: 'Minimalist Gradient Design',
      category: 'Branding',
      imageUrl: '/Wallpaper/Blue Transition Minimalist Gradient Background, Desktop Wallpaper, Pc Wallpaper, Wallpaper Background Image And Wallpaper for Free Download.jpeg',
      description: 'Clean and modern gradient background design for digital platforms',
      client: 'Tech Startup',
      tags: ['Gradient', 'Branding', 'Minimal']
    },
    {
      id: 2,
      title: 'Abstract Gradient Poster',
      category: 'Posters',
      imageUrl: '/Wallpaper/Abstract gradient on soft blue and white colorful background_ Modern horizontal design for mobile apps and copy space.jpeg',
      description: 'Modern abstract gradient design for promotional materials',
      client: 'Creative Agency',
      tags: ['Poster', 'Abstract', 'Gradient']
    },
    {
      id: 3,
      title: 'Serene Landscape',
      category: 'Illustrations',
      imageUrl: '/Wallpaper/Gradient Fog.jpeg',
      description: 'Peaceful gradient landscape illustration',
      client: 'Nature Magazine',
      tags: ['Illustration', 'Nature', 'Minimal']
    },
  ];

  useEffect(() => {
    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory, portfolioItems]);

  const fetchPortfolio = async () => {
    try {
      const portfolioCol = collection(db, 'portfolioItems');
      const portfolioSnapshot = await getDocs(portfolioCol);
      const portfolioList = portfolioSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

      setPortfolioItems(portfolioList.length > 0 ? portfolioList : defaultPortfolio);
      setFilteredItems(portfolioList.length > 0 ? portfolioList : defaultPortfolio);
    } catch (error) {
      console.log('Using default portfolio:', error);
      setPortfolioItems(defaultPortfolio);
      setFilteredItems(defaultPortfolio);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6"
          >
            OUR WORKS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
            Carefully crafted
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"> Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse projects showcasing innovative solutions and creative designs that promote brands and enhance user experiences across various industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category</p>
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-12 h-12 text-white mb-2 mx-auto transform scale-75 group-hover:scale-100 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <p className="text-white font-medium">View Details</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-medium text-primary-700 mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};

export default Portfolio;
