/**
 * Domain Services - Barrel Export
 * Funciones puras de lógica de negocio
 */

// Property Services
export {
  isPropertyInPriceRange,
  formatPropertyPrice,
  isRecentProperty,
} from './propertyService';

// PropertyDetail Services
export {
  getEnabledImages,
  getLatestTrace,
  getTotalPriceWithTax,
  sortTracesByDate,
} from './propertyDetailService';

// Owner Services
export {
  formatOwnerBirthday,
  getOwnerAge,
} from './ownerService';
