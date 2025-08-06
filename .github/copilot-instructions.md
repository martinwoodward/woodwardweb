# GitHub Copilot Instructions for Martin Woodward's Blog

Always reference these instructions first and only fallback to search or bash commands when encountering unexpected information that does not match the information provided here.

## Repository Overview

This is Martin Woodward's personal blog built with Astro, a static site generator. The site features blog posts, content management, and modern web technologies with a focus on performance and maintainability.

## Technology Stack

- **Astro 5.4.3** - Static Site Generator with partial hydration
- **Tailwind CSS v4** - Utility-first CSS framework  
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI components (selectively hydrated)
- **MDX** - Markdown with JSX component support
- **Node.js 20** - Runtime environment
- **Yarn 1.22.22** - Primary package manager (npm also supported)

## Working Effectively

### Bootstrap and Build Process

**CRITICAL: Set timeouts to 60+ minutes for build commands. NEVER CANCEL long-running operations.**

1. **Install dependencies:**
   ```bash
   yarn install
   ```
   - **Time:** 3-4 minutes on first install. NEVER CANCEL.
   - **Alternative:** `npm install` (faster if yarn.lock exists: ~2 seconds)
   - **Note:** Repo uses yarn as primary package manager but npm works fine

2. **Generate JSON metadata:**
   ```bash
   yarn generate-json
   ```
   - **Time:** <1 second
   - **Purpose:** Creates `.json/posts.json` and `.json/search.json` from content
   - **Required:** Must run before builds and dev server

3. **Type checking:**
   ```bash
   npx astro check
   ```
   - **Time:** 10-15 seconds  
   - **Result:** Produces warnings (not errors) - these are acceptable
   - **Note:** Shows TypeScript hints about unused imports, which are normal

4. **Production build:**
   ```bash
   yarn build
   ```
   - **Command:** `yarn generate-json && astro build`
   - **Time:** UNKNOWN - Network dependent due to Google Fonts
   - **CRITICAL ISSUE:** Build fails in network-restricted environments due to Google Fonts fetch from `fonts.googleapis.com`
   - **Error:** `getaddrinfo EAI_AGAIN fonts.googleapis.com`
   - **CI Command:** Use `npm run ci` which includes type checking: `yarn generate-json && astro check && astro build`

5. **Development server:**
   ```bash
   yarn dev
   ```
   - **Command:** `yarn generate-json && astro dev`
   - **Time:** 4-5 seconds to start
   - **URL:** http://localhost:4321
   - **Note:** Also affected by Google Fonts network issue but runs with errors

6. **Formatting:**
   ```bash
   yarn format
   ```
   - **Command:** `prettier -w ./src`
   - **Time:** 5 seconds
   - **Always run** before committing changes

### Known Build Issues

**CRITICAL:** Build process has a dependency on external Google Fonts that will fail in network-restricted environments:

- **Issue:** AstroFont component in `src/layouts/Base.astro` fetches from `fonts.googleapis.com`
- **Symptom:** Build fails with "fetch failed" or "getaddrinfo EAI_AGAIN fonts.googleapis.com"
- **Impact:** Full builds cannot complete without internet access to Google Fonts
- **Workaround:** None currently implemented - this is an architectural limitation
- **Environment note:** Works in production CI but may fail in sandboxed environments

## Manual Validation

### Development Workflow Testing

Always test these scenarios after making changes:

1. **Content workflow:**
   ```bash
   # Test content generation and dev server
   yarn generate-json
   yarn dev
   # Navigate to http://localhost:4321
   # Verify homepage loads (may show Google Fonts errors - this is expected)
   ```

2. **Build validation:**
   ```bash
   # Full CI build process
   npm run ci
   # Expected: May fail on Google Fonts in restricted networks
   ```

3. **Code quality:**
   ```bash
   yarn format
   npx astro check
   # Expected: Format succeeds, check shows warnings (acceptable)
   ```

### Content Creation Testing

**For blog post creation testing:** See [Blog Post Writing Instructions](.github/copilot-instructions-blog-posts.md) for detailed blog post creation workflow testing.

When adding new blog posts:

1. **Create post:** Add to `src/content/post/yyyy/descriptive-filename.md`
2. **Add images:** Place in `public/images/post/yyyy/mm/`
3. **Test generation:** Run `yarn generate-json` to update search index
4. **Validate:** Start dev server and navigate to new post

