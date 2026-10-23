import { useMemo, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, RotateCcw, Shuffle } from 'lucide-react';
import { ChoiceBar } from './Portfolio';
import { backtestSplit, briefRooms, chooseRule, cityDrivers, crossoverRules, fitPlan, gateThresholds, isStratified, matchDrivers, randomWalk, readJoint, rearSetback, scoreTrajectory, serviceShare, sliceLayout, stairArea, type Constraint, type Floor, type Vehicle } from '@/lib/experiments';

function ExperimentActions({ onReset, to, label, children }: { onReset: () => void; to: string; label: string; children?: ReactNode }) {
  return <div className="experiment-actions">{children}<button className="text-link" onClick={onReset}><RotateCcw size={14}/> Reset experiment</button><Link className="text-link" to={to}>{label} <ArrowUpRight size={14}/></Link></div>;
}

const milestones = ['Tool chosen', 'Arguments valid', 'Recovery succeeded', 'Goal reached'];
export function RewardExperiment() {
  const [completed, setCompleted] = useState([true, true, false, false]);
  const [outcomeWeight, setOutcomeWeight] = useState(50);
  const score = scoreTrajectory(completed, outcomeWeight);
  const toggle = (index: number) => setCompleted(completed.map((value, i) => i === index ? !value : value));
  return <div className="experiment-layout">
    <div className="experiment-controls"><h2>Give progress some credit.</h2><p>A task can fail at the finish line and still make useful progress. Change the completed steps and see how two grading rules respond.</p>
      <fieldset className="milestones"><legend>Which milestones did the agent complete?</legend>{milestones.map((label, index) => <label key={label}><input type="checkbox" checked={completed[index]} onChange={() => toggle(index)}/><span>{label}</span><span>{Math.round(score.weights[index])} pts</span></label>)}</fieldset>
      <label className="range-label" htmlFor="outcome-weight">Weight of the final outcome <output>{outcomeWeight}%</output></label><input id="outcome-weight" type="range" min="0" max="100" step="5" value={outcomeWeight} onChange={event => setOutcomeWeight(Number(event.target.value))}/><div className="range-endpoints"><span>More process credit</span><span>More outcome credit</span></div>
      <ExperimentActions onReset={() => {setCompleted([true,true,false,false]);setOutcomeWeight(50);}} to="/projects/slm-post-training" label="From SLM post-training"/>
    </div>
    <div className="reward-graph"><div className="graph-heading"><h3>Two ways to grade one attempt</h3><span>Score / 100</span></div>
      <svg viewBox="0 0 530 300" role="img" aria-label={`Terminal-only score ${score.terminal} out of 100. Milestone score ${score.partial} out of 100.`}>
        {[0,25,50,75,100].map(value => <g key={value}><line className="chart-gridline" x1={140 + value * 3.1} y1="60" x2={140 + value * 3.1} y2="250"/><text className="axis-label" x={140 + value * 3.1} y="280" textAnchor="middle">{value}</text></g>)}
        <text x="115" y="118" textAnchor="end" className="chart-label">Terminal only</text><rect className="chart-bar-base" x="140" y="85" width="310" height="48"/><rect className="chart-bar-muted" x="140" y="85" width={score.terminal * 3.1} height="48"/>
        <text x="475" y="118" className="chart-value">{score.terminal}</text>
        <text x="115" y="218" textAnchor="end" className="chart-label">Milestones</text><rect className="chart-bar-base" x="140" y="185" width="310" height="48"/><rect className="chart-bar-accent" x="140" y="185" width={score.partial * 3.1} height="48"/><text x="475" y="218" className="chart-value">{score.partial}</text>
      </svg>
      <div className="experiment-result" aria-live="polite"><strong>{score.partial}<span> / 100</span></strong><p>{completed[3] ? 'The final goal is complete. The milestone score also reflects the process you selected.' : `The final goal is incomplete. This rubric still awards ${score.partial} points for the milestones you selected.`}</p></div>
      <p className="demo-note">An interactive illustration of reward design. These are calculated demo scores, not model benchmark results. Remaining process weight is split 40 / 40 / 20 across the first three steps.</p>
    </div>
  </div>;
}

