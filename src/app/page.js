// src/app/page.js
import styles from './page.module.css';
import Catalog from './components/Catalog';
import Carousel from './components/Carousel';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <Catalog />
    </div>
  );
}
