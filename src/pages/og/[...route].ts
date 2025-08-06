// src/pages/og/[...route].ts
import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// Get all published posts
const collectionEntries = await getCollection('post');
const publishedPosts = collectionEntries.filter(post => !post.data.draft);

// Get about page
const aboutPages = await getCollection('about');
const aboutPage = aboutPages.find(page => !page.data.draft);

// Create pages object with different page types
const pages: Record<string, any> = {};

// Add all blog posts
publishedPosts.forEach(({ id, data }) => {
  const path = `post/${id}`;
  pages[path] = { ...data, type: 'post' };
});

// Add about page
if (aboutPage) {
  pages['about'] = { 
    title: aboutPage.data.title,
    description: aboutPage.data.description,
    type: 'page'
  };
}

// Add homepage
pages['home'] = {
  title: 'Martin Woodward',
  description: 'VP of Developer Relations at GitHub. Helping developers do amazing things.',
  type: 'homepage'
};

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it's `route`, because the file is named `[...route].ts`.
  param: 'route',

  pages: pages,

  getImageOptions: (path, page) => {
    const isPost = page.type === 'post';
    const isHomepage = page.type === 'homepage';
    
    return {
      title: page.title,
      description: page.description || '',
      logo: {
        path: './public/images/author.jpg',
        size: [120, 120],
      },
      bgGradient: isHomepage 
        ? [[59, 130, 246], [16, 185, 129]] // Blue to green gradient for homepage
        : [[24, 24, 27], [39, 39, 42]], // Dark gradient for posts/pages
      font: {
        title: {
          color: [255, 255, 255], // White font for all titles (homepage and posts)
          size: isHomepage ? 72 : 64,
          weight: 'Bold',
          families: ['Mona Sans', 'Arial', 'Helvetica', 'sans-serif'],
        },
        description: {
          color: isHomepage ? [226, 232, 240] : [161, 161, 170],
          size: isHomepage ? 40 : 36,
          families: ['Mona Sans', 'Arial', 'Helvetica', 'sans-serif'],
        },
      },
      fonts: [
        'https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap'
      ],
      border: {
        color: isHomepage ? [16, 185, 129] : [59, 130, 246],
        width: 15,
        side: 'inline-start',
      },
      padding: 80,
    };
  },
});
