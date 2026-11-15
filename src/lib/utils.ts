import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });

/** Convertit le texte Markdown saisi dans l'admin en HTML. */
export const md = (s?: string | null) => (s && s.trim() ? (marked.parse(s, { async: false }) as string) : '');

/** Les images sont servies telles quelles (compressées à l'import) par le CDN de l'hébergeur. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const img = (src?: string | null, _w = 1200) => src || '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const srcset = (_src?: string | null, _widths?: number[]): string | undefined => undefined;

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
