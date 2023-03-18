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
    },
  },
  plugins: [],
};
