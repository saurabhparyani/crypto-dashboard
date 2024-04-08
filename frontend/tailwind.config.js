/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '30px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
      },
      colors: {
        'beige': '#e8dccc',
        'linkwater': '#Dbe5f4',
        'idk': '#c5c7e4',
        'badgreen': '#d1dad1',
        'prpl': '#2563eb'
        // Add as many custom colors as you need
      },
    },
  },
  // remove this line if you don't use dark mode
  darkMode: 'media', // or remove this line
}