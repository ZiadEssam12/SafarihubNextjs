/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    extend: {
      colors: {
        orange: "#F6951B",
        darkBlue: "#071c55",
      },
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      // },
      // fontWeight: {
      //   regular: "400", // Map font weights to their respective values
      //   medium: "500",
      //   semibold: "600",
      //   bold: "700",
      // },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-container-break-out")],
};
