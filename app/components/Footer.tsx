'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-heading text-xl text-white">D</span>
              </div>
              <div>
                <span className="font-heading text-lg">Dearma</span>
                <span className="font-body text-xs text-gray-400 block">Sewa Mobil Medan</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Penyedia layanan sewa mobil terpercaya di Medan dengan armada terawat dan layanan profesional untuk perjalanan Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/dearmasewamobilmedan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/dearmasewamobilmedan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/fleet', label: 'Armada Mobil' },
                { href: '/services', label: 'Layanan' },
                { href: '/articles', label: 'Artikel' },
                { href: '/contact', label: 'Kontak' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Sewa Mobil Harian</li>
              <li className="text-gray-400 text-sm">Sewa Mobil Mingguan</li>
              <li className="text-gray-400 text-sm">Sewa Mobil Bulanan</li>
              <li className="text-gray-400 text-sm">Jasa Sopir</li>
              <li className="text-gray-400 text-sm">Antar Jemput</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Jl. P. Diponegoro No.18, Medan, Sumatera Utara, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+6281234567890" className="text-gray-400 text-sm hover:text-primary">
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@dearma.com" className="text-gray-400 text-sm hover:text-primary">
                  info@dearma.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">24 Jam / 7 Hari</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dearma Sewa Mobil Medan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary">
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}