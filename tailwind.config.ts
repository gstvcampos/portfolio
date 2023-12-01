import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg: 'hsl(var(--background) / <alpha-value>)',
      content: {
        1: 'hsl(var(--content-primary) / <alpha-value>)',
        2: 'hsl(var(--content-secondary) / <alpha-value>)',
      },
      color: {
        1: 'hsl(var(--color-one) / <alpha-value>)',
        2: 'hsl(var(--color-two) / <alpha-value>)',
        3: 'hsl(var(--color-three) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
