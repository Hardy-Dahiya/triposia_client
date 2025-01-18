'use client';
import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  options?: FlickityOptions;
}

interface FlickityOptions {
  wrapAround?: boolean;
  autoPlay?: boolean | number;
  prevNextButtons?: boolean;
  pageDots?: boolean;
  cellAlign?: 'left' | 'center' | 'right';
  contain?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  options = {
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
    cellAlign: 'center',
    contain: true,
  },
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (carouselRef.current && !flickityInstance.current) {
      flickityInstance.current = new Flickity(carouselRef.current, options);
    }

    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
        flickityInstance.current = null;
      }
    };
  }, [options]);

  return (
    <div ref={carouselRef} className="w-full">
      {images.map((image, index) => (
        <div key={index} className="gallery-cell w-full">
          <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
