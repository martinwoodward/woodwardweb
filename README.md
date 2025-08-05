# Martin Woodward's Personal Blog

This is the personal blog website of Martin Woodward, built with [Astro](https://astro.build/)

## About

This site serves as Martin Woodward's digital home, featuring blog posts, thoughts, and insights. 

## Template

This project is based on the **Logbook Astro** template by Themefisher. You can find the complete documentation and template details at:
[https://docs.themefisher.com/logbook-astro/](https://docs.themefisher.com/logbook-astro/)

## Tech Stack

- **[Astro](https://astro.build/)** - Static Site Generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[MDX](https://mdxjs.com/)** - Markdown with JSX support

## Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository** (if working from a remote repository):
   ```bash
   git clone <repository-url>
   cd woodwardweb
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:4321` to see the site running locally.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

### Development Workflow

1. **Content**: Add new blog posts and pages in the `src/content/` directory
2. **Styling**: Customize styles in the `src/styles/` directory
3. **Components**: Create or modify Astro components in `src/layouts/components/`
4. **Configuration**: Update site settings in `src/config/` files

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── content/     # Markdown content (posts, pages)
│   ├── layouts/     # Astro layouts and components
│   ├── pages/       # Astro pages and routing
│   ├── styles/      # CSS stylesheets
│   └── config/      # Site configuration files
├── astro.config.mjs # Astro configuration
└── package.json     # Project dependencies
```

## Deployment
Build the site for production with:
```bash
npm run build
```

The built site will be output to the `dist/` directory.

## License

This project uses dual licensing:

### Code License
The source code (templates, components, styling, and build configuration) is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details. This allows you to freely use, modify, and distribute the code.

### Content License
Blog posts and written content in the `src/content/` directory may be licensed under the [**Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**](https://creativecommons.org/licenses/by-sa/4.0/). This means you can share and adapt the content as long as you provide appropriate attribution and distribute any derivatives under the same license.

## Contact

For questions or inquiries, please reach out to Martin Woodward through the contact information available on the website.  Social media DM's are the best way but you can always email.