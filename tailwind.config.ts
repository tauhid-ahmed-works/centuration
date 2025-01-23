// import type { Config } from "tailwindcss";
// import colors from "tailwindcss/colors";

// const config: Config = {
//   // darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     // "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // gray: {
//         //   "850": "#11274b",
//         // },
//         brand: {
//           "500": "#84cc16",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//           "50": "#f5f9ec",
//           "100": "#dfeec3",
//           "200": "#d0e5a6",
//           "300": "#bad97d",
//           "400": "#add264",
//           "500": "#98c73d",
//           "600": "#8ab538",
//           "700": "#6c8d2b",
//           "800": "#546d22",
//           "900": "#40541a",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//           "50": "#e8ebeb",
//           "100": "#b7c0c2",
//           "200": "#94a2a4",
//           "300": "#63787b",
//           "400": "#455d61",
//           "500": "#16353a",
//           "600": "#143035",
//           "700": "#102629",
//           "800": "#102629",
//           "900": "#091618",
//         },
//         gray: {
//           "50": "#fefefe",
//           "100": "#fbfcfc",
//           "200": "#f9fafa",
//           "300": "#f7f8f8",
//           "400": "#f5f7f7",
//           "500": "#f3f5f5",
//           "600": "#dddfdf",
//           "700": "#adaeae",
//           "800": "#868787",
//           "900": "#666767",
//         },
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },
//       fontFamily: {
//         title: ["var(--font-poppins)"],
//         body: ["var(--font-poppins)"],
//       },
//       fontSize: {
//         md: "0.9375rem",
//         "3.5xl": "2rem",
//         "3.75xl": "2.1875rem",
//         "4.5xl": "2.5rem",
//         "5.5xl": "3.125rem",
//         "5.75xl": "3.375rem",
//         "6.5xl": "4rem",
//       },
//       height: {
//         84: "21rem",
//       },
//       gridTemplateColumns: {
//         "auto-fit-100": "repeat(auto-fit, minmax(min(100%, 18.75rem), 1fr))",
//         "auto-fit-250": "repeat(auto-fit, minmax(min(100%, 15.625rem), 1fr))",
//       },

//       zIndex: {
//         "100": "100",
//         "200": "200",
//         "300": "300",
//         "400": "400",
//         "500": "500",
//         "600": "600",
//         "700": "700",
//         "800": "800",
//         "900": "999",
//         background: "0",
//         negative: "-1",
//       },
//       keyframes: {
//         slideIn: {
//           "0%": {
//             transform: "translateX(-100%)",
//           },
//           "100%": {
//             transform: "translateX(0)",
//           },
//         },
//         slideOut: {
//           "0%": {
//             transform: "translateX(0)",
//           },
//           "100%": {
//             transform: "translateX(-100%)",
//           },
//         },
//         hero: {
//           "0%, 100%": {
//             opacity: "0",
//           },
//           "50%": {
//             opacity: "1",
//           },
//         },
//         "animate-open-sidebar": {
//           to: {
//             transform: "translateX(0)",
//           },
//         },
//         "animate-close-sidebar": {
//           from: {
//             transform: "translateX(0)",
//           },
//           to: {
//             transform: "translateX(-100%)",
//           },
//         },
//       },
//       animation: {
//         slideIn: "slideIn 300ms 1 ease-in-out both",
//         slideOut: "slideOut 300ms 1 ease-in-out both",
//         hero: "hero 2000ms infinite  linear both",
//         "open-sidebar": "animate-open-sidebar 300ms linear 1 both",
//         "close-sidebar": "animate-close-sidebar 300ms linear 1 both",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       width: {
//         25: "6.25rem",
//       },
//     },
//   },
//   plugins: [
//     require("@tailwindcss/forms"),
//     "@tailwindcss/line-clamp",
//     require("tailwindcss-animate"),
//   ],
// };
// export default config;
