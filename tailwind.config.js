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
      boxShadow: {
        product: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
      zIndex: {
        "-2": "-2",
      },
      margin: {
        '42': '10.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
