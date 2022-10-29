/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        100 : '#facc15',
        200 : '#6b7280',
        300 : '#737373',
        400 : 'rgb(52, 211, 153)',
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
