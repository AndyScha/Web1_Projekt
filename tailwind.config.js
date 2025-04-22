/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        aktura: ['"Aktura-Regular"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
        trench: ['TrenchSlab', 'serif'],
      },
    },
  },
  plugins: [],
};
