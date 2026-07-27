import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div>
          <p className="section-sup">Ready to get started?</p>
          <h2 className="section-title">Join your campus recovery network today.</h2>
          <p className="section-text">Create a free account and start reporting lost or found items in minutes. The faster you share, the sooner belongings return home.</p>
        </div>
        <div className="cta-actions">
          <Link className="button-primary" to="/register">Create account</Link>
          <Link className="button-secondary" to="/browse">Browse live listings</Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
