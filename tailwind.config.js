/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        GrayDarkDefault: "#030712",
        GrayDark600: "#D1D5DB",
        GrayDark900: "#F9FAFB",
        GrayDark50: "#111827",
        GrayDark200: "#374151",
        GrayDark100: "#1F2937",
        GreyDarkForAll: "#091B29",
        Gray600: "#4B5563",
        Gray900: "#111827",
      },
      screens: {
        tablet: "760px",
        desktop: "980px",
      },
    },
  },
  plugins: [require("daisyui")],
};
