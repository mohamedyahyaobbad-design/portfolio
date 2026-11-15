import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });

/** Convertit le texte Markdown saisi dans l'admin en HTML. */
export const md = (s?: string | null) => (s && s.trim() ? (marked.parse(s, { async: false }) as string) : '');

const optimizable = (src: string) => src.startsWith('/') && !/\.(svg|gif)$/i.test(src);

/** Image redimensionnée et compressée par le CDN d'images de Netlify (WebP/AVIF automatique). */
export const img = (src?: string | null, w = 1200) => {
  if (!src) return '';
  return optimizable(src) ? `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&q=78` : src;
};

export const srcset = (src?: string | null, widths = [480, 800, 1200, 1600]) =>
  src && optimizable(src) ? widths.map((w) => `${img(src, w)} ${w}w`).join(', ') : undefined;

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

export const hasText = (v: unknown) => typeof v === 'string' && v.trim().length > 0;

export const list = (v: unknown): string[] =>
  Array.isArray(v) ? v.map((x) => (typeof x === 'string' ? x : x?.item ?? x?.text ?? '')).filter(hasText) : [];
