/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1399px'
    },
    extend: {
      colors: {
        white: '#FFF',
        grey: '#6D6D6D',
        black: '#000',
        lightBlack: '#767676',
        tan: '#AC9870',
        lightTan: '#7B7B7B',
        lighterTan: '#AD9970',
        lightGrey: '#636363'

      }
    },
  },
  plugins: [],
}
 