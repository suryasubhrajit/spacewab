/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/**/**/*.{js,jsx,ts,tsx.css}",
    "./src/*.{css,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('postcss-import'),
    require('autoprefixer'),
  ]
}