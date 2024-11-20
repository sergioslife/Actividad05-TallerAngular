/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".compoonents/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c0559b",
        secondary: "#1E293B",
        accent: "CB5930",
        danger: "#F00"
      }
    },
  },
  plugins: [],
}

