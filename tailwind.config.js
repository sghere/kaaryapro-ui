/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf6f6",
          100: "#f5efee",
          200: "#ebe2e0",
          300: "#dbc9c6",
          400: "#c7a8a5",
          500: "#af8884",
          600: "#976867",
          700: "#845858",
          800: "#6a4748",
          900: "#5c3f41",
          950: "#312021",
        },
      },
    },
  },
  plugins: [],
};
