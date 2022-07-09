/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px'
    },
    colors:{
      transparent:'transparent',
      current:'currentColor',
      neworange:'#D18029',
      newgrey:'#444444',
      newblack:'#000000',
      newwhite:'#ffffff',
      lightgrey:'#f3f3f3',
      newred:'#ff0000'
    },
    backgroundImage:{
      'hero-pattern': "url('./assets/hero.png')",
      'about': "url('./assets/about.jpg')"
    },
    maxWidth:{
      'logo':'30%',
    }
  },
  plugins: [],
}
