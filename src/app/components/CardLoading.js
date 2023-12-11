import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CardLoading.module.css';

const CardLoading = () => {

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Link href={`#`} target="_blank">        
            <Image src={`data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`} alt={``} width={354} height={200} />  
        </Link>
      </div>
      <div className={styles.cardContentWrap}>
        <div className={styles.cardInfo}>
          <div className={styles.cardIcon}>
            <Link href={`#`} target="_blank">
                <Image src={`data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`} alt={``} width={32} height={32} />
            </Link>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <Link href={`#`} target="_blank">
              &nbsp;
              </Link>
            </div>
            <p className={styles.cardAuthor}></p>
          </div>
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.cardViews}>
            &nbsp;</span>
            <span className={styles.cardDate}>
            &nbsp;</span>
        </div>
      </div>
    </div>
  );
  
};

export default CardLoading;