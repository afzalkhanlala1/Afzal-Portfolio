# Afzal Khan — Portfolio

Personal portfolio site. AI engineer working on post-training, reward design and
evaluation infrastructure.

**Live:** https://afzalkhan.dev

## Stack

Vite · React · TypeScript · Tailwind CSS · shadcn/ui

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     Hero, About, Experience, Skills, Projects, Contact, Footer
  data/projects.ts   Single source of truth for project entries
  pages/          Index, Projects, NotFound
public/           Portrait, résumé PDF, static assets
```

To add or edit a project, change `src/data/projects.ts` — set `featured: true`
to surface it on the landing page.
