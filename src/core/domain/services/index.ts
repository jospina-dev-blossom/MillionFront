/**
 * Domain Services - Barrel Export
 * Funciones puras de lógica de negocio
 */

// Property Services
export {
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
  getOwnerAge,
} from './ownerService';
