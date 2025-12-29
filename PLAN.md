# Plan: Minimalist Dark Mode Redesign

## Objective
Rework the current Astro website to match a minimalist, dark mode aesthetic inspired by [elliotarledge.com](https://elliotarledge.com/).

## Design Tokens
- **Background**: `#111111` (Very dark gray/black)
- **Text**: `#ededed` (Off-white)
- **Accent**: `#22c55e` (Vibrant Green) for links and hover states.
- **Typography**: System sans-serif or Inter (Clean, modern).

## Action Plan

### Phase 1: Configuration
1.  **Update `tailwind.config.mjs`**:
    -   Extend theme with custom colors if necessary (or just use `neutral-900` / `neutral-50`).
    -   Ensure `@tailwindcss/typography` is configured for dark mode (`prose-invert`).

### Phase 2: Global Styles
1.  **Reset `src/styles/global.css`**:
    -   Remove all "Bear Blog" specific CSS.
    -   Add standard Tailwind directives (`@tailwind base;`, etc.).
    -   Set global `body` styles: `@apply bg-[#111] text-[#ededed] antialiased;`.

### Phase 3: Component Refactoring
1.  **`src/components/Header.astro`**:
    -   Remove scoped `<style>` blocks.
    -   Implement a simple flexbox layout using Tailwind classes (`flex`, `justify-between`, `items-center`).
    -   Style links to be subtle gray, turning white on hover.
2.  **`src/components/Footer.astro`**:
    -   Simplify using Tailwind utilities.
    -   Ensure social icons/links match the dark theme.
3.  **`src/layouts/BlogPost.astro`**:
    -   Apply `prose prose-invert` to the main content area to automatically style Markdown content in dark mode.
    -   Center content with `max-w-2xl mx-auto`.

### Phase 4: Page Updates
1.  **`src/pages/index.astro`**:
    -   Update layout to be a simple introduction (Name, minimal bio).
    -   Use grid or list for "Selected Work" or "Recent Posts".
2.  **`src/pages/blog/index.astro`**:
    -   Convert the post list to a clean, minimal list (Date on left, Title on right, or simple vertical stack).

### Phase 5: Cleanup
1.  Remove unused assets or CSS files if any.
2.  Verify responsiveness on mobile.
