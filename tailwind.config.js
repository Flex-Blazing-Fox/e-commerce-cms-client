module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primarycolor: "#F9A826",
        homebackground: "#f9f9f9",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      transitionDuration: {
        "1500": "1500ms",
      },
      transitionDelay: {
        "1500": "1500ms",
        "2000": "2000ms",
        "3000": "3000ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
