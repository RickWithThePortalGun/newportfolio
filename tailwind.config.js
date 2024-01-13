/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montreal)"],
      },
      colors: {
        grey: "#888888",
        customblack: "#101010",
        lighterblue: "#BDD4FF",
        lightblue: "#88A2FF",
        darkblue: "#0057FF",
        darkerblue: "#0500FF",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
