/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode
        cream: '#FAF7F2',
        sand: '#E8DFD0',
        // Dark mode - deep forest greens
        'dark-earth': '#0F1A14',
        'deep-green': '#1A2B22',
        'forest': '#253D30',
        // Accents
        terracotta: {
          DEFAULT: '#C2725A',
          light: '#D4896F',
          dark: '#A65D47',
        },
        sage: {
          DEFAULT: '#8B9E7E',
          light: '#A3B896',
          dark: '#6B7D5F',
        },
        clay: {
          DEFAULT: '#B8956E',
          light: '#D4B896',
        },
        moss: {
          DEFAULT: '#4A6B52',
          light: '#6B8F74',
        },
        // Text
        charcoal: '#3D3D3D',
        'off-white': '#F5F7F4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
