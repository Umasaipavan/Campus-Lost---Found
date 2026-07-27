function ItemForm({ formData, onChange, onSubmit, submitting, mode = 'lost' }) {
  return (
    <form className="card" style={{ padding: '1.5rem' }} onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field">
          <label>Title</label>
          <input name="title" value={formData.title} onChange={onChange} placeholder="Example: Black backpack" required />
        </div>
        <div className="field">
          <label>Category</label>
          <input name="category" value={formData.category} onChange={onChange} placeholder="Electronics, Bag, Wallet" required />
        </div>
        <div className="field">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={onChange}>
            <option value="LOST">Lost</option>
            <option value="FOUND">Found</option>
            <option value="RESOLVED">Resolved</option>
          </select>
        </div>
        <div className="field">
          <label>Location</label>
          <input name="location" value={formData.location} onChange={onChange} placeholder="Library, Hostel, Cafeteria" required />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input name="image" value={formData.image} onChange={onChange} placeholder="https://example.com/photo.jpg" />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={onChange} placeholder={`Describe the ${mode} item clearly...`} required />
        </div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button className="button-primary" type="submit" disabled={submitting}>
          {submitting ? 'Posting...' : `Post ${mode === 'lost' ? 'Lost Item' : 'Found Item'}`}
        </button>
      </div>
    </form>
  );
}

export default ItemForm;
