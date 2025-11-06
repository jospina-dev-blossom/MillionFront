import type { Property } from '../entities/Property';

/**
 * Property Domain Service
 * Funciones puras que operan sobre la entidad Property
 */

export const isRecentProperty = (property: Property): boolean => {
  const currentYear = new Date().getFullYear();
  return currentYear - property.year <= 5;
};
