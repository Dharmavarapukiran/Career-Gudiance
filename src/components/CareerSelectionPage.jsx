import { Link } from 'react-router-dom';
import './CareerSelectionPage.css';
import React, { useState, useRef } from 'react';

function CareerSelectionPage() {
 




  return (
    <div className="career-selection-container">
      <header className="navbar">
        <div className="logo">Career Guidance</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign Up</Link>

        </nav>
      </header>

      <main className="career-selection-content">
        <section className="intro">
          <h1>Discover Your Ideal Career Path</h1>
          <p>
            Your journey towards a successful career starts here. Take our aptitude test and get personalized career suggestions based on your results.
          </p>
          <Link to="/aptitude-test" className="start-test-btn">Take the Aptitude Test</Link>
        </section>

        <section className="why-test">
          <h2>Why Take the Aptitude Test?</h2>
          <ul>
            <li>Understand your strengths and interests</li>
            <li>Explore careers that suit your profile</li>
            <li>Get recommendations for the best-fit courses and colleges</li>
            <li>Make informed decisions with expert guidance</li>
          </ul>
        </section>

        <section className="steps">
          <h2>How It Works</h2>
          <ol>
            <li>Sign up or log in to your account</li>
            <li>Take the aptitude test</li>
            <li>View career suggestions based on your results</li>
            <li>Explore matching colleges and courses</li>
          </ol>
        </section>
      </main>

    </div>
  );
}

export default CareerSelectionPage;