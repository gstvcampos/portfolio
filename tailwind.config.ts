import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      green2: '#0C3436',
      green1: '#059669',
      green: '#34D399',
      gray: '#9CA3AF',
      white: '#ffffff',
      plink: '#FF79C6',
    },
  },
  plugins: [],
}
export default config
