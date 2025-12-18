import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-light-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6"
            >
              ABOUT US
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Empowering Businesses Grow Worldwide
              <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"> with Innovative Digital Solutions</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/About-Img/white clean graphic design workspace.jpeg"
                  alt="Nexa Designs Studio"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200"
              >
                <div className="text-center">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">5+</h3>
                  <p className="text-sm text-gray-600 mt-1">Years of<br />Excellence</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded by <span className="text-primary-600 font-semibold">Alanove</span>, Nexa Designs is a creative studio passionate about bringing your vision to life. We specialize in creating stunning visual identities that resonate with your audience and elevate your brand presence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional creative solutions that combine artistic innovation with strategic thinking. We believe every brand has a unique story, and we're here to tell it through compelling visuals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Design Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean. Bold. Memorable. We focus on creating designs that are not just beautiful, but purposeful. Every pixel is carefully crafted to communicate your brand's essence and connect with your target audience.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: '/Icons/artist_15198397.svg', label: 'Creative Excellence' },
                  { icon: '/Icons/chart_15908934.svg', label: 'Fast Delivery' },
                  { icon: '/Icons/like_12878999.svg', label: 'Premium Quality' },
                  { icon: '/Icons/branding_17812019.svg', label: 'Client-Focused' },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary-300 hover:shadow-lg transition-all"
                  >
                    <img src={value.icon} alt={value.label} className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">{value.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
