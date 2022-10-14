/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '75v': '75vh',
      },
      animation: {
        slideshow: 'slideshow 1s ease-out',
        spinonce: 'spin 1s linear once',
      },
      keyframes: {
        slideshow: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
