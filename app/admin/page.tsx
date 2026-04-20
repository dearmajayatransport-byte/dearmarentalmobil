'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  FileText,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Upload,
  X,
  CheckCircle,
  AlertCircle,
  Search,
  Menu,
  DollarSign,
  Image as ImageIcon,
  Loader,
} from 'lucide-react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  setDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { uploadImage } from '../config/cloudinary';

type Car = {
  id: string;
  name: string;
  category: string;
  price: number;
  seats: number;
  imageUrl: string;
  description: string;
  features: string[];
  transmission: string;
  fuel: string;
};

type Article = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  slug: string;
};

type Settings = {
  companyName: string;
  logoUrl: string;
  phone: string;
  whatsapp: string;
  address: string;
  instagram: string;
  facebook: string;
};

const tabs = [
  { id: 'cars', label: 'Mobil', icon: Car },
  { id: 'articles', label: 'Artikel', icon: FileText },
  { id: 'settings', label: 'Pengaturan', icon: Settings },
];

const categories = ['MPV', 'SUV', 'Sedan', 'Hatchback'];

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('cars');
  const [cars, setCars] = useState<Car[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<Car>();
  const { register: articleRegister, handleSubmit: handleArticleSubmit, reset: articleReset } = useForm<Article>();
  const { register: settingsRegister, handleSubmit: handleSettingsSubmit, reset: settingsReset } = useForm<Settings>();

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch data when tab changes
  useEffect(() => {
    if (!user) return;

    if (activeTab === 'cars') {
      fetchCars();
    } else if (activeTab === 'articles') {
      fetchArticles();
    } else if (activeTab === 'settings') {
      fetchSettings();
    }
  }, [activeTab, user]);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchCars = async () => {
    try {
      const q = query(collection(db, 'cars'), orderBy('name'));
      const snapshot = await getDocs(q);
      const carsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Car[];
      setCars(carsData);
    } catch (error) {
      console.error('Error fetching cars:', error);
      // Use demo data if Firebase fails
      setCars([
        { id: '1', name: 'Toyota Avanza', category: 'MPV', price: 350000, seats: 7, imageUrl: '', description: '', features: [], transmission: 'Manual', fuel: 'Bensin' },
      ]);
    }
  };

  const fetchArticles = async () => {
    try {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const articlesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[];
      setArticles(articlesData);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const fetchSettings = async () => {
    try {
      const docRef = doc(db, 'settings', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        settingsReset(docSnap.data() as Settings);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      showToast('error', 'Email atau password salah');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSaveCar = async (data: Car) => {
    try {
      setImageUploading(true);

      // Handle image upload if file selected
      const imageInput = document.getElementById('car-image') as HTMLInputElement;
      let imageUrl = data.imageUrl;

      if (imageInput?.files?.[0]) {
        try {
          const result = await uploadImage(imageInput.files[0], 'dearma/cars');
          imageUrl = result.secure_url;
        } catch (cloudinaryError) {
          console.log('Cloudinary not configured, using placeholder');
          imageUrl = 'https://images.unsplash.com/photo-1580273916550-e6be5f83c44d?w=800';
        }
      }

      const carData = {
        ...data,
        imageUrl,
        price: parseInt(String(data.price)),
        seats: parseInt(String(data.seats)),
        updatedAt: new Date().toISOString(),
      };

      if (editingCar) {
        await updateDoc(doc(db, 'cars', editingCar.id), carData);
        showToast('success', 'Mobil berhasil diperbarui');
      } else {
        await addDoc(collection(db, 'cars'), {
          ...carData,
          createdAt: new Date().toISOString(),
        });
        showToast('success', 'Mobil berhasil ditambahkan');
      }

      setShowAddModal(false);
      setEditingCar(null);
      reset();
      fetchCars();
    } catch (error) {
      console.error('Error saving car:', error);
      showToast('error', 'Gagal menyimpan mobil');
    } finally {
      setImageUploading(false);
    }
  };

  const handleDeleteCar = async (id: string) => {
    if (!confirm('Yakin ingin menghapus mobil ini?')) return;

    try {
      await deleteDoc(doc(db, 'cars', id));
      showToast('success', 'Mobil berhasil dihapus');
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
      showToast('error', 'Gagal menghapus mobil');
    }
  };

  const handleSaveSettings = async (data: Settings) => {
    try {
      await setDoc(doc(db, 'settings', 'main'), data);
      showToast('success', 'Pengaturan berhasil disimpan');
    } catch (error) {
      console.error('Error saving settings:', error);
      showToast('error', 'Gagal menyimpan pengaturan');
    }
  };

  const openEditModal = (car: Car) => {
    setEditingCar(car);
    setValue('name', car.name);
    setValue('category', car.category);
    setValue('price', car.price);
    setValue('seats', car.seats);
    setValue('imageUrl', car.imageUrl);
    setValue('description', car.description);
    setValue('transmission', car.transmission);
    setValue('fuel', car.fuel);
    setShowAddModal(true);
  };

  // Login Screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark to-secondary flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-2xl text-dark">Admin Dashboard</h1>
            <p className="text-gray-500">Dearma Sewa Mobil Medan</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="form-input"
                placeholder="admin@dearma.com"
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="form-input"
                placeholder="Masukkan password"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Login dengan email yang terdaftar di Firebase Auth
          </p>
        </motion.div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white hidden md:block">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-heading">Admin</span>
              <span className="text-xs text-gray-400 block">Dearma</span>
            </div>
          </div>

          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-dark text-white z-50 px-4 py-3 flex items-center justify-between">
        <span className="font-heading">Admin Dashboard</span>
        <button onClick={handleLogout} className="text-red-400">
          <LogOut className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 mt-14 md:mt-0 overflow-y-auto">
        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
                toast.type === 'success'
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              {toast.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab: Cars */}
        {activeTab === 'cars' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-2xl text-dark">Kelola Mobil</h2>
              <button
                onClick={() => {
                  setEditingCar(null);
                  reset();
                  setShowAddModal(true);
                }}
                className="btn-primary flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Tambah Mobil
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <motion.div
                  key={car.id}
                  className="bg-white rounded-xl overflow-hidden shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="relative h-40">
                    {car.imageUrl ? (
                      <Image
                        src={car.imageUrl}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <ImageIcon className="w-10 h-10 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg text-dark">{car.name}</h3>
                    <p className="text-sm text-gray-500">{car.category}</p>
                    <p className="text-primary font-bold mt-2">
                      Rp {(car.price / 1000).toFixed(0)}rb/hari
                    </p>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => openEditModal(car)}
                        className="flex-1 bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCar(car.id)}
                        className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Hapus
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Settings */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="font-heading text-2xl text-dark mb-6">Pengaturan</h2>

            <div className="bg-white rounded-xl p-6 shadow-card max-w-2xl">
              <form onSubmit={handleSettingsSubmit(handleSaveSettings)} className="space-y-4">
                <div>
                  <label className="form-label">Nama Perusahaan</label>
                  <input {...settingsRegister('companyName')} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Logo URL</label>
                  <input {...settingsRegister('logoUrl')} className="form-input" placeholder="https://..." />
                </div>
                <div>
                  <label className="form-label">Telepon</label>
                  <input {...settingsRegister('phone')} className="form-input" />
                </div>
                <div>
                  <label className="form-label">WhatsApp</label>
                  <input {...settingsRegister('whatsapp')} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Alamat</label>
                  <textarea {...settingsRegister('address')} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Instagram</label>
                  <input {...settingsRegister('instagram')} className="form-input" placeholder="https://instagram.com/..." />
                </div>
                <div>
                  <label className="form-label">Facebook</label>
                  <input {...settingsRegister('facebook')} className="form-input" placeholder="https://facebook.com/..." />
                </div>
                <button type="submit" className="btn-primary">
                  Simpan Pengaturan
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Modal Add/Edit Car */}
        <AnimatePresence>
          {showAddModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowAddModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-heading text-xl">
                    {editingCar ? 'Edit Mobil' : 'Tambah Mobil'}
                  </h3>
                  <button onClick={() => setShowAddModal(false)}>
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit(handleSaveCar)} className="space-y-4">
                  <div>
                    <label className="form-label">Nama Mobil *</label>
                    <input {...register('name', { required: true })} className="form-input" placeholder="Toyota Avanza" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Kategori *</label>
                      <select {...register('category', { required: true })} className="form-input">
                        <option value="">Pilih...</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Kursi *</label>
                      <input type="number" {...register('seats', { required: true })} className="form-input" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Harga/hari *</label>
                      <input type="number" {...register('price', { required: true })} className="form-input" placeholder="350000" />
                    </div>
                    <div>
                      <label className="form-label">Transmisi</label>
                      <select {...register('transmission')} className="form-input">
                        <option value="Manual">Manual</option>
                        <option value="Auto">Otomatis</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Bahan Bakar</label>
                    <select {...register('fuel')} className="form-input">
                      <option value="Bensin">Bensin</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Deskripsi</label>
                    <textarea {...register('description')} className="form-input" rows={3} />
                  </div>

                  <div>
                    <label className="form-label">Gambar Mobil</label>
                    <input
                      id="car-image"
                      type="file"
                      accept="image/*"
                      className="form-input"
                    />
                    {editingCar?.imageUrl && (
                      <p className="text-xs text-gray-500 mt-1">Gambar saat ini: {editingCar.imageUrl}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={imageUploading}
                    className="btn-primary w-full justify-center"
                  >
                    {imageUploading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Menyimpan...
                      </>
                    ) : editingCar ? (
                      'Perbarui Mobil'
                    ) : (
                      'Tambah Mobil'
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}