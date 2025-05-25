import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './TestCompletionPage.css';

const TestCompletionPage = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  const getResultCategory = (score) => {
    if (score >= 8) return 'Merit';
    if (score >= 6) return 'Average';
    if (score >= 5) return 'Below Average';
    return 'Failed';
  };

  const resultCategory = getResultCategory(score);

  return (
    <div className="test-completion-container">
      <h2>Test Completed!</h2>
      <p>Your Score: {score} / 10</p>
      <p>Result Category: <strong>{resultCategory}</strong></p>

      {score < 5 ? (
        <Link to="/aptitude-test" className="btn-next">
          Retake Test
        </Link>
      ) : (
        <Link to="/location-selection" state={{ score }} className="btn-next">
          Select Your Location to See Universities
        </Link>
      )}
    </div>
  );
};

export default TestCompletionPage;
