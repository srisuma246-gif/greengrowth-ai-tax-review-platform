import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        surface: 'hsl(var(--surface))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',
        ai: { primary: 'hsl(var(--ai-primary))', secondary: 'hsl(var(--ai-secondary))' },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / .05)',
        hover: '0 8px 24px rgb(15 23 42 / .10)',
        dropdown: '0 10px 30px rgb(15 23 42 / .12)',
        popover: '0 12px 32px rgb(15 23 42 / .14)',
        modal: '0 24px 64px rgb(15 23 42 / .20)',
        floating: '0 16px 40px rgb(15 23 42 / .16)',
      },
    },
  },
  plugins: [],
} satisfies Config
