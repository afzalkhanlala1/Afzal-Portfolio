import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return <main id="main-content" className="not-found shell">
    <span className="section-kicker">404 / A small detour</span>
    <h1>Nothing built here. Yet.</h1>
    <p>The page you’re looking for doesn’t exist. There’s plenty to explore in the project collection.</p>
    <Link className="button button-ink" to="/">
      <ArrowLeft size={17} /> Back to the portfolio</Link>
  </main>;
}
