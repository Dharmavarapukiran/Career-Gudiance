import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig';
import './StudentLogin.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigate('/'); // Redirect after successful login
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <header className="main-header">
        <div className="logo">Career Guidance</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/college-login">College Login</Link></li>
            <li><Link to="/signUp">signup</Link></li>
          </ul>
        </nav>
      </header>

      {/* Login Form */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Student Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default StudentLogin;
