import type { Property } from '../entities/Property';

/**
 * Property Domain Service
 * Funciones puras que operan sobre la entidad Property
 */

/**
 * Verifica si una propiedad está dentro de un rango de precios
 * TODO: Eliminar si no se usa en el futuro
 */
export const isPropertyInPriceRange = (
  property: Property,
  minPrice?: number,
  maxPrice?: number
): boolean => {
  if (minPrice && property.priceProperty < minPrice) return false;
  if (maxPrice && property.priceProperty > maxPrice) return false;
  return true;
};

/**
 * Formatea el precio de una propiedad
 * TODO: Eliminar si no se usa en el futuro
 */
export const formatPropertyPrice = (price: number): string => {
  return new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
};

/**
 * Verifica si una propiedad es reciente (menos de 5 años)
 */
export const isRecentProperty = (property: Property): boolean => {
  const currentYear = new Date().getFullYear();
  return currentYear - property.year <= 5;
};
