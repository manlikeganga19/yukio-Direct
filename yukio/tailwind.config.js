/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    fontFamily: {
      primary: "Rubik",
    },
    extend: {
      flexShrink:{
        2: '2'
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          secondary: "#020403",
          hover: "#454545",
        },
        white: {
          DEFAULT: "#ffffff",
          secondary: "#fbfcf8",
          hover: "#fbfcf8",
        },
      },
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  plugins: [],
};
