/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: false, // Add this line to disable dark mode

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // content,
  ],
};

// plugins: [require('tailwind-container-break-out')]
