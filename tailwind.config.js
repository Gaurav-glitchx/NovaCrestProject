/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090A0F",
        card: "#121722",
        "card-hover": "#181F2E",
        cyan: {
          accent: "#00F2FE",
        },
        blue: {
          accent: "#3B82F6",
        },
      },
    },
  },
  plugins: [],
};
