import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={`${styles.footer} container`}>
    <Image
        src={`/assets/images/80lv-logo.svg`}
        alt={`80lv Cloud Experiences`}
        width={272}
        height={36}
        className={styles.footerLogo}
    />
    <div className={styles.content}>
        <div className={styles.socialContainer}>
            <div className={styles.socialLink}>
                <div className={styles.label}>Facebook</div>
                <a href="https://www.facebook.com/LevelEighty" target="_blank" className={styles.socialHref}>@LevelEighty</a>
            </div>
            <div className={styles.socialLink}>
                <div className={styles.label}>Twitter</div>
                <a href="https://twitter.com/80Level" target="_blank" className={styles.socialHref}>@80Level</a>
            </div>
            <div className={styles.socialLink}>
                <div className={styles.label}>YouTube</div>
                <a href="https://www.youtube.com/channel/UCI8IFlI7_0xU9Dc60xoZuiA" target="_blank" className={styles.socialHref}>@80lvl</a>
            </div>
            <div className={styles.socialLink}>
                <div className={styles.label}>RSS</div>
                <a href="https://80.lv/feed/" target="_blank" className={styles.socialHref}>80.lv/feed</a>
            </div>
            <div className={styles.socialLink}>
                <div className={styles.label}>Instagram</div>
                <a href="https://www.instagram.com/eighty_level/" target="_blank" className={styles.socialHref}>@eighty_level</a>
            </div>
            <div className={styles.socialLink}>
                <div className={styles.label}>Podcasts</div>
                <a href="https://80levelroundtable.buzzsprout.com/" target="_blank" className={styles.socialHref}>@80levelroundtable</a>
            </div>
        </div>
        <div className={styles.legalContainer}>
            <ul className={styles.legalList}>
                <li><a href="https://80.lv/cloud-experiences#contact" className={styles.legalLink} target="_blank">About & Contact us</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                <li><a href="https://80.lv/privacy-policy/" className={styles.legalLink} target="_blank">Privacy policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                <li><a href="https://x.la/80lvgallery/DMCA_Policy.pdf?_xm=190649.286501129456451653" className={styles.legalLink} target="_blank">DMCA policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                <li><a href="https://docs.google.com/document/d/1gHu5kDqOW3nckYBWAboZJO3bfbO4eMFKQ-5wahnaHlc/edit?usp=sharing" className={styles.legalLink} target="_blank">Terms of use</a></li>
            </ul>
            <p>&copy; 2023. 80 level. All rights reserved</p>
        </div>
    </div>

  </footer>
);

export default Footer;