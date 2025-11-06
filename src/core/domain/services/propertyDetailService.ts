import type { PropertyDetail, PropertyImage, PropertyTrace } from '../entities/PropertyDetail';

/**
 * PropertyDetail Domain Service
 * Funciones puras que operan sobre las entidades PropertyDetail
 */

/**
 * Obtiene todas las imágenes habilitadas de una propiedad
 */
export const getEnabledImages = (property: PropertyDetail): PropertyImage[] => {
  return property.images.filter((img) => img.enabled);
};

/**
 * Obtiene la traza más reciente de una propiedad
 * TODO: Eliminar si no se usa en el futuro
 */
export const getLatestTrace = (property: PropertyDetail): PropertyTrace | null => {
  if (property.traces.length === 0) return null;
  
  return property.traces.reduce((latest, current) => {
    const latestDate = new Date(latest.dateSale);
    const currentDate = new Date(current.dateSale);
    return currentDate > latestDate ? current : latest;
  });
};

/**
 * Calcula el precio total con impuesto de la última traza
 */
export const getTotalPriceWithTax = (property: PropertyDetail): number => {
  const latestTrace = getLatestTrace(property);
  if (!latestTrace) return property.priceProperty;
  
  return latestTrace.value + latestTrace.tax;
};

/**
 * Ordena las trazas por fecha (más reciente primero por defecto)
 */
export const sortTracesByDate = (traces: PropertyTrace[], ascending = false): PropertyTrace[] => {
  return [...traces].sort((a, b) => {
    const dateA = new Date(a.dateSale).getTime();
    const dateB = new Date(b.dateSale).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
};
