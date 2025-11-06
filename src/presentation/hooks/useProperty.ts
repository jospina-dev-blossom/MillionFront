import { useMemo } from 'react';
import { useGetPropertyByIdQuery } from '@infrastructure/api/propertyApi';
import { 
  getEnabledImages, 
  getLatestTrace, 
  getTotalPriceWithTax,
  sortTracesByDate,
  getOwnerAge,
} from '@core/domain/services';

/**
 * Custom Hook para obtener una propiedad por ID con información detallada
 * Abstrae la lógica de RTK Query y proporciona una API más simple
 * Incluye funciones helper para trabajar con los datos
 */
export const useProperty = (id: string, skip = false) => {
  const {
    data: property,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetPropertyByIdQuery(id, {
    skip: !id || skip, // No hace la petición si no hay ID o skip es true
  });

  // Computed values usando las funciones del dominio
  const enabledImages = useMemo(
    () => (property ? getEnabledImages(property) : []),
    [property]
  );

  //TODO: Quitar si no se usa en el futuro
  const latestTrace = useMemo(
    () => (property ? getLatestTrace(property) : null),
    [property]
  );

  const totalPriceWithTax = useMemo(
    () => (property ? getTotalPriceWithTax(property) : 0),
    [property]
  );

  const sortedTraces = useMemo(
    () => (property ? sortTracesByDate(property.traces) : []),
    [property]
  );

  const ownerAge = useMemo(
    () => (property ? getOwnerAge(property.owner) : null),
    [property]
  );

  return {
    // Datos principales
    property,
    
    // Estados
    isLoading,
    isFetching,
    isError,
    error,
    
    // Acciones
    refetch,
    
    // Computed values
    enabledImages,
    latestTrace,
    totalPriceWithTax,
    sortedTraces,
    ownerAge,
  };
};
