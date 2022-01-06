const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['PT Serif', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
