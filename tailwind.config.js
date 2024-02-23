/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      cu600: "600px",
      md: "768px",
      sg: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      cu500: "500px",
      cu300: "300px",
      cu400: "400px",
      cu800: "800px",
      cu700: "700px",
    },
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
