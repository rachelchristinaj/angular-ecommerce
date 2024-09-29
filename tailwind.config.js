/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customWhiteTransparent: 'rgba(255, 248, 250)', // Adding a custom color with transparency
      },
    },
  },
  plugins: [],
}

