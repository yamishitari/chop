
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = GALLERY_IMAGES.map(({ src, alt }) => ({
    src,
    alt,
  }));

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-4">
            Moments at The Grind
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the life and art of our coffee shop.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={image.id} className="break-inside-avoid cursor-pointer" onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
      />
    </div>
  );
};

export default Gallery;
