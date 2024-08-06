/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {        
        'primary': '#A21088',
        'secondary': '#138d77',
        'tertiary': '#faa4f7',
        'quaternary': '#f4fffb',
      }
    },
  },
  plugins: [],
}

