import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PageHeading } from '@/components/Portfolio';

export default function Contact() {
  const [params] = useSearchParams();
  const project = params.get('project');
  const [subject, setSubject] = useState(project ? `Let's talk about ${project}` : 'A project to talk about');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const email = 'afzaljawadkhan@gmail.com';
  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  return <main id="main-content" className="page shell contact-page"><PageHeading title="What are you making?"><p>A hard problem, a half-formed idea,<br/>or a conversation worth having.</p></PageHeading><div className="contact-layout"><div className="contact-copy"><h2>Let’s compare notes.</h2><p>I’d love to hear about AI engineering work, new products, and thoughtful collaborations.</p><a className="email-address" href={`mailto:${email}`}>{email}</a><button className="text-link copy-button" onClick={copyEmail}>{copied ? <Check size={15}/> : <Copy size={15}/>}<span aria-live="polite">{copyError ? 'Select the address above to copy it' : copied ? 'Address copied' : 'Copy email address'}</span></button><div className="contact-links"><a href="https://www.linkedin.com/in/afzal-khan-939150192" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a href="https://github.com/afzalkhanlala1" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a></div><p className="location-note">Islamabad, Pakistan<br/>Pakistan Standard Time / UTC +5</p></div><form className="letter-form" onSubmit={event => { event.preventDefault(); window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`; }}><span className="letter-to">To: Afzal Khan</span><label htmlFor="mail-subject">Subject</label><input id="mail-subject" value={subject} maxLength={150} required onChange={event => setSubject(event.target.value)}/><label htmlFor="mail-message">Your note</label><textarea id="mail-message" value={message} maxLength={1600} required rows={6} placeholder="Here’s what I’ve been thinking about…" onChange={event => setMessage(event.target.value)}/><div className="letter-actions"><span>Opens a draft in your email app.</span><button type="submit" className="button button-ink">Open email draft <ArrowUpRight size={16}/></button></div></form></div></main>;
}
