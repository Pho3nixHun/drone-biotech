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
        'jetbrains': ['JetBrains'], // Add your custom font here
      },
      
    },
  },
  plugins: [],
}