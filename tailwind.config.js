/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1D3A',
        sky: '#1E3A5F',
        mint: '#3EC6A3',
      }
    }
  },
  plugins: [],
};
