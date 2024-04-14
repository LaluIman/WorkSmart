/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{index.html,.sek.html}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

