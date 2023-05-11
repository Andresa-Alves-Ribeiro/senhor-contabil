/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        azul: '#142882',
        cereja: '#c31e55',
        lima: '#d2d737',
        cinza: '#e4e3e5',
        cinza_escuro: '#434b56',
        verde: '#04c377',
      }
    },
  },
  plugins: [],
}