import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const withAlpha = (token: string) => `rgb(var(--${token}) / <alpha-value>)`;

const config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  plugins: [animate],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        background: withAlpha('background'),
        foreground: withAlpha('foreground'),
        border: withAlpha('border'),
        input: withAlpha('input'),
        ring: withAlpha('ring'),
        primary: {
          DEFAULT: withAlpha('primary'),
          foreground: withAlpha('primary-foreground'),
        },
        secondary: {
          DEFAULT: withAlpha('secondary'),
          foreground: withAlpha('secondary-foreground'),
        },
        muted: {
          DEFAULT: withAlpha('muted'),
          foreground: withAlpha('muted-foreground'),
        },
        accent: {
          DEFAULT: withAlpha('accent'),
          foreground: withAlpha('accent-foreground'),
        },
        destructive: {
          DEFAULT: withAlpha('destructive'),
          foreground: withAlpha('destructive-foreground'),
        },
        card: {
          DEFAULT: withAlpha('card'),
          foreground: withAlpha('card-foreground'),
        },
        popover: {
          DEFAULT: withAlpha('popover'),
          foreground: withAlpha('popover-foreground'),
        },
        chart: {
          1: withAlpha('chart-1'),
          2: withAlpha('chart-2'),
          3: withAlpha('chart-3'),
          4: withAlpha('chart-4'),
          5: withAlpha('chart-5'),
        },
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
} satisfies Config;

export default config;
