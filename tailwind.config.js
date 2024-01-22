/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.+(html|eta)'],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '767px'},
        'plus': '414px',
        'xl-': '1210px',
        'xl+': '1360px',
        'xxl+': '1512px'
    },
      boxShadow: {
          'md': '0px 2px 2px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

