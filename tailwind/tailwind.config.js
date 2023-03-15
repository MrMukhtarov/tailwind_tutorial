const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "git",
  content: [`./src/**/*.html`],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        prototurk : '#32445a',
        twitter: "#1da1f2"
      },
      spacing : {
        '15' : '3.75rem'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme, e}) {
      const calcUtilities = _.map(theme(`spacing`), (value,key) => {
        return {
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - (${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            width: `calc(100% - (${value})`
          }
        }
      })
      addUtilities(calcUtilities, {
        variants: [`responsive`, `hover`]
      })
    })
  ],
};
