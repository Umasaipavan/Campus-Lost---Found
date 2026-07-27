function SearchBar({ value, onChange, placeholder = 'Search by keyword...' }) {
  return (
    <div className="field" style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'none' }}>Search</label>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
