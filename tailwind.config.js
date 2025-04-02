/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'aston': ['"Aston"'],
        'inter': ['"Inter"'],
        'nk57': ['"NK57"'],
        'tny': ['"TNY"'],
        'jws': ['"JWS"']
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography')
  ],
}

