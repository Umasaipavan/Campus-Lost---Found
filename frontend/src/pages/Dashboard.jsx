function Dashboard() {
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
