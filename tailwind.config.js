/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "dark-pink": "#ba4270",
        white: "#fbfcfe",
        "dark-blue": "#1b262f",
        blue: "#36536b",
        "light-blue": "#6c8294",
        "light-pink": "#da6d97",
        "form-error": "#FF0000",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      fontSize: {
        900: "4.8rem",
        800: "3.73rem",
        700: "3.2rem",
        600: "2.13rem",
        550: "2em",
        500: "1.6rem",
        400: "1.2rem",
        base: "1rem",
        200: "0.867rem",
      },
      lineHeight: {
        body: "1.867rem",
        h4: "2.133rem",
        "h3-sm": "1.667rem",
        "h3-big": "2.667rem",
        h2: "3.733rem",
        "h1-sm": "3.733rem",
        "h1-lg": "4.8rem",
      },
      padding: {
        base: "0.75rem",
      },
      margin: {
        base: "0.75rem",
      },
      borderWidth: {
        base: "1px",
      },
      borderRadius: {
        base: "24px",
      },
      boxShadow: {
        base: "1px 3px 5px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
