# CLAUDE.md

## Project Overview

Personal portfolio and technical blog for Zachary Tang, built with **Astro 5** and deployed to **GitHub Pages**. The site lives at https://e-ndorfin.github.io.

## Quick Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```

## Tech Stack

- **Framework:** Astro 5.16.6 (static site generator)
- **Styling:** Tailwind CSS 3.4 with custom dark theme
- **Content:** Markdown (.md) and MDX (.mdx) via Astro Content Collections
- **Math:** KaTeX (remark-math + rehype-katex)
- **Images:** Sharp for optimization
- **Analytics:** Cloudflare Web Analytics
- **Deployment:** GitHub Actions → GitHub Pages (on push to main)

## Directory Structure

```
src/
├── assets/              # Images and media files
├── components/          # Reusable Astro components
│   ├── BaseHead.astro   # Meta tags, SEO, fonts, KaTeX CSS
│   ├── Header.astro     # Navigation bar
│   ├── Footer.astro     # Site footer
│   ├── HeaderLink.astro # Nav link with active state
│   └── FormattedDate.astro
├── content/             # Content collections (validated by Zod schemas)
│   ├── blog/            # Blog posts (MDX/MD) — displayed as "Rabbitholes"
│   └── projects/        # Project entries (MD)
├── layouts/
│   ├── Layout.astro     # Main layout (includes FlowField background)
│   ├── BlogPost.astro   # Blog post template with KaTeX support
│   └── FlowField.astro  # Animated Perlin noise particle background
├── pages/               # File-based routing
│   ├── index.astro      # Homepage
│   ├── rss.xml.js       # RSS feed
│   ├── rabbitholes/     # Blog listing + dynamic post routes
│   └── projects/        # Projects gallery
├── styles/
│   └── global.css       # Tailwind base + custom styles
├── content.config.ts    # Content collection schemas
└── consts.ts            # SITE_TITLE, SITE_DESCRIPTION
public/
├── fonts/               # Atkinson font (woff)
├── favicon.svg
└── resume.pdf
```

## Routes

| URL | Source | Description |
|-----|--------|-------------|
| `/` | `pages/index.astro` | Homepage with profile and recent posts |
| `/rabbitholes/` | `pages/rabbitholes/index.astro` | Blog listing |
| `/rabbitholes/[slug]/` | `pages/rabbitholes/[...slug].astro` | Individual blog post |
| `/projects/` | `pages/projects/index.astro` | Projects gallery |
| `/rss.xml` | `pages/rss.xml.js` | RSS feed |

## Content Authoring

### Blog Posts (Rabbitholes)

Create files in `src/content/blog/` as `.md` or `.mdx`:

```yaml
---
title: "Post Title"
description: "Short description"
pubDate: 2026-01-15
updatedDate: 2026-01-20   # optional
draft: false               # optional, hides from listing
heroImage: ../../assets/image.png  # optional
---
```

MDX files support LaTeX math via `$inline$` and `$$block$$` syntax.

### Projects

Create files in `src/content/projects/` as `.md`:

```yaml
---
title: "Project Name"
description: "Short description"
pubDate: 2026-01-15
link: https://example.com   # optional
tags: ["React", "Python"]   # optional
images:                      # optional, array of images
  - ../../assets/screenshot.png
---
```

## Design System

- **Background:** `#111111` (theme-bg)
- **Text:** `#ededed` (theme-text)
- **Accent:** `#22c55e` green (theme-accent)
- **Font:** Atkinson (preloaded woff from `/public/fonts/`)
- **Layout:** `max-w-2xl` for main content, `max-w-4xl` for blog posts

All styling uses Tailwind utility classes. Custom theme colors are defined in `tailwind.config.mjs`.

## Key Conventions

- **TypeScript strict mode** is enabled
- Blog posts are branded as **"Rabbitholes"** in the UI — do not rename
- The `FlowField.astro` component renders a canvas-based Perlin noise particle animation as the site background
- Content schemas are validated via Zod in `src/content.config.ts` — update schemas there when adding new frontmatter fields
- Cloudflare Analytics is embedded in both `Layout.astro` and `BlogPost.astro`
- Images in content should be placed in `src/assets/` and referenced with relative paths for Astro's image optimization
- Global constants (site title, description) live in `src/consts.ts`

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`):
- **Trigger:** Push to `main` or manual dispatch
- **Steps:** Checkout → Astro build → Deploy to GitHub Pages
- Build output goes to `dist/` (gitignored)

## Common Tasks

**Add a new blog post:** Create `.md`/`.mdx` in `src/content/blog/` with required frontmatter (title, description, pubDate).

**Add a new project:** Create `.md` in `src/content/projects/` with required frontmatter (title, description, pubDate).

**Add a new page:** Create `.astro` file in `src/pages/`. Use `Layout.astro` as the wrapper. Add a nav link in `Header.astro`.

**Modify the theme:** Edit colors in `tailwind.config.mjs` under `theme.extend.colors`.

**Add a new content collection:** Define the schema in `src/content.config.ts`, create the directory under `src/content/`, and add query logic in the relevant page.
