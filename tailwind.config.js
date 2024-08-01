/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        'my_spacing': '45rem',
      },
      fontFamily: {
        'myjetbrains': ['JetBrains'],
        'mybolditalic': ['BoldItalic'],
        'myitalic': ['Italic'],
        'mybold': ['Bold'],
        'myregular': ['Regular'],
      },
      
    },
  },
  plugins: [],
}