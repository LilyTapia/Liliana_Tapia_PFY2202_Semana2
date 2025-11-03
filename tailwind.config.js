/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e1ecff',
          200: '#c2d8ff',
          300: '#92b8ff',
          400: '#5e92ff',
          500: '#3a6ff8',
          600: '#2855db',
          700: '#2345ae',
          800: '#1e398a',
          900: '#1d336f',
        },
      },
      boxShadow: {
        'brand-md': '0 20px 60px rgba(15, 23, 42, 0.12)',
        'brand-lg': '0 40px 80px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [],
}
