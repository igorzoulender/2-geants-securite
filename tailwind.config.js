/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: true,
  },
  important: true,
  content: ["./pages/**/*.{vue,js}", "./components/**/*.{vue,js}", "./layouts/**/*.{vue,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'dark-blue':'#1A1943',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),

  ],
}
