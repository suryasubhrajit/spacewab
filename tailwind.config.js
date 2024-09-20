/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/**/**/*.{js,jsx,ts,tsx.css}",
    "./src/*.{css,js,jsx,ts,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'selector',
  plugins: [
    require('flowbite/plugin')
]
}