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
      primary: 'hsl(var(--primary) / <alpha-value>)',
      focus: 'hsl(var(--focus) / <alpha-value>)',
      secondary: 'hsl(var(--secondary) / <alpha-value>)',
      content: 'hsl(var(--content) / <alpha-value>)',
      muted: 'hsl(var(--muted) / <alpha-value>)',
      text: 'hsl(var(--text) / <alpha-value>)',
      purple: 'hsl(var(--purple) / <alpha-value>)',
    },
  },
  plugins: [],
}
export default config
