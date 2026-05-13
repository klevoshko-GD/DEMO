/**
 * Typed token map mirroring the CSS variables in `./index.css`.
 *
 * Source of truth is the Figma file's "mode" variable collection.
 * If you change a value here, also change `index.css` (and vice versa)
 * — they are intentionally duplicated so component code can reference
 * tokens both at runtime (CSS) and at build/type time (TS).
 */

export const semanticColorTokens = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
] as const;

export type SemanticColorToken = (typeof semanticColorTokens)[number];

export const radiusTokens = {
  xs: 'var(--radius-xs)',
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  '3xl': 'var(--radius-3xl)',
  '4xl': 'var(--radius-4xl)',
} as const;

export type RadiusToken = keyof typeof radiusTokens;
