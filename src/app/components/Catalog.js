import React from 'react';
import Card from './Card';

// Dummy data for now
const experiences = [
  { id: 1, title: 'Cloud Experience 1', description: 'Description 1' },
  { id: 2, title: 'Cloud Experience 2', description: 'Description 2' },
  { id: 3, title: 'Cloud Experience 3', description: 'Description 3' },
  { id: 4, title: 'Cloud Experience 4', description: 'Description 4' },
  // Add more here
];

const Catalog = () => {
  return (
    <div className="container">
      {experiences.map((exp) => (
        <Card key={exp.id} title={exp.title} description={exp.description} />
      ))}
    </div>
  );
};

export default Catalog;