// tailwind.config.js
/* eslint-disable  */

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      'logo': '12',
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '5/6': '83%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '420': '420px',
      '250': '250px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80%',
      'full': '100%',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      default: '#20232a',
      bground: '#eaeded',
      yellow: colors.yellow,
      grapes: '#0009',
      orange: colors.orange,
      blurred: 'rgba(0,0,0,.8)',
      overlay: 'rgba(0, 0, 0, 0.3)',
      white: '#fff'
    },
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            transform : 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-out': {
          '0%': {
            'transform' : 'translateX(0)'
          },
          '100%': {
            'transform': 'translateX(-100%)'
          }
        },
        animation: {
          'slide-in': 'slide-in 0.5s ease-in-out',
          'slide-out': 'slide-out 2s ease-in-out'
        }
      }
    }
  },
  variants: {
    extend: {
     
    }
  },
  stats: {
    children: true,
  },
  plugins: [
    
    require('@tailwindcss/forms'),
  ]
}
