# Copilot Instructions for Martin Woodward's Blog

## Technology Stack
- **Astro** - Static Site Generator with partial hydration
- **Tailwind CSS** - Utility-first CSS framework  
- **TypeScript** - Type-safe JavaScript
- **MDX** - Markdown with JSX component support

## Architecture & File Structure
```
src/
├── content/post/yyyy/mm/        # Blog posts by year/month
├── layouts/components/          # Astro components
├── config/                      # Site configuration files
├── styles/                      # Custom CSS (use Tailwind first)
└── pages/                       # Route pages

public/images/post/yyyy/mm/      # Post images by year/month
```

## Configuration Files
- `src/config/theme.json` - Colors, fonts, typography
- `src/config/config.json` - General site settings  
- `src/config/menu.json` - Navigation structure
- `src/config/social.json` - Social media links
- `src/content.config.ts` - Content type definitions

## Development Commands
```bash
npm run dev      # Development server (kill existing astro processes first)
npm run build    # Production build  
npm run preview  # Preview built site
```

## Code Guidelines
- **Styling**: Use Tailwind CSS classes (avoid custom CSS unless necessary)
- **Components**: Place in `src/layouts/components/`
- **TypeScript**: Follow best practices
- **Images**: Optimize before adding to `public/images/`
- **PRs**: Never modify `package-lock.json` in content PRs
- **Naming**: Use descriptive filenames and consistent conventions
