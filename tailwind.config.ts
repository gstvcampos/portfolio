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
      content: 'hsl(var(--content) / <alpha-value>)',
      text: {
        1: 'hsl(var(--primary) / <alpha-value>)',
        2: 'hsl(var(--secondary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
