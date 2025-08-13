// Utility functions for OG image generation
// This file contains helpers for converting HTML to PNG in production

export interface OGImageConfig {
  title: string;
  description: string;
  categories: string[];
  date: string;
  author: string;
  width?: number;
  height?: number;
}

/**
 * Generate OG image URL for a given post slug
 * In development, this returns the HTML preview URL
 * In production, this should return the actual PNG URL
 */
export function getOGImageUrl(postSlug: string, baseUrl: string): string {
  return `${baseUrl}/api/og/${postSlug}.png`;
}

/**
 * Utility to convert HTML to PNG using various services
 * This is a placeholder for production implementation
 */
export async function convertHtmlToPng(html: string, options: {
  width: number;
  height: number;
}): Promise<ArrayBuffer> {
  // Implementation options for production:
  
  // Option 1: Vercel OG (recommended for Vercel deployments)
  // https://vercel.com/docs/functions/edge-functions/og-image-generation
  
  // Option 2: Playwright (for self-hosted environments)
  // const browser = await playwright.chromium.launch();
  // const page = await browser.newPage();
  // await page.setContent(html);
  // const screenshot = await page.screenshot({
  //   width: options.width,
  //   height: options.height,
  //   type: 'png'
  // });
  // await browser.close();
  // return screenshot;
  
  // Option 3: External service like Bannerbear, HTMLCSStoImage, etc.
  
  // For now, return empty buffer
  throw new Error('PNG conversion not implemented. Currently serving HTML previews.');
}

/**
 * Category color mapping for theming
 */
export const categoryColors: Record<string, string> = {
  ai: '#10b981',
  books: '#f59e0b',
  dotnet: '#8b5cf6',
  gadgets: '#ef4444',
  git: '#f97316',
  github: '#6366f1',
  maker: '#84cc16',
  personal: '#ec4899',
  podcast: '#06b6d4',
  programming: '#8b5cf6',
  technology: '#3b82f6',
  web: '#10b981',
  teamprise: '#0ea5e9',
  tfs: '#0ea5e9',
};

/**
 * Get the primary color for a category
 */
export function getCategoryColor(category: string): string {
  return categoryColors[category.toLowerCase()] || '#3b82f6';
}

/**
 * Truncate text to fit in OG image
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}
