import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      segoe: ['Segoe UI Regular', 'sans-serif'],
      'segoe-bold': ['Segoe UI Bold', 'sans-serif'],
    },
    colors: {
      content: {
        1: 'hsl(var(--content-primary) / <alpha-value>)',
        2: 'hsl(var(--content-secondary) / <alpha-value>)',
        3: 'hsl(var(--content-tertiary) / <alpha-value>)',
      },
      text: {
        1: 'hsl(var(--text-primary) / <alpha-value>)',
        2: 'hsl(var(--text-muted) / <alpha-value>)',
        3: 'hsl(var(--text-title) / <alpha-value>)',
      },
      purple: 'hsl(var(--purple) / <alpha-value>)',
      gray: {
        1: 'hsl(var(--gray-dark) / <alpha-value>)',
        2: 'hsl(var(--gray-light) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
