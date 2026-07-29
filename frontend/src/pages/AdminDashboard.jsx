import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function AdminDashboard() {
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
              Only admin accounts are authorized to access the Admin Dashboard.
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
            <h2 className="section-title">Admin Dashboard</h2>
            <p style={{ margin: 0, color: '#64748b' }}>Moderate listings, manage users, and monitor campus activity.</p>
          </div>
        </div>

        <div className="stats-grid" style={{ marginBottom: '1.25rem' }}>
          <div className="stat-card"><span>Pending Approvals</span><strong>7</strong></div>
          <div className="stat-card"><span>Total Users</span><strong>42</strong></div>
          <div className="stat-card"><span>Resolved Claims</span><strong>18</strong></div>
          <div className="stat-card"><span>Categories</span><strong>6</strong></div>
        </div>

        <div className="grid-2">
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>Pending Approvals</h3>
            <div className="list-stack">
              <div className="list-row"><span>Blue Water Bottle</span><strong>Review</strong></div>
              <div className="list-row"><span>Red Notebook</span><strong>Review</strong></div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>User Management</h3>
            <div className="list-stack">
              <div className="list-row"><span>Aisha Khan</span><strong>USER</strong></div>
              <div className="list-row"><span>Admin One</span><strong>ADMIN</strong></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
