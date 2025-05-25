import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './LocationSelectionPage.css';

const LocationSelectionPage = () => {
  const location = useLocation();
  const score = location.state?.score ?? 0;

  const [selectedLocation, setSelectedLocation] = useState('');
  const [university, setUniversity] = useState('');

  const handleLocationChange = (e) => {
    const loc = e.target.value;
    setSelectedLocation(loc);

    if (loc === 'India') {
      if (score >= 8) {
        setUniversity('Tier 2 Indian College');
      } else if (score >= 6) {
        setUniversity('Tier 3 Indian College');
      } else {
        setUniversity('Community College India');
      }
    } else if (loc === 'Abroad') {
      const abroadUniversities = [
        'University of Melbourne',
        'Harvard Extension School',
        'University of Toronto',
        'Technical University of Munich',
        'National University of Singapore'
      ];
      const randomUni = abroadUniversities[Math.floor(Math.random() * abroadUniversities.length)];
      setUniversity(randomUni);
    }
  };

  return (
    <div className="location-selection-container">
      <h2>Select Your Preferred Study Location</h2>

      <div className="location-options">
        <label>
          <input
            type="radio"
            value="India"
            checked={selectedLocation === 'India'}
            onChange={handleLocationChange}
          />
          India
        </label>
        <label>
          <input
            type="radio"
            value="Abroad"
            checked={selectedLocation === 'Abroad'}
            onChange={handleLocationChange}
          />
          Abroad
        </label>
      </div>

      {university && (
        <div className="university-result">
          <h3>Recommended University:</h3>
          <p><strong>{university}</strong></p>
        </div>
      )}

      <div className="action-buttons">
        <Link to="/" className="btn-done">Go Home</Link>
      </div>
    </div>
  );
};

export default LocationSelectionPage;
