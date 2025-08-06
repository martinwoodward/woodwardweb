# OpenGraph Image Generation with astro-og-canvas

This project now uses [astro-og-canvas](https://github.com/delucis/astro-og-canvas) to automatically generate OpenGraph (OG) images for social media sharing.

## What's Generated

The system generates OG images for:

1. **Blog Posts** - Each post gets a custom OG image at `/og/post/{slug}.png`
2. **Homepage** - Available at `/og/home.png`
3. **About Page** - Available at `/og/about.png`

## How It Works

### 1. OG Image Route (`src/pages/og/[...route].ts`)

This dynamic route handles generating images for different page types:

- Uses the `OGImageRoute` helper from astro-og-canvas
- Pulls data from your content collections (posts, about page)
- Generates PNG images with customized styling based on page type

### 2. Meta Tag Integration (`src/layouts/Base.astro`)

The base layout automatically includes OG meta tags that point to the generated images:

```html
<!-- For blog posts -->
<meta property="og:image" content="https://woodwardweb.com/og/post/2024/01/my-post.png" />

<!-- For homepage -->
<meta property="og:image" content="https://woodwardweb.com/og/home.png" />

<!-- For about page -->
<meta property="og:image" content="https://woodwardweb.com/og/about.png" />
```

## Image Styling

### Blog Posts & Pages
- Dark gradient background (zinc colors)
- White title text (64px)
- Light gray description text (36px)
- Blue left border accent
- Logo in top area

### Homepage
- Blue to green gradient background
- Larger title text (72px)
- Brighter description text
- Green left border accent

## Fonts

The system uses:
- Primary: Inter (loaded from Google Fonts)
- Fallbacks: Arial, sans-serif

## Build Process

During `yarn build`, astro-og-canvas will:
1. Generate static PNG images for all pages
2. Save them to `/dist/og/` directory
3. Include them in the final build output

## Testing OG Images

### Development
When running `yarn dev`, you can access OG images directly:
- http://localhost:4322/og/home.png
- http://localhost:4322/og/about.png
- http://localhost:4322/og/post/2016/02/2016-02-10-managing-my-many-hats-on-github.png

### Social Media Testing
Use these tools to test how your OG images appear:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Customization

To modify the OG image design, edit the `getImageOptions` function in `src/pages/og/[...route].ts`. You can customize:

- Background colors/gradients
- Font sizes and colors
- Logo size and position
- Border styles
- Padding and spacing

## Performance Notes

- OG images are generated at build time, not runtime
- Images are cached in `node_modules/.astro-og-canvas` during development
- Large sites may take longer to build due to image generation
- Generated images are optimized PNG files (~50-100KB each)

## Troubleshooting

### Font Loading Issues
If you see "failed to open font" warnings, the system will fall back to system fonts. This doesn't break functionality.

### Missing Images
If OG images don't appear:
1. Check that the route is accessible (e.g., `/og/home.png`)
2. Verify meta tags are correctly generated in page source
3. Clear browser cache and test again
4. Use social media debuggers to check how platforms see the images
