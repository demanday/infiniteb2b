import React from 'react';
import './SolutionComp.css';

const SolutionComp = ({ image, title, subtitle }) => {
  return (
    <div className="solution-set">
      <div className="solution-set-image">
        <img src={image} alt={title} />
      </div>
      <div className="solution-set-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default SolutionComp;
