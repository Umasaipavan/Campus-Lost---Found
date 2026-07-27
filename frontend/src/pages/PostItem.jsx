import { useState } from 'react';
import ItemForm from '../components/ItemForm';

function PostItem() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    status: 'LOST',
    location: '',
    image: '',
    description: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      alert('Item posted successfully!');
    }, 800);
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-header">
          <div>
            <h2 className="section-title">Report a Lost or Found Item</h2>
            <p style={{ margin: 0, color: '#64748b' }}>Share a clear description and upload an image so others can identify it quickly.</p>
          </div>
        </div>
        <ItemForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} mode={formData.status === 'FOUND' ? 'found' : 'lost'} />
      </div>
    </main>
  );
}

export default PostItem;
