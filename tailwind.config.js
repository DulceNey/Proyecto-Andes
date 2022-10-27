/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gris-fondo': '#54433A',
        'gris-claro-palete':'#DFE0DF',
        'gris-fondo2':'#6D8385',
        'naranja-palete':'#D87738',
        'fondo-boton':'#4C656E',
        'fondo-marron-palete':'#532401',
        'gris-blanco-palete': '#FFF5E9',

      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
