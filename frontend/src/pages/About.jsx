import { Link } from 'react-router-dom';
import UmaPhoto from '../assets/uma-sai-pavan.jpg';

const features = [
  {
    icon: '🔍',
    color: '#EFF6FF',
    iconColor: '#1D4ED8',
    title: 'Smart Matching',
    desc: 'Our AI automatically matches lost and found reports, so you spend less time searching and more time getting items back.'
  },
  {
    icon: '🔒',
    color: '#DCFCE7',
    iconColor: '#15803D',
    title: 'Encrypted Messaging',
    desc: 'All conversations happen over our end-to-end encrypted campus network. Your private details stay private.'
  },
  {
    icon: '⚡',
    color: '#FEF3C7',
    iconColor: '#D97706',
    title: 'Real-time Alerts',
    desc: 'Get instant push notifications when a match is found or someone messages you about your item.'
  },
  {
    icon: '📍',
    color: '#FEE2E2',
    iconColor: '#DC2626',
    title: 'Location Pinning',
    desc: 'Pin the exact location where an item was lost or found right on an interactive campus map.'
  },
  {
    icon: '✅',
    color: '#E0E7FF',
    iconColor: '#4F46E5',
    title: 'Verified Accounts',
    desc: 'Only verified .edu email addresses can post items, keeping the community trusted and safe.'
  },
  {
    icon: '📊',
    color: '#F3F4F6',
    iconColor: '#374151',
    title: 'Track Your Items',
    desc: 'A personal dashboard to manage all your posts, claims, and activity history in one place.'
  },
];

const team = [
  { name: 'Uma Sai Pavan', role: 'Full Stack Developer', img: UmaPhoto },
];

const stats = [
  { val: '4,365+', lbl: 'Items reported' },
  { val: '3,139', lbl: 'Items reunited' },
  { val: '14 min', lbl: 'Avg. return time' },
  { val: '5+', lbl: 'Campuses active' },
];

function About() {
  return (
    <main className="page-shell">
      <div className="container">

        {/* Hero */}
        <div className="about-hero">
          <h1>Reuniting campus communities</h1>
          <p>
            Campus Pulse was built by students, for students. We believe losing something
            shouldn't ruin your day — and finding something should feel rewarding. Our platform
            makes it simple, fast, and trustworthy.
          </p>
        </div>

        {/* Stats Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '4rem' }}>
          {stats.map((s) => (
            <div key={s.lbl} style={{
              background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0',
              padding: '1.5rem 1.25rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <strong style={{ display: 'block', fontSize: '1.9rem', fontWeight: 800, color: '#1D4ED8', letterSpacing: '-0.02em' }}>{s.val}</strong>
              <span style={{ fontSize: '0.88rem', color: '#64748B' }}>{s.lbl}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">What makes us different</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', maxWidth: 540 }}>
            Purpose-built tools that make recovering and reporting campus items effortless.
          </p>
        </div>
        <div className="about-features-grid" style={{ marginBottom: '4rem' }}>
          {features.map((f) => (
            <div key={f.title} className="about-feature-card">
              <div className="about-feature-icon" style={{ background: f.color }}>
                <span style={{ fontSize: '1.4rem' }}>{f.icon}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="about-team-section">
          <h2 className="section-title">Meet the developer</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0', maxWidth: 480 }}>
            Built with passion to make campus life a little easier.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            {team.map((member) => (
              <div key={member.role} className="about-team-card" style={{ minWidth: 220 }}>
                <img src={member.img} alt={member.name} className="about-team-avatar" />
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="cta-banner-card" style={{ marginBottom: '2rem' }}>
          <svg className="cta-wave-top" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="80" stroke="white" strokeWidth="2" strokeOpacity="0.15" />
            <circle cx="0" cy="0" r="140" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
          </svg>
          <svg className="cta-wave-bottom" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="2" strokeOpacity="0.15" />
            <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="2" strokeOpacity="0.1" />
          </svg>
          <div className="cta-content">
            <h2 className="cta-title">Join your campus network today</h2>
            <p className="cta-subtitle">
              It's free, takes 30 seconds, and could help you — or a fellow student — get back something important.
            </p>
            <div className="cta-buttons">
              <Link className="cta-btn-white" to="/register">Create Free Account</Link>
              <Link className="cta-btn-glass" to="/browse">Browse Items</Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default About;
