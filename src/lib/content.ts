import { getCollection } from 'astro:content';
import profile from '../data/profile.json';
import contact from '../data/contact.json';
import home from '../data/home.json';
import about from '../data/about.json';
import seo from '../data/seo.json';
import { localize, type Lang } from './i18n';

export { profile, contact, home, about, seo };

const sortKey = (e: any) => String(e.data.title ?? e.data.name ?? '');
const byOrder = (a: any, b: any) => (a.data.order ?? 99) - (b.data.order ?? 99) || sortKey(a).localeCompare(sortKey(b), 'fr');

export async function getProjects() {
  return (await getCollection('projects', (e) => e.data.published === true)).sort(byOrder);
}
export async function getTools() {
  return (await getCollection('tools', (e) => e.data.visible !== false)).sort(byOrder);
}
export async function getSkills() {
  return (await getCollection('skills', (e) => e.data.visible !== false)).sort(byOrder);
}
export async function getServices() {
  return (await getCollection('services', (e) => e.data.visible !== false)).sort(byOrder);
}
export async function getTestimonials() {
  return (await getCollection('testimonials', (e) => e.data.visible !== false)).sort(byOrder);
}

/** Titre traduit (le titre FR est le champ principal, l'anglais est facultatif). */
export const titleOf = (data: any, lang: Lang) => (lang === 'en' && data?.en?.title?.trim() ? data.en.title : data.title);
export const nameOf = (data: any, lang: Lang) => (lang === 'en' && data?.en?.name?.trim() ? data.en.name : data.name);

export const t = localize;
