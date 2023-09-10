/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "-3px -3px 15px rgb(0, 255, 255)",
      },
    },
  },
  plugins: [],
};
