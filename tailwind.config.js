/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is important
  ],
  theme: {
    extend: {
      colors: {
        'mango': {
          'light': '#FFD166',
          'DEFAULT': '#FFC300',
          'dark': '#FFA000',
        },
        'leaf': {
          'light': '#90BE6D',
          'DEFAULT': '#43AA8B',
          'dark': '#275C4B',
        }
      }
    },
  },
  plugins: [],
}
