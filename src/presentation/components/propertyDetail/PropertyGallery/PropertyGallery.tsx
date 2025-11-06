import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PropertyImage } from '@core/domain/entities';
import { useGalleryCarousel } from '@presentation/hooks/useGalleryCarousel';
import './PropertyGallery.css';

interface PropertyGalleryProps {
  images: PropertyImage[];
  propertyName: string;
}

export const PropertyGallery = ({ images, propertyName }: PropertyGalleryProps) => {
  const {
    currentIndex,
    itemsPerView,
    maxIndex,
    showNavigation,
    handlePrevious,
    handleNext,
    goToIndex,
  } = useGalleryCarousel({ totalImages: images.length });

  if (images.length === 0) {
    return null;
  }

  const translateX = -(currentIndex * (100 / itemsPerView));

  return (
    <div className="property-gallery">
      <div className="property-gallery__container">
        {showNavigation && (
          <button
            className="property-gallery__nav property-gallery__nav--prev"
            onClick={handlePrevious}
            aria-label="Imágenes anteriores"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        <div className="property-gallery__images-wrapper">
          <motion.div
            className="property-gallery__track"
            animate={{ x: `${translateX}%` }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {images.map((img, index) => (
              <div
                key={img.idPropertyImage}
                className="property-gallery__slide"
                style={{ 
                  width: `${100 / itemsPerView}%`,
                  padding: '0 10px'
                }}
              >
                <motion.div
                  className="property-gallery__image-wrapper"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={img.file}
                    alt={`${propertyName} - Imagen ${index + 1}`}
                    className="property-gallery__image"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {showNavigation && (
          <button
            className="property-gallery__nav property-gallery__nav--next"
            onClick={handleNext}
            aria-label="Imágenes siguientes"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>

      {showNavigation && (
        <div className="property-gallery__indicators">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`property-gallery__indicator ${
                index === currentIndex ? 'property-gallery__indicator--active' : ''
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
