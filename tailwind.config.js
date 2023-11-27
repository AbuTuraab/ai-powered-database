

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
            big: { max: "1280px" }, // big tablet
            tablet: { max: "768px" }, //tablet screen
            surfDuo:{max:"540"},
            sm: {max: "415px" },
           
        },
    extend: {},
  },
  plugins: [],
}

