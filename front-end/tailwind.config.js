/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondary-light)",
        tertiary: "var(--tertiary)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
