/**
 * Owner
 * Información del propietario de una propiedad
 */
export interface Owner {
  idOwner: string;
  name: string;
  address: string;
  photo: string;
  birthday: string; // ISO date string
}

/**
 * Property Image
 * Imagen de una propiedad
 */
export interface PropertyImage {
  idPropertyImage: string;
  idProperty: string;
  file: string;
  enabled: boolean;
}

/**
 * Property Trace
 * Historial de transacciones/cambios de una propiedad
 */
export interface PropertyTrace {
  idPropertyTrace: string;
  idProperty: string;
  dateSale: string; // ISO date string
  name: string;
  value: number;
  tax: number;
}

/**
 * Property Detail
 * Información completa de una propiedad incluyendo owner, imágenes y trazas
 */
export interface PropertyDetail {
  id: string;
  name: string;
  addressProperty: string;
  priceProperty: number;
  imageUrl: string;
  codeInternal: number;
  year: number;
  owner: Owner;
  images: PropertyImage[];
  traces: PropertyTrace[];
}