### Build Artifacts Validation

After successful builds:
- **Output:** `dist/` directory contains static site
- **Assets:** Images copied to `dist/images/`
- **Search:** JSON files in `dist/.json/`
- **Pages:** HTML files for all posts and pages

## Project Structure

```
├── .github/              # GitHub workflows and configs
├── public/               # Static assets (images, robots.txt)
│   └── images/post/      # Blog post images (organized by yyyy/mm/)
├── src/
│   ├── components/       # Reusable Astro/React components
│   ├── config/          # Site configuration (theme, menu, etc.)
│   ├── content/         # Content collections
│   │   ├── post/        # Blog posts organized by year
│   │   ├── pages/       # Static pages
│   │   ├── about/       # About page content
│   │   └── contact/     # Contact page content
│   ├── layouts/         # Astro layouts and components
│   │   ├── components/  # Layout-specific components  
│   │   ├── shortcodes/  # MDX components (Button, Notice, etc.)
│   │   └── partials/    # Header, Footer, etc.
│   ├── lib/             # Utility functions
│   ├── pages/           # Astro pages and routing
│   ├── styles/          # CSS stylesheets
│   └── types/           # TypeScript type definitions
├── scripts/             # Build scripts (jsonGenerator.js)
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Content Management

**For blog post creation and editing:** See dedicated [Blog Post Writing Instructions](.github/copilot-instructions-blog-posts.md) for detailed guidance on creating and editing `.md` and `.mdx` files in `src/content/post/`.

## Development Guidelines

### Code Changes

1. **Always run formatting:** `yarn format` before committing
2. **Type checking:** `npx astro check` - warnings are acceptable
3. **Test locally:** Use `yarn dev` to test changes
4. **JSON regeneration:** Run `yarn generate-json` after content changes

### Component Development

- **Astro components:** Place in `src/layouts/components/`
- **Shortcodes:** Place in `src/layouts/shortcodes/` for MDX usage
- **Styling:** Use Tailwind CSS classes, custom styles in `src/styles/`
- **Auto-import:** Components in `astro.config.mjs` auto-import list are available in MDX

### Configuration

- **Theme:** `src/config/theme.json` - colors, fonts, typography
- **Site settings:** `src/config/config.json` - metadata, URLs
- **Navigation:** `src/config/menu.json` - menu structure  
- **Social media:** `src/config/social.json` - social links

## CI/CD Process

**GitHub Actions:** `.github/workflows/ci.yml`
**Deployment:** Automatic to GitHub Pages on main branch pushes

**CI Build steps:**
1. Checkout code
2. Setup Node.js 20  
3. Clean install dependencies with npm
4. Run `npm run generate-json`
5. Run `npx astro check`
6. Run `npx astro build` 
7. Deploy to GitHub Pages

## Common Tasks

### Adding New Components

1. Create component in appropriate directory
2. Add to `astro.config.mjs` imports if for MDX usage
3. Test in development
4. Format: `yarn format`

### Updating Site Configuration

1. Edit relevant config in `src/config/`
2. Test: `yarn dev`
3. Format: `yarn format`

## Troubleshooting

### Build Failures

1. **Google Fonts error:** Expected in network-restricted environments - not fixable without architectural changes
2. **Component import errors:** Check `astro.config.mjs` auto-import configuration
3. **Type errors:** Run `npx astro check` - warnings are normal, errors should be fixed

### Development Issues

1. **Dev server errors:** Usually related to Google Fonts - site may still function
2. **Content not updating:** Run `yarn generate-json` after content changes
3. **Styling issues:** Check Tailwind classes and run `yarn format`

### Performance Notes

- Large chunks warning during build is normal (SearchModal component)
- Build time highly dependent on network access to Google Fonts
- JSON generation is fast (<1 second) and required for search functionality

---

## Important Reminders

- **NEVER CANCEL** build operations - they may take significant time
- **Always run** `yarn format` before committing
- **Google Fonts dependency** causes build failures in restricted networks
- **Yarn vs npm:** Either works, but yarn is preferred for consistency
- **Content changes:** Always run `yarn generate-json` after adding/editing posts

