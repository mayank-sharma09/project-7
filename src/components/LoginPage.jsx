import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) throw new Error('Invalid credentials');
      const data = await res.json();
      onLogin({ username, token: data.token });
    } catch {
      setError('Invalid username or password. Try the demo credentials below.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.logo}>
          Shop<span className={styles.accent}>Arc</span>
        </div>
        <p className={styles.subtitle}>Sign in to start shopping</p>

        {error && (
          <div className={styles.error}>
            <i className="ti ti-alert-circle" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? (
              <><i className="ti ti-loader-2" style={{ animation: 'spin 0.7s linear infinite' }} /> Signing in…</>
            ) : (
              <><i className="ti ti-login" /> Sign in</>
            )}
          </button>
        </form>

        <div className={styles.hint}>
          Demo credentials: <code>mor_2314</code> / <code>83r5^_</code>
        </div>
      </div>
    </div>
  );
}
