import React from 'react';

const Card = ({ title, description }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    {/* Add more fields */}
  </div>
);

export default Card;