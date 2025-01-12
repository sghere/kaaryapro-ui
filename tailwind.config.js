/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'hillary': {
        '50': '#f7f7f5',
        '100': '#edece7',
        '200': '#dbd8cd',
        '300': '#c4c0ad',
        '400': '#a59d84',
        '500': '#9a8f75',
        '600': '#8d8069',
        '700': '#766a58',
        '800': '#61584b',
        '900': '#50493e',
        '950': '#2a2520',
      },
    
    }
  },
  plugins: [],
}