# Blog Post Writing Instructions for Martin Woodward's Blog

These instructions are specifically for creating and editing blog posts (`.md` and `.mdx` files) in the `src/content/post/` directory.

## Blog Post Creation Guidelines

### File Location and Organization

**Location:** `src/content/post/yyyy/`
**Format:** Markdown (`.md`) or MDX (`.mdx`)
**Organization:** Posts organized by year in subdirectories

### Required Frontmatter

Every blog post must include this frontmatter structure:

```yaml
---
title: "Post Title"
date: 2024-01-15T10:00:00.000Z
images:
  - "/images/post/2024/01/15/featured-image.jpg"
author: "Martin Woodward"
description: "Post description"
categories: ["technology", "web"]
tags: ["astro", "blog"]
type: "regular"  # or "featured"
draft: false
---
```

### Image Management

**Location:** `public/images/post/yyyy/mm/`
**Organization:** Year/month structure matches CI expectations
**Reference:** Use absolute paths from public directory: `/images/post/2024/01/image.jpg`

**Image Guidelines:**
- When creating a new post in a PR and no image is supplied, copy the `public/images/image-placeholder.png` image into the new image location and ask the user to replace that image before merging the PR
- Organize images by year and month to match CI expectations
- Use descriptive filenames for images

### Post Categories

Use these standardized categories:
- `books` - Book reviews, reading recommendations
- `dotnet` - .NET development, C#, Microsoft technologies  
- `gadgets` - Hardware reviews, devices, electronics
- `git` - Git version control, workflows, tips
- `github` - GitHub platform, features, integrations
- `maker` - DIY projects, building things, creativity
- `personal` - Personal thoughts, life updates
- `podcast` - Podcast recommendations, audio content
- `programming` - General programming topics
- `teamprise` - Teamprise product, cross-platform TFS
- `technology` - General technology topics, trends
- `tfs` - Team Foundation Server, Azure DevOps
- `web` - Web development, web technologies

## Step-by-Step Blog Post Creation

### 1. Create the Post File
Create file: `src/content/post/2024/my-new-post.md`

### 2. Add Required Frontmatter
Include all required frontmatter fields (see template above)

### 3. Add Images
Place images in: `public/images/post/2024/01/`

### 4. Generate JSON Metadata
Run: `yarn generate-json`
- **Time:** <1 second
- **Purpose:** Updates search index with new content
- **Required:** Must run after adding/editing posts

### 5. Test Locally
Run: `yarn dev` and navigate to the new post to verify it displays correctly

### 6. Format Code
Run: `yarn format` before committing changes

## Content Creation Testing

When adding new blog posts, always test:

1. **Create post:** Add to `src/content/post/yyyy/descriptive-filename.md`
2. **Add images:** Place in `public/images/post/yyyy/mm/`
3. **Test generation:** Run `yarn generate-json` to update search index
4. **Validate:** Start dev server and navigate to new post

## Important Notes for PRs

- When adding a post in a PR, you should NEVER have to include an updated `package-lock.json` in the PR
- If creating a new post on behalf of a user and no image is supplied, copy the `public/images/image-placeholder.png` image into the new image location and ask the user to replace that image before merging the PR
- Always run `yarn generate-json` after content changes
- Always run `yarn format` before committing

## MDX Components Available

The following components are auto-imported and available in MDX files:
- Check `astro.config.mjs` for the complete list of available shortcodes
- Components are located in `src/layouts/shortcodes/`
- Examples: Button, Notice, and other custom components

## Content Validation

After creating or editing a blog post:
1. Verify frontmatter is complete and correctly formatted
2. Check that images are properly referenced and exist
3. Ensure categories are from the standardized list
4. Run `yarn generate-json` to update search functionality
5. Test the post locally with `yarn dev`
6. Format code with `yarn format`