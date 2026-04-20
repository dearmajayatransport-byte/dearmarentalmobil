'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Car,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Calendar,
  Users,
  Fuel,
  Gauge,
  CheckCircle,
} from 'lucide-react';

// Sample featured cars data (would come from Firebase in production)
const featuredCars = [
  {
    id: '1',
    name: 'Toyota Avanza',
    category: 'MPV',
    price: 350000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e6be5f83c44d?w=800',
    features: ['AC', 'Power Steering', 'Audio'],
  },
  {
    id: '2',
    name: 'Honda HR-V',
    category: 'SUV',
    price: 450000,
    seats: 5,
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800',
    features: ['AC', 'Sunroof', 'Push Button'],
  },
  {
    id: '3',
    name: 'Toyota Innova',
    category: 'MPV',
    price: 500000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800',
    features: ['AC', 'Leather Seat', 'Screen'],
  },
  {
    id: '4',
    name: 'Daihatsu Gran Max',
    category: 'MPV',
    price: 300000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    features: ['AC', 'Audio', 'Power Window'],
  },
  {
    id: '5',
    name: 'Mitsubishi Xpander',
    category: 'MPV',
    price: 420000,
    seats: 7,
    imageUrl: 'https://images.unsplash.com/photo-1600661653561-629509c22129?w=800',
    features: ['AC', 'Touch Screen', 'LED'],
  },
  {
    id: '6',
    name: 'Nissan Kicks',
    category: 'SUV',
    price: 480000,
    seats: 5,
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',
    features: ['ProPILOT', '360 Camera', 'Bose Audio'],
  },
];

const services = [
  {
    icon: Calendar,
    title: 'Sewa Harian',
    description: 'Fleksibel untuk kebutuhan harian Anda',
  },
  {
    icon: Shield,
    title: 'Armada Terjamin',
    description: 'Mobil terawat dan siap pakai',
  },
  {
    icon: Clock,
    title: 'Layanan 24 Jam',
    description: 'Siap membantu kapan saja',
  },
  {
    icon: Star,
    title: 'Pelanggan Puas',
    description: 'Rating tinggi dari pelanggan',
  },
];

const testimonials = [
  {
    name: 'Budi Santoso',
    location: 'Jakarta',
    content: 'Layanan sangat profesional. mobil bersih dan kondisi prima. Sopir juga ramah.',
    rating: 5,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Siti Rahayu',
    location: 'Bandung',
    content: 'Sangat memudahkan perjalanan bisnis saya di Medan. Recomended!',
    rating: 5,
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    name: 'Ahmad Wijaya',
    location: 'Surabaya',
    content: 'Harga terjangkau dengan kualitas layanan yang baik. Pasti pesan ulang.',
    rating: 5,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
];

const carFeatures = [
  { icon: Users, label: '7 Kursi' },
  { icon: Fuel, label: 'BBM Included' },
  { icon: Shield, label: 'Asuransi' },
  { icon: Gauge, label: '1000cc' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Animated counter for stats
  useEffect(() => {
    const counters = document.querySelectorAll('.stats-number');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString('id-ID');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString('id-ID');
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <>
      {/* Hero Section with Automotive Animation */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D1117 0%, #1a1a2e 50%, #0D1117 100%)',
        }}
      >
        {/* Animated Speed Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-32 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 animate-speed-lines"
              style={{
                left: `${20 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Car Elements */}
        <motion.div
          className="absolute right-[-100px] w-[600px] opacity-20"
          style={{ y }}
        >
          <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 140L100 80L150 60H250L300 80L350 140H50Z"
              fill="#E63946"
              fillOpacity="0.3"
            />
            <circle cx="90" cy="150" r="30" fill="#1D3557" />
            <circle cx="310" cy="150" r="30" fill="#1D3557" />
            <circle cx="90" cy="150" r="15" fill="#0D1117" />
            <circle cx="310" cy="150" r="15" fill="#0D1117" />
          </svg>
        </motion.div>

        {/* Floating Elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute floating-element text-6xl opacity-10 ${
              i === 0 ? 'top-20 left-20' :
              i === 1 ? 'top-40 right-40' :
              i === 2 ? 'bottom-40 left-40' :
              'bottom-20 right-20'
            }`}
            style={{ animationDelay: `${i}s` }}
          >
            🚗
          </div>
        ))}

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              ✨ Rental Mobil Terpercaya di Medan
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dearma Sewa Mobil{' '}
            <span className="text-primary">Medan</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nikmati perjalanan nyaman dengan armada mobil terawat, layanan profesional, dan harga terjangkau.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/fleet" className="btn-primary inline-flex items-center justify-center gap-2">
              Lihat Armada
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 border-white text-white">
              Hubungi Kami
            </Link>
          </motion.div>

          {/* Engine Digital Display Effect */}
          <motion.div
            className="mt-12 inline-flex items-center gap-8 bg-black/30 rounded-2xl px-8 py-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {carFeatures.map((feature, i) => (
              <div key={i} className="text-center">
                <feature.icon className="w-6 h-6 text-primary mx-auto mb-1" />
                <span className="text-xs text-gray-400">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Pelanggan Puas' },
              { number: '50+', label: 'Armada Mobil' },
              { number: '5', label: 'Tahun Pengalaman' },
              { number: '24/7', label: 'Layanan' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stats-number" data-target={parseInt(stat.number)}>
                  {stat.number}
                </div>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="section bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-4">
              Armada <span className="text-primary">Mobil</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan mobil terbaru dan terawat untuk kebutuhan perjalanan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car, i) => (
              <motion.div
                key={car.id}
                className="car-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="car-card-image">
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Rp {(car.price / 1000).toFixed(0)}rb/hari
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl text-dark">{car.name}</h3>
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                      {car.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {car.seats} Kursi
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    Sewa Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fleet" className="btn-secondary inline-flex items-center gap-2">
              Lihat Semua Armada
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-4">
              Layanan <span className="text-primary">Terbaik</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami memberikan layanan terbaik untuk kenyamanan perjalanan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-light rounded-2xl p-6 text-center hover:shadow-card-hover transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Apa Kata <span className="text-primary">Pelanggan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Testimoni dari pelanggan yang telah menggunakan layanan kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.photoUrl}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-4">
              Lokasi <span className="text-primary">Kami</span>
            </h2>
            <p className="text-gray-600">
              Jl. P. Diponegoro No.18, Medan, Sumatera Utara
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden h-96"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.017!2d98.6737!3d3.5883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!3f90!5e0!3m2!1sid!2sid!4m5!3m4!1s0x0:0x0!8m2!3d3.5883!4d98.6737!16s0x0:0x0"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dearma Sewa Mobil Medan Location"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Siap Memulai Perjalanan?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Hubungi kami sekarang untuk pemesanan atau informasi lebih lanjut
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}