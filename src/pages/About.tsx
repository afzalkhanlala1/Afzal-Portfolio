import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download } from 'lucide-react';
import { asset, ChoiceBar, PageHeading, resumeUrl } from '@/components/Portfolio';

const toolkit = [
  ['Models & evaluation', 'PyTorch, Hugging Face, TRL, vLLM', 'SFT, GRPO/PPO, reward models, formal verifiers and weighted rubrics.'],
  ['Agents & retrieval', 'LlamaIndex, LangGraph, MCP, pgvector', 'Tool use, RAG, voice workflows, secure connectors and local models.'],
  ['Vision & hardware', 'C++, OpenCV, YOLO, TensorRT, Qt', 'Tracking, real-time processing, Jetson Orin and embedded systems.'],
  ['Products & platforms', 'Python, TypeScript, React, SQL', 'FastAPI, PostgreSQL, Docker, Kubernetes, CI/CD and cloud deployment.']
];

export default function About() {
  const [view, setView] = useState('The person');
  return <main id="main-content" className="page shell about-page">
    <PageHeading title="Hello. I’m Afzal."><p>An engineer with a habit of asking<br/>“but how does that actually work?”</p></PageHeading>
    <div className="about-layout">
      <figure className="portrait-note"><img src={asset('afzal-photo.jpg')} alt="Afzal Khan" width="424" height="512"/><figcaption>Based in Islamabad.<br/><span className="handwritten">Usually building something.</span></figcaption></figure>
      <div className="about-content"><ChoiceBar label="About Afzal" choices={['The person', 'The toolkit', 'The foundations']} value={view} onChange={setView}/>
        <div className="about-panel" aria-live="polite">
          {view === 'The person' && <><h2>From moving robots<br/>to reasoning machines.</h2><p>My starting point was mechatronics. Since then, I’ve worked across machine learning, data engineering, computer vision, and the software that connects them.</p><p>Today I lead AI engineering at ClaimbAI: post-training small language models, designing evaluations, building agent systems, and getting them into production.</p><p>Outside that work, I build products and study mathematical logic. I’m drawn to problems where the specification matters as much as the implementation.</p><Link className="text-link" to="/research">The mathematical side <ArrowUpRight size={16}/></Link></>}
          {view === 'The toolkit' && <div className="toolkit-list">{toolkit.map(([title, tools, description]) => <article key={title}><h2>{title}</h2><p>{description}</p><span>{tools}</span></article>)}</div>}
          {view === 'The foundations' && <div className="education-list"><article><span>In progress / Capstone remaining</span><h2>Statistics & Data Science</h2><h3>MITx / edX MicroMasters Program</h3><p>Verified coursework in probability, statistics, machine learning, and time series. Capstone planned for Fall 2026.</p></article><article><span>2019–2023</span><h2>BE Mechatronics Engineering</h2><h3>NUST, College of E&ME</h3><p>Robotics, control, embedded systems, and mathematics. Final-year project: an autonomous multipurpose agricultural robot.</p></article><p className="award-note">NCRA Best Design Award, Indigenous Category — autonomous fruit-plucking and navigation robot.</p></div>}
        </div>
        <a href={resumeUrl} download className="text-link">The full résumé <Download size={16}/></a>
      </div>
    </div>
  </main>;
}
