import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EmptyState.module.css';

const EmptyState = () => {
  
  return (
    <div className={styles.experienceNotFound}>
        <Image
        src={`/assets/images/icon-notfound.svg`}
        width={72}
        height={72}
        alt={``}
        className={styles.experienceNotFoundIcon}
        />
        <h3 className={styles.experienceNotFoundTitle}>Experiences not found</h3>
        <p className={styles.experienceNotFoundContent}>
         {`No experiences were found matching your search.`}<br />
        </p>
    </div>
  );
  
};

export default EmptyState;