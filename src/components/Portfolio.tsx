import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from 'lucide-react';
import type { Project } from '@/data/projects';

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
export const resumeUrl = asset('Afzal_Khan_Master_Resume_2026.pdf');
export const sections = [
  { to: '/projects', label: 'Work' }, { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' }, { to: '/research', label: 'Research' },
  { to: '/lab', label: 'Playground' }, { to: '/contact', label: 'Contact' }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape') {
        setOpen(false);
        document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <header className="site-header">
    <div className="shell nav-inner">
      <Link className="wordmark" to="/" aria-label="Afzal Khan home">Afzal Khan<span> / </span></Link>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
        {sections.map(item => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-button theme-control" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}>
          {resolvedTheme === 'dark' ? <Sun size={18}/> : <Moon size={17}/>}
        </button>
        <button className="icon-button menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}

export function ChoiceBar({ label, choices, value, onChange }: { label: string; choices: string[]; value: string; onChange: (value: string) => void }) {
  return <div className="choice-bar" role="group" aria-label={label}>
    {choices.map(choice => <button key={choice} type="button" aria-pressed={value === choice} onClick={() => onChange(choice)}>{choice}</button>)}
  </div>;
}

export function PageHeading({ title, children }: { title: string; children?: React.ReactNode }) {
  return <div className="page-heading"><h1>{title}</h1>{children && <div className="page-intro">{children}</div>}</div>;
}

export function EvalVisual() {
  return <div className="eval-visual">
    <div className="graphic-title">What did the agent actually do?</div>
    <svg viewBox="0 0 540 260" role="img" aria-label="Evaluation workflow: task specification, agent actions, and a verifier awarding partial credit">
      <path className="diagram-line" d="M120 105H210M330 105H420M465 142V210H270V144"/>
      <path className="diagram-line" d="m202 100 8 5-8 5m202-10 8 5-8 5m-149 42 5-8 5 8"/>
      <rect className="diagram-box" x="20" y="70" width="110" height="72"/>
      <rect className="diagram-box accent-box" x="210" y="55" width="120" height="100"/>
      <rect className="diagram-box" x="410" y="70" width="110" height="72"/>
      <text x="75" y="101" textAnchor="middle">Task</text><text className="diagram-small" x="75" y="122" textAnchor="middle">the specification</text>
      <text x="270" y="99" textAnchor="middle">Agent</text><text className="diagram-small" x="270" y="122" textAnchor="middle">actions + tools</text>
      <text x="465" y="101" textAnchor="middle">Verifier</text><text className="diagram-small" x="465" y="122" textAnchor="middle">check each step</text>
      <text className="diagram-small" x="370" y="237" textAnchor="middle">feedback / partial credit</text>
    </svg>
    <span className="graphic-caption">An evaluation loop, drawn out.</span>
  </div>;
}

export function ProjectVisual({ project }: { project: Project }) {
  if (project.id === 'ai-eval-platform') return <EvalVisual/>;
  if (project.image) return <div className={`project-image image-${project.id}`}>
    <img src={asset(`projects/${project.image}`)} alt={project.imageAlt || project.title} loading="lazy"/>
    {project.id === 'grip-intelligence' && <span className="grip-wordmark">grip intelligence</span>}
  </div>;
  return <div className="project-type-art"><span>{project.category}</span><strong>{project.title}</strong><span>{project.tech.slice(0, 3).join(' / ')}</span></div>;
}

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <span>Islamabad, Pakistan <span className="footer-slash">/</span> Thinking & building, 2026</span>
    <div><a href={resumeUrl} download>Résumé <Download size={14}/></a><a href="https://github.com/afzalkhanlala1" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></div>
  </div></footer>;
}
