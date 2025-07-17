module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#232323',
        offwhite: '#F8F8F5',
        taupe: '#B8AFA3',
        gold: '#C2882A', // deep gold accent
        orange: '#D97A2B', // burnt orange accent
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
