import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const emailLower = email.toLowerCase();

    // Disallow registering with the admin email
    if (emailLower === 'usp@gmail.com') {
      alert('This email is reserved for administrative use.');
      return;
    }

    // Save to localStorage registered users list
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExists = registeredUsers.some(u => u.email.toLowerCase() === emailLower);

    if (userExists) {
      alert('An account with this email already exists! Please sign in.');
      return;
    }

    registeredUsers.push({ name, email: emailLower, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Set mock authenticated user
    setUser({
      name: name,
      email: email,
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    });
    navigate('/');
  };

  return (
    <main className="page-shell">
      <div className="container">
        <div className="auth-card">
          <h2 style={{ marginTop: 0 }}>Create your account</h2>
          <p style={{ color: '#64748b' }}>Join the campus community and start reporting lost or found items.</p>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="field">
              <label>Full Name</label>
              <input 
                placeholder="Aisha Khan" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                placeholder="Create password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="button-primary" type="submit">Register</button>
          </form>
          <p style={{ marginTop: '1rem', color: '#64748b' }}>
            Already have an account? <Link to="/login" style={{ color: '#2563eb', fontWeight: 700 }}>Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
