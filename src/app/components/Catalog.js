'use client';
import { useState, useEffect, useRef } from 'react';
import Card from './Card';
import CardLoading from './CardLoading';
import EmptyState from './EmptyState';
import styles from './Catalog.module.css';

const Catalog = ({ sortOrder, typeFilter, searchQuery, resetOffset, onResetOffset }) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadingRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 12;
  const debounceDelay = 300;
  const initialLoadComplete = useRef(false);

  const fetchExperiences = async (offset) => {
    try {
      const response = await fetch(
        `https://80.lv/api/main/cloud-experience/catalog?sort=${sortOrder}&q=${encodeURIComponent(searchQuery)}&limit=${limit}&offset=${offset}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTotalItems(data.totalAll);
      return data;
    } catch (e) {
      throw e;
    }
  };

  const loadMoreExperiences = () => {
    const loadingRefOffset = 500;
    let newOffset = offset + limit;

    if (searchQuery) {
      // If there's a search query, do not load more experiences
      return;
    }
    
    if (newOffset >= totalItems) {
      newOffset = 0;
    }

    if (
      loadingRef.current &&
      window.innerHeight + window.scrollY >= (loadingRef.current.offsetTop + loadingRefOffset) &&
      !loading
    ) {
      setLoading(true);
  
      fetchExperiences(newOffset)
      .then((data) => {
        setExperiences((prevExperiences) => {
          // If offset is reset to 0, append data from the beginning
          return [...prevExperiences, ...data.items];
        });
        setOffset(newOffset);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
    }
  };

    // Reset experiences and offset when search query changes
    useEffect(() => {
      if (resetOffset) {
        setLoading(true);
        setOffset(0);
        setExperiences([]);
        fetchExperiences(0)
          .then((data) => {
            setExperiences(data.items);
            setLoading(false);
            onResetOffset(); // Reset the offset trigger in the parent component
          })
          .catch((e) => {
            setError(e.message);
            setLoading(false);
          });
      }
    }, [resetOffset, searchQuery]);

  // Load more experiences when the user scrolls to the bottom of the page
  useEffect(() => {
    const debouncedLoadMore = debounce(loadMoreExperiences, debounceDelay);
    window.addEventListener('scroll', debouncedLoadMore);
    
    // Fetch initial data only once during component initialization
    if (!initialLoadComplete.current && !searchQuery) {
      fetchExperiences(offset)
        .then((data) => {
          setExperiences(data.items);
          setLoading(false);
          initialLoadComplete.current = true; // Mark initial load as complete
        })
        .catch((e) => {
          setError(e.message);
          setLoading(false);
        });

    }

    return () => {
      window.removeEventListener('scroll', debouncedLoadMore);
    };
  });

  const debounce = (func, delay) => {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  // Reset the catalog when sortOrder changes
  useEffect(() => {
    if (initialLoadComplete.current) {
      setLoading(true);
      setOffset(0);
      fetchExperiences(0)
        .then((data) => {
          setExperiences(data.items);
          setLoading(false);
        })
        .catch((e) => {
          setError(e.message);
          setLoading(false);
        });
    }
  }, [sortOrder]);



  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className={`${styles.catalog}`}>
        {typeFilter !== 'experience' ? (
          <EmptyState />
        ) : (
          experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <Card
                key={`${exp.id}-${index}`}
                title={exp.name}
                author={exp.author.name}
                authorImage={exp.author.image ? exp.author.image : exp.logo}
                image={exp.cover}
                path={exp.path}
                views={exp.views}
              />
            ))
          ) : (
            <>
              {loading ? (
                <>
                  {  [...Array(12)].map((_, index) => <CardLoading key={index} />)}
                </>
              ) : (
                <EmptyState />
              )}
            </>
          )
        )}
      </div>
      <div className={styles.loadingRef} ref={loadingRef} />
      {loading ? <div className={styles.twitterLoader} /> : null}
    </>
  );
};

export default Catalog;
