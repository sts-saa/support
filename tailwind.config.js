/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#5669FF',
          dark: '#4a5be0',
          light: '#7885ff',
        },
        secondary: {
          DEFAULT: '#40337E',
          dark: '#362a6a',
          light: '#524399',
        },
        light: '#F7F8FC',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};