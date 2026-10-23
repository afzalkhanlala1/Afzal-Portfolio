import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ChoiceBar, PageHeading } from '@/components/Portfolio';

const notes = {
  Stratification: { formula: 'x ∈ y', rule: 'type(y) = type(x) + 1', title: 'When the levels line up.', text: 'Working through stratification problems, NF permutation models, and typical ambiguity. The first question is whether a formula admits a consistent assignment of types.' },
  'Proof theory': { formula: 'Γ ⊢ A', rule: 'From assumptions to a derivation', title: 'The structure behind a proof.', text: 'Studying Gentzen cut elimination and the ε₀ consistency machinery, with a proposed research direction around intuitionistic New Foundations and the obstruction to transfer to classical NF.' },
  Formalisation: { formula: 'spec → proof', rule: 'Make the assumptions explicit', title: 'Reasoning that can be checked.', text: 'Studying Lean 4 and formalisation work associated with Con(NF). In engineering, this interest translates into precise task specifications, verifiers, and tests that expose failure modes.' }
};

export default function Research() {
  const [topic, setTopic] = useState<keyof typeof notes>('Stratification');
  const note = notes[topic];
  return <main id="main-content" className="page shell research-page"><PageHeading title="What counts as a proof?"><p>A question that follows me<br/>from mathematics into engineering.</p></PageHeading><div className="research-layout"><div className="research-intro"><h2>Following the question<br/>all the way down.</h2><p>I’m preparing for independent research in mathematical logic and intuitionistic New Foundations, guided by Dr Thomas Forster.</p><p>Since July 2026, that has meant fourth-year logic coursework, stratification problems, NF literature, and proof-theoretic study.</p><p>It is ongoing research preparation. The same habits shape my engineering: explicit assumptions, careful specifications, and mechanically checkable conditions.</p><Link className="button button-ink" to="/lab?experiment=types">Try a stratification puzzle <ArrowUpRight size={17}/></Link></div><section className="research-notebook" aria-label="Research interests"><ChoiceBar label="Research topic" choices={Object.keys(notes)} value={topic} onChange={value => setTopic(value as keyof typeof notes)}/><div className="research-formula" aria-live="polite"><span>{note.formula}</span><p>{note.rule}</p></div><div className="research-note" aria-live="polite"><h2>{note.title}</h2><p>{note.text}</p></div><span className="notebook-footer">Notes from an ongoing line of inquiry.</span></section></div></main>;
}
