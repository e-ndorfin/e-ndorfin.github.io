# Zachary Tang - Personal Website

A minimalist, dark-themed personal website and blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## 🚀 Quick Start

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

## 📝 How to Add Content

### Adding a Blog Post
1.  Create a new file in `src/content/blog/` (e.g., `my-new-post.md` or `.mdx`).
2.  Add the required frontmatter at the top of the file:
    ```yaml
    ---
    title: 'My New Post'
    description: 'A short summary of the post.'
    pubDate: '2025-12-29'
    heroImage: '/blog-placeholder-1.jpg' # Optional
    ---
    ```
3.  Write your content in Markdown or MDX below the dashes.

### Adding a Project
1.  Create a new file in `src/content/projects/` (e.g., `super-app.md`).
2.  Add the required frontmatter:
    ```yaml
    ---
    title: 'Super App'
    description: 'A revolutionary app that does everything.'
    pubDate: '2025-12-29'
    link: 'https://github.com/yourusername/super-app' # Optional
    tags: ['react', 'ai'] # Optional
    ---
    ```
3.  (Optional) Add a longer description or case study in the body of the file.

## 🎨 Customization

-   **Colors & Theme:** Edit `tailwind.config.mjs` to adjust `theme-bg`, `theme-text`, and `theme-accent`.
-   **Profile Image:** Replace the placeholder in `src/pages/index.astro` with your actual image.
-   **Global Styles:** Modify `src/styles/global.css`.
-   **Site Metadata:** Update `src/consts.ts` for site title and description.
-   **Site URL:** Update `astro.config.mjs` with your production domain (currently set to `https://example.com`) to ensure sitemaps and canonical URLs generate correctly.

## 🛠 Project Structure

-   `src/pages/`: Routes (Home, Blog Index, Projects Index).
-   `src/content/`: Markdown/MDX content (Blog posts, Projects).
-   `src/components/`: UI components (Header, Footer, etc.).
-   `src/layouts/`: Page layouts (Layout, BlogPost).