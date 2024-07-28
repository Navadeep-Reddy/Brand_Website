module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
      colors: {
        //Accent
        ctYel: "#E63946", // Vibrant red for accents

        //Complimentary
        ctPur: "#FFFFFF", // White as a complimentary color

        //Dominant Color
        ctGre: "#333333", // Dark grey for dominant elements
        ctLightGrey: "#F0F0F0", // Light grey for background
        ctBlack: "#000000", // Black for maximum contrast
        ctNavy: "#1D3557", // Deep blue as a secondary accent
        ctGold: "#D4A017", // Muted gold for highlights
      },
    },
  },
  plugins: [],
};
