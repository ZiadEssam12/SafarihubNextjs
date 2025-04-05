/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        orange: "#F6951B",
        darkBlue: "#071c55",
      },
    },
  },
  plugins: [require("tailwind-container-break-out")],
};
