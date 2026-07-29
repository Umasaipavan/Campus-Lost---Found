import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const isAdmin = user && user.email === 'usp@gmail.com';

  if (!isAdmin) {
    return (
      <main className="page-shell">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{ textAlign: 'center', padding: '2.5rem 2.2rem', border: '1px solid #E2E8F0', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.05)', maxWidth: '420px', background: '#FFFFFF', width: '100%' }}>
            <div style={{ 
              width: '64px', height: '64px', borderRadius: '50%', background: '#FEE2E2', 
              color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 1.25rem' 
            }}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h2 style={{ marginTop: 0, fontSize: '1.4rem', color: '#0F172A', fontWeight: 800 }}>Access Denied</h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem', padding: '0 0.5rem' }}>
              Only admin accounts are authorized to access the Dashboard.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link className="button-primary-blue" to="/login" style={{ justifyContent: 'center', padding: '0.85rem 1rem', borderRadius: '12px' }}>
                Login as Admin
              </Link>
              <Link className="button-secondary-white" to="/" style={{ justifyContent: 'center', padding: '0.85rem 1rem', borderRadius: '12px', border: '1.5px solid #E2E8F0' }}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-header">
          <div>
            <h2 className="section-title">My Dashboard</h2>
            <p style={{ margin: 0, color: '#64748b' }}>Track your posts, claims, and recent activity.</p>
          </div>
          <button className="button-primary">New Report</button>
        </div>

        <div className="stats-grid" style={{ marginBottom: '1.25rem' }}>
          <div className="stat-card"><span>Total Posts</span><strong>5</strong></div>
          <div className="stat-card"><span>Lost Items</span><strong>2</strong></div>
          <div className="stat-card"><span>Found Items</span><strong>3</strong></div>
          <div className="stat-card"><span>Claims</span><strong>4</strong></div>
        </div>

        <div className="grid-2">
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>Recent Activity</h3>
            <div className="list-stack">
              <div className="list-row"><span>Posted a found item</span><strong>2h ago</strong></div>
              <div className="list-row"><span>Claimed a wallet</span><strong>1d ago</strong></div>
              <div className="list-row"><span>Updated item status</span><strong>2d ago</strong></div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>My Recent Posts</h3>
            <div className="list-stack">
              <div className="list-row"><span>Black Backpack</span><strong>FOUND</strong></div>
              <div className="list-row"><span>Blue Wallet</span><strong>LOST</strong></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
