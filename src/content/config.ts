import { defineCollection, z } from 'astro:content';

const brands = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    status: z.enum(['open', 'construction', 'signed']),
    statusLabel: z.string(),
    note: z.string(),
    logo: z.string().optional()
  })
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    siteName: z.string(),
    tagline: z.string(),
    logo: z.string().optional(),
    domain: z.string(),
    rera: z.string(),
    phone1: z.string(),
    phone2: z.string(),
    email: z.string(),
    address: z.string(),
    whatsapp: z.string(),
    heroEyebrow: z.string(),
    heroDescription: z.string(),
    stats: z.array(z.object({ number: z.string(), label: z.string() })),
    whyCards: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
    values: z.array(z.object({ title: z.string(), description: z.string() }))
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    author: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    image: z.string().optional(),
  })
});

export const collections = { brands, settings, blog };
