import React, { useState, useRef, useEffect } from 'react';
import './HomePage.css';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebaseconfig';  // Adjust path if needed
import { onAuthStateChanged, signOut } from 'firebase/auth';

function HomePage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  const location = useLocation();

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownVisible(false);
  }, [location]);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownVisible(false);
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">Career Guidance</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">About</Link>
          <Link to="/SignUp">Sign Up</Link>

          {user ? (
            <div className="user-profile" ref={dropdownRef}>
              <span className="user-icon" onClick={toggleDropdown}>
                {user.displayName
                  ? user.displayName.charAt(0).toUpperCase()
                  : user.email.charAt(0).toUpperCase()}
              </span>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <p><strong>{user.displayName || 'User'}</strong></p>
                  <p>{user.email}</p>
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="dropdown" ref={dropdownRef}>
              <span className="dropdown-toggle" onClick={toggleDropdown}>Login</span>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <Link to="/student-login" className='Login'>Student Login</Link>
                  <Link to="/college-login" className='Login'>College Login</Link>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      <section className='hero'>
        <div className='hero-content'>
          <h1>Find Your Dream College</h1>
          <p>Discover the best college and course that matches your interests, skills, and aspirations – in India or abroad</p>
          <Link to="/career-selection" className="btn">Get Started</Link>
        </div>
      </section>

      <section className='about' id='about'>
        <h2>What We Do</h2>
        <p>We guide students through the process of selecting colleges and courses based on their entrance results, skills, preferences, and aptitude. Our platform simplifies decision-making by offering detailed college insights, eligibility checks, and registration steps all in one place.</p>
        <p>Our platform offers tailored college recommendations based on your academic records, aptitude, entrance exam results, and personal preferences like location and budget. From eligibility checks to test preparation and even registration, we’ve got you covered.</p>
      </section>

      <section className="aptitude-section">
        <div className="aptitude-content">
          <h2>Aptitude Test</h2>
          <p>Not sure which career suits you? Take our comprehensive Aptitude Test to assess your skills in Verbal, Quantitative, and General Knowledge.</p>
          <Link to="aptitude-test"><a href="#" className="aptitude-button">Take the Test</a></Link>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Create your account</li>
          <li>Take the Aptitude Test</li>
          <li>Explore college recommendations</li>
          <li>Select your dream college</li>
          <li>Complete registration online</li>
        </ol>
      </section>

      <footer>
        <p>&copy;2025 Career Guidance App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
