'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FilterNavMenu.module.css';

const FilterNavMenu = ({ 
    isFilterMenuOpen,
    toggleFilterMenu,
    onSortChange,
    sortOrder,
    onTypeFilterChange,
    typeFilter,
    onSearchQueryChange
}) => {
  
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

    const handleLinkClick = (e, sortOption) => {
        e.preventDefault();
        toggleFilterMenu(e);
        onSortChange(sortOption);
        setMainClass(styles.filterNavMain);
        setSortClass(styles.filterNavSort);
        setTypeClass(styles.filterNavType);
        document.body.classList.remove('no-scroll');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchQuery = e.target.search.value; 
        onSearchQueryChange(searchQuery); 
        toggleFilterMenu(e);
    };


    return (
    <div className={`${styles.filterNavMenu} ${filterOpenClass}`}>
        <div className={mainClass}>
            <div className={styles.header}>
                <form action="#" className={styles.search} onSubmit={handleSearchSubmit}>
                    <label htmlFor="search" style={{ 'verticalAlign': 'middle' }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.16667 6.33333C2.16667 4.03215 4.03215 2.16667 6.33333 2.16667C8.63452 2.16667 10.5 4.03215 10.5 6.33333C10.5 8.63452 8.63452 10.5 6.33333 10.5C4.03215 10.5 2.16667 8.63452 2.16667 6.33333ZM6.33333 0.5C3.11167 0.5 0.5 3.11167 0.5 6.33333C0.5 9.55499 3.11167 12.1667 6.33333 12.1667C7.64361 12.1667 8.85299 11.7347 9.82681 11.0053L14.0774 15.2559C14.4028 15.5814 14.9305 15.5814 15.2559 15.2559C15.5814 14.9305 15.5814 14.4028 15.2559 14.0774L11.0053 9.82681C11.7347 8.85299 12.1667 7.64361 12.1667 6.33333C12.1667 3.11167 9.55499 0.5 6.33333 0.5Z" fill="currentColor"/></svg></label>
                    <input type="text" name="search" id="search" placeholder="Search" />
                </form>
            </div>
            <div className={styles.content}>
                <h4 className={styles.filterNavTitle}>Filters</h4>
                <ul className={styles.filterNavList}>
                    <li><Link href="#" className={styles.sortBtn} onClick={handleSortClick}>Sort by</Link></li>
                    {/* <li><Link href="#" className={styles.typeBtn} onClick={handleTypeClick}>Type</Link></li> */}
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
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, 'date_asc')} className={sortOrder === 'date_asc' ? styles.active : ''}>
                            date (old to new)
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, 'date_desc')} className={sortOrder === 'date_desc' ? styles.active : ''}>
                            date (new to old)
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, 'views_asc')} className={sortOrder === 'views_asc' ? styles.active : ''}>
                            views (least popular)
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, 'views_desc')} className={sortOrder === 'views_desc' ? styles.active : ''}>
                            views (most popular)
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        {/* <div className={typeClass}>
            <div className={styles.header}>
                <Link href="#" className={styles.filterBackBtn} onClick={handleBackClick}><Image src={`/assets/images/icon-chevron-left.svg`} alt={`Back`} width={8} height={12} /></Link>
                <h4 className={styles.filterNavTitle}>
                    Type
                </h4>
            </div>
            <div className={styles.content}>
                <ul className={styles.filterNavListSecond}>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, '', 'experience')} className={typeFilter === 'experience' ? styles.active : ''}>experience</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, '', 'game')} className={typeFilter === 'game' ? styles.active : ''}>game</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, '', '3d asset')} className={typeFilter === '3d asset' ? styles.active : ''}>3d asset</Link>
                    </li>
                    <li>
                        <Link href="#" onClick={(e) => handleLinkClick(e, '', 'vfx')} className={typeFilter === 'vfx' ? styles.active : ''}>vfx</Link>
                    </li>
                </ul>
            </div>
        </div> */}
    </div>

    
    );
};

export default FilterNavMenu;