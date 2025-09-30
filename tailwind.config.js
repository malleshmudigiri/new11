/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blueTheme: '#22224b',
        pinkTheme: '#ce3266',
      },
    },
  },
  plugins: [],
};
