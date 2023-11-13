import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#121212",
      white: "#ffffff",
      beige: "#F5F1E9",
      dark_blue: "#0D283B",
      blue: "#145384",
      dark_purple: "#282552",
      purple: "#35316E",
      ligth_purple: "#B7B4DE",
      teal: "#03DCA6",
      ligth_teal: "#CDF8F4",
      pink: "#B91456",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
