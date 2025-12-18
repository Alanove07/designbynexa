import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menuItems = [
    {
      title: 'Portfolio Manager',
      description: 'Add, edit, and manage portfolio items',
      icon: '🎨',
      link: '/admin/portfolio',
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Services Manager',
      description: 'Manage service offerings',
      icon: '⚙️',
      link: '/admin/services',
      color: 'from-accent-purple to-primary-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
      {/* Header */}
      <header className="glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/Img/Nexa-Logo-Transparent.png" alt="Nexa" className="h-10" />
            <div>
              <h1 className="text-xl font-bold">Nexa Admin Panel</h1>
              <p className="text-sm text-gray-400">Manage your portfolio and services</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
            >
              View Website
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Welcome back, <span className="gradient-text">Admin</span>
          </h2>
          <p className="text-gray-400 text-lg">Manage your creative portfolio and services from here</p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.link}>
                <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all card-hover group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                  <div className="mt-4 flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold mr-2">Manage</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
