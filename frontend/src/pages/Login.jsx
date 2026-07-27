import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="auth-card">
          <h2 style={{ marginTop: 0 }}>Welcome back</h2>
          <p style={{ color: '#64748b' }}>Sign in to post items, manage claims, and track your activity.</p>
          <form className="form-grid">
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@campus.edu" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
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
