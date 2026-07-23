import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/browse" style={{ marginRight: 10 }}>Browse</Link>
      <Link to="/dashboard" style={{ marginRight: 10 }}>Dashboard</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
