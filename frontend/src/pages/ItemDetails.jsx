import { Link, useParams } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams();

  return (
    <main className="page-shell">
      <div className="container">
        <div className="card" style={{ padding: '1.25rem' }}>
          <p style={{ color: '#2563eb', fontWeight: 700, marginBottom: '0.5rem' }}>Item #{id}</p>
          <h2 style={{ marginTop: 0 }}>Black Backpack</h2>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80" alt="Backpack" style={{ width: '100%', maxHeight: '380px', objectFit: 'cover', borderRadius: '18px' }} />
          <div style={{ marginTop: '1rem' }} className="grid-2">
            <div className="info-card">
              <h3>Details</h3>
              <p>A black backpack with a blue zipper was found near the library.</p>
              <p><strong>Category:</strong> Bag</p>
              <p><strong>Location:</strong> Library</p>
              <p><strong>Status:</strong> Found</p>
            </div>
            <div className="info-card">
              <h3>Reporter</h3>
              <p><strong>Name:</strong> Daniel Green</p>
              <p><strong>Email:</strong> daniel@campus.edu</p>
              <button className="button-primary" style={{ marginTop: '0.75rem' }}>Claim Ownership</button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h3 className="section-title">Similar Items</h3>
          <div className="grid-3">
            <div className="card item-card">
              <h4 style={{ margin: 0 }}>Laptop Charger</h4>
              <p style={{ margin: 0, color: '#64748b' }}>Found in the engineering block.</p>
              <Link className="button-ghost" to="/browse">View</Link>
            </div>
            <div className="card item-card">
              <h4 style={{ margin: 0 }}>Student ID Card</h4>
              <p style={{ margin: 0, color: '#64748b' }}>Found outside the admin office.</p>
              <Link className="button-ghost" to="/browse">View</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetails;
