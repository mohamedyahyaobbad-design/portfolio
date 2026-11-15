# Portfolio — Mohamed Yahya Obbad

Portfolio professionnel bilingue (FR / EN) en marketing digital.

- **Site** : Astro (pages statiques, très rapides), hébergé gratuitement sur Netlify
- **Administration** : Decap CMS, accessible à l’adresse `/admin` du site
- **Formulaire de contact** : Netlify Forms (messages visibles dans Netlify › Forms)
- **Coût** : 0 DH

## Gérer le portfolio (sans code)

1. Ouvrez `https://VOTRE-SITE.netlify.app/admin/` et connectez-vous avec GitHub.
2. Choisissez une rubrique dans le menu de gauche :

| Rubrique | Ce que vous y gérez |
|---|---|
| **Projets** | Études de cas : textes FR/EN, couverture, captures d’écran, outils, liens/vidéos, catégorie, type, mise en avant |
| **Outils** | Nom, logo, catégorie, description, niveau (facultatif), lien |
| **Compétences** | Nom FR/EN, catégorie, niveau (facultatif), afficher/masquer |
| **Services** | Titre, icône ou image, problème, solution, prestations, livrables, bouton |
| **Témoignages** | Uniquement de vrais témoignages (section masquée tant qu’il n’y en a pas) |
| **Profil** | Nom, photo, titre, accroche, CV (PDF) |
| **Coordonnées** | Email, téléphone, LinkedIn, autres réseaux, disponibilité |
| **Textes des pages** | Accueil, À propos, référencement (SEO) |

3. Cliquez sur **Publier** : le site est mis à jour automatiquement en 1 à 2 minutes.

### Ajouter un projet

1. **Projets › Nouveau Projet**
2. Renseignez le titre, la catégorie et le **type** (académique, personnel, exercice, professionnel, freelance).
3. Ajoutez l’image de couverture, puis vos captures dans **Captures d’écran** (glisser-déposer pour l’ordre, légendes facultatives).
4. Sélectionnez les **outils utilisés**.
5. Remplissez les sections de l’étude de cas (seules les sections remplies s’affichent).
6. Cochez **Publié sur le site** (et **Mettre en avant sur l’accueil** si besoin), puis **Publier**.

Un projet non coché « Publié » reste un brouillon invisible sur le site.

### Anglais

Chaque contenu a une partie « Contenu en anglais ». Si un champ anglais est vide, le texte français s’affiche sur la version anglaise.

## Structure technique

```
public/admin/config.yml   → configuration de l’administration
src/content/              → projets, outils, compétences, services, témoignages (JSON)
src/data/                 → profil, coordonnées, textes des pages, SEO (JSON)
src/views/                → mise en page des pages (FR et EN partagent le même modèle)
src/styles/global.css     → design (couleurs, typographie, espacements)
public/uploads/           → images et fichiers ajoutés depuis l’admin
```
