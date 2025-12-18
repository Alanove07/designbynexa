import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const PortfolioModal = ({ item, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark-card border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-dark-bg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category Badge */}
                <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-sm font-medium text-primary-400 mb-4">
                  {item.category}
                </span>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h2>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {item.client && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">CLIENT</h3>
                      <p className="text-lg">{item.client}</p>
                    </div>
                  )}
                  {item.tags && item.tags.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">TAGS</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
