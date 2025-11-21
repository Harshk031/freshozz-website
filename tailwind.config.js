/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121212',
        'soil': '#6B4C3B',
        'copper': '#B86B2C',
        'gold': '#D4AF37',
        'warm': '#F5EFE6',
        'muted-warm': '#C9B896',
        'premium-black': '#0A0A0A',
        'near-black': '#1A1A1A',
      },
      boxShadow: {
        'soft-gold': '0 8px 30px rgba(212,175,55,0.10)',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
