// tailwind.config.js
/* eslint-disable  */

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      'logo': '12'
    },
    keyframes: {
      slide: {
        '0%, 100%': {
          transform: 'translateX(-25%)'
        },
        '50%': {
          transform: 'translateX(0)'
        }
      }
    },
    animation: {
      slide: 'wiggle 3s ease-in-out infinite'
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      default: '#20232a',
      yellow: colors.yellow,
      grapes: '#0009',
      orange: colors.orange,
      blurred: 'rgba(0,0,0,.8)'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  stats: {
    children: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
