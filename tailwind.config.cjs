/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'theme(space.10) 1fr',
      },
      gridTemplateColumns: {
        layout: 'theme(space.40) 1fr',
      },
      keyframes: {
        fold: {
          '0%': {
            transform: 'translateY(0%)',
          },
          '100%': {
            transform: 'translateY(-100%)',
            display: 'none',
          },
        },
        unfold: {},
      },
      animation: {
        fold: 'fold 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
