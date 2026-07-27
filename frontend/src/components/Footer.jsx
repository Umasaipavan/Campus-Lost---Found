import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Campus Lost & Found</h3>
          <p>Helping students recover items, report finds, and manage claims across campus.</p>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <ul className="footer-links">
            <li><Link to="/browse">Browse Items</Link></li>
            <li><Link to="/post">Post Item</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-title">Legal</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-title">Contact</p>
          <p className="footer-text">support@campuslostfound.com</p>
          <div className="footer-socials">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Campus Lost & Found. Built for safer campus recovery.</p>
      </div>
    </footer>
  );
}

export default Footer;
