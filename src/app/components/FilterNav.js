import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FilterNav.module.css';

const FilterNav = () => (
    <div className={styles.filterNav}>
        <button className={`${styles.sortFilterBtn} button-filter`}>Sort by date</button>
        <button className={`${styles.typeFilterBtn} button-filter`}>Type</button>
        <button className={`${styles.searchBtn} button-icon button-filter`}><span>Search</span></button>
    </div>
);

export default FilterNav;