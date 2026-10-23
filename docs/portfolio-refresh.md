# Portfolio refresh — October 2026

## Revised design

Restored the original cream, ink, and vermilion theme and Instrument Serif / IBM Plex Sans typography, following user feedback. Removed the blue identity and decorative dot motifs. The portfolio now uses separate routes rather than a long landing page.

The compact home has a selectable project stack. Work offers four entries per page, category-count bars, search, and a map. About and project details use selectable panels. Experience has a career timeline and factual comparison charts. Research has a topic notebook; the playground has six experiments (see below). Every graph has a defined meaning; demo scores are labelled as calculated illustrations.

## Playground experiments

Each experiment links to its project and states what is simulated.

- Reward signals and Stratification: unchanged.
- Reliability gates (Grip Intelligence): visibility ≥ 0.75, frame spread ≤ 25° and in-plane ratio ≥ 0.8 are the shipped values in `config/calibration/v1.json`. Readings are simulated around a stand-in true angle; occlusion drifts towards the impossible 30° elbow reading described in the project README.
- Plot fit (ArchitectAI): setbacks and coverage define the footprint; rooms plus 25% services (and an 80 ft² stair on two storeys) must fit per floor. Defaults are assumptions, not CDA rules, matching the product's own caveat.
- Luck or edge (Wavebook): moving-average crossover rules are chosen on one period of a zero-drift random walk and evaluated on an untouched later period, mirroring Wavebook's select-then-evaluate protocol. Not a trading result.
- Ride matching (Ciara): radius search, vehicle and minimum-rating filters, nearest first, ETA at 30 km/h rounded up, as in the matching service. Drivers are fictional; distances use a flat grid instead of Redis GEORADIUS.

## Content sources

- Master resume: roles, dates, education, research, and professional outcomes.
- Local README files and selected application source: current capabilities and limitations.
- AethelosHub/site.json: identity and grouping, with product documentation taking precedence for implementation claims.
- Existing portfolio: portrait and contact identity.

Related Ciara repositories, ArchitectAI iterations, golf variants, and business sites were consolidated. Third-party Hermes Agent code, tutorials, and downloaded datasets were excluded. No credentials, internal datasets, or local source paths appear in the site.

Quanta's evaluation status, ArchitectAI's concept-plan scope, and Virtual Tour's backend dependency remain in the project Scope panels. Unsupported percentages were removed; resume-supported professional outcomes remain. COMCEPT throughput is explicitly shown as a normalized before/after index. Current career timing is anchored to October 2026.

## Assets and hosting

Portrait retained from the original site. Product images reused from local project assets. Golf imagery is labelled illustrative in project details. Evaluation artwork is an explanatory workflow. Favicons and social preview now match the warm theme.

The existing GitHub Pages workflow and production base are retained; pushing to `main` deploys to https://afzalkhanlala1.github.io/Afzal-Portfolio/.

## Validation

- TypeScript check and production build.
- Automated component/data checks for all 26 project detail routes, pagination coverage without duplicates, category/search filters, map links, independent pages, all six lab experiments and their calculations, linked images, both resume PDFs, and 404s.
- Browser checks of carousel navigation, pagination, live search, map filtering, Scope panels, reward inputs and graph updates, self-membership behavior, timeline selection, and mobile menu dismissal with Escape.
- Desktop and mobile visual inspection using 1440×900 and 390×844 viewports, plus the in-app browser's normal panel width.
