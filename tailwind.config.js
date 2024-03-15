/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
      extend: {
         colors: {
            white2: "#F3F5F7",
            white1: "#F4F7FE",
            yellow: "#FFBE00",
            green: "#1DAB87",
            gray2: "#596780",
            gray3: "#90A3BF",
            lightGray: "#A3AED0",
            smokeGray: "#F0F0F0",
         },
         keyframes: {
            shimmer: {
               "100%": {
                  transform: "translateX(100%)",
               },
            },
         },
      },
   },
  plugins: [],
}