import { useState, useCallback, useMemo } from 'react';
import { useGetPropertiesQuery } from '@infrastructure/api/propertyApi';
import type { PropertyFilters } from '@core/domain/entities/Property';

/**
 * Custom Hook para manejar propiedades con filtros
 * Abstrae la lógica de RTK Query y proporciona una API más simple
 */
export const useProperties = (initialFilters?: PropertyFilters) => {
  const [filters, setFilters] = useState<PropertyFilters>(
    initialFilters || { pageNumber: 1, pageSize: 10 }
  );

  // Query de RTK Query con los filtros actuales
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetPropertiesQuery(filters);

  /**
   * Actualiza los filtros de búsqueda
   */
  const updateFilters = useCallback((newFilters: Partial<PropertyFilters>) => {
    setFilters((prev) => {
      const updated = { ...prev, ...newFilters };
      
      // Eliminar propiedades undefined
      Object.keys(updated).forEach((key) => {
        if (updated[key as keyof PropertyFilters] === undefined) {
          delete updated[key as keyof PropertyFilters];
        }
      });
      
      return updated;
    });
  }, []);

  /**
   * Limpia todos los filtros
   */
  const clearFilters = useCallback(() => {
    setFilters({ pageNumber: 1, pageSize: 10 });
  }, []);

  /**
   * Navega a una página específica
   */
  const goToPage = useCallback((page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFilters((prev) => ({ ...prev, pageNumber: page }));
  }, []);

  /**
   * Navega a la página siguiente
   */
  const nextPage = useCallback(() => {
    if (data?.hasNextPage) {
      setFilters((prev) => ({ ...prev, pageNumber: prev.pageNumber! + 1 }));
    }
  }, [data?.hasNextPage]);

  /**
   * Navega a la página anterior
   */
  const previousPage = useCallback(() => {
    if (data?.hasPreviousPage) {
      setFilters((prev) => ({ ...prev, pageNumber: Math.max(1, (prev.pageNumber || 1) - 1) }));
    }
  }, [data?.hasPreviousPage]);

  /**
   * Handler para búsqueda por nombre
   */
  const handleSearch = useCallback((searchTerm: string) => {
    updateFilters({ name: searchTerm || undefined, pageNumber: 1 });
  }, [updateFilters]);

  /**
   * Handler para aplicar filtros del modal
   */
  const handleApplyFilters = useCallback((newFilters: Partial<PropertyFilters>) => {
    updateFilters({ ...newFilters, pageNumber: 1 });
  }, [updateFilters]);

  /**
   * Handler para limpiar filtros del modal (mantiene búsqueda por nombre)
   */
  const handleClearFilters = useCallback(() => {
    updateFilters({
      address: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      pageNumber: 1,
    });
  }, [updateFilters]);

  /**
   * Verifica si hay filtros activos (excluyendo paginación)
   */
  const hasActiveFilters = useMemo(() => {
    return !!(filters.name || filters.address || filters.minPrice || filters.maxPrice);
  }, [filters]);

  return {
    // Datos
    properties: data?.items || [],
    pagination: data ? {
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalCount: data.totalCount,
      totalPages: data.totalPages,
      hasPreviousPage: data.hasPreviousPage,
      hasNextPage: data.hasNextPage,
    } : null,
    
    // Estados
    isLoading,
    isFetching,
    isError,
    error,
    
    // Filtros
    filters,
    hasActiveFilters,
    
    // Acciones
    updateFilters,
    clearFilters,
    refetch,
    
    // Paginación
    goToPage,
    nextPage,
    previousPage,

    // Handlers
    handleSearch,
    handleApplyFilters,
    handleClearFilters,
  };
};
