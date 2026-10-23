export function scoreTrajectory(completed: boolean[], outcomeWeight: number) {
  const outcome = Math.min(100, Math.max(0, outcomeWeight));
  const process = 100 - outcome;
  const weights = [process * 0.4, process * 0.4, process * 0.2, outcome];
  return {
    weights,
    partial: Math.round(weights.reduce((sum, weight, index) => sum + (completed[index] ? weight : 0), 0)),
    terminal: completed[3] ? 100 : 0,
  };
}

export type Constraint = 'Membership' | 'Equality' | 'Self-membership';
export function isStratified(constraint: Constraint, x: number, y: number) {
  if (constraint === 'Self-membership') return false;
  return constraint === 'Membership' ? y === x + 1 : x === y;
}

// Grip Intelligence: thresholds from the pipeline's calibration profile (reliability_gates).
export const gateThresholds = { visibility: 0.75, spread: 25, inPlane: 0.8 };
const jitterPattern = [0, 0.55, -0.35, 1, -0.7, 0.25, -1, 0.45, -0.15];
const clampAngle = (deg: number) => Math.min(180, Math.max(0, deg));
export function projectedAngle(trueDeg: number, inPlane: number) {
  const radians = trueDeg * Math.PI / 180;
  const along = inPlane * Math.cos(radians);
  return Math.acos(along / Math.hypot(along, Math.sin(radians))) * 180 / Math.PI;
}
export function readJoint(visibility: number, jitter: number, inPlane: number, trueDeg = 168) {
  // Below the visibility floor the pose model fills the joint in, drifting towards an impossible bent arm.
  const inferred = visibility >= gateThresholds.visibility ? 0 : Math.min(1, (gateThresholds.visibility - visibility) / 0.35);
  const seen = projectedAngle(trueDeg, inPlane);
  const centre = seen + (30 - seen) * inferred;
  const readings = jitterPattern.map(offset => clampAngle(centre + offset * jitter));
  const spread = Math.max(...readings) - Math.min(...readings);
  const reading = [...readings].sort((a, b) => a - b)[Math.floor(readings.length / 2)];
  const gates = [
    { name: 'Visibility', detail: 'Was the joint seen?', value: visibility.toFixed(2), limit: `≥ ${gateThresholds.visibility}`, pass: visibility >= gateThresholds.visibility },
    { name: 'Stability', detail: 'Do nearby frames agree?', value: `${Math.round(spread)}°`, limit: `≤ ${gateThresholds.spread}°`, pass: spread <= gateThresholds.spread },
    { name: 'In-plane', detail: 'Is a 2D angle meaningful?', value: inPlane.toFixed(2), limit: `≥ ${gateThresholds.inPlane}`, pass: inPlane >= gateThresholds.inPlane },
  ];
  return { readings, reading, spread, gates, graded: gates.every(gate => gate.pass), error: reading - trueDeg };
}

// ArchitectAI: setbacks and coverage decide the footprint; the brief decides whether it fits.
export type Floor = 'Ground' | 'Upper';
export interface BriefRoom { name: string; area: number; floor: Floor }
export const briefRooms: BriefRoom[] = [
  { name: 'Drawing', area: 200, floor: 'Ground' }, { name: 'Living', area: 260, floor: 'Ground' },
  { name: 'Kitchen', area: 120, floor: 'Ground' }, { name: 'Guest bed', area: 160, floor: 'Ground' },
  { name: 'Master bed', area: 240, floor: 'Upper' }, { name: 'Bed 2', area: 180, floor: 'Upper' }, { name: 'Bed 3', area: 160, floor: 'Upper' },
];
export const serviceShare = 0.25;
export const stairArea = 80;
export const rearSetback = 5;
export function fitPlan(plot: { width: number; depth: number }, front: number, side: number, coverage: number, storeys: 1 | 2, rooms: BriefRoom[]) {
  const envelopeWidth = Math.max(0, plot.width - 2 * side);
  const envelopeDepth = Math.max(0, plot.depth - front - rearSetback);
  const coverageCap = plot.width * plot.depth * coverage / 100;
  const footprintDepth = envelopeWidth ? Math.min(envelopeDepth, coverageCap / envelopeWidth) : 0;
  const footprint = envelopeWidth * footprintDepth;
  const floorNames: Floor[] = storeys === 1 ? ['Ground'] : ['Ground', 'Upper'];
  const floors = floorNames.map(name => {
    const onFloor = rooms.filter(room => storeys === 1 || room.floor === name);
    const roomArea = onFloor.reduce((sum, room) => sum + room.area, 0);
    const needed = Math.round(roomArea * (1 + serviceShare) + (storeys === 2 ? stairArea : 0));
    return { name, rooms: onFloor, roomArea, needed, fill: footprint ? needed / footprint : Infinity };
  });
  return { envelopeWidth, envelopeDepth, coverageCap, footprintDepth, footprint, floors, fits: floors.every(floor => floor.needed <= footprint) };
}
export interface LayoutCell { name: string; area: number; x: number; y: number; w: number; h: number }
export function sliceLayout(items: { name: string; area: number }[], x: number, y: number, w: number, h: number): LayoutCell[] {
  if (!items.length) return [];
  if (items.length === 1) return [{ ...items[0], x, y, w, h }];
  const total = items.reduce((sum, item) => sum + item.area, 0);
  let before = 0, split = 0;
  for (let i = 0; i < items.length - 1; i++) {
    if (split > 0 && before + items[i].area > total / 2) break;
    before += items[i].area; split = i + 1;
  }
  const share = total ? before / total : 0.5;
  const [first, rest] = [items.slice(0, split), items.slice(split)];
  return w >= h
    ? [...sliceLayout(first, x, y, w * share, h), ...sliceLayout(rest, x + w * share, y, w * (1 - share), h)]
    : [...sliceLayout(first, x, y, w, h * share), ...sliceLayout(rest, x, y + h * share, w, h * (1 - share))];
}

