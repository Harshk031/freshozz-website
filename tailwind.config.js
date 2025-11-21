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
        soil: '#6B4C3B',
        copper: '#B86B2C',
        gold: '#D4AF37',
        'bg-dark': '#121212',
        warm: '#F5E9D0',
        'muted-warm': '#D0C7BE',
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
