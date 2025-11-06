import type { Owner } from '../entities/PropertyDetail';

/**
 * Owner Domain Service
 * Funciones puras que operan sobre la entidad Owner
 */

/**
 * Calcula la edad del propietario
 */
export const getOwnerAge = (owner: Owner): number => {
  const birthDate = new Date(owner.birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};
