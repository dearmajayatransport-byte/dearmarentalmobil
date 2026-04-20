import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Dearma Sewa Mobil Medan - Rental Mobil Terpercaya',
  description: 'Sewa mobil Medan terpercaya dengan harga terjangkau. Armada terawat, layanan profesional, siap membantu perjalanan Anda.',
  keywords: 'sewa mobil medan, rental mobil medan, rent car medan, sewa mobil terpercaya, rental mobil medan terpercaya',
  authors: [{ name: 'Dearma Sewa Mobil Medan' }],
  openGraph: {
    title: 'Dearma Sewa Mobil Medan - Rental Mobil Terpercaya',
    description: 'Sewa mobil Medan terpercaya dengan harga terjangkau. Armada terawat, layanan profesional.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Dearma Sewa Mobil Medan',
  },
  alternates: {
    canonical: 'https://dearma.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Dearma Sewa Mobil Medan',
              description: 'Penyedia layanan sewa mobil terpercaya di Medan',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. P. Diponegoro No.18',
                addressLocality: 'Medan',
                addressRegion: 'Sumatera Utara',
                addressCountry: 'ID',
              },
              telephone: '+62-812-3456-7890',
              email: 'info@dearma.com',
              url: 'https://dearma.vercel.app',
              priceRange: 'IDR',
              openingHours: 'Mo-Su 00:00-24:00',
              image: 'https://dearma.vercel.app/logo.png',
              sameAs: [
                'https://facebook.com/dearmasewamobilmedan',
                'https://instagram.com/dearmasewamobilmedan',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}