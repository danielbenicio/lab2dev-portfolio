/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        background: '#F8F8F8',
        'lab2dev-purple-900': '#3D1A4A',
        'lab2dev-purple-700': '#712782',
        'red-450': '#FF0054',
      },
      boxShadow: {
        card: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
