import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ title, author }) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      <Link href={`#`}><Image src={`/assets/images/no-image.svg`} alt={``} width={354} height={200} /></Link>
    </div>
    <div className={styles.cardContentWrap}>
      <div className={styles.cardInfo}>
        <div className={styles.cardIcon}>
          <Link href={`#`}><Image src={`/assets/images/no-profile.svg`} alt={``} width={32} height={32} /></Link>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}><Link href={`#`}>{title}</Link></div>
          <p className={styles.cardAuthor}>{author}</p>
        </div>
      </div>
      <div className={styles.cardMeta}>
        00.0k<br />
        1 week ago
      </div>
    </div>
  </div>
);

export default Card;