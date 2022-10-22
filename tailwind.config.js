/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        100: '#64748b'
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}
