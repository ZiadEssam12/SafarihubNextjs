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
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-container-break-out")],
};
