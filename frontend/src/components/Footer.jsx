import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-bar">
      <div className="container footer-bar-inner">
        <p className="footer-copyright">© 2024 Campus Pulse. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

