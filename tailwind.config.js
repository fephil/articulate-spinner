module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    mode: "all",
    content: ["./src/**/*.njk", "./.eleventy.js"],
  },
};
