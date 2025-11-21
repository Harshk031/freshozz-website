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
        'bg-dark': '#0A0908',
        'soil': '#4A3F35',
        'copper': '#8B6F47',
        'gold': '#C9A961',
        'warm': '#E8DCC4',
        'muted-warm': '#B8A88A',
        'premium-black': '#1A1614',
        'soft-copper': '#A67C52',
        'pale-gold': '#D4C5A9',
        'charcoal': '#2C2825',
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
