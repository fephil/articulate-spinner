module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  purge: {
    content: ["./src/**/*.njk", "./js/modules/**/*.js", "./.eleventy.js"],
  },
};
