import React from 'react';
import './Card.css';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Sign Up</button>
    </div>
  );
};

export default Card;
