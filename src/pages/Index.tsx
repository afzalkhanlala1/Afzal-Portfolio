import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual, resumeUrl } from '@/components/Portfolio';

const deskProjects = ['architectai', 'quanta', 'grip-intelligence', 'ai-eval-platform'].map(id => projects.find(project => project.id === id)!);
export default function Index() {
  const [selected, setSelected] = useState(0);
  const project = deskProjects[selected];
  const turn = (direction: number) => setSelected((selected + direction + deskProjects.length) % deskProjects.length);
  return <main id="main-content" className="home-page shell">
    <div className="home-intro">
      <p className="byline">AI engineer. Product builder. Perpetually curious.</p>
      <h1>Serious systems.<br/><em>Restless curiosity.</em></h1>
      <p className="home-description">I’m Afzal. I train models, question their answers, and build the things around them. Somewhere between mathematical logic and getting my hands dirty.</p>
      <div className="home-actions"><Link className="button button-ink" to="/projects">Step into my work <ArrowUpRight size={18}/></Link><Link className="text-link" to="/about">Meet the person</Link></div>
      <div className="home-now"><span>These days</span><p>Leading AI engineering at <strong>ClaimbAI.</strong><br/>Exploring the foundations of formal reasoning.</p></div>
    </div>
    <section className="desk" aria-label="Selected projects">
      <div className="desk-caption"><span>A few things on my desk</span><span className="handwritten">take a look</span></div>
      <div className="project-stack">
        <div className="stack-sheet sheet-back" aria-hidden="true"/><div className="stack-sheet sheet-middle" aria-hidden="true"/>
        <article className="desk-project" key={project.id}>
          <div className="desk-project-top"><span>{project.category}</span><span>{String(selected + 1).padStart(2, '0')} / 04</span></div>
          <Link className="desk-image" to={`/projects/${project.id}`} aria-label={`Open ${project.title}`}><ProjectVisual project={project}/></Link>
          <div className="desk-project-bottom"><div><Link to={`/projects/${project.id}`}><h2>{project.title}</h2></Link><p>{project.summary}</p></div><Link className="project-launch" to={`/projects/${project.id}`} aria-label={`Read about ${project.title}`}><ArrowUpRight size={25}/></Link></div>
        </article>
      </div>
      <div className="desk-controls"><button className="icon-button" onClick={() => turn(-1)} aria-label="Previous featured project"><ArrowLeft size={19}/></button><span aria-live="polite">{project.title}</span><button className="icon-button" onClick={() => turn(1)} aria-label="Next featured project"><ArrowRight size={19}/></button></div>
    </section>
    <div className="home-bottom"><Link to="/lab"><span className="small-sketch" aria-hidden="true">ƒ(x)</span><div><strong>A little less reading. A little more playing.</strong><span>Experiment with reward signals and mathematical logic.</span></div><ArrowUpRight size={21}/></Link><a href={resumeUrl} download>Prefer the résumé? <span>Download the PDF</span></a></div>
  </main>;
}
