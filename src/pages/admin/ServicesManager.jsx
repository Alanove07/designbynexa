import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { motion } from 'framer-motion';

const ServicesManager = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '/Icons/logo_18362129.svg',
    color: 'from-primary-500 to-primary-600',
    order: 0,
  });

  const availableIcons = [
    '/Icons/logo_18362129.svg',
    '/Icons/poster_2139871.svg',
    '/Icons/artist_15198397.svg',
    '/Icons/social-media_18172766.svg',
    '/Icons/brand-identity_3419234.svg',
    '/Icons/wireframe_11812006.svg',
  ];

  const availableColors = [
    { name: 'Primary Blue', value: 'from-primary-500 to-primary-600' },
    { name: 'Purple to Blue', value: 'from-accent-purple to-primary-500' },
    { name: 'Pink to Orange', value: 'from-accent-pink to-accent-orange' },
    { name: 'Orange to Pink', value: 'from-accent-orange to-accent-pink' },
    { name: 'Dark Blue to Purple', value: 'from-primary-600 to-accent-purple' },
    { name: 'Purple to Pink', value: 'from-accent-purple to-accent-pink' },
  ];

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const servicesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).sort((a, b) => (a.order || 0) - (b.order || 0));
      setServices(servicesList);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitService = async (e) => {
    e.preventDefault();

    try {
      if (editingService) {
        await updateDoc(doc(db, 'services', editingService.id), formData);
      } else {
        await addDoc(collection(db, 'services'), formData);
      }

      setFormData({ title: '', description: '', icon: availableIcons[0], color: availableColors[0].value, order: 0 });
      setShowForm(false);
      setEditingService(null);
      fetchServices();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save service');
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData(service);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      await deleteDoc(doc(db, 'services', id));
      fetchServices();
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
      {/* Header */}
      <header className="glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="text-gray-400 hover:text-white">
              ← Back
            </Link>
            <h1 className="text-2xl font-bold">Services Manager</h1>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingService(null);
              setFormData({ title: '', description: '', icon: availableIcons[0], color: availableColors[0].value, order: services.length });
            }}
            className="btn-primary"
          >
            + Add New Service
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-6">{editingService ? 'Edit' : 'Add'} Service</h2>

              <form onSubmit={handleSubmitService} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows="3"
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Icon</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableIcons.map(icon => (
                      <button
                        key={icon}
                        type="button"
                        onClick={() => setFormData({ ...formData, icon })}
                        className={`p-4 border-2 rounded-xl transition-all ${formData.icon === icon ? 'border-primary-500 bg-primary-500/10' : 'border-white/10'
                          }`}
                      >
                        <img src={icon} alt="Icon" className="w-full h-12 object-contain" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Color Gradient</label>
                  <select
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none"
                  >
                    {availableColors.map(color => (
                      <option key={color.value} value={color.value}>{color.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="submit" className="btn-primary flex-1">
                    {editingService ? 'Update' : 'Add'} Service
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowForm(false); setEditingService(null); }}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">No services yet</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">
              Add Your First Service
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="glass rounded-2xl p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4 flex items-center justify-center`}>
                  <img src={service.icon} alt={service.title} className="w-full h-full filter brightness-0 invert" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(service)} className="px-4 py-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/30 transition-colors text-sm flex-1">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(service.id)} className="px-4 py-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors text-sm flex-1">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesManager;
