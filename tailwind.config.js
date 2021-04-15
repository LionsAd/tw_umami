const {colors, screens} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
