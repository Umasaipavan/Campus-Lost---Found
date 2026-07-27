function AdminDashboard() {
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
