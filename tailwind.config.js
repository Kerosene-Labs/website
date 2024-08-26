/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svg}'],
  theme: {
    extend: {},
    screens: {
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '300px',
    },
  },
  plugins: [],
}

