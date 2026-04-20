'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  MapPin,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const services = [
  {
    id: '1',
    name: 'Sewa Mobil Harian',
    price: 350000,
    description: 'Paket harian untuk kebutuhan sehari',
    features: [
      'Mobil selama 24 jam',
      'Bensin tidak termasuk',
      'Driver opsional',
      'Asuransi komprehensif',
      ' roadside assistance',
    ],
    popular: true,
  },
  {
    id: '2',
    name: 'Sewa Mobil Mingguan',
    price: 2200000,
    description: 'Paket mingguan dengan harga lebih hemat',
    features: [
      'Mobil selama 7 hari',
      'Bensin tidak termasuk',
      'Driver opsional',
      'Asuransi komprehensif',
      'Gratis 1x layanan antar/jemput',
    ],
  },
  {
    id: '3',
    name: 'Sewa Mobil Bulanan',
    price: 8500000,
    description: 'Paket bulanan untuk kebutuhan jangka panjang',
    features: [
      'Mobil selama 30 hari',
      'Bensin tidak termasuk',
      'Driver opsional',
      'Asuransi komprehensif',
      'Gratis layanan antar/jemput',
      'Priority booking',
    ],
    popular: true,
  },
];

const addOns = [
  {
    name: 'Sewa Driver',
    price: 150000,
    description: 'Sopir profesional berpengalaman',
    per: 'hari',
  },
  {
    name: 'GPS Navigation',
    price: 50000,
    description: 'Perangkat GPS terbaru',
    per: 'hari',
  },
  {
    name: 'Child Seat',
    price: 75000,
    description: 'Kursi keamanan untuk anak',
    per: 'hari',
  },
  {
    name: 'Portable WiFi',
    price: 50000,
    description: 'Internet cepat anywhere',
    per: 'hari',
  },
];

const faqs = [
  {
    question: ' Bagaimana cara memesan mobil?',
    answer:
      'Anda dapat memesan melalui WhatsApp kami di +62 812 3456 7890, atau mengisi formulir di halaman kontak. Tim kami akan merespons dalam waktu singkat.',
  },
  {
    question: ' Berapa deposit yang diperlukan?',
    answer:
      'Deposit sebesar Rp 500.000 - Rp 1.000.000 tergantung tipe mobil. Deposit akan dikembalikan setelah mobil dikembalikan dalam kondisi baik.',
  },
  {
    question: ' Apakah sudah termasuk bensin?',
    answer:
      'Tidak, bensin tidak termasuk dalam harga sewa. Anda dapat mengembalikan mobil dalam kondisi bensin sama seperti saat pengambilan (full to full).',
  },
  {
    question: ' Apakah dapat antar/jemput mobil?',
    answer:
      'Ya, kami menyediakan layanan antar/jemput gratis di sekitar Medan. Untuk luar kota akan dikenakan biaya tambahan.',
  },
  {
    question: ' Apa saja persyaratan sewa mobil?',
    answer:
      'Persyaratan: KTP/SIM asli, SIM B1/B2 asli (jika menyewa dengan driver tidak diperlukan), dan deposit. Minimal usia 21 tahun.',
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Layanan <span className="text-primary">Kami</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Berbagai pilihan paket sewa mobil yang dapat disesuaikan dengan kebutuhan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl text-dark mb-4">
              Paket <span className="text-primary">Sewa Mobil</span>
            </h2>
            <p className="text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan perjalanan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className={`bg-white rounded-2xl p-6 ${
                  service.popular
                    ? 'ring-2 ring-primary shadow-card-hover'
                    : 'shadow-card'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {service.popular && (
                  <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl text-dark mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-heading text-primary">
                    Rp {(service.price / 1000).toFixed(0)}rb
                  </span>
                  <span className="text-gray-500">/{service.id === '1' ? 'hari' : service.id === '2' ? 'minggu' : 'bulan'}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-primary w-full justify-center">
                  Pesan Sekarang
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl text-dark mb-4">
              Layanan <span className="text-primary">Tambahan</span>
            </h2>
            <p className="text-gray-600">
              Tambah layanan ekstra untuk kenyamanan perjalanan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, i) => (
              <motion.div
                key={i}
                className="bg-light rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-dark mb-1">{addon.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{addon.description}</p>
                <p className="text-xl font-heading text-primary">
                  +Rp {(addon.price / 1000).toFixed(0)}rb
                  <span className="text-sm font-normal text-gray-500">/{addon.per}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl text-dark mb-4">
              Pertanyaan <span className="text-primary">Umum</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-dark">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl text-white mb-4">
              Ada Pertanyaan?
            </h2>
            <p className="text-white/80 mb-8">
              Hubungi kami untuk informasi lebih lanjut
            </p>
            <a href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform">
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}