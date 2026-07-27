import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand-mark">
          Campus Lost & Found
        </Link>

        <div className="nav-links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/browse">Browse</NavLink>
          <NavLink className="nav-link" to="/post">Post Item</NavLink>
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
          {user ? (
            <span className="nav-user-pill">{user.name}</span>
          ) : (
            <NavLink className="nav-link" to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
