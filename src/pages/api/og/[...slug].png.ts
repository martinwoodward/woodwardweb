import type { APIRoute } from 'astro';
import { getSinglePage } from '@/lib/contentParser.astro';
import { existsSync } from 'fs';
import { join } from 'path';
import theme from '@/config/theme.json';

export const GET: APIRoute = async ({ params, request, url }) => {
  const { slug } = params;

  // Handle missing slug
  if (!slug) {
    return new Response('Not found', { status: 404 });
  }

  try {
    // Get all posts to find the matching one
    const posts = await getSinglePage('post');
    const post = posts.find(p => p.id === slug);

    if (!post) {
      return new Response('Post not found', { status: 404 });
    }

    const { title, description, categories, date, author, images } = post.data;

    // Generate the image using HTML/CSS
    const ogImageHtml = generateOGImageHTML({
      title: title || 'Blog Post',
      description: description || '',
      categories: categories || [],
      date: date ? new Date(date).toLocaleDateString('en-GB', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) : '',
      author: author || 'Martin Woodward',
      baseUrl: url.origin,
      postImage: images && images[0] ? images[0] : null
    });

    // Return HTML that will be converted to PNG during build process
    // The build script will replace these HTML files with actual PNG images
    return new Response(ogImageHtml, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      },
    });

  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
};

export async function getStaticPaths() {
  const posts = await getSinglePage('post');
  
  return posts.map((post) => ({
    params: { slug: post.id },
  }));
}

interface OGImageData {
  title: string;
  description: string;
  categories: string[];
  date: string;
  author: string;
  baseUrl: string;
  postImage: string | null;
}

function generateOGImageHTML(data: OGImageData): string {
  const { title, description, categories, date, author, postImage } = data;
  
  // Check if we have a post image and it actually exists on the filesystem
  // Only consider it valid if it starts with /images/ (indicating it's in the project),
  // doesn't contain placeholder, and the file actually exists
  const hasValidImagePath = postImage && 
                           postImage.length > 0 && 
                           postImage.startsWith('/images/') &&
                           !postImage.includes('placeholder');
  
  const hasPostImage = hasValidImagePath && existsSync(join(process.cwd(), 'public', postImage));
  
  // Adjust text lengths based on whether we have an image
  const titleMaxLength = hasPostImage ? 80 : 100;
  const descriptionMaxLength = hasPostImage ? 200 : 240;
  
  // Truncate title and description to fit
  const truncatedTitle = title.length > titleMaxLength ? title.substring(0, titleMaxLength) + '...' : title;
  const truncatedDescription = description.length > descriptionMaxLength ? description.substring(0, descriptionMaxLength) + '...' : description;
  
  // Primary category for color theming
  const primaryCategory = categories[0] || 'general';
  
  // Function to format category names properly
  const formatCategoryName = (category: string): string => {
    if (category.toLowerCase() === 'github') return 'GitHub';
    if (category.toLowerCase() === 'tfs') return 'TFS';
    if (category.toLowerCase() === 'ai') return 'AI';
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  };
  
  // Generate CSS for category theming from config
  const generateCategoryThemeCSS = (): string => {
    const categoryColors = theme.colors.categories;
    return Object.entries(categoryColors)
      .map(([category, color]) => `.theme-${category} { --theme-color: ${color}; }`)
      .join('\n        ');
  };
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>OG Image</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          width: 1200px;
          height: 630px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
          position: relative;
        }
        
        .card {
          background: white;
          border-radius: 24px;
          padding: 64px;
          width: 1120px;
          height: 550px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
          overflow: hidden;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }
        
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          display: flex;
          align-items: center;
          height: 80px;
        }
        
        .logo img {
          height: 80px;
          width: auto;
          object-fit: contain;
        }
        
        .categories {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .category {
          background: #f3f4f6;
          color: #374151;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .content.with-image {
          flex-direction: row;
          gap: 32px;
          align-items: center;
        }
        
        .content-text {
          flex: 1;
        }
        
        .post-thumbnail {
          width: 180px;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }
        
        .post-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin-bottom: 24px;
          letter-spacing: -0.025em;
        }
        
        .title.with-image {
          font-size: 44px;
          margin-bottom: 16px;
        }
        
        .description {
          font-size: 24px;
          line-height: 1.4;
          color: #6b7280;
          font-weight: 400;
        }
        
        .description.with-image {
          font-size: 20px;
        }
        
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 2px solid #f3f4f6;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 18px;
          overflow: hidden;
        }
        
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        
        .author-details {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }
        
        .publish-date {
          font-size: 14px;
          color: #6b7280;
        }
        
        .site-url {
          font-size: 18px;
          color: #6b7280;
          font-weight: 500;
        }
        
        /* Category-specific theming */
        ${generateCategoryThemeCSS()}
        
        [class*="theme-"] .card::before {
          background: var(--theme-color);
        }
        
        [class*="theme-"] .category:first-child {
          background: var(--theme-color);
          color: white;
        }
        
        [class*="theme-"] .avatar {
          background: var(--theme-color);
        }
      </style>
    </head>
    <body class="theme-${primaryCategory}">
      <div class="card">
        <div class="header">
          <div class="logo">
            <img src="/images/logo.png" alt="Martin Woodward" />
          </div>
          <div class="categories">
            ${categories.slice(0, 3).map(cat => `<span class="category">${formatCategoryName(cat)}</span>`).join('')}
          </div>
        </div>
        
        <div class="content${hasPostImage ? ' with-image' : ''}">
          <div class="content-text">
            <h1 class="title${hasPostImage ? ' with-image' : ''}">${truncatedTitle}</h1>
            ${truncatedDescription ? `<p class="description${hasPostImage ? ' with-image' : ''}">${truncatedDescription}</p>` : ''}
          </div>
          ${hasPostImage ? `
          <div class="post-thumbnail">
            <img src="${postImage}" alt="Post thumbnail" />
          </div>
          ` : ''}
        </div>
        
        <div class="footer">
          <div class="author-info">
            <div class="avatar">
              <img src="/images/author.jpg" alt="Martin Woodward" />
            </div>
            <div class="author-details">
              <div class="author-name">${author}</div>
              ${date ? `<div class="publish-date">${date}</div>` : ''}
            </div>
          </div>
          <div class="site-url">woodwardweb.com</div>
        </div>
      </div>
    </body>
    </html>
  `;
}
