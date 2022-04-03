module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '125': '28rem',
        '150': '32rem',
        '175': '48rem',
        '200': '64rem',
      },
      colors: {
        'primary': {
          DEFAULT: '#2A669F',
          '50': '#E4F7F8',
          '100': '#CCEEF2',
          '200': '#9CD7E5',
          '300': '#6CB9D8',
          '400': '#3B94CB',
          '500': '#2A669F',
          '600': '#234B83',
          '700': '#1B3366',
          '800': '#14204A',
          '900': '#0C102E'
        },
        'secondary': {
          DEFAULT: '#453D57',
          '50': '#D1CCDB',
          '100': '#C1BACF',
          '200': '#A096B6',
          '300': '#7F729D',
          '400': '#62567B',
          '500': '#453D57',
          '600': '#3E364E',
          '700': '#363045',
          '800': '#2F2A3C',
          '900': '#282433'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
