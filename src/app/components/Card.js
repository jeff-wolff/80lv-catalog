import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ title, author, authorImage, image, path }) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      <Link href={`https://80.lv/cgs/${path}`} target="_blank">        
        { image ? ( 
              <Image src={image} alt={``} width={354} height={200} />
              ) : (
              <Image src={`/assets/images/no-image.svg`} alt={``} width={354} height={200} />
        )}        
      </Link>
    </div>
    <div className={styles.cardContentWrap}>
      <div className={styles.cardInfo}>
        <div className={styles.cardIcon}>
          <Link href={`#`}>
            { authorImage ? ( 
              <Image src={authorImage} alt={``} width={32} height={32} />
              ) : (
              <Image src={`/assets/images/no-profile.svg`} alt={``} width={32} height={32} />
            )}
          </Link>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>
            <Link href={`https://80.lv/cgs/${path}`} target="_blank">
              {title}
            </Link>
          </div>
          <p className={styles.cardAuthor}>{author}</p>
        </div>
      </div>
      <div className={styles.cardMeta}>
        <span className={styles.cardViews}><Image src={`/assets/images/icon-eye.svg`} alt={``} width={16} height={16} className={styles.cardViewsIcon} />&nbsp;00.0k</span><br />
        1 week ago
      </div>
    </div>
  </div>
);

export default Card;