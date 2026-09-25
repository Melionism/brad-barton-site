import { site, socials, socialOrder } from '../content/site';

/** Schema.org nodes for the home page: the Person and the WebSite about them. */
export function homeSchema(origin: string) {
  const personId = `${origin}/#person`;
  return [
    {
      '@type': 'Person',
      '@id': personId,
      name: site.name,
      url: `${origin}/`,
      image: `${origin}/img/brad-portrait.webp`,
      sameAs: socialOrder.map((k) => socials[k].url),
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: site.siteName,
      about: { '@id': personId },
    },
  ];
}
