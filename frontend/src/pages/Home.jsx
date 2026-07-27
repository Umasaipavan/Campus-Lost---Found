import { Link } from 'react-router-dom';
import HomeIllustration from '../assets/home.png';

const recentItems = [
  { 
    id: 1, 
    type: 'FOUND', 
    title: 'Leather Wallet', 
    location: 'Student Union Lounge', 
    time: '2m ago', 
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80' 
  },
  { 
    id: 2, 
    type: 'LOST', 
    title: 'MacBook Pro 14"', 
    location: 'Science Library, Level 2', 
    time: '15m ago', 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80' 
  },
  { 
    id: 3, 
    type: 'FOUND', 
    title: 'AirPods Pro', 
    location: 'Athletic Center Gym', 
    time: '44m ago', 
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80' 
  },
  { 
    id: 4, 
    type: 'LOST', 
    title: 'House Keys', 
    location: 'East Quad Green', 
    time: '1h ago', 
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80' 
  }
];

function Home() {
  return (
    <main className="page-shell home-page">
      <div className="container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot">●</span> LIVE CAMPUS NETWORK
            </div>
            <h1 className="hero-heading">
              Recover what matters. <br />
              <span className="hero-heading-highlight">Faster.</span>
            </h1>
            <p className="hero-copy">
              The intelligent lost and found network for your campus. Connect with your community to reunite lost items with their rightful owners in minutes, not days.
            </p>

            <div className="hero-actions">
              <Link className="button-primary-blue" to="/post">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>I Lost Something</span>
              </Link>
              <Link className="button-secondary-white" to="/post">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
                <span>I Found Something</span>
              </Link>
            </div>

            <div className="hero-social-proof">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Student" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Student" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Student" className="avatar-img" />
                <div className="avatar-more-pill">+2k</div>
              </div>
              <p className="hero-proof-text">
                Joined by <strong>2,400+ students</strong> this week
              </p>
            </div>
          </div>

          <div className="hero-illustration-card">
            <img src={HomeIllustration} alt="Campus Lost and Found 3D Illustration" className="hero-illustration-img" />
          </div>
        </section>

        {/* METRICS / STATS ROW */}
        <section className="stat-row">
          <div className="stat-card">
            <div className="stat-icon-box blue-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="stat-info">
              <strong className="stat-number">4,365</strong>
              <span className="stat-label">ITEMS REPORTED</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box amber-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <div className="stat-info">
              <strong className="stat-number">3,139</strong>
              <span className="stat-label">REUNITED</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box red-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="stat-info">
              <strong className="stat-number">14m</strong>
              <span className="stat-label">AVG. RETURN TIME</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box indigo-box">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18"></path>
                <path d="M9 8h1"></path>
                <path d="M9 12h1"></path>
                <path d="M9 16h1"></path>
                <path d="M14 8h1"></path>
                <path d="M14 12h1"></path>
                <path d="M14 16h1"></path>
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
              </svg>
            </div>
            <div className="stat-info">
              <strong className="stat-number">5+</strong>
              <span className="stat-label">CAMPUSES ACTIVE</span>
            </div>
          </div>
        </section>

        {/* RECENTLY SPOTTED SECTION */}
        <section className="recent-section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recently Spotted</h2>
              <p className="section-subtitle">Real-time updates of items reported in your area.</p>
            </div>
            <Link className="link-browse-all" to="/browse">
              <span>Browse all items</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          <div className="recent-grid">
            {recentItems.map((item) => (
              <article key={item.id} className="recent-card">
                <div className="recent-card-image" style={{ backgroundImage: `url(${item.image})` }}>
                  <span className={`chip-badge ${item.type === 'FOUND' ? 'chip-found' : 'chip-lost'}`}>
                    {item.type}
                  </span>
                </div>
                <div className="recent-card-body">
                  <div className="recent-card-top flex-between">
                    <h3 className="item-title">{item.title}</h3>
                    <span className="item-time">{item.time}</span>
                  </div>
                  <div className="item-location-row">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{item.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="work-section">
          <div className="section-header center-header">
            <h2 className="section-title">How it works</h2>
            <p className="section-subtitle">The fastest way to get your belongings back or help a fellow student.</p>
          </div>

          <div className="work-grid-wrap">
            <div className="work-dashed-line"></div>
            <div className="work-grid">
              <div className="work-card">
                <div className="work-icon-circle blue-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <div className="work-step-num">0</div>
                <p className="work-step-desc">
                  Lost or found an item? Briefly describe it, add a photo, and pin the location where it happened.
                </p>
              </div>

              <div className="work-card">
                <div className="work-icon-circle amber-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <path d="M11 8v6M8 11h6"></path>
                  </svg>
                </div>
                <div className="work-step-num">0</div>
                <p className="work-step-desc">
                  Our system automatically matches descriptions and notifies likely owners instantly. No more checking desks.
                </p>
              </div>

              <div className="work-card">
                <div className="work-icon-circle rose-circle">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="work-step-num">1m</div>
                <p className="work-step-desc">
                  Verify ownership via secure messaging and arrange a safe pickup on campus. Simple and secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HERO CTA SECTION */}
        <section className="cta-banner-section">
          <div className="cta-banner-card">
            {/* Concentric background vector waves */}
            <svg className="cta-wave-top" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="0" cy="0" r="80" stroke="white" strokeWidth="2" strokeOpacity="0.15" />
              <circle cx="0" cy="0" r="130" stroke="white" strokeWidth="2" strokeOpacity="0.12" />
              <circle cx="0" cy="0" r="180" stroke="white" strokeWidth="2" strokeOpacity="0.08" />
            </svg>
            <svg className="cta-wave-bottom" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="2" strokeOpacity="0.15" />
              <circle cx="200" cy="200" r="130" stroke="white" strokeWidth="2" strokeOpacity="0.12" />
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" strokeOpacity="0.08" />
            </svg>

            <div className="cta-content">
              <h2 className="cta-title">Ready to find your pulse?</h2>
              <p className="cta-subtitle">
                Join 10,000+ students and staff who use Campus Pulse to keep our community connected and organized.
              </p>

              <div className="cta-buttons">
                <Link className="cta-btn-white" to="/register">Create Free Account</Link>
                <Link className="cta-btn-glass" to="/about">See How It Works</Link>
              </div>
            </div>

            <div className="cta-metrics-divider"></div>

            <div className="cta-metrics-row">
              <div className="cta-metric-item">
                <strong className="cta-metric-val">98%</strong>
                <span className="cta-metric-lbl">Success Rate</span>
              </div>
              <div className="cta-metric-item">
                <strong className="cta-metric-val">24/7</strong>
                <span className="cta-metric-lbl">System Uptime</span>
              </div>
              <div className="cta-metric-item">
                <strong className="cta-metric-val">Encrypted</strong>
                <span className="cta-metric-lbl">Chat Privacy</span>
              </div>
              <div className="cta-metric-item">
                <strong className="cta-metric-val">Verified</strong>
                <span className="cta-metric-lbl">Edu Accounts</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;