export function StratificationExperiment() {
  const [constraint, setConstraint] = useState<Constraint>('Membership');
  const [x, setX] = useState(0);
  const [y, setY] = useState(1);
  const valid = isStratified(constraint, x, y);
  const actualY = constraint === 'Self-membership' ? x : y;
  const formula = constraint === 'Membership' ? 'x ∈ y' : constraint === 'Equality' ? 'x = y' : 'x ∈ x';
  const requirement = constraint === 'Equality' ? 'type(x) = type(y)' : constraint === 'Self-membership' ? 'type(x) + 1 = type(x)' : 'type(x) + 1 = type(y)';
  return <div className="experiment-layout"><div className="experiment-controls"><h2>Can you make the types fit?</h2><p>Stratification assigns a level to each variable. Membership puts the set one level above its member; equality puts both at the same level.</p><ChoiceBar label="Choose a logical constraint" choices={['Membership','Equality','Self-membership']} value={constraint} onChange={value => setConstraint(value as Constraint)}/><div className="formula-display">{formula}</div>
    <label className="range-label" htmlFor="x-level">Level of x <output>{x}</output></label><input id="x-level" type="range" min="0" max="4" step="1" value={x} onChange={event => setX(Number(event.target.value))}/>
    <label className="range-label" htmlFor="y-level">Level of {constraint === 'Self-membership' ? 'x (same variable)' : 'y'} <output>{actualY}</output></label><input id="y-level" type="range" min="0" max="4" step="1" disabled={constraint === 'Self-membership'} value={actualY} onChange={event => setY(Number(event.target.value))}/>
    <p className="constraint-rule">Required: <span>{requirement}</span></p><ExperimentActions onReset={() => {setConstraint('Membership');setX(0);setY(1);}} to="/research" label="From my research"/>
  </div><div className="type-graph"><div className="graph-heading"><h3>A small type-assignment puzzle</h3><span>Variable levels</span></div><svg viewBox="0 0 530 310" role="img" aria-label={`Level of x is ${x}; level of ${constraint === 'Self-membership' ? 'x' : 'y'} is ${actualY}. ${valid ? 'Constraint satisfied.' : 'Constraint not satisfied.'}`}>
    {[0,1,2,3,4].map(level => <g key={level}><line className="chart-gridline" x1="75" y1={260 - level * 48} x2="480" y2={260 - level * 48}/><text className="axis-label" x="45" y={265 - level * 48}>{level}</text></g>)}
    <path className={`type-connection ${valid ? 'valid' : 'invalid'}`} d={`M180 ${260 - x * 48} L365 ${260 - actualY * 48}`}/>
    <rect className="variable-box" x="145" y={239 - x * 48} width="70" height="42"/><text className="variable-letter" x="180" y={267 - x * 48} textAnchor="middle">x</text>
    <rect className="variable-box second-variable" x="330" y={239 - actualY * 48} width="70" height="42"/><text className="variable-letter" x="365" y={267 - actualY * 48} textAnchor="middle">{constraint === 'Self-membership' ? 'x' : 'y'}</text>
  </svg><div className={`type-result ${valid ? 'valid' : 'invalid'}`} aria-live="polite"><h4>{valid ? 'The levels fit.' : constraint === 'Self-membership' ? 'No level can satisfy this.' : 'Not quite. Move a level.'}</h4><p>{constraint === 'Self-membership' ? 'The same variable would need to be one level above itself. No integer assignment can do that.' : valid ? `This assignment satisfies the ${constraint.toLowerCase()} constraint.` : constraint === 'Membership' ? 'The level of y must be exactly one greater than the level of x.' : 'Equality requires x and y to have the same level.'}</p></div><p className="demo-note">A simplified illustration of syntactic stratification in New Foundations. Satisfying a type constraint does not establish the truth of a formula.</p></div></div>;
}

