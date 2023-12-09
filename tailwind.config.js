/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
// prettier.config.js
module.exports = {
  tailwindConfig: './styles/tailwind.config.js',

  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Dmsans: "'DM Sans', sans-serif;",
        Lato: "'Lato', sans-serif;"
      },
      screens: {
        'laptop': {'max' : '1280px'},
        'handphone' : {'min' : '414px'}
      },
   
    },
    plugins: [
      require('@tailwindcss/forms'),
      ['prettier-plugin-tailwindcss'],
      // ...
    ],
  },
 
}
