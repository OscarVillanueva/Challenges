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
      zIndex: {
        '2n': '-2',
        'n': '-1'
      },
      inset: {
        '70': '17rem',
        '85': '23rem',
        '97': '24.5rem',
        '97.5': '25.5rem',
        '97.7': '30rem',
        '98': '31rem',
        '98.5': '34rem',
        '99': '46rem',
      },
      backgroundImage: {
        'avatar-6': 'url("/UserAvatar6.jpg")'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
