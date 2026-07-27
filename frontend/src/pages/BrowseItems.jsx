import { useState } from 'react';
import ItemCard from '../components/ItemCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';

const sampleItems = [
  { id: 1, title: 'Black Backpack', description: 'A black backpack with a blue zipper was found near the library.', category: 'Bag', location: 'Library', status: 'FOUND', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { id: 2, title: 'Blue Wallet', description: 'Lost wallet with student ID and a small amount of cash.', category: 'Wallet', location: 'Cafeteria', status: 'LOST', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { id: 3, title: 'Laptop Charger', description: 'A 65W charger found in the engineering block.', category: 'Electronics', location: 'Engineering Block', status: 'FOUND', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' },
  { id: 4, title: 'Student ID Card', description: 'ID card found outside the admin office.', category: 'Documents', location: 'Admin Office', status: 'FOUND', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80' }
];

function BrowseItems() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', status: '', location: '' });

  const filteredItems = sampleItems.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = filters.category ? item.category === filters.category : true;
    const matchesStatus = filters.status ? item.status === filters.status : true;
    const matchesLocation = filters.location ? item.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    return matchesQuery && matchesCategory && matchesStatus && matchesLocation;
  });

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-header">
          <div>
            <h2 className="section-title">Browse Items</h2>
            <p style={{ margin: 0, color: '#64748b' }}>Search recent lost and found reports across campus.</p>
          </div>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          <FilterPanel filters={filters} onFilterChange={(e) => setFilters({ ...filters, [e.target.name]: e.target.value })} />
          <div>
            <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search items by keyword" />
            <div className="grid-2">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BrowseItems;
