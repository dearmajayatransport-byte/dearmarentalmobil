'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Grid,
  List,
  Users,
  Fuel,
  MapPin,
  Star,
  ArrowRight,
  X,
} from 'lucide-react';

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

const allCars: Car[] = [
  {
    id: '1',
    name: 'Toyota Avanza',
    category: 'MPV',
    price: 350000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e6be5f83c44d?w=800',
    description: 'Toyota Avanza adalah mobil MPV yang nyaman dan ekonomis, cocok untuk keluarga.',
    features: ['AC', 'Power Steering', 'Audio', 'Power Window'],
    transmission: 'Manual/Auto',
    fuel: 'Bensin',
  },
  {
    id: '2',
    name: 'Honda HR-V',
    category: 'SUV',
    price: 450000,
    seats: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800',
    description: 'Honda HR-V adalah SUV stylish dengan fitur modern dan mesin responsif.',
    features: ['AC', 'Sunroof', 'Push Button', 'Smart Key'],
    transmission: 'CVT',
    fuel: 'Bensin',
  },
  {
    id: '3',
    name: 'Toyota Innova Venturer',
    category: 'MPV',
    price: 500000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800',
    description: 'Toyota Innova adalah MPV premium dengan kenyamanan tingkat atas.',
    features: ['AC', 'Leather Seat', 'Screen', 'Dual SRS'],
    transmission: 'Auto',
    fuel: 'Diesel',
  },
  {
    id: '4',
    name: 'Daihatsu Gran Max',
    category: 'MPV',
    price: 300000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    description: 'Daihatsu Gran Max adalah pilihan ekonomis yang handal dan terpercaya.',
    features: ['AC', 'Audio', 'Power Window', 'Dual Airbag'],
    transmission: 'Manual',
    fuel: 'Bensin',
  },
  {
    id: '5',
    name: 'Mitsubishi Xpander',
    category: 'MPV',
    price: 420000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1600661653561-629509c22129?w=800',
    description: 'Mitsubishi Xpander menawarkan ruang lebih dan desain modern.',
    features: ['AC', 'Touch Screen', 'LED', 'Android Auto'],
    transmission: 'Manual/Auto',
    fuel: 'Bensin',
  },
  {
    id: '6',
    name: 'Nissan Kicks',
    category: 'SUV',
    price: 480000,
    seats: 5,
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',
    description: 'Nissan Kicks adalah SUV kompak dengan teknologi canggih.',
    features: ['ProPILOT', '360 Camera', 'Bose Audio', 'Lane Keep'],
    transmission: 'CVT',
    fuel: 'Bensin',
  },
  {
    id: '7',
    name: 'Toyota Fortuner',
    category: 'SUV',
    price: 650000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8cb5874?w=800',
    description: 'Toyota Fortuner adalah SUV off-road yang powerful dan elegan.',
    features: ['4x4', 'Power Rear Door', 'JBL Audio', 'Leather'],
    transmission: 'Auto',
    fuel: 'Diesel',
  },
  {
    id: '8',
    name: 'Honda Civic',
    category: 'Sedan',
    price: 550000,
    seats: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800',
    description: 'Honda Civic adalah sedan sporty dengan performa tinggi.',
    features: ['Sunroof', 'Honda Sensing', 'Wireless Charger', 'Remote Start'],
    transmission: 'CVT',
    fuel: 'Bensin',
  },
  {
    id: '9',
    name: 'Toyota Alphard',
    category: 'MPV',
    price: 1200000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1619772534541-e71526d48b4c?w=800',
    description: 'Toyota Alphard adalah mobil premium kenyamanan tingkat atas.',
    features: ['VIP Seat', 'Screen 18 inch', 'Refrigerator', 'Ambient Light'],
    transmission: 'Auto',
    fuel: 'Hybrid',
  },
  {
    id: '10',
    name: 'Suzuki Ertiga',
    category: 'MPV',
    price: 320000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f127e2a3ede2?w=800',
    description: 'Suzuki Ertiga adalah MPV ringkas dan efisien bahan bakar.',
    features: ['AC', 'Audio', 'Dual Airbag', 'ABS'],
    transmission: 'Manual/Auto',
    fuel: 'Bensin',
  },
  {
    id: '11',
    name: 'Wuling Cortez',
    category: 'MPV',
    price: 380000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1606525437679-037f6962f346?w=800',
    description: 'Wuling Cortez menawarkan性价比 tinggi dengan fitur lengkap.',
    features: ['Sunroof', 'Screen', 'Voice Command', 'ESP'],
    transmission: 'Auto',
    fuel: 'Bensin',
  },
  {
    id: '12',
    name: 'Honda CR-V',
    category: 'SUV',
    price: 580000,
    seats: 5,
    imageUrl: 'https://images.unsplash.com/photo-1609630875804-99944fb9794a?w=800',
    description: 'Honda CR-V adalah SUV hybrid dengan efisiensi tinggi.',
    features: ['Hybrid', 'Honda Sensing', 'Wireless Charger', 'Head-Up Display'],
    transmission: 'e-CVT',
    fuel: 'Hybrid',
  },
];

