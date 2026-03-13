/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          sand: '#f8f3e8',
          coral: '#ff7a59',
          teal: '#1f6f78',
        },
      },
      boxShadow: {
        card: '0 24px 60px rgba(15, 23, 42, 0.14)',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Trebuchet MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
