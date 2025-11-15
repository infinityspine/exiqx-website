import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // ExIQx brand colors
        accent: '#dc2626',  // Red
        muted: 'rgba(255, 255, 255, 0.6)',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        // ExIQx typography
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Montserrat', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}

export default config