import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './app/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './public/*.{ts,tsx}',
	],
  theme: {
    extend: {
      fontFamily:{
        inter: "var(--font-inter)",
        rubik: "var(--font-rubik)",
      },
      colors: {
        primaryRed: {
          DEFAULT: "#DB3A28",
        },
        secondaryRed: {
          DEFAULT: "#FEF3F2",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slowfade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideup: {
          from: { opacity: "0", transform: 'translateY(25%)' },
          to: { opacity: "1", transform: 'none' },
        },
        slidedown: {
          from: { opacity: "0", transform: 'translateY(-25%)' },
          to: { opacity: "1", transform: 'none' },
        },
        slideleft: {
          from: { opacity: "0", transform: 'translateX(-20%)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: "0", transform: 'translateX(20%)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideup: 'slideup 0.5s ease-in-out',
        slidedown: 'slidedown 0.5s ease-in-out',
        slideleft: 'slideleft 0.5s ease-in-out',
        slideright: 'slideright 0.5s ease-in-out',
        wave: 'wave 0.5s linear infinite',
        slowfade: 'slowfade 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
