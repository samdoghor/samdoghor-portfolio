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
          logo: "#875d1c",
          ylogo: "#d67c1c",
          blogo: "#1e3552",
        },
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        chakra: ["Chakra Petch", "sans - serif"],
        hubballi: ["Hubballi", "cursive"],
      },
      borderWidth: {
        d: "25px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
