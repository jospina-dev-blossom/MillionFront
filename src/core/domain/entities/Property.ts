/**
 * Property Domain Entity
 * Representa una propiedad inmobiliaria en el dominio de la aplicación
 */
export interface Property {
  id: string;
  idOwner: string;
  name: string;
  addressProperty: string;
  priceProperty: number;
  imageUrl: string;
  codeInternal: number;
  year: number;
}

/**
 * Property Filters
 * Filtros disponibles para buscar propiedades
 */
export interface PropertyFilters {
  name?: string;
  address?: string;
  minPrice?: string;
  maxPrice?: string;
  pageNumber?: number;
  pageSize?: number;
}

/**
 * Paged Result
 * Estructura de paginación para resultados
 */
export interface PagedResult<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
