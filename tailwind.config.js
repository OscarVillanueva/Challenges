module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal': 'rgb(51, 247, 188)'
      },
      fontSize: {
        '11xl': '11rem'
      },
      height: {
        "semi-screen": '90vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
