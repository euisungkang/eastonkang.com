// import plugin from 'tailwindcss/plugin';

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
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
    // plugin(function({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       'translate-z': (value) => ({
    //         '--tw-translate-z': value,
    //         transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
    //       }), // this is actual CSS
    //     },
    //     { values: theme('translate'), supportsNegativeValues: true }
    //   )
    // })
  ],
}

