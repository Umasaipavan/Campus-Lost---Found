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
    // Set mock authenticated user
    setUser({
      name: email.split('@')[0], // Use email prefix as mock name
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    });
    navigate('/dashboard');
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="auth-card">
          <h2 style={{ marginTop: 0 }}>Welcome back</h2>
          <p style={{ color: '#64748b' }}>Sign in to post items, manage claims, and track your activity.</p>
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
