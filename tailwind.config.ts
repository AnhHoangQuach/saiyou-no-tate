import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.tsx"],
  important: true,
  plugins: [],
  screens: {
    lg: "1200px",
    md: "900px",
    sm: "600px",
    xl: "1600px",
  },
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--color-primary-main)",
        },
        secondary: {
          main: "var(--color-secondary-main)",
        },
      },
    },
    fontFamily: {
      ad: ["var(--font-ad-pro-text)"],
      slab: ["var(--font-roboto-slab)"],
    },
  },
}
export default config
