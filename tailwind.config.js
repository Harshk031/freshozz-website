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
        // Premium Muddy White / Cream Theme
        'bg-dark': '#F8F5F0',        // Main background - warm cream
        'bg-cream': '#FFFCF7',       // Lighter cream sections
        'cream': '#F0EBE3',          // Secondary background
        'muddy': '#D4C8BC',          // Muddy beige tone
        'soil': '#8B7355',           // Earthy brown
        'copper': '#9C7B5C',         // Warm terracotta (replaces copper)
        'gold': '#A67C52',           // Caramel accent
        'warm': '#2D2420',           // Dark brown text (inverted)
        'muted-warm': '#6B5D4D',     // Muted brown text
        'premium-black': '#F5F2ED',  // Premium cream (was black)
        'near-black': '#EDE8E1',     // Near cream (was black)
        'earth': '#7A6652',          // Earth brown accent
        'taupe': '#B5A898',          // Soft taupe
      },
      boxShadow: {
        'soft-gold': '0 8px 30px rgba(156,123,92,0.15)',
        'soft-cream': '0 4px 20px rgba(139,115,85,0.08)',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
