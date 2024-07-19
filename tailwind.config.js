/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3B3A5D',
        'secondary-color': '#FFBB50',
        'content-color': '#8F8F8F',
        'link-color': '#8F8F8F',
        'border-color': '#B16642',
        'gradient-start': '#FFF0E9',
        'gradient-end': '#EAB196',
        'button-color': '#3B3A5E',
      },
    },
  },
  plugins: [],
}

