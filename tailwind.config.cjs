/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-mobile': {'max': '560px'},
        'min-mobile': {'min': '560px'},
        'max-ipad': {'max': '840px'},
        'min-ipad': {'min': '840px'},
        'lg': {'max': '1080px'},
      },
    },
  },
  plugins: [],
}