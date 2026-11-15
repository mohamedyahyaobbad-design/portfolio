import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schémas volontairement souples : un champ laissé vide dans l'admin
// ne doit jamais casser la mise en ligne du site.
const s = z.string().nullish();
const b = z.boolean().nullish();
const n = z.number().nullish();
const arr = z.array(z.any()).nullish();
const lang = z.record(z.string(), z.any()).nullish();

const json = (dir: string) => glob({ pattern: '**/*.json', base: `./src/content/${dir}` });

const projects = defineCollection({
  loader: json('projects'),
  schema: z
    .object({
      title: z.string(),
      published: b,
      featured: b,
      order: n,
      category: s,
      type: s,
      period: s,
      context_label: s,
      cover: s,
      gallery: arr,
      tools: arr,
      links: arr,
      fr: lang,
      en: lang,
    })
    .passthrough(),
});

const tools = defineCollection({
  loader: json('tools'),
  schema: z
    .object({
      name: z.string(),
      logo: s,
      category: s,
      level: s,
      url: s,
      visible: b,
      order: n,
      fr: lang,
      en: lang,
    })
    .passthrough(),
});

const skills = defineCollection({
  loader: json('skills'),
  schema: z
    .object({
      name: z.string(),
      category: s,
      level: s,
      visible: b,
      order: n,
      en: lang,
    })
    .passthrough(),
});

const services = defineCollection({
  loader: json('services'),
  schema: z
    .object({
      title: z.string(),
      icon: s,
      image: s,
      visible: b,
      order: n,
      fr: lang,
      en: lang,
    })
    .passthrough(),
});

const testimonials = defineCollection({
  loader: json('testimonials'),
  schema: z
    .object({
      name: z.string(),
      role: s,
      company: s,
      photo: s,
      url: s,
      visible: b,
      order: n,
      fr: lang,
      en: lang,
    })
    .passthrough(),
});

export const collections = { projects, tools, skills, services, testimonials };
