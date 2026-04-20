/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946',
          dark: '#B91C1C',
          light: '#FF6B6B',
        },
        secondary: {
          DEFAULT: '#1D3557',
          dark: '#0D1B2A',
          light: '#457B9D',
        },
        accent: {
          DEFAULT: '#F4A261',
          dark: '#E76F51',
          light: '#FAD5A5',
        },
        dark: '#0D1117',
        light: '#F8F9FA',
      },
      fontFamily: {
        heading: ['Archivo Black', 'Archivo', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'drive': 'drive 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
      },
      keyframes: {
        drive: {
          '0%, 100%': { transform: 'translateX(-100px) rotate(-2deg)' },
          '50%': { transform: 'translateX(100px) rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 10px 40px rgba(0,0,0,0.1)',
        'card-hover': '0 20px 60px rgba(230,57,70,0.15)',
        'glow': '0 0 30px rgba(230,57,70,0.3)',
      },
    },
  },
  plugins: [],
};
