/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1324px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      oswald: ["var(--font-oswald)"],
    },
    extend: {},
  },
  plugins: [],
};
