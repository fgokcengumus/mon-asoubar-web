/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mimar-bg': '#f5f0eb',    // Bej Arka Plan
        'mimar-accent': '#005110',
      }
    },
  },
  plugins: [],
}