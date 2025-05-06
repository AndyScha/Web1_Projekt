module.exports = {
  darkMode: "class",
  content: [
    "./public/**/*.{html,js}",
    "./css/**/*.{html,js}"  // Falls du HTML-Dateien in css hast oder auch andere JS-Dateien
  ],
  theme: {
    extend: {
      fontFamily: {
        aktura: ['"Aktura-Regular"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
        trench: ['TrenchSlab', 'serif'],
      },
    },
  },
  safelist: [
    "border-green-500",
    "border-red-500",
    "border-gray-500"
  ],
  plugins: [],
};