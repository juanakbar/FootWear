module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
