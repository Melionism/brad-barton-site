import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Блог: один пост = один .md файл в src/content/blog/.
 * Имя файла = адрес страницы: my-first-post.md -> /blog/my-first-post
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** 1–2 предложения: анонс в ленте и meta description (до ~160 символов) */
    description: z.string(),
    /** Дата публикации, формат 2026-10-06 */
    date: z.coerce.date(),
    /** Обложка: файл в public/img/blog/, путь вида /img/blog/cover.webp. Необязательно */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** true — пост виден только в `npm run dev`, на сайт не попадает */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
