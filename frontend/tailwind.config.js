/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fixora brand palette — orange, matched to the logo accent.
        brand: {
          50:  '#fff4ec',
          100: '#ffe4d1',
          200: '#ffc5a1',
          300: '#ffa06a',
          400: '#ff7f3d',
          500: '#f97316', // primary orange (logo accent)
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Deep ink used alongside the brand orange.
        ink: {
          50:  '#f6f7f9',
          100: '#eceef2',
          500: '#334155',
          700: '#1e293b',
          800: '#111827',
          900: '#0a0f1a',
          950: '#05080f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
