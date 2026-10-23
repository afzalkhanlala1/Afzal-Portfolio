import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ChoiceBar, ProjectVisual } from '@/components/Portfolio';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { id } = useParams();
  const [section, setSection] = useState('Overview');
  useEffect(() => setSection('Overview'), [id]);
  const project = projects.find(item => item.id === id);
  if (!project) return <NotFound/>;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main id="main-content" className="page shell project-detail">
    <div className="detail-navigation"><Link className="text-link" to="/projects"><ArrowLeft size={15}/> The collection</Link><span>{project.category}</span></div>
    <div className="detail-layout">
      <div className="detail-art"><ProjectVisual project={project}/><p>{project.imageAlt || 'An illustrated view of the project.'}</p></div>
      <article className="detail-copy"><p className="detail-status">{project.status}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><ChoiceBar label="Project details" choices={['Overview', 'Engineering', 'Scope']} value={section} onChange={setSection}/><div className="detail-panel" aria-live="polite">
        {section === 'Overview' && <><h2>{project.role}</h2><p>{project.description}</p></>}
        {section === 'Engineering' && <><h2>Engineering highlights</h2><ul className="highlight-list">{project.achievements.map(item => <li key={item}>{item}</li>)}</ul><p className="tool-line">{project.tech.join(' / ')}</p></>}
        {section === 'Scope' && <><h2>Scope & current state</h2><p>{project.note || `This entry covers ${project.status.toLowerCase()}. The overview and engineering notes describe the work represented here.`}</p><p className="tool-line">{project.tech.join(' / ')}</p></>}
      </div><Link className="text-link" to={`/contact?project=${encodeURIComponent(project.title)}`}>Talk through this project <ArrowUpRight size={16}/></Link></article>
    </div>
    <Link className="next-project" to={`/projects/${next.id}`}><span>Next on the workbench <strong>{next.title}</strong></span><ArrowRight size={22}/></Link>
  </main>;
}
