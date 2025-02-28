import type { Config } from "tailwindcss";

import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGray: "#A1A1A1",
        textBlack: "#4D4D4D",
        mainBlue: "#006BFF",
        grayText: "#A0A0A0",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
