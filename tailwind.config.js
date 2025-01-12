/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0f4fd',
          '100': '#e4eafb',
          '200': '#cdd8f8',
          '300': '#afbef2',
          '400': '#8f9bea',
          '500': '#747ae0',
          '600': '#6462d5',
          '700': '#4d49b9',
          '800': '#403d96',
          '900': '#383877',
          '950': '#222145',
        },
      },
    },
  },
  plugins: [],
};
