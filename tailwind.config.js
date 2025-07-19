/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1b365d',
        },
        gold: {
          50: '#fefdf8',
          100: '#fefbf0',
          200: '#fef7e0',
          300: '#feefb3',
          400: '#fee481',
          500: '#fdd74b',
          600: '#d4a574',
          700: '#b8935a',
          800: '#8b7355',
          900: '#6b5b47',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
