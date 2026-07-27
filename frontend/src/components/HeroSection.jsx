import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <span className="eyebrow">Campus Lost & Found</span>
        <h1 className="hero-title">Find lost campus items faster and recover them with confidence.</h1>
        <p className="hero-text">A modern platform for students to report lost or found items, search listings, and manage claims in one trusted campus workflow.</p>
        <div className="hero-actions">
          <Link className="button-primary" to="/browse">Browse Items</Link>
          <Link className="button-secondary" to="/post">Report Lost Item</Link>
        </div>
        <div className="hero-pill-grid">
          <div className="hero-pill"><strong>99%</strong> claim success rate</div>
          <div className="hero-pill"><strong>24/7</strong> campus item tracking</div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-illustration">
          <div className="hero-illustration-glow" />
          <div className="illustration-card">
            <div className="illustration-top">
              <div className="illustration-badge">Verified Report</div>
              <div className="illustration-badge badge-secondary">Secure Claim</div>
            </div>
            <div className="illustration-window">
              <div className="window-header">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <div className="window-body">
                <div className="window-icon" />
                <div>
                  <p className="window-label">Found item</p>
                  <h3 className="window-title">Blue backpack recovered</h3>
                  <p className="window-copy">Reported near library, ready for student claim.</p>
                </div>
              </div>
            </div>
            <div className="illustration-metrics">
              <div className="metric-card">
                <strong>4 min</strong>
                <span>avg. recovery time</span>
              </div>
              <div className="metric-card">
                <strong>312</strong>
                <span>items claimed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
