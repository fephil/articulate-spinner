module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    content: ["./src/**/*.njk", "./.eleventy.js"],
  },
};
