/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headingFont: ["Noto Sans", 'serif'],
        bodyFont: ["Figtree", 'serif']
      },
      colors: {
        primary: '#FF4438',
        hover: '#D3382F'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}