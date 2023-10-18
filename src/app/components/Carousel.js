"use client"
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import styles from './Carousel.module.css';

register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <div className="container">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        loop="true"
      >
          <swiper-slide key={`1`}>
            <Image
              src={`https://picsum.photos/1920/876?random=1`}
              alt={``}
              width={1920}
              height={876}
              layout="responsive"
            />
          </swiper-slide>
          <swiper-slide key={`2`}>
            <Image
              src={`https://picsum.photos/1920/876?random=2`}
              alt={``}
              width={1920}
              height={876}
              layout="responsive"
            />
          </swiper-slide>
          <swiper-slide key={`3`}>
            <Image
              src={`https://picsum.photos/1920/876?random=3`}
              alt={``}
              width={1920}
              height={876}
              layout="responsive"
            />
          </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Carousel;
