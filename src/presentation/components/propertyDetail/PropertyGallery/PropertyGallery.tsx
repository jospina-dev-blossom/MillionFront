import { motion } from 'framer-motion';
import type { PropertyImage } from '@core/domain/entities';
import './PropertyGallery.css';

interface PropertyGalleryProps {
  images: PropertyImage[];
  propertyName: string;
}

export const PropertyGallery = ({ images, propertyName }: PropertyGalleryProps) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="property-gallery">
      <div className="property-gallery__images">
        {images.map((img, index) => (
          <motion.div
            key={img.idPropertyImage}
            className="property-gallery__image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={img.file}
              alt={propertyName}
              className="property-gallery__image"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
