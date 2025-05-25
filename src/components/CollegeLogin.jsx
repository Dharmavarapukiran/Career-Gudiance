import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig';
import { Link, useNavigate } from 'react-router-dom';
import './CollegeLogin.css';

function CollegeLogin() {
  const [collegeId, setCollegeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, collegeId, password);
      alert("College Login Successful");
      navigate('/college-dashboard');
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="logo">Career Guide</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student-login">Student Login</Link></li>
            <li><Link to="/admin-login">Admin Login</Link></li>
          </ul>
        </nav>
      </header>

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>College Login</h2>
          <input type="email" placeholder="Enter College Email" value={collegeId} onChange={(e) => setCollegeId(e.target.value)} required />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default CollegeLogin;
