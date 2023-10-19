import React from 'react';
import Card from './Card';
import styles from './Catalog.module.css';

// Dummy data for now
const experiences = [
  { id: 1, title: 'Cloud Experience 1', author: 'Author 1' },
  { id: 2, title: 'Cloud Experience 2', author: 'Author 2' },
  { id: 3, title: 'Cloud Experience 3', author: 'Author 3' },
  { id: 4, title: 'Cloud Experience 4', author: 'Author 4' },
  { id: 5, title: 'Cloud Experience 5', author: 'Author 5' },
  { id: 6, title: 'Cloud Experience 6', author: 'Author 6' },
];

const Catalog = () => {
  return (
    <div className={`${styles.catalog}`}>
      {experiences.map((exp) => (
        <Card key={exp.id} title={exp.title} author={exp.author} />
      ))}
    </div>
  );
};

export default Catalog;