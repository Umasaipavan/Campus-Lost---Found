import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="nav-left">
          <Link to="/" className="brand-mark">
            <div className="brand-logo-wrap">
              <img src={Logo} alt="Campus Pulse Logo" className="brand-logo-img" />
            </div>
            <span className="brand-name">Campus Pulse</span>
          </Link>
        </div>

        <div className="nav-center">
          <div className="nav-search">
            <svg className="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="search" placeholder="Search for lost items..." aria-label="Search for lost items" />
          </div>
        </div>

        <div className="nav-right">
          <nav className="nav-links">
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/browse">Browse</NavLink>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/post">Post Item</NavLink>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">About</NavLink>
          </nav>
          <div className="nav-actions">
            <button className="icon-bell-button" aria-label="Notifications">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <div className="user-avatar-wrap">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                alt="User Profile" 
                className="user-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

