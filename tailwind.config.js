module.exports = {
  content: ['./layout/*.liquid',
  './sections/*.liquid',
  './snippets/*.liquid',
  './templates/customers/*.liquid',
  './templates/*.liquid'
],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  variants: {
    extend:{},
  },
  plugins: [],
}

