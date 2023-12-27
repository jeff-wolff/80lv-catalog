'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './FilterNav.module.css';

const FilterNav = ({ onSortChange, sortOrder, typeFilter, onTypeFilterChange, onSearchQueryChange, searchQuery }) => {
    const [openMenu, setOpenMenu] = useState(null);  // 'sort', 'type', or null
    const menuRef = useRef(null);
    
    const debounce = (func, delay) => {
        let inDebounce;
        return function(...args) {
            const context = this;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const toggleMenu = (menu) => {
        setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenMenu(null);
        }
    };

    const handleSortOptionClick = (sortOption) => {
        onSortChange(sortOption);
        toggleMenu(null);
    };

    const handleTypeFilterClick = (filterOption) => {
        onTypeFilterChange(filterOption);
        toggleMenu(null);
    };

    const debouncedSearchQueryChange = useRef(debounce(onSearchQueryChange, 25)).current; 

    const handleSearchChange = (event) => {
        debouncedSearchQueryChange(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); 
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const sortOptionClasses = (option) => {
        return `${styles.sortOption} ${sortOrder === option ? styles.selectedSortOption : ''}`;
    }; 

    const filterOptionClasses = (option) => {
        return `${styles.filterOption} ${typeFilter === option ? styles.selectedSortOption : ''}`;
    }; 

    const getSortOrderLabel = () => {
        switch (sortOrder) {
            case 'date_desc':
                return 'date (new to old)';
            case 'date_asc':
                return 'date (old to new)';
            case 'views_desc':
                return 'views (most popular)';
            case 'views_asc':
                return 'views (least popular)';
            default:
                return 'Sort by';
        }
    };


    return (
    <div className={styles.filterNav} ref={menuRef}>
        <div className={styles.filterNavContainer}>
            <button 
                className={`${styles.sortFilterBtn} button-filter`}
                onClick={() => toggleMenu('sort')}
            >
                {getSortOrderLabel()}&nbsp;<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.41107 6.91058C4.73651 6.58514 5.26414 6.58514 5.58958 6.91058L10.0003 11.3213L14.4111 6.91058C14.7365 6.58514 15.2641 6.58514 15.5896 6.91058C15.915 7.23602 15.915 7.76366 15.5896 8.08909L10.5896 13.0891C10.2641 13.4145 9.73651 13.4145 9.41107 13.0891L4.41107 8.08909C4.08563 7.76366 4.08563 7.23602 4.41107 6.91058Z" fill="currentColor"/></svg>
            </button>
            <div className={`${styles.sortFilterMenu} ${styles.filterNavMenu} ${openMenu === 'sort' ? styles.open : ''}`}>
                <ul>
                    <li>
                        <button 
                            className={sortOptionClasses('date_desc')}
                            onClick={() => handleSortOptionClick('date_desc')}>date (new to old)</button>
                    </li>
                    <li>
                        <button 
                            className={sortOptionClasses('date_asc')}
                            onClick={() => handleSortOptionClick('date_asc')}>date (old to new)</button>
                    </li>
                    <li>
                        <button 
                            className={sortOptionClasses('views_desc')}
                            onClick={() => handleSortOptionClick('views_desc')}>views (most popular)</button>
                    </li>                    
                    <li>
                        <button 
                            className={sortOptionClasses('views_asc')}
                            onClick={() => handleSortOptionClick('views_asc')}>views (least popular)</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.filterNavContainer}>
            <button
                className={`${styles.typeFilterBtn} button-filter`}
                onClick={() => toggleMenu('type')}
            >
                {typeFilter == 'experience' ? `Type` : typeFilter }&nbsp;<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.41107 6.91058C4.73651 6.58514 5.26414 6.58514 5.58958 6.91058L10.0003 11.3213L14.4111 6.91058C14.7365 6.58514 15.2641 6.58514 15.5896 6.91058C15.915 7.23602 15.915 7.76366 15.5896 8.08909L10.5896 13.0891C10.2641 13.4145 9.73651 13.4145 9.41107 13.0891L4.41107 8.08909C4.08563 7.76366 4.08563 7.23602 4.41107 6.91058Z" fill="currentColor"/></svg>
            </button>
            <div className={`${styles.typeFilterMenu} ${styles.filterNavMenu} ${openMenu === 'type' ? styles.open : ''}`}>
                <ul>
                    <li>
                        <button
                            className={filterOptionClasses('experience')}
                            onClick={() => handleTypeFilterClick('experience')}
                        >
                            experience
                        </button>
                    </li>
                    <li>
                        <button 
                        className={filterOptionClasses('game')}
                        onClick={() => handleTypeFilterClick('game')}>game</button>
                    </li>
                    <li>
                        <button 
                        className={filterOptionClasses('3d asset')}
                        onClick={() => handleTypeFilterClick('3d asset')}>3d asset</button>
                    </li>
                    <li>
                        <button 
                        className={filterOptionClasses('vfx')}
                        onClick={() => handleTypeFilterClick('vfx')}>vfx</button>
                    </li>
                </ul>
            </div>
        </div>
        <button className={`${styles.searchBtn} button-filter`}>
            <form action="#" onSubmit={handleSearchSubmit}> 
                <label 
                    htmlFor="searchInput"
                    style={{ 'verticalAlign': 'middle' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.16667 6.33333C2.16667 4.03215 4.03215 2.16667 6.33333 2.16667C8.63452 2.16667 10.5 4.03215 10.5 6.33333C10.5 8.63452 8.63452 10.5 6.33333 10.5C4.03215 10.5 2.16667 8.63452 2.16667 6.33333ZM6.33333 0.5C3.11167 0.5 0.5 3.11167 0.5 6.33333C0.5 9.55499 3.11167 12.1667 6.33333 12.1667C7.64361 12.1667 8.85299 11.7347 9.82681 11.0053L14.0774 15.2559C14.4028 15.5814 14.9305 15.5814 15.2559 15.2559C15.5814 14.9305 15.5814 14.4028 15.2559 14.0774L11.0053 9.82681C11.7347 8.85299 12.1667 7.64361 12.1667 6.33333C12.1667 3.11167 9.55499 0.5 6.33333 0.5Z" fill="currentColor"/></svg>
                </label>
                <input 
                    type="search"
                    name="searchInput"
                    id="searchInput"
                    placeholder="Enter your search"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={handleSearchChange} 
                    />
            </form>
        </button>
    </div>
    );
};

export default FilterNav;