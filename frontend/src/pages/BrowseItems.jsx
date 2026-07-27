import { useState } from 'react';
import { Link } from 'react-router-dom';

const sampleItems = [
  { id: 1, title: 'Black Backpack', description: 'A black backpack with a blue zipper found near the library.', category: 'Bag', location: 'Library', status: 'FOUND', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'Blue Wallet', description: 'Lost wallet with student ID and a small amount of cash.', category: 'Wallet', location: 'Cafeteria', status: 'LOST', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'Laptop Charger', description: 'A 65W USB-C charger found in the engineering block.', category: 'Electronics', location: 'Engineering Block', status: 'FOUND', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' },
  { id: 4, title: 'Student ID Card', description: 'ID card found outside the main admin office.', category: 'Documents', location: 'Admin Office', status: 'FOUND', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80' },
  { id: 5, title: 'AirPods Pro', description: 'White AirPods case left at the gym entrance.', category: 'Electronics', location: 'Athletic Center', status: 'FOUND', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80' },
  { id: 6, title: 'MacBook Charger', description: 'MagSafe charger lost somewhere in the science building.', category: 'Electronics', location: 'Science Block', status: 'LOST', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80' },
];

function BrowseItems() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', status: '', location: '' });

  const filteredItems = sampleItems.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = filters.category ? item.category === filters.category : true;
    const matchesStatus = filters.status ? item.status === filters.status : true;
    const matchesLocation = filters.location
      ? item.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    return matchesQuery && matchesCategory && matchesStatus && matchesLocation;
  });

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-header">
          <div>
            <h2 className="section-title">Browse Items</h2>
            <p>Search recent lost and found reports across campus.</p>
          </div>
        </div>

        <div className="grid-2">
          {/* Filter Sidebar */}
          <aside className="filter-card">
            <h3>
              <svg
                style={{ verticalAlign: 'middle', marginRight: '0.4rem', color: '#1D4ED8' }}
                viewBox="0 0 24 24" width="18" height="18" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              Filters
            </h3>
            <div className="form-grid">
              <div className="field">
                <label>Category</label>
                <select name="category" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
                  <option value="">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Bag">Bag</option>
                  <option value="Wallet">Wallet</option>
                  <option value="Documents">Documents</option>
                  <option value="Keys">Keys</option>
                  <option value="Clothing">Clothing</option>
                </select>
              </div>
              <div className="field">
                <label>Status</label>
                <select name="status" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                  <option value="">All Statuses</option>
                  <option value="LOST">Lost</option>
                  <option value="FOUND">Found</option>
                  <option value="RESOLVED">Resolved</option>
                </select>
              </div>
              <div className="field">
                <label>Location</label>
                <input
                  name="location"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  placeholder="e.g. Library, Cafeteria"
                />
              </div>
              {(filters.category || filters.status || filters.location) && (
                <button
                  className="button-ghost"
                  onClick={() => setFilters({ category: '', status: '', location: '' })}
                  style={{ marginTop: 0 }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content Area */}
          <div>
            {/* Styled Search Bar */}
            <div className="browse-search-wrap">
              <svg className="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                className="browse-search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by item name or description..."
              />
            </div>

            {/* Results count */}
            <p style={{ margin: '0 0 1.1rem', fontSize: '0.88rem', color: '#64748B' }}>
              Showing <strong style={{ color: '#0F172A' }}>{filteredItems.length}</strong>{' '}
              {filteredItems.length === 1 ? 'result' : 'results'}
            </p>

            {filteredItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <p style={{ fontSize: '1.1rem', color: '#64748B', margin: 0 }}>No items match your search.</p>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '0.5rem' }}>Try different keywords or clear your filters.</p>
              </div>
            ) : (
              <div className="item-grid">
                {filteredItems.map((item) => (
                  <article key={item.id} className="item-card">
                    <div className="item-card-image" style={{ backgroundImage: `url(${item.image})` }}>
                      <span className={`badge badge-${item.status.toLowerCase()}`}>{item.status}</span>
                    </div>
                    <div style={{ padding: '1rem 1.15rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                      <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>{item.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.84rem' }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{item.location}</span>
                      </div>
                      <p style={{ margin: 0, color: '#475569', fontSize: '0.87rem', lineHeight: 1.5 }}>{item.description}</p>
                      <Link className="button-ghost" to={`/items/${item.id}`}>View Details</Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BrowseItems;
