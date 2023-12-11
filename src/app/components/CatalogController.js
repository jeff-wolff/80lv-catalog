"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './CatalogController.module.css';
import Catalog from './Catalog';
import StickyNav from './StickyNav';
import FilterNav from './FilterNav';
import FilterNavMenu from './FilterNavMenu';

export default function CatalogController() {
  const [sortOrder, setSortOrder] = useState('0');
  const [typeFilter, setTypeFilter] = useState('experience');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const catalogContainerRef = useRef(null);

  const handleSortChange = (newSortOrder) => {
    if (catalogContainerRef.current) {
      const containerTopPosition = catalogContainerRef.current.getBoundingClientRect().top + window.scrollY;
      const negativeOffset = -64; // Negative offset in pixels
  
      if (window.scrollY > containerTopPosition) {
        window.scrollTo({
          top: containerTopPosition + negativeOffset,
          behavior: 'instant'
        });
      }
    }
    setSortOrder(newSortOrder);
  };

  const handleTypeFilterChange = (newTypeFilter) => {
    // console.log('Type changed to:', newTypeFilter);
    setTypeFilter(newTypeFilter);
  };
    
  const toggleFilterMenu = (e) => {
    e.preventDefault();
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setIsFilterMenuOpen(prevState => {
        if (!prevState) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
        return !prevState;
      });
    }
  };

  return (
    <>
      <StickyNav
        toggleFilterMenu={toggleFilterMenu}
        sortOrder={sortOrder}
        typeFilter={typeFilter}
        onSortChange={handleSortChange}
        onTypeFilterChange={handleTypeFilterChange}
      />
      <FilterNavMenu
        isFilterMenuOpen={isFilterMenuOpen}
        toggleFilterMenu={toggleFilterMenu}
        sortOrder={sortOrder}
        typeFilter={typeFilter}
        onSortChange={handleSortChange}
        onTypeFilterChange={handleTypeFilterChange}
      />
      <div ref={catalogContainerRef} className={`${styles.catalogContainer} container`}>
        <FilterNav 
          sortOrder={sortOrder}
          typeFilter={typeFilter}
          onSortChange={handleSortChange}
          onTypeFilterChange={handleTypeFilterChange} 
        />
        <Catalog 
          sortOrder={sortOrder}
          typeFilter={typeFilter}
          onTypeFilterChange={handleTypeFilterChange} 
        />
      </div>
    </>
  );
}
