# Dearma Sewa Mobil Medan - Website Specification

## 1. Project Overview

**Project Name:** Dearma Sewa Mobil Medan  
**Type:** Car Rental CRM Website with Admin Dashboard  
**Core Functionality:** A modern, responsive car rental website featuring car listings, booking system, testimonials, blog articles, Google Maps location, and a secure Firebase-authenticated admin dashboard with Cloudinary media uploads.  
**Target Users:** Customers looking to rent cars in Medan, Indonesia | Admin staff managing rental operations

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Pages:**
1. **Home (`/`)** - Hero with automotive animation, featured cars, services, testimonials, location map
2. **Fleet (`/fleet`)** - Complete car listings with filtering and pricing
3. **Services (`/services`)** - Rental services and packages
4. **Articles (`/articles`)** - Blog/tips for travelers
5. **Contact (`/contact`)** - Contact form, location map, social links
6. **Admin (`/admin`)** - Dashboard with Firebase auth (password protected)

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

**Color Palette:**
- Primary: `#E63946` (Racing Red)
- Primary Dark: `#B91C1C`
- Secondary: `#1D3557` (Deep Navy)
- Accent: `#F4A261` (Warm Orange)
- Background Light: `#F8F9FA`
- Background Dark: `#0D1117`
- Text Primary: `#1A1A2E`
- Text Secondary: `#6B7280`
- White: `#FFFFFF`
- Success: `#10B981`
- Warning: `#F59E0B`

**Typography:**
- Headings: `' archivo-black', 'Archivo', sans-serif`
- Body: `' DM Sans', ' sans-serif`
- Hero Numbers: `' archivo-black', sans-serif`
- H1: 3.5rem / 4rem (mobile: 2.5rem)
- H2: 2.5rem / 3rem (mobile: 1.75rem)
- H3: 1.5rem
- Body: 1rem
- Small: 0.875rem

**Spacing System:**
- Base unit: 4px
- Section padding: 80px (mobile: 48px)
- Container max-width: 1280px
- Card padding: 24px
- Gap: 24px (mobile: 16px)

**Visual Effects:**
- Card shadows: `0 10px 40px rgba(0,0,0,0.1)`
- Hover shadows: `0 20px 60px rgba(230,57,70,0.15)`
- Border radius: 16px (cards), 8px (buttons), 50% (avatars)
- Transitions: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### 2.3 Components

**Navigation:**
- Fixed header with blur backdrop
- Logo (left), nav links (center), CTA button (right)
- Mobile: hamburger menu with slide-in drawer
- Active state: red underline with glow

**Hero Section:**
- Full viewport height with animated car
- Floating car elements with parallax effect
- Gradient overlay with animated particles
- Headline + CTA buttons + WhatsApp quick connect

**Car Cards:**
- Image with hover zoom effect
- Price badge overlay
- Car name, category, features icons
- "Sewa Sekarang" CTA button
- Hover: lift animation + red border glow

**Testimonial Cards:**
- Quote icon decoration
- Customer photo (circular)
- Name, location, rating (5 stars)
- Auto-scroll carousel

**WhatsApp Floating Button:**
- Fixed position bottom-right
- Pulsing animation
- Opens wa.me link

**Buttons:**
- Primary: Red background, white text, hover scale + shadow
- Secondary: Outline style, hover fill
- Icon buttons: Circular with tooltip

**Forms:**
- Floating labels
- Validation errors with red border
- Submit loading state with spinner

---

## 3. Functionality Specification

### 3.1 Core Features

**Homepage:**
- Animated hero with car elements (CSS keyframes + Framer Motion)
- "Tentang Kami" section with stats counter
- Featured 6 cars from Firebase
- Services highlights (4 services)
- Testimonials carousel (auto-scroll)
- Google Maps embed
- SEO meta tags

**Fleet Page:**
- Grid/list view toggle
- Filter by: category, price range, seats
- Sort by: price, name, popularity
- Pagination (12 per page)
- Search functionality

**Services Page:**
- Service packages with pricing
- Add-ons (driver, GPS, child seat)
- FAQ accordion

**Articles Page:**
- Blog listing with featured image
- Category filter
- Read more with rich text

**Contact Page:**
- Contact form with validation
- Google Maps embed (Medan location)
- Social media links (IG, FB)
- Phone/WhatsApp direct links

**Admin Dashboard:**
- Firebase Authentication (email/password)
- CRUD for cars (Create, Read, Update, Delete)
- Upload images via Cloudinary (car photos)
- Upload logo via Cloudinary
- CRUD for articles
- View testimonials
- Settings (company info)

### 3.2 User Interactions

- Smooth scroll between sections
- Page transitions
- Form validation feedback
- Toast notifications for actions
- Image preview before upload
- Loading states

### 3.3 Data Handling

**Firebase Collections:**
- `cars` - id, name, category, price, seats, imageUrl, description, features, createdAt
- `articles` - id, title, content, imageUrl, category, slug, createdAt
- `testimonials` - id, name, location, photoUrl, content, rating, approved
- `settings` - id, companyName, logoUrl, phone, address, mapUrl, socialLinks

### 3.4 Animations

**Hero:**
- Car driving animation (CSS translate)
- Floating car parts (parallax)
- Engine RPM digital counter
- Speed lines effect

**Page Load:**
- Staggered fade-in for elements
- Counter animation for stats

**Interactions:**
- Button hover scale (1.05)
- Card hover lift + glow
- Image zoom on hover

---

## 4. Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **Animation:** Framer Motion + CSS
- **Database:** Firebase Firestore
- **Auth:** Firebase Auth (Email/Password)
- **Media:** Cloudinary (images)
- **SEO:** Next.js Metadata API
- **Forms:** React Hook Form
- **Deployment:** Vercel

---

## 5. SEO Specification

**Meta Tags:**
- Title: "Dearma Sewa Mobil Medan - Rental Mobil Terpercaya"
- Description: "Sewa mobil Medan terpercaya dengan harga terjangkau. Armada terawat, layanan profesional, siap membantu perjalanan Anda."
- Keywords: "sewa mobil medan, rental mobil medan, rent car medan, sewa mobil terpercaya"
- Open Graph tags for social sharing
- JSON-LD schema for local business

---

## 6. Security Specification

- Firebase Auth with email/password
- Admin routes protected (server-side check)
- CORS configured for Firebase
- Environment variables for secrets (.env.local)
- Image upload validation (type, size)
- XSS prevention (React sanitization)
- Rate limiting on forms (optional)

---

## 7. Acceptance Criteria

- [ ] Homepage loads with car animation
- [ ] All pages accessible via navigation
- [ ] Responsive on mobile/tablet/desktop
- [ ] Car listings display from Firebase
- [ ] WhatsApp button opens wa.me link
- [ ] Google Maps shows Medan location
- [ ] Testimonials carousel works
- [ ] Contact form validates
- [ ] Admin dashboard requires login
- [ ] Can add/edit/delete cars in admin
- [ ] Can upload car images via Cloudinary
- [ ] Can manage articles in admin
- [ ] SEO meta tags present
- [ ] No console errors on load