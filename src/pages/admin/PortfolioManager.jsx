import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { motion } from 'framer-motion';

const PortfolioManager = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Branding',
    client: '',
    tags: '',
    imageUrl: '',
  });
  const [uploading, setUploading] = useState(false);

  const categories = ['Branding', 'Posters', 'Portraits', 'Illustrations', 'Social Media'];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolioItems'));
      const itemsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsList);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const storageRef = ref(storage, `portfolio/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFormData({ ...formData, imageUrl: url });
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSave = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
      createdAt: new Date(),
    };

    try {
      if (editingItem) {
        await updateDoc(doc(db, 'portfolioItems', editingItem.id), dataToSave);
      } else {
        await addDoc(collection(db, 'portfolioItems'), dataToSave);
      }

      setFormData({ title: '', description: '', category: 'Branding', client: '', tags: '', imageUrl: '' });
      setShowForm(false);
      setEditingItem(null);
      fetchItems();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save portfolio item');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      ...item,
      tags: item.tags ? item.tags.join(', ') : '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      await deleteDoc(doc(db, 'portfolioItems', id));
      fetchItems();
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
            <h1 className="text-2xl font-bold">Portfolio Manager</h1>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingItem(null);
              setFormData({ title: '', description: '', category: 'Branding', client: '', tags: '', imageUrl: '' });
            }}
            className="btn-primary"
          >
            + Add New Item
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
              <h2 className="text-2xl font-bold mb-6">{editingItem ? 'Edit' : 'Add'} Portfolio Item</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Client (optional)</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="Logo, Branding, Design"
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-xl"
                  />
                  {uploading && <p className="text-sm text-primary-400 mt-2">Uploading...</p>}
                  {formData.imageUrl && (
                    <img src={formData.imageUrl} alt="Preview" className="mt-4 rounded-xl max-h-48" />
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="submit" className="btn-primary flex-1" disabled={uploading}>
                    {editingItem ? 'Update' : 'Add'} Item
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowForm(false); setEditingItem(null); }}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Items Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">No portfolio items yet</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">
              Add Your First Item
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div key={item.id} className="glass rounded-2xl overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full aspect-video object-cover" />
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(item)} className="px-4 py-2 bg-primary-500/20 rounded-lg hover:bg-primary-500/30 transition-colors text-sm flex-1">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors text-sm flex-1">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioManager;
