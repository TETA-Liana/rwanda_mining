/** @type {import('tailwindcss').Config} */
// import type { Config } from 'tailwindcss'

const config /*: Config*/ = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64a63a",
        secondary: "#55952c",
        accent: "#ffda3a",
        brandGreen: {
          DEFAULT: "#64a63a",
          dark: "#55952c",
        },
        brandYellow: {
          DEFAULT: "#ffda3a",
          dark: "#e0c234",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "join-us-gradient":
          "linear-gradient(to bottom right, #c6f6d5, #38a169)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
