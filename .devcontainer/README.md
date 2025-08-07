# Development Container Setup

This repository includes a development container configuration for Visual Studio Code that provides a consistent development environment for Martin Woodward's blog.

## What's Included

The development container includes:

- **Node.js 20** - Latest LTS version with npm package manager
- **Pre-configured VS Code extensions**:
  - Astro language support
  - Tailwind CSS IntelliSense
  - TypeScript support
  - Prettier code formatting
  - MDX syntax highlighting
  - Markdown editing tools
  - GitHub CLI integration

## Getting Started

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker](https://www.docker.com/get-started)

### Using the Development Container

1. **Open the repository in VS Code**
2. **Reopen in Container**: When prompted, click "Reopen in Container", or use the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and select "Dev Containers: Reopen in Container"
3. **Wait for setup**: The container will automatically:
   - Download the Node.js 20 development environment
   - Install all project dependencies via `npm install`
   - Configure VS Code with recommended extensions and settings

### Development Workflow

Once the container is ready:

```bash
# Start the development server
npm run dev

# Build the site
npm run build

# Preview the production build
npm run preview

# Format code
npm run format
```

The development server will be available at `http://localhost:4321` and will automatically forward from the container to your local machine.

## Technical Details

### Container Configuration

- **Base Image**: `mcr.microsoft.com/devcontainers/javascript-node:1-20-bookworm`
- **Node.js Version**: 20 (LTS)
- **Package Manager**: npm
- **Forwarded Ports**: 4321 (dev server), 4322 (preview server)

### Automatic Setup

The container automatically runs:
- `npm install` when the container is first created
- Dependency updates when the container configuration changes

### Extensions Included

All essential extensions for Astro development are pre-installed:
- Astro language server and syntax highlighting
- Tailwind CSS IntelliSense for utility-first CSS
- TypeScript language support
- Prettier for consistent code formatting
- MDX and Markdown editing support
- GitHub CLI for repository management

## Troubleshooting

### Container Won't Start
- Ensure Docker is running
- Try "Dev Containers: Rebuild Container" from the Command Palette

### Dependencies Not Installing
- The container runs `npm install` automatically
- If issues persist, try "Dev Containers: Rebuild Container"

### Port Already In Use
- The dev server uses port 4321 by default
- VS Code will automatically forward this port from the container

## Benefits

Using this development container ensures:
- **Consistent Environment**: All contributors use the same Node.js version and tools
- **Quick Setup**: No need to install Node.js or configure extensions locally  
- **Isolated Dependencies**: Project dependencies are contained within the development environment
- **VS Code Integration**: Optimized settings and extensions for Astro development

## Contributing

This development container configuration is designed to support the full Astro development workflow including:
- Content creation and editing
- Component development
- Styling with Tailwind CSS
- TypeScript development
- Build and preview processes

For more information about the project structure and development workflow, see the main [README.md](../README.md).