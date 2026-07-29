import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function PostItem() {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    status: 'LOST',
    location: '',
    image: '',
    description: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ title: '', category: '', status: 'LOST', location: '', image: '', description: '' });
      setTimeout(() => setSuccess(false), 4000);
    }, 800);
  };

  const isLost = formData.status === 'LOST';

  if (!user) {
    return (
      <main className="page-shell">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <div style={{ textAlign: 'center', padding: '2.5rem 2.2rem', border: '1px solid #E2E8F0', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.05)', maxWidth: '420px', background: '#FFFFFF', width: '100%' }}>
            <div style={{ 
              width: '64px', height: '64px', borderRadius: '50%', background: '#EFF6FF', 
              color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 1.25rem' 
            }}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h2 style={{ marginTop: 0, fontSize: '1.4rem', color: '#0F172A', fontWeight: 800 }}>Sign In Required</h2>
            <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem', padding: '0 0.5rem' }}>
              Please log in or create an account to report lost or found items on the campus network.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link className="button-primary-blue" to="/login" style={{ justifyContent: 'center', padding: '0.85rem 1rem', borderRadius: '12px' }}>
                Sign In
              </Link>
              <Link className="button-secondary-white" to="/register" style={{ justifyContent: 'center', padding: '0.85rem 1rem', borderRadius: '12px', border: '1.5px solid #E2E8F0' }}>
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-header">
          <div>
            <h2 className="section-title">Report an Item</h2>
            <p>Share a clear description so others can identify it quickly.</p>
          </div>
        </div>

        {success && (
          <div style={{
            background: '#DCFCE7', border: '1px solid #BBF7D0', borderRadius: '12px',
            padding: '1rem 1.25rem', marginBottom: '1.5rem', color: '#15803D',
            fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Item posted successfully! It's now live on the campus network.
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'start' }}>
          {/* Main Form */}
          <form className="post-form-card" onSubmit={handleSubmit}>
            {/* Status Toggle */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, status: 'LOST' })}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '10px', fontWeight: 700,
                  fontSize: '0.92rem', cursor: 'pointer', border: isLost ? '2px solid #1D4ED8' : '1.5px solid #E2E8F0',
                  background: isLost ? '#EFF6FF' : '#FFFFFF', color: isLost ? '#1D4ED8' : '#64748B',
                  transition: 'all 0.15s ease'
                }}
              >
                🔍 I Lost Something
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, status: 'FOUND' })}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '10px', fontWeight: 700,
                  fontSize: '0.92rem', cursor: 'pointer', border: !isLost ? '2px solid #15803D' : '1.5px solid #E2E8F0',
                  background: !isLost ? '#DCFCE7' : '#FFFFFF', color: !isLost ? '#15803D' : '#64748B',
                  transition: 'all 0.15s ease'
                }}
              >
                📦 I Found Something
              </button>
            </div>

            <div className="form-grid">
              <div className="field">
                <label>Item Title *</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Black backpack with blue zipper"
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="field">
                  <label>Category *</label>
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Bag">Bag</option>
                    <option value="Wallet">Wallet</option>
                    <option value="Keys">Keys</option>
                    <option value="Documents">Documents</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>Location *</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Library, Cafeteria"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label>Image URL <span style={{ color: '#94A3B8', fontWeight: 400 }}>(optional)</span></label>
                <input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              <div className="field">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder={`Describe the ${isLost ? 'lost' : 'found'} item clearly — colour, brand, distinguishing marks...`}
                  required
                />
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button className="button-primary" type="submit" disabled={submitting} style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}>
                {submitting ? (
                  <>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                    </svg>
                    Posting...
                  </>
                ) : (
                  `Post ${isLost ? 'Lost' : 'Found'} Item`
                )}
              </button>
            </div>
          </form>

          {/* Tips Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="filter-card">
              <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>
                📋 Tips for a good report
              </h3>
              <ul style={{ margin: 0, padding: '0 0 0 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#475569', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <li>Include brand and colour details</li>
                <li>Describe any unique marks or stickers</li>
                <li>Be specific about the location</li>
                <li>Add a clear photo if possible</li>
                <li>Respond quickly to messages</li>
              </ul>
            </div>

            <div className="filter-card" style={{ background: '#EFF6FF', borderColor: '#DBEAFE' }}>
              <h3 style={{ margin: '0 0 0.6rem', fontSize: '0.95rem', fontWeight: 700, color: '#1D4ED8' }}>
                🔒 Privacy note
              </h3>
              <p style={{ margin: 0, fontSize: '0.86rem', color: '#3B82F6', lineHeight: 1.6 }}>
                Your contact details are never shown publicly. All messages go through our encrypted campus network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostItem;
