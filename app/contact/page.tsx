'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

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
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami siap membantu Anda untuk pemesanan atau informasi lebih lanjut
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-heading text-2xl text-dark mb-6">
                Kirim <span className="text-primary">Pesan</span>
              </h2>

              {isSuccess && (
                <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="form-label">Nama Lengkap</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Nama wajib diisi' })}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Masukkan nama Anda"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email wajib diisi',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email tidak valid',
                      },
                    })}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="email@anda.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="form-label">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Nomor WhatsApp wajib diisi' })}
                    className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="+62 812 3456 7890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="form-label">Layanan yang Diminati</label>
                  <select {...register('service')} className="form-input">
                    <option value="">Pilih layanan...</option>
                    <option value="harian">Sewa Mobil Harian</option>
                    <option value="mingguan">Sewa Mobil Mingguan</option>
                    <option value="bulanan">Sewa Mobil Bulanan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Pesan</label>
                  <textarea
                    {...register('message', { required: 'Pesan wajib diisi' })}
                    className={`form-input min-h-[120px] ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Ceritakan kebutuhan Anda..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading text-xl text-dark mb-6">
                  Info <span className="text-primary">Kontak</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Alamat</p>
                      <p className="text-gray-600 text-sm">
                        Jl. P. Diponegoro No.18, Medan, Sumatera Utara,
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Telepon</p>
                      <a
                        href="tel:+6281234567890"
                        className="text-gray-600 text-sm hover:text-primary"
                      >
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">WhatsApp</p>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm hover:text-primary"
                      >
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Email</p>
                      <a
                        href="mailto:info@dearma.com"
                        className="text-gray-600 text-sm hover:text-primary"
                      >
                        info@dearma.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-dark">Jam Operasional</p>
                      <p className="text-gray-600 text-sm">
                        24 Jam / 7 Hari
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading text-xl text-dark mb-6">
                  Ikuti <span className="text-primary">Kami</span>
                </h3>

                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/dearmasewamobilmedan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://facebook.com/dearmasewamobilmedan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.017!2d98.6737!3d3.5883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!3f90!5e0!3m2!1sid!2sid!4m5!3m4!1s0x0:0x0!8m2!3d3.5883!4d98.6737!16s0x0:0x0"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dearma Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}