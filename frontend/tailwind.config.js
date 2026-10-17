/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef5ff',
          100: '#d9e8ff',
          200: '#b8d2ff',
          300: '#8bb4ff',
          400: '#5e8dff',
          500: '#3c6dff',
          600: '#2554f5',
          700: '#1d41d9',
          800: '#1e36ad',
          900: '#1e3285',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
