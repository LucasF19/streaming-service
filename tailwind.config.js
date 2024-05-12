/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        "11px": "11px",
        "13px": "13px",
        "16px": "16px",
        "19px": "19px",
      },
      lineHeight: {
        "16px": "16px",
      },
      colors: {
        white: "#ffffff",
        gray2: "#DBDBDB",
        blue3: "#3D3E54",
        blue4: "#2E304B",
        purple1: "#5153D8",
        yellow2: "#F0BB0C",
      },
    },
  },
  plugins: [],
};
