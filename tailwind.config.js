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
        'primary-gold': '#D78320',
        'dark-navy': '#0A1C2B',
        'success-green': '#059669',
        'warning-amber': '#F59E0B',
        'neutral-slate': '#64748B',
        'accent-emerald': '#10B981',
        'navy-900': '#0A1C2B',
        'gold-500': '#D78320',
        'gold-600': '#B86B1F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(90deg, #D78320 0%, #F59E0B 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
