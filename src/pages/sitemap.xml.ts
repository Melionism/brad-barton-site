import type { APIRoute } from 'astro';
import { getPosts } from '../lib/blog';

/** /sitemap.xml — главная, лента блога и все опубликованные посты (черновики не попадают) */
export const GET: APIRoute = async ({ site }) => {
  const origin = site ? site.origin : '';
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  const latest = posts[0]?.data.date;
  const urls = [
    { loc: `${origin}/` },
    { loc: `${origin}/blog`, lastmod: latest },
    ...posts.map((p) => ({ loc: `${origin}/blog/${p.id}`, lastmod: p.data.date })),
  ];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`)
      .join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
