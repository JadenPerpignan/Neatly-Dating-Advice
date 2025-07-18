/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        offwhite: '#F8F6F2',
        charcoal: '#232323',
        taupe: '#B8AFA3',
        gold: '#C2882A',
        orange: '#D97A2B',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 8px 0 rgba(35,35,35,0.08)',
        card: '0 4px 24px 0 rgba(35,35,35,0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
