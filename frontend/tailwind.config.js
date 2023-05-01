/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          logo: "#00a0b3",
          ylogo: "#fcf903",
        },
      },
    },
  },
  plugins: [],
};
