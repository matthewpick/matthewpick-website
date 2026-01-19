/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Semantic colors using CSS variables */
        surface: 'var(--color-bg)',
        card: 'var(--color-bg-card)',
        subtle: 'var(--color-bg-subtle)',
        input: 'var(--color-bg-input)',

        primary: 'var(--color-text)',
        secondary: 'var(--color-text-secondary)',
        muted: 'var(--color-text-muted)',
        placeholder: 'var(--color-text-placeholder)',

        border: 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',

        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
        highlight: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },

        /* Decorative colors (fixed, not theme-dependent) */
        sage: {
          300: 'var(--color-sage-300)',
          500: 'var(--color-sage-500)',
          700: 'var(--color-sage-700)',
        },
        moss: {
          DEFAULT: 'var(--color-moss)',
          light: 'var(--color-moss-light)',
        },

        /* Legacy - for dark mode deep backgrounds */
        'deep-green': '#1A2B22',
        'forest': '#253D30',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
