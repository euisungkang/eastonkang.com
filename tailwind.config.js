/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'aston': ['"Aston"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'nk57': ['"NK57"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

