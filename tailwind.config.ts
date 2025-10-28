import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";

const config: Config = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B132B",
        electric: "#1E90FF",
        sky: {
          light: "#00C6FF",
          dark: "#0072FF"
        },
        soft: "#F3F4F6"
      },
      backgroundImage: {
        "sky-gradient": "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(30, 144, 255, 0.35)"
      }
    }
  },
  plugins: [heroui()]
};

export default config;
