/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "6xl": "0px 5px 40px 0px #00000008",
        "7xl": "0px 25px 40px 0px #00000008",
      },
    },
  },
  plugins: [],
};
