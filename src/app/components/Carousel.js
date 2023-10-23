"use client"
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Carousel.module.css';

register();

const Carousel = () => {
  const swiperElRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionToggle = (e) => {
    e.preventDefault();
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        swiperElRef.current.style.setProperty("--swiper-pagination-bottom", "3.75rem");
      } else {
        swiperElRef.current.style.setProperty("--swiper-pagination-bottom", "6.25rem");
      }
    };
    
    const handleMouseOver = () => {
      // if (swiperElRef.current.swiper) {
      //   swiperElRef.current.swiper.autoplay.stop();
      // }
    };

    const handleMouseOut = () => {
      if (swiperElRef.current.swiper) {
        swiperElRef.current.swiper.autoplay.start();
      }
    };

    swiperElRef.current.addEventListener('mouseover', handleMouseOver);
    swiperElRef.current.addEventListener('mouseout', handleMouseOut);    
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      // swiperElRef.current.removeEventListener('mouseover', handleMouseOver);
      swiperElRef.current.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className={`${styles.carousel} container`}>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="false"
        pagination='{"clickable": true}'
        loop="true"
        autoplay='{"delay": 6000}'
        style={{
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#FFF",
          "--swiper-pagination-bullet-inactive-opacity": ".45",
          "--swiper-pagination-bullet-size": "0.5rem",
          "--swiper-pagination-bullet-horizontal-gap": "0.25rem",
          "--swiper-pagination-bottom": "6.25rem"
        }}
      >
        <swiper-slide key={`1`}>
          <div className={styles.slideWrapper}>
            <Image
              src={`/assets/images/slide-1.jpg`}
              alt={``}
              width={1440}
              height={600}
              className={`${styles.desktopImage} ${styles.slideImage}`}
            />
            <Image
              src={`/assets/images/slide-1-mobile.jpg`}
              alt={`Mobile`}
              width={1023}
              height={600}
              className={`${styles.mobileImage} ${styles.slideImage}`}
            />
            <div className={styles.overlay}>
              <h1 className={styles.overlayTitle}>80 Level Cloud Experiences</h1>
              <p className={styles.overlaySubtitle}>Upload your real-time<br /> 3d experiences to our cloud for FREE</p>
              <p>
                <a href="https://80.lv/cloud-experiences#start" className="button" target="_blank">
                    Upload your build&nbsp;&nbsp;
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.91074 6.42259C7.23618 6.74803 7.76382 6.74803 8.08926 6.42259L9.16667 5.34518V12.5C9.16667 12.9602 9.53976 13.3333 10 13.3333C10.4602 13.3333 10.8333 12.9602 10.8333 12.5V5.34518L11.9107 6.42259C12.2362 6.74803 12.7638 6.74803 13.0893 6.42259C13.4147 6.09715 13.4147 5.56951 13.0893 5.24408L10.5893 2.74408C10.2638 2.41864 9.73618 2.41864 9.41074 2.74408L6.91074 5.24408C6.58531 5.56951 6.58531 6.09715 6.91074 6.42259ZM2.5 10V12.7011V12.7011C2.49999 13.3719 2.49998 13.9255 2.53683 14.3765C2.5751 14.8449 2.65724 15.2755 2.86331 15.68C3.18289 16.3072 3.69283 16.8171 4.32003 17.1367C4.72448 17.3428 5.15507 17.4249 5.62348 17.4632C6.07448 17.5 6.62811 17.5 7.29892 17.5H12.7011C13.3719 17.5 13.9255 17.5 14.3765 17.4632C14.8449 17.4249 15.2755 17.3428 15.68 17.1367C16.3072 16.8171 16.8171 16.3072 17.1367 15.68C17.3428 15.2755 17.4249 14.8449 17.4632 14.3765C17.5 13.9255 17.5 13.3718 17.5 12.701V10C17.5 9.53976 17.1269 9.16667 16.6667 9.16667C16.2064 9.16667 15.8333 9.53976 15.8333 10L15.8333 12.6667C15.8333 13.3805 15.8327 13.8657 15.802 14.2408C15.7722 14.6061 15.7181 14.793 15.6517 14.9233C15.4919 15.2369 15.2369 15.4919 14.9233 15.6517C14.793 15.7181 14.6061 15.7722 14.2408 15.802C13.8657 15.8327 13.3805 15.8333 12.6667 15.8333H7.33333C6.61952 15.8333 6.13427 15.8327 5.7592 15.802C5.39385 15.7722 5.20702 15.7181 5.07668 15.6517C4.76308 15.4919 4.50811 15.2369 4.34832 14.9233C4.28192 14.793 4.22781 14.6061 4.19796 14.2408C4.16732 13.8657 4.16667 13.3805 4.16667 12.6667L4.16667 10C4.16667 9.53976 3.79357 9.16667 3.33333 9.16667C2.8731 9.16667 2.5 9.53976 2.5 10Z" fill="currentColor"/></svg>    
                </a>
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide key={`2`}>
          <div className={styles.slideWrapper}>
            <Link href="https://80.lv/cgs/ancient-temple" target="_blank">
              <Image
                src={`/assets/images/ancient-temple.jpg`}
                alt={``}
                width={1440}
                height={600}
                className={styles.slideImage}
              />
            </Link>
            <div className={styles.overlayExperience}>
              <div className={styles.experienceTitle}>
                <h2 className={`${styles.overlayTitle} ${styles.experienceHeader}`}>Ancient temple</h2>
                <div><a href="https://80.lv/cgs/ancient-temple/play" className={styles.experiencePlayButton} target="_blank">Log in and play</a></div>
              </div>
              <div className={styles.experienceContent}>
                <div className={styles.experienceContentInner}>                  
                  <div className={styles.experienceAuthor}>
                    <div className={styles.authorIcon}>
                      <Link href={`#`}><Image src={`/assets/images/no-profile.svg`} alt={``} width={40} height={40} /></Link>
                    </div>
                    <div className={styles.authorContent}>
                      <h4 className={styles.authorName}><Link href={`#`}>Scans Factory</Link></h4>
                      <p className={styles.authorSubtitle}>3D Artist</p>
                    </div>
                  </div>
                  <div className={`${styles.experienceDescription} ${isExpanded ? styles.experienceDescriptionExpanded : ''}`}>
                    <p className={styles.descriptionContent}>This project was a big adventure because I had a chance to get some photogrammetry scans directly in Cambodia. In my role, I did most of the photogrammetry scan assets and make them modular and game-ready, create whole foliage, and prepared a marketing video. This project was a big adventure because I had a chance to get some photogrammetry scans directly in Cambodia. In my role, I did most of the photogrammetry scan assets and make them modular and game-ready, create whole foliage, and prepared a marketing video.</p>
                    <Link href="#" onClick={handleAccordionToggle} className={styles.moreButton}>
                      {isExpanded ? 'view less' : 'view more'}
                    </Link>
                  </div>
                  <a href="https://80.lv/cgs/ancient-temple/play" className={styles.experiencePlayButton} target="_blank">Log in and play</a>
                </div>
              </div>
            </div>
              
          </div>
        </swiper-slide>
        <swiper-slide key={`3`}>
          <div className={styles.slideWrapper}>
            <Link href="https://80.lv/cgs/crypt-ruin-map" target="_blank">
              <Image
                src={`/assets/images/crypt-ruin-map.jpg`}
                alt={``}
                width={1440}
                height={600}
                className={styles.slideImage}
              />
            </Link>
            <div className={styles.overlayExperience}>
              <div className={styles.experienceTitle}>
                <h2 className={`${styles.overlayTitle} ${styles.experienceHeader}`}>Crypt Ruin Map</h2>
                <div><a href="https://80.lv/cgs/crypt-ruin-map/play" className={styles.experiencePlayButton} target="_blank">Log in and play</a></div>
              </div>
              <div className={styles.experienceContent}>
                <div className={styles.experienceContentInner}>                  
                  <div className={styles.experienceAuthor}>
                    <div className={styles.authorIcon}>
                      <Link href={`#`}><Image src={`/assets/images/no-profile.svg`} alt={``} width={40} height={40} /></Link>
                    </div>
                    <div className={styles.authorContent}>
                      <h4 className={styles.authorName}><Link href={`#`}>Scans Factory</Link></h4>
                      <p className={styles.authorSubtitle}>3D Artist</p>
                    </div>
                  </div>
                  <div className={`${styles.experienceDescription} ${isExpanded ? styles.experienceDescriptionExpanded : ''}`}>
                    <p className={styles.descriptionContent}>This project was a big adventure because I had a chance to get some photogrammetry scans directly in Cambodia. In my role, I did most of the photogrammetry scan assets and make them modular and game-ready, create whole foliage, and prepared a marketing video. This project was a big adventure because I had a chance to get some photogrammetry scans directly in Cambodia. In my role, I did most of the photogrammetry scan assets and make them modular and game-ready, create whole foliage, and prepared a marketing video.</p>
                    <Link href="#" onClick={handleAccordionToggle} className={styles.moreButton}>
                      {isExpanded ? 'view less' : 'view more'}
                    </Link>
                  </div>
                  <a href="https://80.lv/cgs/crypt-ruin-map/play" className={styles.experiencePlayButton} target="_blank">Log in and play</a>
                </div>
              </div>
            </div>
              
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
export default Carousel;
