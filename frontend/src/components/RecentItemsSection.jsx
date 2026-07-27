import { Link } from 'react-router-dom';

const items = [
  { id: 1, title: 'Blue Backpack', status: 'FOUND', category: 'Bag', location: 'Library', date: '2h ago', image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'Student ID Card', status: 'LOST', category: 'Documents', location: 'Cafeteria', date: '1d ago', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'Laptop Charger', status: 'FOUND', category: 'Electronics', location: 'Engineering Block', date: '4h ago', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' }
];

function RecentItemsSection() {
  return (
    <section className="recent-section">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-sup">Recently reported</p>
            <h2 className="section-title">Live campus items waiting for recovery.</h2>
          </div>
          <Link className="button-ghost" to="/browse">View all items</Link>
        </div>
        <div className="grid-3">
          {items.map((item) => (
            <div key={item.id} className="card item-card">
              <img className="item-image" src={item.image} alt={item.title} />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span className={`badge badge-${item.status.toLowerCase()}`}>{item.status}</span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.date}</span>
              </div>
              <h3 style={{ margin: '0.5rem 0 0.4rem' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>{item.category} • {item.location}</p>
              <Link className="button-ghost" to={`/items/${item.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentItemsSection;
