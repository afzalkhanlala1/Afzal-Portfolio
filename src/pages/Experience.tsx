import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageHeading } from '@/components/Portfolio';
import { experience } from '@/data/experience';

export default function Experience() {
  const [selected, setSelected] = useState(experience.length - 1);
  const role = experience[selected];
  const start = 2021, end = 2027;
  return <main id="main-content" className="page shell experience-page">
    <PageHeading title="A few chapters in."><p>Robotics, data, products, AI.<br/>Pick a role to follow the thread.</p></PageHeading>
    <div className="career-layout"><section className="career-chart" aria-label="Career timeline from 2021 to 2026">
      <div className="career-axis"><span>Where</span><div>{[2021,2022,2023,2024,2025,2026].map(year => <span key={year}>{year}</span>)}</div></div>
      {experience.map((item, index) => <button key={item.company} className={`career-row ${selected === index ? 'selected' : ''}`} aria-pressed={selected === index} aria-label={`${item.company}: ${item.dates}`} onClick={() => setSelected(index)}><span>{item.company}</span><span className="career-track"><span className="career-bar" style={{ left: `${(item.start - start) / (end - start) * 100}%`, width: `${(item.end - item.start) / (end - start) * 100}%` }}/></span></button>)}
      <p className="chart-note">Bars show time in each role. Overlapping work is shown as it happened.<br/>Current role shown through October 2026.</p>
    </section><article className="career-detail" aria-live="polite"><span className="detail-status">{role.dates}</span><h2>{role.role}</h2><h3>{role.fullName || role.company}</h3><span className="career-location">{role.location}</span><p>{role.text}</p>
      <div className="impact-chart"><h4>{role.metric}</h4>{role.before != null && role.after != null ? <>
        <div className="comparison-row"><span>Before</span><div><i style={{ width: `${role.before / Math.max(role.before, role.after) * 100}%` }}/></div><strong>{role.before}</strong></div>
        <div className="comparison-row after"><span>After</span><div><i style={{ width: `${role.after / Math.max(role.before, role.after) * 100}%` }}/></div><strong>{role.after}</strong></div><p>{role.metricNote || `Required staffing, measured in ${role.unit}.`}</p>
      </> : <p>{role.metricNote || role.detail}</p>}</div><p className="career-detail-note">{role.detail}</p><Link className="text-link" to="/projects">Explore the engineering <ArrowUpRight size={16}/></Link></article></div>
  </main>;
}
