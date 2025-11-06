import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';
import type { Property } from '@core/domain/entities';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import { TEXTS } from '@/shared/constants/texts';
import './PropertyGrid.css';

interface PropertyGridProps {
  properties: Property[];
}

export const PropertyGrid = ({ properties }: PropertyGridProps) => {
  if (properties.length === 0) {
    return (
      <section className="property-grid property-grid--empty" aria-label="No properties found">
        <motion.div 
          className="property-grid__empty"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          role="status"
          aria-live="polite"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <SearchX className="property-grid__empty-icon" size={64} strokeWidth={1.5} aria-hidden="true" />
          </motion.div>
          <h2 className="property-grid__empty-title">
            {TEXTS.propertiesPage.emptyStateTitle}
          </h2>
          <p className="property-grid__empty-text">
            {TEXTS.propertiesPage.emptyStateDescription}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="property-grid" aria-label="Properties list">
      <ul className="property-grid__container">
        {properties.map((property, index) => (
          <li key={property.id}>
            <PropertyCard property={property} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};
