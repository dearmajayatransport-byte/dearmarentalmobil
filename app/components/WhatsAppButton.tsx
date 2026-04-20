'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '6281234567890';
  const message = 'Halo Dearma, saya ingin info menyewa mobil.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn flex items-center justify-center animate-pulse-slow"
        aria-label="Hubungi via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}