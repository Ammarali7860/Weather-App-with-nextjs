/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "hsl(243, 96%, 9%)",
          800: "hsl(243, 27%, 20%)",
          700: "hsl(243, 23%, 24%)",
          600: "hsl(243, 23%, 30%)",
          300: "hsl(240, 6%, 70%)",
          200: "hsl(250, 6%, 84%)",
          0: "hsl(0, 0%, 100%)",
        },
        orange: {
          500: "hsl(28, 100%, 52%)",
        },
        customBlue: {
          500: "hsl(233, 67%, 56%)",
          700: "hsl(248, 70%, 36%)",
        },
      },
      fontSize: {
        base: "18px",
      },
      fontFamily: {
        DM_Sans: ["var(--font-dm-sans)", "sans-serif"],
        Bricolage_Grotesque: ["var(--font-bricolage-grotesque)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
