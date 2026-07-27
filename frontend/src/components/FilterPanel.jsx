function FilterPanel({ filters, onFilterChange }) {
  return (
    <div className="card" style={{ padding: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>Filter</h3>
      <div className="form-grid">
        <div className="field">
          <label>Category</label>
          <select name="category" value={filters.category} onChange={onFilterChange}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Bag">Bag</option>
            <option value="Wallet">Wallet</option>
            <option value="Documents">Documents</option>
          </select>
        </div>
        <div className="field">
          <label>Status</label>
          <select name="status" value={filters.status} onChange={onFilterChange}>
            <option value="">All</option>
            <option value="LOST">Lost</option>
            <option value="FOUND">Found</option>
            <option value="RESOLVED">Resolved</option>
          </select>
        </div>
        <div className="field">
          <label>Location</label>
          <input name="location" value={filters.location} onChange={onFilterChange} placeholder="Library" />
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
