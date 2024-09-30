/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2E2E2E',
        'light-bg': '#F7F7F7'
      },
    },
  },
  plugins: [],
}

