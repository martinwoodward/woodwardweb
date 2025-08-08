# GitHub Copilot Instructions for Martin Woodward's Blog

Always reference these instructions first and follow them precisely. Only fallback to additional search or context gathering if information in these instructions is incomplete or found to be in error.

## Technology Stack & Architecture

Martin Woodward's blog is an Astro-based static site generator with the following key technologies:
- **Astro 5.12.8** - Static Site Generator with partial hydration
- **React 19** - Component framework for interactive elements 
- **TypeScript** - Type-safe JavaScript throughout
- **Tailwind CSS 4** - Utility-first CSS framework
- **Node.js 20** - Runtime environment
- **Yarn 1.22.22** - Package manager (REQUIRED - do not use npm)

## Core Development Workflow

### Bootstrap and Setup
Run these commands in order to get the environment ready:
```bash
yarn install  # Takes ~3 minutes - NEVER CANCEL
yarn generate-json  # Takes <1 second - generates content index
```

### Build and Validation Process
**CRITICAL**: NEVER CANCEL builds or long-running commands. Set appropriate timeouts and wait for completion.

```bash
# TypeScript checking - Takes ~13 seconds
npx astro check  # Produces warnings but no errors - this is expected

# Full production build - Takes ~5 minutes - NEVER CANCEL
yarn build  # Timeout: Set 10+ minutes minimum

# Code formatting - Takes ~5 seconds  
yarn format  # Always run before committing

# CI validation (matches GitHub workflow)
yarn ci  # Runs generate-json + astro check + astro build
```

### Development Servers
```bash
# Development server with hot reload
yarn dev  # Starts on http://localhost:4321/

# Preview built site locally
yarn preview  # Serves from dist/ on http://localhost:4321/
```

## Content Structure & Organization

### Blog Posts
- **Location**: All posts in `src/content/post/`
- **Organization**: Posts organized by year: `src/content/post/yyyy/mm/`
- **Formats**: Supports both `.md` and `.mdx` files
- **Images**: Post images go in `public/images/post/yyyy/mm/`
- **Spelling**: Use UK English spelling for consistency. Never use em-dash and rarely use semicolons in prose.

### Post Frontmatter Template
```yaml
---
title: "Title of the Post"
date: 2025-08-08T10:53:11.000Z
images:
  - "/images/post/2025/08/08/image-name.jpg"
author: "Martin Woodward"
description: "Short description summarising the content"
categories: ["technology", "github", "programming"]
tags: ["specific", "keywords"]
type: "regular" # available: regular or featured
blueskyPostURI: ""
draft: false
---
```

### Standard Categories
Use these existing categories consistently:

- `ai` - Artificial Intelligence, machine learning, GitHub Copilot
- `books` - Book reviews, reading recommendations
- `dotnet` - .NET development, C#, Microsoft technologies
- `gadgets` - Hardware reviews, devices, electronics
- `git` - Git version control, workflows, tips
- `github` - GitHub platform, features, integrations
- `maker` - DIY projects, building things, creativity
- `personal` - Personal thoughts, life updates
- `podcast` - Podcast recommendations, audio content
- `programming` - General programming topics
- `teamprise` - Teamprise product, TFS topics
- `technology` - General technology topics
- `tfs` - Team Foundation Server, Azure DevOps
- `web` - Web development, technologies

## Key Files and Directories

### Critical Configuration Files
- `package.json` - Dependencies and scripts (uses yarn, not npm)
- `astro.config.mjs` - Astro configuration with React, MDX, Tailwind
- `tsconfig.json` - TypeScript configuration with path aliases
- `src/config/` - Site configuration (theme, menu, social links)
- `src/content.config.ts` - Content collection schemas

### Important Scripts
- `scripts/jsonGenerator.js` - Generates content index (required before builds)
- `scripts/update-descriptions-with-llm.js` - LLM-powered post descriptions
- `scripts/update-descriptions.js` - Basic description generation

### Key Source Directories
- `src/layouts/` - Astro layouts and Astro components
- `src/layouts/components/` - React components (aliased as `@/components/`)
- `src/layouts/shortcodes/` - MDX shortcode components
- `src/pages/` - Astro pages and routing
- `src/styles/` - CSS stylesheets and Tailwind customizations
- `public/images/` - Static images organized by date

## Build & Deployment Process

### CI/CD Pipeline (GitHub Actions)
The site uses GitHub Actions with these key workflows:
- **Build**: `.github/workflows/ci.yml` - Builds and deploys to GitHub Pages
- **PR Verification**: `.github/workflows/pr-verification.yml` - Validates builds on PRs

### Build Steps (from CI workflow)
```bash
rm -rf node_modules package-lock.json  # Clean slate
npm install  # CI uses npm but development should use yarn
npm run generate-json
npx astro check
npx astro build --site "origin" --base "base_path"
```

