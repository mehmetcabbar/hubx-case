/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "w-36",
    "h-[54px]",
    "justify-center",
    "items-center",
    "min-w-[300px]",
    "px-6"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
      colors: {
        'primary': '#0B122A',
        'title': '#0381FF',
        'custom-hover': '#0381FF08',
        'soft-gray': '#F5F5F7',
        'content-bg': '#FBFCFC'



      },
      letterSpacing: {
        custom: '2px',
      }
    },
  },
  plugins: [],
}

