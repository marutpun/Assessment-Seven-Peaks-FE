/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#ebf8ff',
          100: '#d2f0ff',
          200: '#afe6ff',
          300: '#78d8ff',
          400: '#38c0ff',
          500: '#0b9cff',
          600: '#0078ff',
          700: '#005fff',
          800: '#004dd4',
          900: '#0247a6',
          950: '#09357b',
        },
      },
    },
  },
  plugins: [],
};
