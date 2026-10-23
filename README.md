# Afzal Khan — Portfolio

A personal portfolio for AI engineering, product development, and mathematical logic. Built with Vite, React, TypeScript, and CSS. Original warm paper, ink, and vermilion palette, with light and dark themes.

## Run locally

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 8080
```

## Validate

```sh
npm run typecheck
npm run check:content
npm run build
```

The existing GitHub Pages workflow deploys under `/Afzal-Portfolio/`. Development uses `/`. Match `base` in `vite.config.ts` to the hosting path for other deployments.

## Structure

- `/`: compact introduction and four selectable projects.
- `/projects`: search, category counts, four projects per page, and a category map. Filters and pagination are stored in the URL.
- `/projects/:id`: overview, engineering, and scope panels.
- `/about`: biography, toolkit, and education panels.
- `/experience`: selectable career timeline and resume-supported outcomes.
- `/research`: interactive research notebook.
- `/lab`: six experiments drawn from the projects: reward signals, type stratification, Grip Intelligence's reliability gates, ArchitectAI's plot-fit check, Wavebook's select-then-test backtest on a random walk, and Ciara's radius-based ride matching. Each is selectable by `?experiment=` and labelled as an illustration, not a benchmark.
- `/contact`: direct contact links and a form that opens an email draft.

Project content lives in `src/data/projects.ts`; career data in `src/data/experience.ts`. The home selection is set in `src/pages/Index.tsx`. Shared UI is in `src/components/Portfolio.tsx`; experiments in `src/components/Experiments.tsx`, with calculations in `src/lib/experiments.ts`. Theme and responsive layouts are in `src/index.css`.

The current resume is `public/Afzal_Khan_Master_Resume_2026.pdf`; the old filename serves a compatibility copy. Contact actions require no backend. Project descriptions distinguish implementation from planned scope.

Content checks cover routes, pagination coverage, filters, map links, experiment calculations, assets, PDFs, and missing pages. See `docs/portfolio-refresh.md` for source and validation notes.
