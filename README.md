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

### Development Container (Recommended)

For a consistent development experience, this repository includes a VS Code development container configuration:

1. **Open in VS Code** with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installed
2. **Reopen in Container** when prompted (or use Command Palette: "Dev Containers: Reopen in Container")
3. **Automatic setup** - dependencies are installed automatically and VS Code is configured with Astro-specific extensions

This provides:
- Node.js 20 environment
- Pre-configured VS Code extensions for Astro, TypeScript, Tailwind CSS, and MDX
- Automatic port forwarding for the development server
- Consistent development environment across all contributors

See [.devcontainer/README.md](.devcontainer/README.md) for detailed information.

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

### Configuration

The site's configuration is managed through several JSON files in the `src/config/` directory:

- **`config.json`** - General site settings and metadata
- **`menu.json`** - Navigation menu structure
- **`social.json`** - Social media links and profiles
- **`theme.json`** - Visual theme configuration (colors, fonts, typography)

#### Theme Configuration

The site's visual appearance is defined in [`src/config/theme.json`](src/config/theme.json). This file controls:

- **Colors**: Primary theme colors, background colors, border colors, and text colors
- **Fonts**: Font families (primary and secondary) with their types and weights  
- **Typography**: Base font size and scaling ratio

To customize the site's appearance, modify the values in `theme.json`:

```json
{
  "colors": {
    "default": {
      "theme_color": {
        "primary": "#ce8460",    // Primary brand color
        "body": "#fff",          // Background color
        "border": "#ddd",        // Border color
        "light": "#f0f0f0"       // Light accent color
      },
      "text_color": {
        "text": "#696c6d",       // Default text color
        "text-dark": "#1c1d1f",  // Dark text color
        "text-light": "#888c8e"  // Light text color
      }
    }
  },
  "fonts": {
    "font_family": {
      "primary": "Mona Sans:wght@400",
      "secondary": "Hubot Sans:wght@400"
    },
    "font_size": { 
      "base": "16",     // Base font size in pixels
      "scale": "1.2"    // Typography scale ratio
    }
  }
}
```

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