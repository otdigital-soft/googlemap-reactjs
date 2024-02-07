/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  safelist: ["text-red-600", "text-blue-600", "text-green-600", "lg:text-4xl"],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#FAFAFA",
        },
      },
      borderRadius: {
        md: ["4px"],
      },
    },
  },
  plugins: [],
};
