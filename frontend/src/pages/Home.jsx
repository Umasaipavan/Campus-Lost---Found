import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const sampleItems = [
  { id: 1, title: 'Black Backpack', description: 'A black backpack with a blue zipper was found near the library.', category: 'Bag', location: 'Library', status: 'FOUND', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'Blue Wallet', description: 'Lost wallet with student ID and a small amount of cash.', category: 'Wallet', location: 'Cafeteria', status: 'LOST', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'Laptop Charger', description: 'A 65W charger found in the engineering block.', category: 'Electronics', location: 'Engineering Block', status: 'FOUND', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' }
];

function Home() {
  return (
    <main className="page-shell">
      <div className="container">
        <section className="hero-card">
          <div>
            <p style={{ color: '#2563eb', fontWeight: 700, marginBottom: '0.5rem' }}>Campus Lost & Found</p>
            <h1 className="hero-title">Find what was lost, report what was found.</h1>
            <p className="hero-text">A simple, modern platform for students to report lost items, discover found items, and claim ownership safely.</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link className="button-primary" to="/browse">Browse Items</Link>
              <Link className="button-secondary" to="/post">Post an Item</Link>
            </div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ marginTop: 0 }}>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat-card"><span>Items Posted</span><strong>128</strong></div>
              <div className="stat-card"><span>Resolved</span><strong>84</strong></div>
              <div className="stat-card"><span>Claims</span><strong>42</strong></div>
              <div className="stat-card"><span>Admins</span><strong>3</strong></div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <div className="page-header">
            <h2 className="section-title">Recently Reported</h2>
            <Link className="button-ghost" to="/browse">View all</Link>
          </div>
          <div className="grid-3">
            {sampleItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
