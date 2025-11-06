import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TEXTS } from "@shared/constants/texts";
import type { Property } from "@core/domain/entities";
import { formatCurrency } from "@shared/utils";
import "./PropertyCard.css";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
    >
      <Link to={`/properties/${property.id}`} className="property-card">
        <figure className="property-card__image-container">
          {property.imageUrl ? (
            <motion.img
              src={property.imageUrl}
              alt={`${property.name} - ${property.addressProperty}`}
              className="property-card__image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          ) : (
            <div className="property-card__image-placeholder" role="img" aria-label="Property placeholder">
              🏠
            </div>
          )}
        </figure>

        <div className="property-card__content">
          <address className="property-card__location">
            <span className="property-card__address">
              {property.addressProperty}
            </span>
          </address>

          <h3 className="property-card__name">{property.name}</h3>

          <p className="property-card__details">
            <time dateTime={property.year.toString()}>
              {TEXTS.propertyCard.year} {property.year}
            </time>
          </p>

          <p className="property-card__price">
            <strong className="property-card__price-amount">
              {formatCurrency(property.priceProperty)}
            </strong>
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