const categories = ['Semua', 'MPV', 'SUV', 'Sedan'];
const priceRanges = [
  { label: 'Semua Harga', min: 0, max: Infinity },
  { label: '< Rp 400rb', min: 0, max: 400000 },
  { label: 'Rp 400rb - 600rb', min: 400000, max: 600000 },
  { label: '> Rp 600rb', min: 600000, max: Infinity },
];

export default function FleetPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'Semua' || car.category === selectedCategory;
      const range = priceRanges[selectedPriceRange];
      const matchesPrice = car.price >= range.min && car.price < range.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Armada <span className="text-primary">Mobil</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pilihan mobil lengkap untuk kebutuhan perjalanan Anda di Medan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari mobil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg"
              >
                <Filter className="w-5 h-5" />
                Filter
              </button>

              {/* View Toggle */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters - Desktop */}
          <div className="hidden md:flex gap-4 mt-4">
            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex gap-2">
              {priceRanges.map((range, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPriceRange(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPriceRange === i
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>

            {/* Clear Filter */}
            {(searchQuery || selectedCategory !== 'Semua' || selectedPriceRange > 0) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                  setSelectedPriceRange(0);
                }}
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-500 hover:text-primary"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filters - Mobile */}
        {showFilters && (
          <div className="md:hidden mt-4 pt-4 border-t">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Kategori</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedCategory === cat
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Harga</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedPriceRange(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        selectedPriceRange === i
                          ? 'bg-secondary text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Cars Grid/List */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Menampilkan <span className="font-semibold">{filteredCars.length}</span> mobil
          </p>

          {filteredCars.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Tidak ada mobil yang ditemukan</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                  setSelectedPriceRange(0);
                }}
                className="btn-primary mt-4"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredCars.map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={
                    viewMode === 'grid'
                      ? 'car-card'
                      : 'bg-white rounded-xl overflow-hidden shadow-card card-hover flex'
                  }
                >
                  {viewMode === 'grid' ? (
                    <>
                      <div className="car-card-image">
                        <Image
                          src={car.imageUrl}
                          alt={car.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {car.category}
                        </div>
                        <div className="absolute top-4 right-4 bg-white text-dark px-3 py-1 rounded-full text-sm font-bold">
                          Rp {(car.price / 1000).toFixed(0)}rb/hari
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl text-dark mb-2">{car.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {car.seats} Kursi
                          </span>
                          <span className="flex items-center gap-1">
                            <Fuel className="w-4 h-4" />
                            {car.fuel}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {car.features.slice(0, 4).map((feature) => (
                            <span
                              key={feature}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <Link href="/contact" className="btn-primary w-full justify-center">
                          Sewa Sekarang
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative w-80 h-48 flex-shrink-0">
                        <Image
                          src={car.imageUrl}
                          alt={car.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-heading text-xl text-dark">{car.name}</h3>
                              <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                                {car.category}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {car.seats} Kursi
                              </span>
                              <span className="flex items-center gap-1">
                                <Fuel className="w-4 h-4" />
                                {car.fuel}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {car.transmission}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-heading text-primary">
                              Rp {(car.price / 1000).toFixed(0)}rb
                            </p>
                            <p className="text-xs text-gray-500">/hari</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-3 mb-4">{car.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-wrap gap-2">
                            {car.features.map((feature) => (
                              <span
                                key={feature}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          <Link href="/contact" className="btn-primary inline-flex gap-2">
                            Sewa
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}