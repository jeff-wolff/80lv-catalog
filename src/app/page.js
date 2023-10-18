// src/app/page.js
import styles from './page.module.css';
import Catalog from './components/Catalog';
import Carousel from './components/Carousel';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel />

      <div className="container">
        <h1 className={styles.title}>80 Level Cloud Experiences</h1>
        <p><Link href="#">Lorem ipsum, dolor sit amet consectetur</Link> adipisicing elit. Unde blanditiis, nisi! Quo nobis quis adipisci, accusamus deleniti molestias praesentium laudantium necessitatibus facere dolores vel odio inventore beatae incidunt totam cupiditate qui impedit quibusdam reprehenderit ut corporis quasi magni in illum. Quidem repellat aspernatur recusandae optio provident repudiandae fuga vitae eius atque nemo fugit voluptas ipsam quae at porro placeat, voluptate minima? Maxime facilis facere incidunt sed at voluptatibus dicta aliquam quasi amet impedit quisquam sit ab saepe molestias soluta neque, rem voluptas consequuntur, qui cumque tenetur mollitia blanditiis. Nulla repellendus vel nisi possimus rerum, facere accusamus velit doloribus explicabo accusantium.</p>
        
        <p><Link href="" className="button">Text</Link></p>
        <p><Link href="" className="button-secondary">Text</Link></p>
      </div>
      
      <Catalog />
    </div>
  );
}
