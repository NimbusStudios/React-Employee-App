/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#66EB9A',  // Green from screenshots
        'secondary': '#FFFF00', // Yellow from screenshots
        'dark-bg': '#121212', // Dark background color
        'gray-800': '#202020', // Slightly lighter gray
        'gray-700': '#2B2B2B', // Even lighter gray
        'gray-300': '#D1D5DB', // Light gray for text
      },
      fontFamily: {
        'luga': ['"Luga"', 'sans-serif'],
      },
      borderRadius: {
        'md': '0.375rem', // Slightly adjusted default
      },
      // You can add more custom styles here, for example:
      boxShadow: {
        'card': '0px 4px 16px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}