import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ title, description, poster }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={title} />
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className={`movie-description ${showDetails ? 'show-description' : ''}`}>
          {description}
        </p>
        <button className="btn-details" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
