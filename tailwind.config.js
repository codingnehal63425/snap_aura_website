/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleza: ['var(--font-belleza)', 'serif'],
        'bebas-neue': ['var(--font-bebas-neue)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};