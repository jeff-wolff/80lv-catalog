"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Catalog from './components/Catalog';
import Carousel from './components/Carousel';
import StickyNav from './components/StickyNav';
import FilterNav from './components/FilterNav';
import FilterNavMenu from './components/FilterNavMenu';
import Link from 'next/link';

export default function Home() {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const toggleFilterMenu = (e) => {
    e.preventDefault();
    setIsFilterMenuOpen(prevState => {
      if (!prevState) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return !prevState;
    });
  };

  return (
    <div className={styles.container}>
      <Carousel />
      <StickyNav toggleFilterMenu={toggleFilterMenu} />
      <FilterNavMenu isFilterMenuOpen={isFilterMenuOpen} toggleFilterMenu={toggleFilterMenu} />
      <div className={`${styles.catalogContainer} container`}>
        <FilterNav />
        <Catalog />
      </div>
    </div>
  );
}
