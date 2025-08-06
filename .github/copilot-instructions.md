# Copilot Instructions for Martin Woodward's Blog

## Site Architecture

This is an Astro-based static site generator blog with the following key characteristics:

### Technology Stack
- **Astro** - Static Site Generator with partial hydration
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **MDX** - Markdown with JSX component support

### Content Structure

#### Blog Posts
- **Location**: Posts are stored in `src/content/post/`
- **Organization**: Posts are organized by year in subdirectories: `yyyy/`
- **Naming**: Post files should follow a descriptive naming convention
- **Format**: Posts are written in Markdown (.md) or MDX (.mdx) format
- **Frontmatter**: Each post requires frontmatter with metadata (title, date, description, etc.)

#### Post Categories
Posts are organized using the following standardized categories in the frontmatter:

- **`books`** - Book reviews, reading recommendations, technical books
- **`dotnet`** - .NET development, C#, Microsoft technologies
- **`gadgets`** - Hardware reviews, devices, electronics
- **`git`** - Git version control, workflows, tips
- **`github`** - GitHub platform, GitHub features, GitHub integrations
- **`maker`** - DIY projects, building things, creativity, raspberry pi
- **`personal`** - Personal thoughts, life updates, reflections
- **`podcast`** - Podcast recommendations, audio content
- **`programming`** - General programming topics, languages, practices
- **`teamprise`** - Teamprise product, cross platform TFS topics
- **`technology`** - General technology topics, industry trends
- **`tfs`** - Team Foundation Server, Azure DevOps, VSTS
- **`web`** - Web development, web technologies, internet

When creating new posts, use these existing categories to maintain consistency. Categories should be specified as an array in the frontmatter:
```yaml
categories: ["technology", "web", "programming"]
```

An example post frontmatter might look like this:
```yaml
---
title: "Title of the Post"
date: 2016-02-10T10:53:11.000Z
# post thumb
images:
  - "/images/post/2016/02/10/01-managing-my-many-hats-on-github.jpg"
#author
author: "Martin Woodward"
# description
description: "Short description of the post summarizing the content"
# Taxonomies
categories: ["git", "technology", "books", "dotnet", "maker", "web", "personal", "github"]
tags: ["git", "technology", "books", "dotnet", "maker", "web", "personal", "github"]
type: "regular" # available type (regular or featured)
draft: false
---
```

#### Post Images
- **Location**: Post images are stored in `public/images/post/`
- **Organization**: Images are organized by year and month: `yyyy/mm/`
- **Example structure**:
  ```
  public/images/post/
  ├── 2024/
  │   ├── 01/
  │   ├── 02/
  │   └── 12/
  └── 2023/
      ├── 03/
      └── 11/
  ```
- **Reference in posts**: Images are referenced in posts using relative paths from the public directory

### Configuration

#### Theme Configuration
- **File**: `src/config/theme.json`
- **Contains**: Colors, fonts, typography settings
- **Usage**: Defines the visual appearance of the site

#### Other Configuration Files
- `src/config/config.json` - General site settings
- `src/config/menu.json` - Navigation structure
- `src/config/social.json` - Social media links

### Development Guidelines

1. **New Posts**: Create new blog posts in the appropriate year folder under `src/content/post/yyyy/`
2. **Images**: Place post images in `public/images/post/yyyy/mm/` following the year/month structure
3. **Styling**: Use Tailwind CSS classes for styling, custom styles go in `src/styles/`
4. **Components**: Astro components are in `src/layouts/components/`
5. **Content Types**: The site supports various content types defined in `src/content.config.ts`

### File Organization Best Practices

- Keep posts organized chronologically by year
- Use descriptive filenames for posts
- Optimize images before adding them to the public directory
- Follow consistent naming conventions for both posts and images
- Use frontmatter consistently across all posts

### Build Process

- Development: `npm run dev`
- Production build: `npm run build`
- Preview: `npm run preview`
- Output: Built site goes to `dist/` directory

This structure ensures maintainable, organized content that scales well over time.
