// src/app/page.js
import styles from './page.module.css';
import Catalog from './components/Catalog';
import Carousel from './components/Carousel';
import StickyNav from './components/StickyNav';
import FilterNav from './components/FilterNav';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <StickyNav />
      <div className={`${styles.catalogContainer} container`}>
        <FilterNav />
        <Catalog />
      </div>
    </div>
  );
}
