import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Черновики видны в `npm run dev` и при сборке с SHOW_DRAFTS=1 (локальная проверка), на проде — нет */
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

/** Опубликованные посты, новые сверху */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/** Примерное время чтения по числу слов */
export function readingTime(body: string | undefined): string {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
