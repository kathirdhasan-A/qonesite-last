// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iris: "#5D3FD3",
        teal: "#00C9A7",
        charcoal: "#1C1C1C",
        softgray: "#F5F5F5",
      },
       
    },
  },
  plugins: [],
};