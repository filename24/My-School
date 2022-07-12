/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tHeader: 'rgb(30 64 175)',
      },
    },
  },
  plugins: [],
};
