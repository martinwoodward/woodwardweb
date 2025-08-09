import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '@/config/config.json';

export async function GET(context) {
  // Get all published posts
  const posts = await getCollection('post', ({ data }) => {
    return data.draft !== true;
  });

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site || config.site.base_url,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      author: `${config.metadata.meta_author} <noreply@${new URL(config.site.base_url).hostname}>`,
      categories: post.data.categories || [],
      link: `/post/${post.id.replace('.md', '')}/`,
      content: post.body,
    })),
    customData: `<language>en-us</language>`,
  });
}
