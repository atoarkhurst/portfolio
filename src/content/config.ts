import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
			schema: z.object({
				title: z.string(),
				description: z.string(),
				publishDate: z.coerce.date(),
				tags: z.array(z.string()),
				img: z.string(),
				img_alt: z.string().optional(),
				status: z.string().optional(),
				coverTheme: z.enum(['default', 'cadence']).default('default'),
				liveUrl: z.string().url().optional(),
				repoUrl: z.string().url().optional(),
			}),
	}),
	notes: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			stage: z.enum(['Seed', 'Growing', 'Rooted']),
			theme: z.enum(['signal', 'quiet', 'light']),
			tags: z.array(z.string()),
			readingTime: z.string(),
			featured: z.boolean().default(false),
			sourceUrl: z.string().url().optional(),
		}),
	}),
};
