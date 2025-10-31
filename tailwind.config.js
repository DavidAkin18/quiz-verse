/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'quiz-gradient': 'linear-gradient(to right, #3550DC, #27E9F7)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
