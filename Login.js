import React, { useState } from 'react';
import './Login.css'; // Ensure you have styles for this component

function Login({ onLoginSuccess }) { // Accept the onLoginSuccess prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Call the onLoginSuccess function to update the login status
    onLoginSuccess();
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="logo-container">
          <h1 className="Login-title">Buzz Buzzaar</h1>
        </div>
        <form className="Login-form" onSubmit={handleLogin}>
          <div className="Login-input-group">
            <label htmlFor="username" className="Login-label">Username</label>
            <input
              type="text"
              id="username"
              className="Login-input"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="Login-input-group">
            <label htmlFor="password" className="Login-label">Password</label>
            <input
              type="password"
              id="password"
              className="Login-input"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="Login-button">Login</button>
        </form>
        <p className="Login-footer">
          Don't have an account? <a href="/signup" className="Login-link">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
