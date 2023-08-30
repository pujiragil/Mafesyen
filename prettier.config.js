module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["clsx", "cva"],
  tailwindConfig: "./tailwind.config.js",
};
