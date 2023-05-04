/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          logo: "#00a0b3",
          ylogo: "#fcf903",
          blogo: "#1e3552",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
