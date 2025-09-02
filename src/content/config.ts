import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string(),                // required
        date: z.date(),                   // required
        thumbnail: z.string().optional(), // optional
        rating: z.number().optional(),    // optional
    }),
});

const posts = defineCollection({
    schema: z.object({
        title: z.string(),                // required
        date: z.date(),                   // required
        thumbnail: z.string().optional(), // optional
    }),
});

export const collections = {
    blog, posts
};
