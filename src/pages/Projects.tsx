import { Link, useSearchParams } from 'react-router-dom';
import { Search, ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { ChoiceBar, PageHeading, ProjectVisual } from '@/components/Portfolio';

export const pageSize = 4;
const categories = [...new Set(projects.map(project => project.category))];
const shortNames: Record<string, string> = { 'AI & agents': 'AI & agents', 'Products': 'Products', 'Vision & robotics': 'Vision & robotics', 'Data & infrastructure': 'Data & infrastructure', 'Web experiences': 'Web experiences' };
export default function Projects() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const requested = params.get('category') || 'All work';
  const category = categories.includes(requested) ? requested : 'All work';
  const view = params.get('view') === 'map' ? 'Map' : 'Index';
  const filtered = projects.filter(project => (category === 'All work' || project.category === category) && `${project.title} ${project.summary} ${project.tech.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const page = Math.min(pageCount, Math.max(1, Number.parseInt(params.get('page') || '1', 10) || 1));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);
  const total = projects.length;
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value && value !== 'All work') next.set(key, value); else next.delete(key);
    if (key !== 'page') next.delete('page');
    setParams(next, { replace: key === 'q', preventScrollReset: true });
  }
  function pickCategory(value: string) { update('category', value); }
  return <main id="main-content" className="page shell work-page">
    <PageHeading title="A working collection."><p>Products, experiments, and a few very deep rabbit holes.<br/>{total} projects. Find your way in.</p></PageHeading>
    <div className="collection-layout">
      <aside className="collection-sidebar">
        <div className="sidebar-heading"><h2>What I build</h2><button className="plain-button" aria-pressed={category === 'All work'} onClick={() => pickCategory('All work')}>All {total}</button></div>
        <div className="category-chart" role="group" aria-label="Filter by project category">
          {categories.map((item, index) => {
            const count = projects.filter(project => project.category === item).length;
            return <button className={`category-bar category-${index}`} key={item} aria-pressed={category === item} onClick={() => pickCategory(item)}>
              <span>{shortNames[item]}<strong>{count}</strong></span><span className="bar-track"><span style={{ width: `${count / Math.max(...categories.map(c => projects.filter(p => p.category === c).length)) * 100}%` }}/></span>
            </button>;
          })}
        </div>
        <p className="chart-note">Project counts, grouped by focus.<br/>Choose a bar to explore that part of the collection.</p>
        <Link className="sidebar-note" to="/lab"><span>Want to see how I think?</span><strong>Try the playground <ArrowUpRight size={16}/></strong></Link>
      </aside>
      <section className="collection-content" aria-label="Project collection">
        <div className="collection-toolbar"><div className="search-box"><Search size={17}/><label className="sr-only" htmlFor="project-search">Search projects or technologies</label><input id="project-search" type="search" value={query} onChange={event => update('q', event.target.value)} placeholder="Find a project or a technology"/>{query && <button className="icon-button" aria-label="Clear search" onClick={() => update('q', '')}><X size={16}/></button>}</div><ChoiceBar label="Collection view" choices={['Index', 'Map']} value={view} onChange={value => update('view', value.toLowerCase())}/></div>
        <div className="results-heading"><span aria-live="polite">{category} / {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</span>{category !== 'All work' && <button className="plain-button" onClick={() => pickCategory('All work')}>Clear category</button>}</div>
        {view === 'Map' && filtered.length > 0 ? <div className="project-map" aria-label="Project categories grouped by focus">
          {categories.filter(item => filtered.some(project => project.category === item)).map(item => {
            const members = filtered.filter(project => project.category === item);
            return <section className={`map-region category-${categories.indexOf(item)}`} key={item} style={{ flexGrow: members.length }}><h2>{item}<span>{members.length}</span></h2><div>{members.map(project => <Link key={project.id} to={`/projects/${project.id}`}>{project.title}<ArrowUpRight size={13}/></Link>)}</div></section>;
          })}
        </div> : <>
          <div className="archive-grid">{visible.map(project => <article className="archive-card" key={project.id}><Link className="archive-image" to={`/projects/${project.id}`} aria-label={`Explore ${project.title}`}><ProjectVisual project={project}/></Link><div className="archive-copy"><h2><Link to={`/projects/${project.id}`}>{project.title}</Link></h2><p>{project.summary}</p><div><span>{project.status}</span><Link to={`/projects/${project.id}`} aria-label={`Read about ${project.title}`}><ArrowUpRight size={19}/></Link></div></div></article>)}</div>
          {!filtered.length && <div className="empty-state"><h2>No matches on the workbench.</h2><p>Try “Python”, “vision”, or a project name.</p><button className="button button-ink" onClick={() => setParams({})}>Clear all filters</button></div>}
          {!!filtered.length && <div className="pagination"><span>{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length}</span><div><button className="icon-button" disabled={page === 1} onClick={() => update('page', String(page - 1))} aria-label="Previous project page"><ArrowLeft size={18}/></button><span>Page {page} / {pageCount}</span><button className="icon-button" disabled={page === pageCount} onClick={() => update('page', String(page + 1))} aria-label="Next project page"><ArrowRight size={18}/></button></div></div>}
        </>}
      </section>
    </div>
  </main>;
}
