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
      bar: {
        1: 'hsl(var(--bar-primary) / <alpha-value>)',
        2: 'hsl(var(--bar-secondary) / <alpha-value>)',
      },
      content: {
        1: 'hsl(var(--content-primary) / <alpha-value>)',
        2: 'hsl(var(--content-secondary) / <alpha-value>)',
      },
      txt: {
        1: 'hsl(var(--txt-primary) / <alpha-value>)',
        2: 'hsl(var(--txt-secondary) / <alpha-value>)',
      },
      border: 'hsl(var(--border) / <alpha-value>)',
      focus: 'hsl(var(--focus) / <alpha-value>)',
      purple: 'hsl(var(--purple) / <alpha-value>)',
    },
  },
  plugins: [],
}
export default config