### Build Output
- Built site outputs to `dist/` directory
- Generates ~685 pages including all blog posts and category pages
- Image optimization automatically converts images to WebP format
- Build includes RSS feeds for each category

## Development Container Support

This repository includes VS Code dev container configuration:
- **Image**: `mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm`
- **Ports**: 4321 (dev server), 4322 (preview server)
- **Extensions**: Astro, Tailwind CSS, TypeScript, Prettier, MDX support
- **Auto-setup**: Runs `npm install` on container creation

## Quality Checks & Validation

### Pre-commit Checklist
1. **Format code**: `yarn format` - Uses Prettier with Astro plugin
2. **Type check**: `npx astro check` - Validates TypeScript and Astro files
3. **Build test**: `yarn build` - Ensure production build succeeds
4. **Visual validation**: Start `yarn preview` and verify site loads correctly

### Manual Testing Scenarios
After making changes, always test these scenarios:
1. **Homepage loads** - Verify recent posts display with images and metadata
2. **Navigation works** - Test Home, Categories, About links
3. **Post pages render** - Check individual blog post formatting
4. **Category pages work** - Verify category listing and filtering
5. **Search functionality** - Test search modal and results
6. **Responsive design** - Check mobile and desktop layouts

### Expected Build Warnings
These warnings are normal and expected:
- TypeScript warnings about unused React imports (React 19 JSX transform)
- Unused variable warnings in Astro components
- Large chunk size warnings from SearchModal component (1.3MB)

## Common Tasks & Workflows

### Creating New Blog Posts
1. Create new file: `src/content/post/yyyy/mm/post-name.md`
2. Add post images to: `public/images/post/yyyy/mm/`
3. Use standard frontmatter template with correct categories
4. Run `yarn dev` to preview locally
5. Validate with `yarn format` and `yarn build`

### Blog Post Creation
When adding a post in a PR, you should NEVER have to include an updated `package-lock.json` in the PR.
If you are creating a new post on behalf of the user in a PR and no image is supplied then copy the 
`public/images/image-placeholder.png` image into the new image location and ask the user to replace
that image before merging the PR.

### Updating Site Configuration
- **Theme settings**: Edit `src/config/theme.json`
- **Navigation menu**: Edit `src/config/menu.json`
- **Social links**: Edit `src/config/social.json`
- **General settings**: Edit `src/config/config.json`

### Working with Images
- Place images in `public/images/` with date-based organization
- Reference in posts as `/images/post/yyyy/mm/filename.jpg`
- Build process automatically optimizes images to WebP format
- Use placeholder: `public/images/image-placeholder.png` for missing images

### Content Migration & Updates
- Use `scripts/update-descriptions-with-llm.js` for AI-powered descriptions
- Use `scripts/update-descriptions.js` for basic text extraction
- Both scripts support `--all` flag to process all posts

## Troubleshooting Common Issues

### Build Failures
- **Missing images**: Build warns but continues - expected for migrated content
- **TypeScript errors**: Run `npx astro check` to see detailed errors
- **Import errors**: Check path aliases in `tsconfig.json`

### Performance Issues
- **Slow builds**: Normal - full build takes ~5 minutes for 685 pages
- **Large chunks**: SearchModal creates large bundle - this is expected
- **Memory usage**: Node.js may need increased memory for large builds

### Development Issues
- **Port conflicts**: Dev server uses port 4321, preview uses same port
- **Hot reload**: May need restart after config changes
- **Cache issues**: Delete `.astro/` and `dist/` directories to clear cache

## File Patterns & Conventions

### TypeScript Path Aliases
```typescript
@/components/*  // src/layouts/components/*
@/shortcodes/*  // src/layouts/shortcodes/*  
@/helpers/*     // src/layouts/helpers/*
@/partials/*    // src/layouts/partials/*
@/*             // src/*
```

### Content Collection Schema
Posts are validated against schema in `src/content.config.ts`:
- Required: title, date, author, description
- Optional: images, categories, tags, type, draft, blueskyPostURI

### UK English Conventions
- Use UK spelling throughout (organise, colour, realise)
- Avoid em-dashes in prose
- Rarely use semicolons in content
- Keep tone conversational and accessible

## Critical Reminders

- **NEVER use npm for package management** - this is a yarn-managed project
- **NEVER cancel long-running builds** - they take 5+ minutes and must complete
- **ALWAYS run yarn format before committing** - CI will fail without proper formatting
- **ALWAYS test builds locally** - use `yarn build` before pushing
- **ALWAYS validate manual scenarios** - run the site and click through pages
- **Use existing categories** - don't create new categories without good reason
- **Follow date-based organization** - for both posts and images

This codebase is stable and well-structured. Follow these instructions precisely and you'll be able to work effectively with minimal trial and error.

