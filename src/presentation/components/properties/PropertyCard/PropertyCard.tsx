import { Link } from 'react-router-dom';
import { TEXTS } from '@shared/constants/texts';
import type { Property } from '@core/domain/entities';
import { formatCurrency } from '@shared/utils';
import './PropertyCard.css';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/properties/${property.id}`} className="property-card">
      <div className="property-card__image-container">
        {property.imageUrl ? (
          <img
            src={property.imageUrl}
            alt={property.name}
            className="property-card__image"
          />
        ) : (
          <div className="property-card__image-placeholder">🏠</div>
        )}
      </div>

      <div className="property-card__content">
        <div className="property-card__location">
          <span className="property-card__address">{property.addressProperty}</span>
        </div>

        <div className="property-card__name">{property.name}</div>

        <div className="property-card__details">{TEXTS.propertyCard.year} {property.year}</div>

        <div className="property-card__price">
          <span className="property-card__price-amount">
            {formatCurrency(property.priceProperty)}
          </span>
          <span className="property-card__price-label"> {TEXTS.propertyCard.price}</span>
        </div>
      </div>
    </Link>
  );
};
