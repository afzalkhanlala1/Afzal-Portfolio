import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ThemeProvider from '@/components/ThemeProvider';
import { Navigation, Footer } from '@/components/Portfolio';
import { projects } from '@/data/projects';
import Index from './pages/Index';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Lab from './pages/Lab';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const oldSections: Record<string, string> = { '#work': '/projects', '#about': '/about', '#experience': '/experience', '#research': '/research', '#contact': '/contact' };
    if (pathname === '/' && oldSections[hash]) { navigate(oldSections[hash], { replace: true }); return; }
    const project = projects.find(item => pathname === `/projects/${item.id}`);
    const titles: Record<string, string> = { '/projects': 'The Collection', '/about': 'About', '/experience': 'Experience', '/research': 'Research', '/lab': 'The Playground', '/contact': 'Contact' };
    document.title = project ? `${project.title} — Afzal Khan` : titles[pathname] ? `${titles[pathname]} — Afzal Khan` : 'Afzal Khan — AI Engineer & Product Builder';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, navigate]);
  return null;
}
export default function App() {
  return <ThemeProvider><BrowserRouter basename={import.meta.env.BASE_URL}><RouteEffects/><a className="skip-link" href="#main-content">Skip to content</a><Navigation/>
    <Routes><Route path="/" element={<Index/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:id" element={<ProjectDetail/>}/><Route path="/about" element={<About/>}/><Route path="/experience" element={<Experience/>}/><Route path="/research" element={<Research/>}/><Route path="/lab" element={<Lab/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/>
  </BrowserRouter></ThemeProvider>;
}
