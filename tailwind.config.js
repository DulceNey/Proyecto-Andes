/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        100 : '#facc15',
        200 : '#6b7280',
        300 : '#737373'
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}
