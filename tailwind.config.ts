import type { Config } from "tailwindcss";
import color from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d1d1d1",
          400: "#b4b4b4",
          500: "#808080",
          600: "#6d6d6d",
          700: "#4f4f4f",
          800: "#212529",
          850: "#11274b",
          900: "#1c1e21",
          950: "#000024",
        },
        brand: {
          // 500: "#98c73d",
          //  #159957
          500: "#65a30d",
        },
      },
      fontFamily: {
        title: ["var(--font-poppins)"],
        body: ["var(--font-poppins)"],
        // title: ["var(--font-lato)"],
        // body: ["var(--font-lato)"],
      },

      fontSize: {
        md: "0.9375rem",
        "3.5xl": "2rem",
        "3.75xl": "2.1875rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.125rem",
        "5.75xl": "3.375rem",
      },

      gridTemplateColumns: {
        "auto-fit-100": "repeat(auto-fit, minmax(min(100%, 18.75rem), 1fr))",
        "auto-fit-250": "repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr))",
      },

      spacing: {
        // container: "87.5rem",
        container: "75rem",
        "container-sm": "56.25rem",
      },

      backgroundImage: {
        "pattern-1": "linear-gradient(to right, #100d54, #11274b)",
        "pattern-2": "linear-gradient(43deg, #11274b 0%,  #100d54 100%)",
        "shade-1":
          "linear-gradient(to top,  rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.8),  rgb(0, 0, 0, 0.1))",
      },
      zIndex: {
        background: "0",
        100: "100", //header
        200: "200", //dropdown
        300: "300", //sidebar
        400: "400", //modal
        500: "500", //popover
        600: "600", //overlay
        700: "700", //toast
        800: "800", //tooltip
        900: "999", //highest
        negative: "-1", // negative
      },

      keyframes: {
        bouncex: {
          "50%": {
            transform: "translateX(10px)",
          },
        },
        slideup: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        revealin: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        hero: {
          "0%, 100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      animation: {
        bouncex: "bouncex 300ms 3 ease-in-out",
        slideup: "slideup 300ms 1 ease-in-out forwards",
        revealin: "revealin 300ms 1 ease-in-out forwards",
        slideIn: "slideIn 300ms 1 ease-in-out both",
        slideOut: "slideOut 300ms 1 ease-in-out both",
        hero: "hero 2000ms infinite  linear both",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), "@tailwindcss/line-clamp"],
};
export default config;
