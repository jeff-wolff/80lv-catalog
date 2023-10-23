'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FilterNav.module.css';

const FilterNav = () => {
    const [openMenu, setOpenMenu] = useState(null);  // 'sort', 'type', or null
    const menuRef = useRef(null);

    const toggleMenu = (menu) => {
        setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
    };

    const handleClickOutside = (event) => {
        const sortMenuElement = document.querySelector(`.${styles.sortFilterMenu}`);
        const typeMenuElement = document.querySelector(`.${styles.typeFilterMenu}`);
        const isOutsideSortMenu = sortMenuElement && !sortMenuElement.contains(event.target);
        const isOutsideTypeMenu = typeMenuElement && !typeMenuElement.contains(event.target);
        if (isOutsideSortMenu && isOutsideTypeMenu) {
            setOpenMenu(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
    <div className={styles.filterNav} ref={menuRef}>
        <div className={styles.filterNavContainer}>
            <button 
                className={`${styles.sortFilterBtn} button-filter`}
                onClick={() => toggleMenu('sort')}
            >
                Sort by&nbsp;<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.41107 6.91058C4.73651 6.58514 5.26414 6.58514 5.58958 6.91058L10.0003 11.3213L14.4111 6.91058C14.7365 6.58514 15.2641 6.58514 15.5896 6.91058C15.915 7.23602 15.915 7.76366 15.5896 8.08909L10.5896 13.0891C10.2641 13.4145 9.73651 13.4145 9.41107 13.0891L4.41107 8.08909C4.08563 7.76366 4.08563 7.23602 4.41107 6.91058Z" fill="currentColor"/></svg>
            </button>
            <div className={`${styles.sortFilterMenu} ${styles.filterNavMenu} ${openMenu === 'sort' ? styles.open : ''}`}>
                <ul>
                    <li>
                        <Link href="#">date ascending</Link>
                    </li>
                    <li>
                        <Link href="#">date descending</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.filterNavContainer}>
            <button
                className={`${styles.typeFilterBtn} button-filter`}
                onClick={() => toggleMenu('type')}
            >
                Type&nbsp;<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.41107 6.91058C4.73651 6.58514 5.26414 6.58514 5.58958 6.91058L10.0003 11.3213L14.4111 6.91058C14.7365 6.58514 15.2641 6.58514 15.5896 6.91058C15.915 7.23602 15.915 7.76366 15.5896 8.08909L10.5896 13.0891C10.2641 13.4145 9.73651 13.4145 9.41107 13.0891L4.41107 8.08909C4.08563 7.76366 4.08563 7.23602 4.41107 6.91058Z" fill="currentColor"/></svg>
            </button>
            <div className={`${styles.typeFilterMenu} ${styles.filterNavMenu} ${openMenu === 'type' ? styles.open : ''}`}>
                <ul>
                    <li>
                        <Link href="#">experience</Link>
                    </li>
                    <li>
                        <Link href="#">game</Link>
                    </li>
                    <li>
                        <Link href="#">3d asset</Link>
                    </li>
                    <li>
                        <Link href="#">vfx</Link>
                    </li>
                </ul>
            </div>
        </div>
        <button className={`${styles.searchBtn} button-filter`} style={{'marginLeft': '.25rem'}}>
            <form action="#">
                <label htmlFor="search" style={{ 'verticalAlign': 'middle' }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.16667 6.33333C2.16667 4.03215 4.03215 2.16667 6.33333 2.16667C8.63452 2.16667 10.5 4.03215 10.5 6.33333C10.5 8.63452 8.63452 10.5 6.33333 10.5C4.03215 10.5 2.16667 8.63452 2.16667 6.33333ZM6.33333 0.5C3.11167 0.5 0.5 3.11167 0.5 6.33333C0.5 9.55499 3.11167 12.1667 6.33333 12.1667C7.64361 12.1667 8.85299 11.7347 9.82681 11.0053L14.0774 15.2559C14.4028 15.5814 14.9305 15.5814 15.2559 15.2559C15.5814 14.9305 15.5814 14.4028 15.2559 14.0774L11.0053 9.82681C11.7347 8.85299 12.1667 7.64361 12.1667 6.33333C12.1667 3.11167 9.55499 0.5 6.33333 0.5Z" fill="currentColor"/></svg></label>
                <input type="text" name="search" id="search" />
            </form>
        </button>
    </div>
    );
};

export default FilterNav;