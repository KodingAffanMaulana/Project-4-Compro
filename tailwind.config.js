/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
        mochiy: ['Mochiy Pop One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
