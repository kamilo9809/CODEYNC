/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'oxanium': ['Oxanium', 'sans-serif'], // Agrega 'MiFuente' como la primera opción en la pila de fuentes sans-serif
    },
  },
  plugins: [],
}