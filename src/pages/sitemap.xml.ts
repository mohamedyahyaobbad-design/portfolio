import type { APIRoute } from 'astro';
import { getProjects } from '../lib/content';
import { projectUrl, routes } from '../lib/i18n';

export const GET: APIRoute = async ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const pairs: { fr: string; en: string }[] = (['home', 'about', 'services', 'projects', 'skills', 'contact'] as const).map((k) => routes[k]);
  for (const p of await getProjects()) pairs.push({ fr: projectUrl('fr', p.id), en: projectUrl('en', p.id) });

  const urls = pairs
    .flatMap((pair) =>
      (['fr', 'en'] as const).map(
        (lang) => `  <url>
    <loc>${abs(pair[lang])}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${abs(pair.fr)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(pair.en)}"/>
  </url>`,
      ),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