const signed = (value: number) => `${value >= 0 ? '+' : '−'}${Math.abs(Math.round(value * 100))}%`;
const listNames = (names: string[]) => names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}` : names[0];

export function GateExperiment() {
  const [visibility, setVisibility] = useState(0.92);
  const [jitter, setJitter] = useState(3);
  const [inPlane, setInPlane] = useState(0.95);
  const joint = readJoint(visibility, jitter, inPlane);
  const failed = joint.gates.filter(gate => !gate.pass).map(gate => gate.name.toLowerCase());
  const y = (deg: number) => 250 - deg * 200 / 180;
  const low = Math.min(...joint.readings), high = Math.max(...joint.readings);
  return <div className="experiment-layout"><div className="experiment-controls"><h2>Can you trust this angle?</h2><p>One phone camera cannot measure every joint. Before Grip Intelligence grades a measurement, it must pass three reliability gates. Make the footage worse and see which gate catches it.</p>
    <label className="range-label" htmlFor="gate-visibility">Landmark visibility <output>{visibility.toFixed(2)}</output></label><input id="gate-visibility" type="range" min="0.3" max="1" step="0.01" value={visibility} onChange={event => setVisibility(Number(event.target.value))}/><div className="range-endpoints"><span>Arm hidden behind body</span><span>Clearly seen</span></div>
    <label className="range-label" htmlFor="gate-jitter">Frame-to-frame jitter <output>±{jitter}°</output></label><input id="gate-jitter" type="range" min="0" max="30" step="1" value={jitter} onChange={event => setJitter(Number(event.target.value))}/><div className="range-endpoints"><span>Sharp footage</span><span>Motion blur</span></div>
    <label className="range-label" htmlFor="gate-plane">Arm square to the camera <output>{inPlane.toFixed(2)}</output></label><input id="gate-plane" type="range" min="0.5" max="1" step="0.01" value={inPlane} onChange={event => setInPlane(Number(event.target.value))}/><div className="range-endpoints"><span>Turned away</span><span>Square on</span></div>
    <ExperimentActions onReset={() => {setVisibility(0.92);setJitter(3);setInPlane(0.95);}} to="/projects/grip-intelligence" label="From Grip Intelligence"/>
  </div><div className="lab-graph"><div className="graph-heading"><h3>Lead elbow at impact, frame by frame</h3><span>Nine-frame window</span></div>
    <svg viewBox="0 0 530 290" role="img" aria-label={`Nine readings between ${Math.round(low)} and ${Math.round(high)} degrees against a true angle of 168 degrees. ${joint.graded ? 'Graded.' : 'Not graded.'}`}>
      {[0, 45, 90, 135, 180].map(deg => <g key={deg}><line className="chart-gridline" x1="80" y1={y(deg)} x2="500" y2={y(deg)}/><text className="axis-label" x="66" y={y(deg) + 4} textAnchor="end">{deg}°</text></g>)}
      <rect className={`reading-band ${joint.gates[1].pass ? '' : 'unstable'}`} x="92" y={y(high) - 4} width="396" height={Math.max(8, y(low) - y(high) + 8)}/>
      <line className="true-angle" x1="80" y1={y(168)} x2="500" y2={y(168)}/><text className="axis-label true-label" x="500" y={y(168) - 9} textAnchor="end">True angle 168°</text>
      {joint.readings.map((deg, index) => <g key={index}><circle className={`reading-dot ${joint.graded ? '' : 'ungraded'}`} cx={110 + index * 45} cy={y(deg)} r="6"/><text className="axis-label" x={110 + index * 45} y="276" textAnchor="middle">{index + 1}</text></g>)}
    </svg>
    <ul className="gate-list">{joint.gates.map(gate => <li key={gate.name} className={gate.pass ? 'pass' : 'fail'}><span>{gate.pass ? '✓' : '✕'}</span><strong>{gate.name}</strong><em>{gate.detail}</em><span>{gate.value} <small>needs {gate.limit}</small></span></li>)}</ul>
    <div className="experiment-result" aria-live="polite"><strong>{joint.graded ? `${Math.round(joint.reading)}°` : '—'}</strong><p>{joint.graded ? `All three gates pass, so this reading is scored. It sits ${Math.abs(Math.round(joint.error))}° from the true angle.` : `Reported, never graded: the ${listNames(failed)} gate${failed.length > 1 ? 's' : ''} failed. The raw reading is ${Math.round(joint.reading)}°, ${Math.abs(Math.round(joint.error))}° from the truth.${!joint.gates[0].pass && joint.gates[1].pass ? ' The frames still agree: an inferred joint can be stable and wrong.' : ''}`}</p></div>
    <p className="demo-note">Gate thresholds ({gateThresholds.visibility} visibility, {gateThresholds.spread}° spread, {gateThresholds.inPlane} in-plane) are the shipped values from Grip Intelligence’s calibration profile. Readings are simulated for illustration; the true angle stands in for a lab measurement.</p>
  </div></div>;
}

const plots = [{ label: '25 × 50 ft', width: 25, depth: 50 }, { label: '35 × 70 ft', width: 35, depth: 70 }, { label: '50 × 90 ft', width: 50, depth: 90 }];
export function PlanExperiment() {
  const [plotLabel, setPlotLabel] = useState('35 × 70 ft');
  const [storeys, setStoreys] = useState<1 | 2>(2);
  const [front, setFront] = useState(10);
  const [side, setSide] = useState(5);
  const [coverage, setCoverage] = useState(65);
  const [selected, setSelected] = useState(briefRooms.map(room => room.name));
  const [floorView, setFloorView] = useState<Floor>('Ground');
  const plot = plots.find(item => item.label === plotLabel) || plots[1];
  const rooms = briefRooms.filter(room => selected.includes(room.name));
  const plan = fitPlan(plot, front, side, coverage, storeys, rooms);
  const floor = plan.floors.find(item => item.name === floorView) || plan.floors[0];
  const fullest = plan.floors.reduce((top, item) => item.fill > top.fill ? item : top);
  const scale = Math.min(440 / plot.depth, 250 / plot.width);
  const ox = 72, oy = (290 - plot.width * scale) / 2;
  const squeeze = floor.needed ? Math.min(1, plan.footprint / floor.needed) : 1;
  const items = [...floor.rooms.map(room => ({ name: room.name, area: room.area })), { name: 'Services', area: floor.roomArea * serviceShare }, ...(storeys === 2 ? [{ name: 'Stair', area: stairArea }] : [])]
    .filter(item => item.area > 0).map(item => ({ ...item, area: item.area * squeeze, requested: item.area }));
  const leftover = plan.footprint - items.reduce((sum, item) => sum + item.area, 0);
  const cells = sliceLayout(leftover > 1 ? [...items, { name: '', area: leftover }] : items, front, side, plan.footprintDepth, plan.envelopeWidth);
  const toggle = (name: string) => setSelected(selected.includes(name) ? selected.filter(item => item !== name) : [...selected, name]);
  const reset = () => {setPlotLabel('35 × 70 ft');setStoreys(2);setFront(10);setSide(5);setCoverage(65);setSelected(briefRooms.map(room => room.name));setFloorView('Ground');};
  const over = Math.max(...plan.floors.map(item => item.needed - plan.footprint));
  const sx = (ft: number) => ox + ft * scale, sy = (ft: number) => oy + ft * scale;
  return <div className="experiment-layout"><div className="experiment-controls"><h2>Will the brief fit the plot?</h2><p>ArchitectAI checks every requested room before it draws a plan. Setbacks and coverage shrink the buildable footprint; the brief has to fit inside it, floor by floor.</p>
    <ChoiceBar label="Choose a plot size" choices={plots.map(item => item.label)} value={plotLabel} onChange={setPlotLabel}/>
    <ChoiceBar label="Choose the number of storeys" choices={['1 storey', '2 storeys']} value={storeys === 1 ? '1 storey' : '2 storeys'} onChange={value => {setStoreys(value === '1 storey' ? 1 : 2);setFloorView('Ground');}}/>
    <label className="range-label" htmlFor="plan-front">Front setback <output>{front} ft</output></label><input id="plan-front" type="range" min="5" max="20" step="1" value={front} onChange={event => setFront(Number(event.target.value))}/>
    <label className="range-label" htmlFor="plan-side">Side setbacks <output>{side} ft each</output></label><input id="plan-side" type="range" min="0" max="10" step="1" value={side} onChange={event => setSide(Number(event.target.value))}/>
    <label className="range-label" htmlFor="plan-coverage">Maximum ground coverage <output>{coverage}%</output></label><input id="plan-coverage" type="range" min="40" max="80" step="5" value={coverage} onChange={event => setCoverage(Number(event.target.value))}/>
    <fieldset className="milestones room-grid"><legend>Which rooms are in the brief?</legend>{briefRooms.map(room => <label key={room.name}><input type="checkbox" checked={selected.includes(room.name)} onChange={() => toggle(room.name)}/><span>{room.name}</span><span>{room.area} ft²{storeys === 2 ? ` · ${room.floor === 'Ground' ? 'G' : 'U'}` : ''}</span></label>)}</fieldset>
    <ExperimentActions onReset={reset} to="/projects/architectai" label="From ArchitectAI"/>
  </div><div className="lab-graph"><div className="graph-heading"><h3>{storeys === 2 ? `${floor.name} floor` : 'Ground floor'}, {plot.label} plot</h3>{storeys === 2 ? <ChoiceBar label="Choose a floor" choices={['Ground', 'Upper']} value={floor.name} onChange={value => setFloorView(value as Floor)}/> : <span>Road on the left</span>}</div>
    <svg viewBox="0 0 530 290" role="img" aria-label={`${floor.name} floor needs ${floor.needed} square feet; the buildable footprint is ${Math.round(plan.footprint)} square feet.`}>
      <rect className="road" x="22" y={oy} width="30" height={plot.width * scale}/><text className="axis-label road-label" transform={`translate(41 ${oy + plot.width * scale / 2}) rotate(-90)`} textAnchor="middle">Road</text>
      <rect className="plot-outline" x={ox} y={oy} width={plot.depth * scale} height={plot.width * scale}/>
      <text className="axis-label" x={ox + plot.depth * scale / 2} y={oy - 7} textAnchor="middle">{plot.depth} ft deep · {plot.width} ft frontage</text>
      <rect className="envelope" x={sx(front)} y={sy(side)} width={plan.envelopeDepth * scale} height={plan.envelopeWidth * scale}/>
      {cells.map(cell => <g key={cell.name || 'open'}><rect className={`room-cell ${cell.name === '' ? 'open' : cell.name === 'Services' || cell.name === 'Stair' ? 'service' : ''} ${squeeze < 1 ? 'squeezed' : ''}`} x={sx(cell.x)} y={sy(cell.y)} width={cell.w * scale} height={cell.h * scale}/>
        {cell.name && cell.w * scale > 44 && cell.h * scale > 26 && <text className="room-label" x={sx(cell.x + cell.w / 2)} y={sy(cell.y + cell.h / 2) - 2} textAnchor="middle">{cell.name}<tspan x={sx(cell.x + cell.w / 2)} dy="13">{Math.round(items.find(item => item.name === cell.name)?.requested || 0)} ft²</tspan></text>}</g>)}
      {plan.footprint === 0 && <text className="chart-label" x={ox + plot.depth * scale / 2} y={oy + plot.width * scale / 2} textAnchor="middle">No buildable area</text>}
    </svg>
    <div className="experiment-result" aria-live="polite"><strong>{plan.footprint ? `${Math.round(fullest.fill * 100)}%` : '—'}<span> full</span></strong><p>{!plan.footprint ? 'The setbacks leave no buildable area on this plot.' : plan.fits ? `Every requested room fits. The fullest floor uses ${Math.round(fullest.fill * 100)}% of the ${Math.round(plan.footprint)} ft² footprint.` : `Over by ${over} ft² on the ${fullest.name.toLowerCase()} floor. Rooms are drawn squeezed. Add a storey, relax a setback or drop a room.`}</p></div>
    <p className="demo-note">Setback and coverage values are assumptions, not CDA rules; the rear setback is fixed at {rearSetback} ft. Rooms take their brief area plus {serviceShare * 100}% for baths, walls and circulation{storeys === 2 ? `, and an ${stairArea} ft² stair per floor` : ''}. ArchitectAI’s solver also handles adjacency, light and structure; this shows only the area check.</p>
  </div></div>;
}

const firstMarket = 34;
export function BacktestExperiment() {
  const [seed, setSeed] = useState(firstMarket);
  const [tried, setTried] = useState(20);
  const [cost, setCost] = useState(10);
  const prices = useMemo(() => randomWalk(seed), [seed]);
  const { best, buyHold } = useMemo(() => chooseRule(prices, tried, cost), [prices, tried, cost]);
  const { warmup, test } = backtestSplit;
  const low = Math.min(...prices), high = Math.max(...prices);
  const x = (day: number) => 40 + day * 470 / (prices.length - 1);
  const y = (price: number) => 215 - (price - low) / (high - low) * 165;
  const path = prices.map((price, day) => `${day ? 'L' : 'M'}${x(day).toFixed(1)} ${y(price).toFixed(1)}`).join('');
  const runs: [number, number][] = [];
  best.positions.forEach((held, day) => { if (!held || day <= warmup) return; const last = runs[runs.length - 1]; if (last && last[1] === day - 1) last[1] = day; else runs.push([day, day]); });
  return <div className="experiment-layout"><div className="experiment-controls"><h2>Luck or edge?</h2><p>This market is a random walk, so no rule can have a real edge. Try more moving-average rules on the first period, keep the best one, then run it on a period it has never seen.</p>
    <label className="range-label" htmlFor="backtest-tried">Rules tried <output>{tried} of {crossoverRules.length}</output></label><input id="backtest-tried" type="range" min="1" max={crossoverRules.length} step="1" value={tried} onChange={event => setTried(Number(event.target.value))}/><div className="range-endpoints"><span>One honest guess</span><span>Search everything</span></div>
    <label className="range-label" htmlFor="backtest-cost">Cost per trade <output>{cost} bps</output></label><input id="backtest-cost" type="range" min="0" max="50" step="5" value={cost} onChange={event => setCost(Number(event.target.value))}/>
    <ExperimentActions onReset={() => {setSeed(firstMarket);setTried(20);setCost(10);}} to="/projects/wavebook" label="From Wavebook"><button className="text-link" onClick={() => setSeed(seed + 1)}><Shuffle size={14}/> New random market</button></ExperimentActions>
  </div><div className="lab-graph"><div className="graph-heading"><h3>Market #{seed}: chosen, then tested</h3><span>600 simulated days</span></div>
    <svg viewBox="0 0 530 290" role="img" aria-label={`Best rule returned ${signed(best.inSample)} in the selection period and ${signed(best.outOfSample)} in the untouched test period.`}>
      <rect className="period-select" x={x(warmup)} y="28" width={x(test) - x(warmup)} height="200"/>
      <line className="period-divider" x1={x(test)} y1="22" x2={x(test)} y2="250"/>
      <text className="axis-label" x={x(warmup / 2)} y="20" textAnchor="middle">Warm-up</text><text className="axis-label" x={(x(warmup) + x(test)) / 2} y="20" textAnchor="middle">Rule chosen here</text><text className="axis-label" x={(x(test) + x(prices.length - 1)) / 2} y="20" textAnchor="middle">Untouched test</text>
      <path className="price-line" d={path}/>
      {runs.map(([start, end]) => <rect key={start} className="position-run" x={x(start)} y="238" width={Math.max(1, x(end) - x(start))} height="9"/>)}
      <text className="axis-label" x="36" y="246" textAnchor="end">In</text>
      <text className={`chart-value ${best.inSample >= 0 ? 'gain' : 'loss'}`} x={(x(warmup) + x(test)) / 2} y="278" textAnchor="middle">{signed(best.inSample)}</text>
      <text className={`chart-value ${best.outOfSample >= 0 ? 'gain' : 'loss'}`} x={(x(test) + x(prices.length - 1)) / 2} y="278" textAnchor="middle">{signed(best.outOfSample)}</text>
    </svg>
    <div className="experiment-result" aria-live="polite"><strong>{signed(best.outOfSample)}</strong><p>{`The best of ${tried} rule${tried > 1 ? 's' : ''}, a ${best.fast}/${best.slow}-day crossover, made ${signed(best.inSample)} where it was chosen and ${signed(best.outOfSample)} on unseen days. Buy and hold made ${signed(buyHold)} over the test.`}{tried > 1 ? ' Searching harder improves the first number, not the second.' : ''}</p></div>
    <p className="demo-note">Simulated prices with 1.5% daily volatility and no drift. Long-only crossover rules act on the previous close and pay the cost on every entry and exit; the strip marks days in the market. An illustration of Wavebook’s select-then-evaluate protocol, not a trading result.</p>
  </div></div>;
}

const mapScale = 40, mapX = 25, mapY = 18;
export function MatchExperiment() {
  const [pickup, setPickup] = useState({ x: 6, y: 4 });
  const [vehicle, setVehicle] = useState<Vehicle>('Car');
  const [radius, setRadius] = useState(5);
  const [minRating, setMinRating] = useState(4);
  const matches = matchDrivers(pickup, vehicle, radius, minRating);
  const [first] = matches;
  const place = (x: number, y: number) => setPickup({ x: Math.round(Math.min(12, Math.max(0, x)) * 10) / 10, y: Math.round(Math.min(8, Math.max(0, y)) * 10) / 10 });
  const onClick = (event: MouseEvent<SVGSVGElement>) => {
    const svg = event.currentTarget, matrix = svg.getScreenCTM();
    if (!matrix) return;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    place((point.x - mapX) / mapScale, (point.y - mapY) / mapScale);
  };
  const onKey = (event: KeyboardEvent<SVGSVGElement>) => {
    const moves: Record<string, [number, number]> = { ArrowLeft: [-0.25, 0], ArrowRight: [0.25, 0], ArrowUp: [0, -0.25], ArrowDown: [0, 0.25] };
    if (!moves[event.key]) return;
    event.preventDefault();
    place(pickup.x + moves[event.key][0], pickup.y + moves[event.key][1]);
  };
  const px = (km: number) => mapX + km * mapScale, py = (km: number) => mapY + km * mapScale;
  return <div className="experiment-layout"><div className="experiment-controls"><h2>Who gets the ride?</h2><p>Drop a pickup on the map. Ciara’s matching service searches a radius, filters by vehicle and rating, and offers the ride to the nearest driver who qualifies.</p>
    <ChoiceBar label="Choose a vehicle" choices={['Car', 'Bike']} value={vehicle} onChange={value => setVehicle(value as Vehicle)}/>
    <label className="range-label" htmlFor="match-radius">Search radius <output>{radius} km</output></label><input id="match-radius" type="range" min="1" max="8" step="0.5" value={radius} onChange={event => setRadius(Number(event.target.value))}/>
    <label className="range-label" htmlFor="match-rating">Minimum driver rating <output>★ {minRating.toFixed(1)}</output></label><input id="match-rating" type="range" min="3.8" max="5" step="0.1" value={minRating} onChange={event => setMinRating(Number(event.target.value))}/>
    <ol className="match-list">{matches.slice(0, 3).map(driver => <li key={driver.id}><strong>{driver.id}</strong><span>{driver.distance.toFixed(1)} km · ★ {driver.rating.toFixed(1)}</span><span>{driver.eta} min</span></li>)}</ol>
    <ExperimentActions onReset={() => {setPickup({ x: 6, y: 4 });setVehicle('Car');setRadius(5);setMinRating(4);}} to="/projects/ciara" label="From Ciara"/>
  </div><div className="lab-graph"><div className="graph-heading"><h3>A 12 × 8 km city grid</h3><span>Click, or focus and use arrow keys</span></div>
    <svg className="match-map" viewBox="0 0 530 356" tabIndex={0} onClick={onClick} onKeyDown={onKey} role="group" aria-label={`City map. Pickup at ${pickup.x} by ${pickup.y} kilometres. Click to move the pickup, or use the arrow keys.`}>
      <defs><clipPath id="map-area"><rect x={mapX} y={mapY} width={12 * mapScale} height={8 * mapScale}/></clipPath></defs>
      <rect className="map-ground" x={mapX} y={mapY} width={12 * mapScale} height={8 * mapScale}/>
      {Array.from({ length: 13 }, (_, km) => <line key={`v${km}`} className="chart-gridline" x1={px(km)} y1={py(0)} x2={px(km)} y2={py(8)}/>)}
      {Array.from({ length: 9 }, (_, km) => <line key={`h${km}`} className="chart-gridline" x1={px(0)} y1={py(km)} x2={px(12)} y2={py(km)}/>)}
      <circle className="search-radius" cx={px(pickup.x)} cy={py(pickup.y)} r={radius * mapScale} clipPath="url(#map-area)"/>
      {first && <line className="match-line" x1={px(pickup.x)} y1={py(pickup.y)} x2={px(first.x)} y2={py(first.y)}/>}
      {cityDrivers.map(driver => {
        const rank = matches.findIndex(match => match.id === driver.id);
        const state = rank === 0 ? 'matched' : rank > 0 ? 'eligible' : 'ineligible';
        return <g key={driver.id} className={`driver ${state}`}>{driver.vehicle === 'Car' ? <rect x={px(driver.x) - 6} y={py(driver.y) - 6} width="12" height="12"/> : <circle cx={px(driver.x)} cy={py(driver.y)} r="6.5"/>}
          {rank >= 0 && rank < 3 && <text className="driver-label" x={px(driver.x) + 10} y={py(driver.y) - 8}>{rank + 1}</text>}</g>;
      })}
      <circle className="pickup-ring" cx={px(pickup.x)} cy={py(pickup.y)} r="11"/><circle className="pickup" cx={px(pickup.x)} cy={py(pickup.y)} r="5"/>
      <g className="map-legend"><rect x={mapX} y="345" width="9" height="9"/><text className="axis-label" x={mapX + 14} y="353">Car</text><circle cx={mapX + 60} cy="349.5" r="5"/><text className="axis-label" x={mapX + 70} y="353">Bike</text><text className="axis-label" x={mapX + 12 * mapScale} y="353" textAnchor="end">1 square = 1 km</text></g>
    </svg>
    <div className="experiment-result" aria-live="polite"><strong>{first ? `${first.eta}` : '—'}<span> min</span></strong><p>{first ? `${first.id} is ${first.distance.toFixed(1)} km away with a ★ ${first.rating.toFixed(1)} rating. ${matches.length} ${vehicle.toLowerCase()}${matches.length > 1 ? 's' : ''} qualif${matches.length > 1 ? 'y' : 'ies'} within ${radius} km.` : `No ${vehicle.toLowerCase()} within ${radius} km has ★ ${minRating.toFixed(1)} or better. The service would rematch with a wider search.`}</p></div>
    <p className="demo-note">Fictional drivers on a flat grid. The production service runs a Redis GEORADIUS search (nearest first) with the same vehicle and rating filters, and estimates ETA at 30 km/h, rounded up.</p>
  </div></div>;
}
