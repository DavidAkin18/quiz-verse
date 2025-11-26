/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quiz: {
          primary: "#3B82F6", // Bright Blue
          secondary: "#10B981", // Teal Green
          dark: "#111827", // Dark Gray
          lightText: "#111827",
          darkText: "#FFFFFF",
        },
      },
      backgroundImage: {
        "quiz-gradient": "linear-gradient(to right, #3B82F6, #10B981)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


