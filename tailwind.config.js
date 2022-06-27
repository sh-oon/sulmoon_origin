module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow:{
      'up':'0 -5px 5px gray',
      'down':'0 5px 5px gray',
    },
  },
  variants: {
    extend: {
      backgroundColor:['checked'],
      boxShadow: ['active'],
    },
    screens: {
      'xs': '576px',
    }
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
  ],
}
