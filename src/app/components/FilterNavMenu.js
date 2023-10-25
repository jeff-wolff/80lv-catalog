'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FilterNavMenu.module.css';

const FilterNavMenu = ({ isFilterMenuOpen, toggleFilterMenu }) => {
  
    const [mainClass, setMainClass] = useState(styles.filterNavMain);
    const [sortClass, setSortClass] = useState(styles.filterNavSort);
    const [typeClass, setTypeClass] = useState(styles.filterNavType);


    const filterOpenClass = isFilterMenuOpen ? styles.filterNavMenuOpen : '';


    
    const handleSortClick = (e) => {
        e.preventDefault();
        setMainClass(`${styles.filterNavMain} ${styles.closed}`);
        setSortClass(`${styles.filterNavSort} ${styles.open}`);
    };

    const handleTypeClick = (e) => {
        e.preventDefault();
        setMainClass(`${styles.filterNavMain} ${styles.closed}`);
        setTypeClass(`${styles.filterNavType} ${styles.open}`);
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        setMainClass(styles.filterNavMain);
        setSortClass(styles.filterNavSort);
        setTypeClass(styles.filterNavType);
    };

    // TODO, actually handle the links:
    const handleLinkClick = (e) => {
        e.preventDefault();
        toggleFilterMenu(e);
        setMainClass(styles.filterNavMain);
        setSortClass(styles.filterNavSort);
        setTypeClass(styles.filterNavType);
        document.body.classList.remove('no-scroll');  // Removes the no-scroll class from the body.
    };


    return (
    <div className={`${styles.filterNavMenu} ${filterOpenClass}`}>
        <div className={mainClass}>
            <div className={styles.header}>
                {/* Search */}
            </div>
            <div className={styles.content}>
                <h4 className={styles.filterNavTitle}>Filters</h4>
                <ul className={styles.filterNavList}>
                    <li><Link href="#" className={styles.sortBtn} onClick={handleSortClick}>Sort by</Link></li>
                    <li><Link href="#" className={styles.typeBtn} onClick={handleTypeClick}>Type</Link></li>
                </ul>
            </div>
        </div>
        <div className={sortClass}>
            <div className={styles.header}>
                <Link href="#" className={styles.filterBackBtn} onClick={handleBackClick}><Image src={`/assets/images/icon-chevron-left.svg`} alt={`Back`} width={8} height={12} /></Link>
                <h4 className={styles.filterNavTitle}>
                    Sort by
                </h4>
            </div>
            <div className={styles.content}>
                <ul className={styles.filterNavListSecond}>
                    <li><Link href="#" onClick={handleLinkClick}>date ascending</Link></li>
                    <li><Link href="#" onClick={handleLinkClick} className={styles.active}>date descending</Link></li>
                </ul>
            </div>
        </div>
        <div className={typeClass}>
            <div className={styles.header}>
                <Link href="#" className={styles.filterBackBtn} onClick={handleBackClick}><Image src={`/assets/images/icon-chevron-left.svg`} alt={`Back`} width={8} height={12} /></Link>
                <h4 className={styles.filterNavTitle}>
                    Type
                </h4>
            </div>
            <div className={styles.content}>
                <ul className={styles.filterNavListSecond}>
                    <li>
                        <Link href="#" onClick={handleLinkClick} className={styles.active}>experience</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleLinkClick}>game</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleLinkClick}>3d asset</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={handleLinkClick}>vfx</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    
    );
};

export default FilterNavMenu;