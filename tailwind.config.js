const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discordGray: '#202225', 
        discordPurple: '#5865f2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
