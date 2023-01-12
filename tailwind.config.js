/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d094e8",

          "secondary": "#d639be",

          "accent": "#d0ef92",

          "neutral": "#1C161D",

          "base-100": "#F1F5F9",

          "info": "#ADD1EB",

          "success": "#19B883",

          "warning": "#F4B734",

          "error": "#EA4375",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}