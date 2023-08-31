/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Alegreya Sans SC', 'sans-serif'],
      },
      keyframes: {
        show_it: {
          '0%': {transform: 'translateX(800px)'},
          '100%': {transform: 'translateX(0)'}
        },
      },
      animation: {
        'show_it': 'show_it 0.5s ease-in',
      }
    },
  },
  plugins: [],
}

