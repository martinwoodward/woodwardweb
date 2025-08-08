import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

// https://astro.build/config
export default defineConfig({
  site: 'https://woodwardweb.com',
  markdown: {
    remarkPlugins: [remarkGfm, remarkEmoji],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  integrations: [
    AutoImport({
      imports: [
        './src/layouts/shortcodes/Button.tsx',
        './src/layouts/shortcodes/Notice.tsx',
        './src/layouts/shortcodes/Accordion.tsx',
        './src/layouts/shortcodes/Video.tsx',
        './src/layouts/shortcodes/Youtube.tsx',
        './src/layouts/shortcodes/Tabs.tsx',
        './src/layouts/shortcodes/Tab.tsx',
        './src/components/primer/PrimerHeading.tsx',
        './src/components/primer/PrimerText.tsx'
      ]
    }),
    react(),
    mdx({
      remarkPlugins: [remarkGfm, remarkEmoji],
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['react-lite-youtube-embed', '@primer/react-brand']
    }
  }
});