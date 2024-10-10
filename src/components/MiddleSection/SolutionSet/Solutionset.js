import React from 'react';
import './SolutionSet.css'; // CSS file for individual card styles

const SolutionCard = ({ image, title }) => {
  return (
    <div className="solution-card">
      <img src={image} alt={title} className="solution-image" />
      <div className="solution-title">{title}</div>
    </div>
  );
};

export default SolutionCard;
