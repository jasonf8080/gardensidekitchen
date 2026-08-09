/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Single source of truth for Gardenside brand colors — refreshed for v2
        // to sit closer to the real photography (warm charcoal, cream, terracotta).
        primary: '#1B1815', // warm near-black — nav, dark sections, body text on light bg
        secondary: '#F5EFE3', // warm cream/parchment — light section backgrounds
        accent: '#A2967B', // muted taupe/stone accent — CTAs, labels, hover states
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Darker Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
