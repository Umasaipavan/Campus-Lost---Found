import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return (
    <Link to={`/items/${item.id}`} className="card item-card" style={{ color: 'inherit' }}>
      <img className="item-image" src={item.image} alt={item.title} />
      <div className="badge badge-lost">{item.status}</div>
      <h3 style={{ margin: 0 }}>{item.title}</h3>
      <p style={{ margin: 0, color: '#64748b' }}>{item.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.95rem' }}>
        <span>{item.category}</span>
        <span>{item.location}</span>
      </div>
    </Link>
  );
}

export default ItemCard;
