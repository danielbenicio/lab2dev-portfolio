/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
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
