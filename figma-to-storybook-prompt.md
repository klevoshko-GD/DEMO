# Task: Generate a Storybook from a Figma file

You are working in this repository to build a Storybook that mirrors the components in the Figma file I provide. Treat Figma as the source of truth for visuals, naming, and variants.

## Inputs
- Figma file / frame URL: <PASTE FIGMA URL HERE>
- Target framework: <react | vue | svelte | web-components>  (default: react + TypeScript)
- Styling: <tailwind | css-modules | styled-components | vanilla-extract>  (default: tailwind)
- Storybook version: 8.x with Vite

## Workflow — follow in order, do not skip steps

1. **Inspect the repo first.**
   - Run `ls` and read `package.json`, any existing `.storybook/` config, and a couple of existing components (if present) so new code matches house style.
   - If Storybook is not installed, install it with `npx storybook@latest init --type <framework>` and confirm it runs before generating stories.

2. **Pull the Figma structure via the Figma MCP server.**
   - List the pages and top-level frames.
   - For each frame that represents a component (look for `Component` / `ComponentSet` nodes, or frames in a "Components" page), extract: name, variants, props implied by variant axes, auto-layout rules, sizing, spacing, colors, typography, effects, and any nested instances.
   - Also extract global design tokens: color styles, text styles, effect styles, grid styles. Save these to `src/tokens/` as typed constants (or a Tailwind config extension if Tailwind is selected).

3. **Plan before coding.**
   - Produce a short plan listing every component you'll create, its props (derived from variants + text/icon slots), and which Figma node IDs it maps to. Show me this plan and pause for confirmation **only if** there are more than 10 components or the variant logic is ambiguous; otherwise proceed.

4. **Generate components and stories together, one component at a time.**
   For each component:
   - Create `src/components/<Name>/<Name>.tsx` implementing all variants. Props must be typed. Use design tokens, not hardcoded values.
   - Create `src/components/<Name>/<Name>.stories.tsx` with:
     - A `Default` story
     - One story per meaningful variant combination (use `argTypes` with controls, not duplicated stories, where the axis is orthogonal)
     - A `Playground` story exposing all controls
     - `parameters.design` block linking back to the Figma node:
       ```ts
       parameters: {
         design: { type: 'figma', url: '<node-specific figma url>' }
       }
       ```
   - Add JSDoc on each prop so Storybook autodocs render meaningfully.
   - If the component contains text, expose it as a prop with a sensible default from Figma.

5. **Wire up Storybook addons.**
   - Ensure these addons are installed and configured: `@storybook/addon-essentials`, `@storybook/addon-a11y`, `@storybook/addon-designs` (for the Figma link), `@storybook/addon-interactions`.
   - Set a global decorator that loads the token CSS / Tailwind so every story renders with correct fonts and colors.

6. **Verify.**
   - Run `npm run build-storybook` and fix any errors before declaring done.
   - Run `npx tsc --noEmit` (if TS) and the project's linter; fix issues.
   - Open at least three stories' generated HTML and check that they actually use the tokens (no stray hex codes outside `tokens/`).

7. **Summarize.**
   When finished, output:
   - List of components created with file paths
   - Any Figma nodes you skipped and why (e.g., one-off illustrations, not reusable)
   - Anything you had to guess about (interaction states not in Figma, responsive behavior, etc.) so I can review

## Rules
- Do not invent components that aren't in Figma. If something looks like a one-off layout rather than a reusable component, skip it and note it in the summary.
- Match Figma names exactly (PascalCase for components, kebab-case for tokens).
- No hardcoded colors, spacing, font sizes, or radii in components — everything goes through the token layer.
- If a Figma variant maps cleanly to a boolean or enum prop, use that; don't create separate components per variant.
- Prefer composition over prop explosion: if a "Card" has many slot-like regions, expose them as `children` / named slots rather than 15 text props.
- If the Figma MCP returns something ambiguous (e.g., two nodes with the same name, missing auto-layout), ask me before guessing.

Start with step 1.