// Wavebook: choose a rule on one period of a random walk, then test it on an untouched one.
export function seededRandom(seed: number) {
  let state = seed | 0;
  return () => {
    state = state + 0x6d2b79f5 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
export function randomWalk(seed: number, length = 600, volatility = 0.015) {
  const random = seededRandom(seed);
  const prices = [100];
  for (let i = 1; i < length; i++) {
    const z = Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());
    prices.push(prices[i - 1] * Math.exp(volatility * z - volatility * volatility / 2));
  }
  return prices;
}
export const crossoverRules = (() => {
  const rules: [number, number][] = [];
  for (const fast of [3, 5, 8, 10, 13, 15, 20, 25]) for (const slow of [30, 40, 50, 60, 80, 100, 120]) rules.push([fast, slow]);
  const random = seededRandom(7);
  for (let i = rules.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [rules[i], rules[j]] = [rules[j], rules[i]]; }
  return rules;
})();
export const backtestSplit = { warmup: 120, test: 360 };
function crossoverPositions(prices: number[], fast: number, slow: number) {
  const sums = [0];
  for (const price of prices) sums.push(sums[sums.length - 1] + price);
  const average = (end: number, window: number) => (sums[end + 1] - sums[end + 1 - window]) / window;
  // The position held into day t is decided at the close of day t - 1.
  return prices.map((_, t) => t > slow && average(t - 1, fast) > average(t - 1, slow) ? 1 : 0);
}
function periodReturn(prices: number[], positions: number[], start: number, end: number, costBps: number) {
  let equity = 1, held = 0;
  for (let t = start + 1; t <= end; t++) {
    if (positions[t] !== held) { equity *= 1 - costBps / 10000; held = positions[t]; }
    if (held) equity *= prices[t] / prices[t - 1];
  }
  if (held) equity *= 1 - costBps / 10000;
  return equity - 1;
}
export function chooseRule(prices: number[], tried: number, costBps: number) {
  const { warmup, test } = backtestSplit;
  const last = prices.length - 1;
  const candidates = crossoverRules.slice(0, Math.max(1, Math.min(tried, crossoverRules.length))).map(([fast, slow]) => {
    const positions = crossoverPositions(prices, fast, slow);
    return { fast, slow, positions, inSample: periodReturn(prices, positions, warmup, test, costBps), outOfSample: periodReturn(prices, positions, test, last, costBps) };
  });
  const best = candidates.reduce((top, rule) => rule.inSample > top.inSample ? rule : top);
  return { best, buyHold: prices[last] / prices[test] - 1, tried: candidates.length };
}

// Ciara: radius search, vehicle and rating filters, nearest first, ETA at 30 km/h.
export type Vehicle = 'Car' | 'Bike';
export interface Driver { id: string; x: number; y: number; vehicle: Vehicle; rating: number }
const driverSeeds: [number, number, Vehicle, number][] = [
  [1.2, 1.4, 'Car', 4.6], [2.8, 6.3, 'Bike', 4.8], [3.4, 3.1, 'Car', 4.2], [4.6, 5.6, 'Car', 4.9], [5.1, 1.8, 'Bike', 4.4],
  [6.7, 4.9, 'Bike', 4.1], [7.3, 2.6, 'Car', 4.7], [8.2, 6.6, 'Car', 4.3], [9.1, 3.8, 'Bike', 4.9], [10.4, 1.2, 'Car', 4.5],
  [10.9, 5.7, 'Bike', 4.6], [2.1, 4.6, 'Bike', 4.0], [8.8, 0.9, 'Car', 3.9], [5.9, 7.1, 'Car', 4.8], [11.3, 3.4, 'Car', 4.1],
];
export const cityDrivers: Driver[] = driverSeeds.map(([x, y, vehicle, rating], index) => ({ id: `${vehicle === 'Car' ? 'C' : 'B'}-${String(index + 1).padStart(2, '0')}`, x, y, vehicle, rating }));
export const etaMinutes = (distanceKm: number, speedKmh = 30) => Math.ceil(distanceKm / speedKmh * 60);
export function matchDrivers(pickup: { x: number; y: number }, vehicle: Vehicle, radiusKm: number, minRating: number) {
  return cityDrivers
    .filter(driver => driver.vehicle === vehicle && driver.rating >= minRating)
    .map(driver => ({ ...driver, distance: Math.hypot(driver.x - pickup.x, driver.y - pickup.y) }))
    .filter(driver => driver.distance <= radiusKm)
    .sort((a, b) => a.distance - b.distance)
    .map(driver => ({ ...driver, eta: etaMinutes(driver.distance) }));
}
