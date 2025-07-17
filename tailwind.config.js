/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: 'var(--color-charcoal)',
        offwhite: 'var(--color-offwhite)',
        taupe: 'var(--color-taupe)',
        gold: 'var(--color-gold)',
        orange: 'var(--color-orange)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Geist',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        subtle: '0 2px 8px 0 rgba(35,35,35,0.08)',
        card: '0 4px 24px 0 rgba(35,35,35,0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
