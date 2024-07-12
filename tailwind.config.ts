import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#6200ea',
        'primary-light': '#9c47ff',
        'primary-dark': '#0a00b6',
        secondary: '#03dac6',
        'secondary-light': '#66fff9',
        'secondary-dark': '#00a896',
        accent: '#ff4081',
        'accent-light': '#ff79b0',
        'accent-dark': '#c60055',
        background: '#f5f5f5',
        surface: '#ffffff',
        error: '#b00020',
        warning: '#ff9800',
        success: '#4caf50',
        info: '#2196f3',
        'text-primary': '#212121',
        'text-secondary': '#757575',
        'text-disabled': '#bdbdbd',
        border: '#e0e0e0',
      },
    },
  },
  plugins: [],
};
export default config;
