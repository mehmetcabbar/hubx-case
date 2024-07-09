/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

