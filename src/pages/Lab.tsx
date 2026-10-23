import { useSearchParams } from 'react-router-dom';
import { ChoiceBar, PageHeading } from '@/components/Portfolio';
import { BacktestExperiment, GateExperiment, MatchExperiment, PlanExperiment, RewardExperiment, StratificationExperiment } from '@/components/Experiments';

const experiments = [
  { key: 'rewards', label: 'Reward signals', Experiment: RewardExperiment },
  { key: 'types', label: 'Stratification', Experiment: StratificationExperiment },
  { key: 'gates', label: 'Reliability gates', Experiment: GateExperiment },
  { key: 'plot', label: 'Plot fit', Experiment: PlanExperiment },
  { key: 'backtest', label: 'Luck or edge', Experiment: BacktestExperiment },
  { key: 'match', label: 'Ride matching', Experiment: MatchExperiment },
];

export default function Lab() {
  const [params, setParams] = useSearchParams();
  const current = experiments.find(item => item.key === params.get('experiment')) || experiments[0];
  return <main id="main-content" className="page shell lab-page"><PageHeading title="A place to poke things."><p>Six ideas from my work, made tangible.{' '}<br/>Change something. See what happens.</p></PageHeading><ChoiceBar label="Choose an experiment" choices={experiments.map(item => item.label)} value={current.label} onChange={value => setParams({ experiment: experiments.find(item => item.label === value)?.key || 'rewards' }, { preventScrollReset: true })}/><section className="lab-bench" aria-label={current.label}><current.Experiment key={current.key}/></section></main>;
}
