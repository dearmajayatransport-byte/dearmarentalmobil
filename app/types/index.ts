export interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  seats: number;
  imageUrl: string;
  description: string;
  features: string[];
  createdAt: string;
  updatedAt?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  slug: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  photoUrl: string;
  content: string;
  rating: number;
  approved: boolean;
  createdAt: string;
}

export interface Settings {
  id: string;
  companyName: string;
  logoUrl: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapUrl: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter?: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}