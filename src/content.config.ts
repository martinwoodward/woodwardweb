import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    title: z.string(),
    post_layout: z.string().optional(),
    sidebar: z.string().optional(),
  }),
});

// Post collection schema
const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/post" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    date: z.date().optional(),
    images: z.array(z.string()).optional(),
    author: z.string().optional(),
    description: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    type: z.enum(["regular", "featured"]).optional(),
    search_keyword: z.string().optional(),
    draft: z.boolean(),
    blueskyPostURI: z.string().optional(),
  }),
});

// About Page Schema
const aboutPageSchema = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    email: z.string().email(),
    image: z.string(),
    draft: z.boolean(),
    social: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        link: z.string().url(),
      }),
    ),
  }),
});

// About Page Schema
const contactPageSchema = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    about: z.object({
      title: z.string(),
      content: z.string(),
    }),
    mail: z.object({
      title: z.string(),
      address: z.string().email(),
    }),
  }),
});

// Author collection schema
const authorCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/author" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  post: postCollection,
  about: aboutPageSchema,
  contact: contactPageSchema,
  author: authorCollection,
  pages: pagesCollection,
};
