import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container detail-card">
        <p className="section-tag">404</p>
        <h2>Page not found</h2>
        <p>The page you requested does not exist.</p>
        <Link className="button button-primary" to="/Home">
          Back to Home
        </Link>
      </div>
    </section>
  );
}