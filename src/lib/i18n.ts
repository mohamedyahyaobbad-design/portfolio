export type Lang = 'fr' | 'en';
export const langs: Lang[] = ['fr', 'en'];

export const routes = {
  home: { fr: '/', en: '/en/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  services: { fr: '/services/', en: '/en/services/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  skills: { fr: '/competences/', en: '/en/skills/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  thanks: { fr: '/merci/', en: '/en/thank-you/' },
} as const;

export type RouteKey = keyof typeof routes;

export const projectUrl = (lang: Lang, id: string) => `${routes.projects[lang]}${id}/`;

// Catégories de projets (doivent correspondre aux options de l'admin : public/admin/config.yml)
export const projectCategories: { id: string; fr: string; en: string }[] = [
  { id: 'seo', fr: 'SEO', en: 'SEO' },
  { id: 'google-ads', fr: 'Google Ads', en: 'Google Ads' },
  { id: 'meta-ads', fr: 'Meta Ads', en: 'Meta Ads' },
  { id: 'social-media', fr: 'Réseaux sociaux', en: 'Social Media' },
  { id: 'ecommerce', fr: 'E-commerce', en: 'E-commerce' },
  { id: 'shopify', fr: 'Shopify', en: 'Shopify' },
  { id: 'wordpress', fr: 'WordPress', en: 'WordPress' },
  { id: 'design', fr: 'Design & Communication', en: 'Design & Communication' },
];

export const projectTypes: Record<string, { fr: string; en: string }> = {
  academique: { fr: 'Projet académique', en: 'Academic project' },
  personnel: { fr: 'Projet personnel', en: 'Personal project' },
  exercice: { fr: 'Exercice pratique', en: 'Practice exercise' },
  professionnel: { fr: 'Expérience professionnelle', en: 'Professional experience' },
  freelance: { fr: 'Mission freelance', en: 'Freelance project' },
};

// Catégories de compétences et d'outils
export const skillCategories: { id: string; fr: string; en: string }[] = [
  { id: 'seo', fr: 'SEO', en: 'SEO' },
  { id: 'ads', fr: 'Publicité en ligne', en: 'Paid Advertising' },
  { id: 'social', fr: 'Réseaux sociaux', en: 'Social Media' },
  { id: 'ecommerce', fr: 'E-commerce', en: 'E-commerce' },
  { id: 'cms', fr: 'Web & CMS', en: 'Web & CMS' },
  { id: 'analytics', fr: 'Analyse & Reporting', en: 'Analytics & Reporting' },
  { id: 'research', fr: 'Recherche & Veille', en: 'Research & Insights' },
  { id: 'design', fr: 'Design & Communication', en: 'Design & Communication' },
  { id: 'autre', fr: 'Autres', en: 'Other' },
];

export const levels: Record<string, { fr: string; en: string }> = {
  notions: { fr: 'Notions', en: 'Basic' },
  intermediaire: { fr: 'Intermédiaire', en: 'Intermediate' },
  avance: { fr: 'Avancé', en: 'Advanced' },
  expert: { fr: 'Expert', en: 'Expert' },
};

export const label = (list: { id: string; fr: string; en: string }[], id: string | null | undefined, lang: Lang) =>
  list.find((c) => c.id === id)?.[lang] ?? id ?? '';

// Textes d'interface (boutons, titres de sections génériques)
export const ui = {
  fr: {
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
    skip: 'Aller au contenu',
    menu: 'Menu',
    contactMe: 'Me contacter',
    seeProjects: 'Découvrir mes projets',
    seeProject: 'Voir le projet',
    allProjects: 'Voir tous les projets',
    featured: 'Projets sélectionnés',
    featuredIntro: 'Une sélection de travaux qui illustrent ma méthode et mon savoir-faire.',
    skillsTitle: 'Compétences',
    skillsIntro: 'Des compétences opérationnelles, organisées par domaine.',
    allSkills: 'Voir toutes les compétences et les outils',
    servicesTitle: 'Services',
    servicesIntro: 'Des accompagnements concrets pour gagner en visibilité et en performance.',
    allServices: 'Découvrir les services',
    testimonials: 'Témoignages',
    noProjects: 'Les études de cas sont en cours de publication. Revenez bientôt !',
    filterAll: 'Tous',
    filterLabel: 'Filtrer par catégorie',
    category: 'Catégorie',
    type: 'Type de projet',
    period: 'Période',
    context: 'Cadre',
    tools: 'Outils utilisés',
    links: 'Liens et ressources',
    gallery: 'Galerie',
    galleryHint: 'Cliquez sur une image pour l’agrandir.',
    overview: 'En bref',
    caseSections: {
      presentation: 'Présentation du projet',
      context: 'Contexte',
      problem: 'Problématique',
      objectives: 'Objectifs',
      analysis: 'Analyse réalisée',
      methodology: 'Méthodologie',
      strategy: 'Stratégie adoptée',
      work: 'Travail effectué',
      results: 'Résultats et livrables',
      conclusion: 'Conclusion',
    },
    otherProjects: 'Autres projets',
    backToProjects: 'Retour aux projets',
    problem: 'Le problème',
    solution: 'Ma solution',
    deliverables: 'Livrables',
    prestations: 'Prestations',
    downloadCv: 'Télécharger mon CV',
    email: 'Email',
    phone: 'Téléphone',
    location: 'Localisation',
    follow: 'Réseaux',
    close: 'Fermer',
    prev: 'Image précédente',
    next: 'Image suivante',
    level: 'Niveau',
    officialSite: 'Site officiel',
    tools_title: 'Outils',
    rights: 'Tous droits réservés.',
    form: {
      title: 'Envoyer un message',
      requestType: 'Votre demande concerne',
      recruit: 'Un recrutement',
      recruitHint: 'Stage PFE, emploi, alternance',
      freelance: 'Une mission freelance',
      freelanceHint: 'SEO, Ads, Shopify, WordPress…',
      name: 'Nom complet',
      email: 'Email',
      company: 'Entreprise (facultatif)',
      message: 'Votre message',
      send: 'Envoyer le message',
      required: 'obligatoire',
    },
    lightbox: 'Visionneuse d’images',
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    skip: 'Skip to content',
    menu: 'Menu',
    contactMe: 'Contact me',
    seeProjects: 'Explore my projects',
    seeProject: 'View project',
    allProjects: 'View all projects',
    featured: 'Selected projects',
    featuredIntro: 'A selection of work that illustrates my method and skills.',
    skillsTitle: 'Skills',
    skillsIntro: 'Hands-on skills, organised by area.',
    allSkills: 'See all skills and tools',
    servicesTitle: 'Services',
    servicesIntro: 'Practical support to grow your visibility and performance.',
    allServices: 'Explore services',
    testimonials: 'Testimonials',
    noProjects: 'Case studies are being published. Check back soon!',
    filterAll: 'All',
    filterLabel: 'Filter by category',
    category: 'Category',
    type: 'Project type',
    period: 'Period',
    context: 'Setting',
    tools: 'Tools used',
    links: 'Links & resources',
    gallery: 'Gallery',
    galleryHint: 'Click an image to enlarge it.',
    overview: 'Overview',
    caseSections: {
      presentation: 'Project overview',
      context: 'Context',
      problem: 'Challenge',
      objectives: 'Objectives',
      analysis: 'Analysis',
      methodology: 'Methodology',
      strategy: 'Strategy',
      work: 'Work carried out',
      results: 'Results & deliverables',
      conclusion: 'Conclusion',
    },
    otherProjects: 'Other projects',
    backToProjects: 'Back to projects',
    problem: 'The problem',
    solution: 'My solution',
    deliverables: 'Deliverables',
    prestations: 'What’s included',
    downloadCv: 'Download my CV',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    follow: 'Social',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
    level: 'Level',
    officialSite: 'Official website',
    tools_title: 'Tools',
    rights: 'All rights reserved.',
    form: {
      title: 'Send a message',
      requestType: 'Your request is about',
      recruit: 'Hiring',
      recruitHint: 'Internship, job, work-study',
      freelance: 'A freelance project',
      freelanceHint: 'SEO, Ads, Shopify, WordPress…',
      name: 'Full name',
      email: 'Email',
      company: 'Company (optional)',
      message: 'Your message',
      send: 'Send message',
      required: 'required',
    },
    lightbox: 'Image viewer',
  },
};

const filled = (v: unknown) => v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0);

/** Fusionne le contenu FR et EN : en anglais, chaque champ vide retombe sur la version française. */
export function localize(data: { fr?: any; en?: any } | null | undefined, lang: Lang): any {
  const fr = (data?.fr ?? {}) as Record<string, any>;
  if (lang === 'fr') return fr;
  const out: Record<string, any> = { ...fr };
  for (const [k, v] of Object.entries((data?.en ?? {}) as Record<string, any>)) if (filled(v)) out[k] = v;
  return out;
}
