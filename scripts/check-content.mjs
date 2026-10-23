import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { Routes, Route } from 'react-router-dom';
const server = await createServer({ server: { middlewareMode: true, hmr: false }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom', logLevel: 'error' });
const originalError = console.error;
console.error = (...args) => {
  if (String(args[0]).includes('useLayoutEffect does nothing on the server')) return;
  originalError(...args);
};
try {
  const { projects } = await server.ssrLoadModule('/src/data/projects.ts');
  const { default: Index } = await server.ssrLoadModule('/src/pages/Index.tsx');
  const { default: Collection, pageSize } = await server.ssrLoadModule('/src/pages/Projects.tsx');
  const { default: Detail } = await server.ssrLoadModule('/src/pages/ProjectDetail.tsx');
  const { default: NotFound } = await server.ssrLoadModule('/src/pages/NotFound.tsx');
  const render = (Component, path, routePath) => renderToStaticMarkup(
    React.createElement(StaticRouter, { location: path },
      routePath ? React.createElement(Routes, null, React.createElement(Route, { path: routePath, element: React.createElement(Component) })) : React.createElement(Component)));
  assert.equal(new Set(projects.map(p => p.id)).size, projects.length);
  const home = render(Index, '/');
  assert(home.includes('Serious systems.'));
  assert(home.includes('Afzal_Khan_Master_Resume_2026.pdf'));
  assert.equal((home.match(/class="desk-project"/g) || []).length, 1);
  for (const project of projects) {
    assert(project.summary && project.description && project.status && project.achievements.length);
    const detail = render(Detail, `/projects/${project.id}`, '/projects/:id');
    assert(detail.includes('Project details') && detail.includes('Overview') && detail.includes('Engineering') && detail.includes('Scope'), `Detail route failed: ${project.id}`);
    if (project.image) await access(new URL(`../public/projects/${project.image}`, import.meta.url));
  }
  const all = render(Collection, '/projects');
  assert.equal((all.match(/class="archive-card"/g) || []).length, pageSize);
  const seen = [];
  for (let page = 1; page <= Math.ceil(projects.length / pageSize); page++) {
    const html = render(Collection, `/projects?page=${page}`);
    seen.push(...[...html.matchAll(/class="archive-image"[^>]*href="\/projects\/([^"]+)"/g)].map(match => match[1]));
  }
  assert.deepEqual(seen, projects.map(project => project.id), 'Pagination must expose every project exactly once');
  for (const category of new Set(projects.map(p => p.category))) {
    const html = render(Collection, `/projects?category=${encodeURIComponent(category)}`);
    assert.equal((html.match(/class="archive-card"/g) || []).length, Math.min(pageSize, projects.filter(p => p.category === category).length));
  }
  assert.equal((render(Collection, '/projects?q=quanta').match(/class="archive-card"/g) || []).length, 1);
  assert(render(Collection, '/projects?q=quanta&category=Vision%20%26%20robotics').includes('No matches on the workbench.'));
  assert(render(Collection, '/projects?q=no-such-project-987').includes('Clear all filters'));
  assert(render(Detail, '/projects/missing', '/projects/:id').includes('Nothing built here. Yet.'));
  assert(render(NotFound, '/missing').includes('Back to the portfolio'));
  const map = render(Collection, '/projects?view=map');
  for (const project of projects) assert(map.includes(`href="/projects/${project.id}"`));
  for (const page of ['About', 'Experience', 'Research', 'Lab', 'Contact']) {
    const { default: Component } = await server.ssrLoadModule(`/src/pages/${page}.tsx`);
    assert(render(Component, `/${page.toLowerCase()}`).includes('id="main-content"'));
  }
  const { scoreTrajectory, isStratified, readJoint, fitPlan, briefRooms, sliceLayout, randomWalk, chooseRule, matchDrivers, etaMinutes } = await server.ssrLoadModule('/src/lib/experiments.ts');
  assert.equal(scoreTrajectory([true, true, false, false], 50).partial, 40);
  for (const outcome of [0, 20, 50, 100]) {
    assert.equal(scoreTrajectory([true, true, true, true], outcome).partial, 100);
    assert.equal(scoreTrajectory([false, false, false, false], outcome).partial, 0);
    assert.equal(scoreTrajectory([true, true, true, false], outcome).terminal, 0);
  }
  assert.equal(scoreTrajectory([false, false, false, true], 50).terminal, 100);
  assert(isStratified('Membership', 0, 1));
  assert(!isStratified('Membership', 1, 1));
  assert(isStratified('Equality', 2, 2));
  assert(!isStratified('Self-membership', 2, 2));
  assert(readJoint(0.92, 3, 0.95).graded);
  assert.deepEqual(readJoint(0.5, 3, 0.95).gates.map(gate => gate.pass), [false, true, true], 'An occluded joint is stable but not graded');
  assert(!readJoint(0.92, 20, 0.95).gates[1].pass);
  assert(!readJoint(0.92, 3, 0.6).gates[2].pass);
  const plan = fitPlan({ width: 35, depth: 70 }, 10, 5, 65, 2, briefRooms);
  assert.equal(plan.footprint, 1375);
  assert(plan.fits && !fitPlan({ width: 35, depth: 70 }, 10, 5, 65, 1, briefRooms).fits);
  assert.equal(fitPlan({ width: 20, depth: 50 }, 10, 10, 65, 2, briefRooms).footprint, 0);
  const cells = sliceLayout([{ name: 'a', area: 30 }, { name: 'b', area: 50 }, { name: 'c', area: 20 }], 0, 0, 20, 5);
  assert.equal(cells.length, 3);
  for (const cell of cells) assert(Math.abs(cell.w * cell.h - cell.area) < 1e-9, 'Layout cells keep their area');
  const market = randomWalk(34);
  assert.equal(market.length, 600);
  assert.deepEqual(market, randomWalk(34), 'Markets are reproducible');
  let previous = -Infinity;
  for (const tried of [1, 5, 20, 56]) {
    const { best } = chooseRule(market, tried, 10);
    assert(best.inSample >= previous, 'Trying more rules never lowers the best in-sample return');
    previous = best.inSample;
  }
  const matches = matchDrivers({ x: 6, y: 4 }, 'Car', 5, 4);
  assert(matches.length && matches.every((driver, i) => driver.vehicle === 'Car' && driver.rating >= 4 && driver.distance <= 5 && (!i || matches[i - 1].distance <= driver.distance)));
  assert.equal(matchDrivers({ x: 6, y: 4 }, 'Bike', 1, 4.9).length, 0);
  assert.equal(etaMinutes(1.9), 4);
  const { default: Lab } = await server.ssrLoadModule('/src/pages/Lab.tsx');
  for (const [key, heading] of [['rewards', 'Give progress some credit.'], ['types', 'Can you make the types fit?'], ['gates', 'Can you trust this angle?'], ['plot', 'Will the brief fit the plot?'], ['backtest', 'Luck or edge?'], ['match', 'Who gets the ride?']]) {
    assert(render(Lab, `/lab?experiment=${key}`).includes(heading), `Lab experiment failed: ${key}`);
  }
  for (const file of ['Afzal_Khan_Master_Resume_2026.pdf', 'Afzal_Khans_Resume.pdf']) {
    const bytes = await readFile(new URL(`../public/${file}`, import.meta.url));
    assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
  }
  console.log(`Passed: ${projects.length} detail routes, pagination coverage, map links, category/search filters, independent pages, six lab experiments and their calculations, assets, resume files and 404s.`);
} finally {
  console.error = originalError;
  await server.close();
}
