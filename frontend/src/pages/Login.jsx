import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const emailLower = email.toLowerCase();
    const isAdminUser = emailLower === 'usp@gmail.com' && password === '1234567';

    if (isAdminUser) {
      // Set authenticated admin user
      setUser({
        name: 'Admin',
        email: email,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      });
      navigate('/dashboard');
      return;
    }

    // Check registered users list in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = registeredUsers.find(u => u.email.toLowerCase() === emailLower);

    if (!foundUser) {
      alert('No account found with this email. Please sign up first!');
      return;
    }

    if (foundUser.password !== password) {
      alert('Incorrect password. Please try again.');
      return;
    }

    // Set authenticated regular user
    setUser({
      name: foundUser.name,
      email: foundUser.email,
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    });
    navigate('/');
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="auth-card">
          <h2 style={{ marginTop: 0 }}>Welcome back</h2>
          <p style={{ color: '#64748b' }}>Sign in to post items, manage claims, and track your activity.</p>
          
          <div className="demo-credentials-box">
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Admin Account Credentials:</div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span>Email: <code>usp@gmail.com</code></span>
              <span>Password: <code>1234567</code></span>
            </div>
            <button 
              type="button" 
              className="button-ghost" 
              style={{ width: '100%', padding: '0.45rem', fontSize: '0.82rem', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              onClick={() => {
                setEmail('usp@gmail.com');
                setPassword('1234567');
              }}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Autofill Admin Credentials
            </button>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="you@campus.edu" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="button-primary" type="submit">Login</button>
          </form>
          <p style={{ marginTop: '1rem', color: '#64748b' }}>
            New here? <Link to="/register" style={{ color: '#2563eb', fontWeight: 700 }}>Create an account</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
