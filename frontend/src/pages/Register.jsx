import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="auth-card">
          <h2 style={{ marginTop: 0 }}>Create your account</h2>
          <p style={{ color: '#64748b' }}>Join the campus community and start reporting lost or found items.</p>
          <form className="form-grid">
            <div className="field">
              <label>Full Name</label>
              <input placeholder="Aisha Khan" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="you@campus.edu" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Create password" />
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
