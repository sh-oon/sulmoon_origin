module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow:{
      'up':'0 -5px 15px lightgray',
      'down':'0 5px 15px lightgray'
    },
  },
  variants: {
    extend: {
      backgroundColor:['checked'],
      boxShadow: ['active'],
    },
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
  ],
}
