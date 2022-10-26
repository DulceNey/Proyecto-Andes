/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      100: '#64748b'
    }
  },
};
export const plugins = [require('tailwind-scrollbar-hide')];
