import type { Property } from '@core/domain/entities';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import './PropertyGrid.css';

interface PropertyGridProps {
  properties: Property[];
}

export const PropertyGrid = ({ properties }: PropertyGridProps) => {
  if (properties.length === 0) {
    return (
      <div className="property-grid">
        <div className="property-grid__empty">
          <div className="property-grid__empty-icon">🔍</div>
          <h3 className="property-grid__empty-title">
            No se encontraron propiedades
          </h3>
          <p className="property-grid__empty-text">
            Intenta ajustar tu búsqueda o filtros para encontrar lo que buscas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="property-grid">
      <div className="property-grid__container">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};
