/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./node_modules/@tremor/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romanticRed: "#ff4d6d",
        softPink: "#ffccd5",
        warmWhite: "#fff5f7",
        deepRose: "#e63946",
      },
    },
  },
  plugins: [],
};