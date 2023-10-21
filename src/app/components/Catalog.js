import React from 'react';
import Card from './Card';
import styles from './Catalog.module.css';

// Dummy data for now
const experiences = [
  { id: 1, title: 'Crypt Ruin Map', author: 'Scans Factory', authorImage: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/4fe02ddd-abf9-4719-865b-fa5c5d9db80e.png', image: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/65194f9b-cec0-428e-a6af-cd24a6ee9c3a.jpg', path: 'crypt-ruin-map' },
  { id: 2, title: 'Ancient Temple', author: 'Scans Factory', authorImage: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/5afce749-fb36-43e3-8f61-7256a4a861cf.png', image: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/b7798414-554e-4c13-9057-14baf48b17c3.jpg', path: 'ancient-temple' },
  { id: 3, title: 'Bazaar', author: 'Denis Rutkovsky', authorImage: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/e74fbc20-5600-4712-b533-b1e547de8bfe.png', image: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/31de1e1d-aa53-46f8-bf7a-b4a2167d4cb1.jpg', path: 'bazaar' },
  { id: 4, title: 'Cyber Scrapyard', author: 'Denis Rutkovsky', authorImage: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/e74fbc20-5600-4712-b533-b1e547de8bfe.png', image: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/be3254ee-0223-4b00-b90f-cf0d3447be9f.jpg', path: 'cyber-scrapyard' },
  { id: 5, title: 'Zen Serenity-Exploring a Serene Japanese Temple with Tori Gate', author: 'Ratandeep Kaur', authorImage: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/b2f8ce9e-dfca-4ad6-802a-faf7db0ec980.png', image: 'https://cdn.xsolla.net/cloud-gaming-bucket-prod/36f3828d-968f-4ac5-81df-1ce9af2ef247.jpg', path: 'zen-serenityexploring-a-serene-japanese-temple-with-tori-gate' },
  { id: 6, title: 'Cloud Experience 6', author: 'Author 6' },
  { id: 7, title: 'Cloud Experience 7', author: 'Author 7' },
  { id: 8, title: 'Cloud Experience 8', author: 'Author 8' },
  { id: 9, title: 'Cloud Experience 9', author: 'Author 9' },
  { id: 10, title: 'Cloud Experience 10', author: 'Author 10' },
  { id: 11, title: 'Cloud Experience 11', author: 'Author 11' },
  { id: 12, title: 'Cloud Experience 12', author: 'Author 12' },
  { id: 13, title: 'Cloud Experience 13', author: 'Author 13' },
  { id: 14, title: 'Cloud Experience 14', author: 'Author 14' },
  { id: 15, title: 'Cloud Experience 15', author: 'Author 15' },
  { id: 16, title: 'Cloud Experience 16', author: 'Author 16' },
  { id: 17, title: 'Cloud Experience 17', author: 'Author 17' },
  { id: 18, title: 'Cloud Experience 18', author: 'Author 18' },
  { id: 19, title: 'Cloud Experience 19', author: 'Author 19' },
  { id: 20, title: 'Cloud Experience 20', author: 'Author 20' },
];

const Catalog = () => {
  return (
    <div className={`${styles.catalog}`}>
      {experiences.map((exp) => (
        <Card key={exp.id} title={exp.title} author={exp.author} authorImage={exp.authorImage} image={exp.image} path={exp.path} />
      ))}
    </div>
  );
};

export default Catalog;