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
          cylogo: "#f4d8c6",
        },
      },
      fontFamily: {
        braah: ["Braah One", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        chakra: ["Chakra Petch", "sans - serif"],
        genos: ["Genos", "sans-serif"],
        hubballi: ["Hubballi", "cursive"],
        nova: ["Nova Mono", "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      borderWidth: {
        d: "25px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
