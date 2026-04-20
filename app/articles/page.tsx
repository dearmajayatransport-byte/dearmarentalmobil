'use client';

import { useState } from 'react';
import Image from 'next/link';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const articles = [
  {
    id: '1',
    title: 'Tips Perawatan Mobil Sebelum Perjalanan',
    excerpt: 'Panduan lengkap merawat mobil sewa sebelum digunakan agar perjalanan Anda nyaman dan aman.',
    content: 'Sebelum memulai perjalanan dengan mobil sewa, ada beberapa hal penting yang perlu diperhatikan...',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
    author: 'Dearma Team',
    date: '15 April 2024',
    slug: 'tips-perawatan-mobil-sebelum-perjalanan',
  },
  {
    id: '2',
    title: 'Destinasi Populer di Medan yang Wajib Dikunjungi',
    excerpt: 'Jelajahi kota Medan dan sekitarnya dengan mobil sewa. Berikut rekomendasi tempat-tempat menarik.',
    content: 'Medan memiliki berbagai destinasi menarik yang tersebar di berbagai lokasi...',
    category: 'Destinasi',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
    author: 'Dearma Team',
    date: '10 April 2024',
    slug: 'destinasi-populer-di-medan',
  },
  {
    id: '3',
    title: 'Panduan Memilih Mobil Sewa yang Tepat',
    excerpt: 'Bagaimana memilih mobil sewa yang sesuai dengan kebutuhan dan budget perjalanan Anda.',
    content: 'Memilih mobil sewa yang tepat sangat penting untuk kenyamanan perjalanan...',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
    author: 'Dearma Team',
    date: '5 April 2024',
    slug: 'panduan-memilih-mobil-sewa',
  },
  {
    id: '4',
    title: 'Etika Berkendara di Indonesia',
    excerpt: 'Pelajari aturan dan etika berkendara yang perlu diperhatikan saat di jalan raya Indonesia.',
    content: 'Berkendara di Indonesia memiliki beberapa aturan dan etika yang perlu diperhatikan...',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    author: 'Dearma Team',
    date: '1 April 2024',
    slug: 'etika-berkendara-di-indonesia',
  },
  {
    id: '5',
    title: 'Keuntungan Sewa Mobil Dibanding Transportasi Umum',
    excerpt: 'Mengapa lebih baik menyewa mobil dibandingkan menggunakan transportasi umum saat traveling.',
    content: 'Banyak travelers yang memilih menyewa mobil karena berbagai keuntungan...',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
    author: 'Dearma Team',
    date: '28 Maret 2024',
    slug: 'keuntungan-sewa-mobil',
  },
  {
    id: '6',
    title: 'Wisata Alam di Sekitar Medan',
    excerpt: 'Rekomendasi tempat wisata alam terdekat dari Medan yang bisa dikunjungi dengan mobil sewa.',
    content: 'Sumatera Utara memiliki banyak objek wisata alam yang menakjubkan...',
    category: 'Destinasi',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    author: 'Dearma Team',
    date: '20 Maret 2024',
    slug: 'wisata-alam-sekitar-medan',
  },
];

const categories = ['Semua', 'Tips', 'Destinasi', 'Info'];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'Semua' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Artikel & <span className="text-primary">Tips</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Informasi menarik tentang perjalanan dan tips menyewa mobil
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap justify-center">
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
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Tidak ada artikel yang ditemukan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative h-48">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-dark mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <a
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl text-white mb-4">
              Berlangganan Artikel
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Dapatkan artikel terbaru langsung di email Anda
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-dark outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Berlangganan
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}