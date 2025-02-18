import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        sm: "600px",
        md: "690px",
        lg: "988px",
        xl: "1078px",
        xxl: "1265px",
      },
      colors: {
        text_gray: "#71767b",
        text_gray_light: "#e7e9ea",
        border_gray: "#2f3336",
        input_gray: "#202327",
        icon_purple: "#7c3aed",
        icon_green: "#00ba7c",
        icon_pink: "#f91880",
      },
    },
  },
  plugins: [],
} satisfies Config;
