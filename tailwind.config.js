module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      1: 1,
      1.5: 1.5,
      2: 2,
      3: 3,
    },
    extend: {
      fontFamily: {
        main: ["SK Modernist", "monospace"],
        sub: ["HelveticaNeue", "monospace"],
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        "2-custom": "1.5fr 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
