import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useInfiniteProperties } from '@presentation/hooks/useInfiniteProperties';
import { SearchBar } from '@presentation/components/common/SearchBar/SearchBar';
import { FilterModal } from '@presentation/components/common/FilterModal/FilterModal';
import { PropertyGrid } from '@presentation/components/properties/PropertyGrid/PropertyGrid';
import { InfiniteScroll } from '@presentation/components/common/InfiniteScroll';
import { Footer } from '@presentation/components/common/Footer/Footer';
import { MillionLogo } from '@presentation/components/common/MillionLogo';
import { TEXTS } from '@shared/constants/texts';
import { getErrorMessage } from '@shared/utils/errorHandler';
import './PropertiesPage.css';

export const PropertiesPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const {
    properties,
    hasMore,
    isLoading,
    isFetching,
    isError,
    error,
    filters,
    loadMore,
    refetch,
    handleSearch,
    handleApplyFilters,
    handleClearFilters,
  } = useInfiniteProperties();

  if (isLoading) {
    return (
      <div className="properties-page">
        <main className="properties-page__loading" role="status" aria-live="polite" aria-label="Loading properties">
          <div className="properties-page__spinner" aria-hidden="true" />
          <p className="properties-page__loading-text">{TEXTS.propertiesPage.loadingProperties}</p>
        </main>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="properties-page">
        <main className="properties-page__error" role="alert" aria-live="assertive">
          <AlertCircle className="properties-page__error-icon" size={48} aria-hidden="true" />
          <h1 className="properties-page__error-title">{TEXTS.propertiesPage.errorLoading}</h1>
          <p className="properties-page__error-message">{getErrorMessage(error)}</p>
          <button 
            className="properties-page__error-button" 
            onClick={() => refetch()}
            type="button"
          >
            {TEXTS.common.tryAgain}
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="properties-page">
      <header className="properties-page__header">
        <div className="properties-page__logo">
          <MillionLogo />
        </div>
        <SearchBar
          onSearch={handleSearch}
          onFilterClick={() => setIsFilterModalOpen(true)}
          isLoading={isLoading}
        />
      </header>

      <main className="properties-page__content" id="main-content">
        <h1 className="properties-page__title">
          {TEXTS.propertiesPage.title}
        </h1>
        <InfiniteScroll
          onLoadMore={loadMore}
          hasMore={hasMore}
          isLoading={isFetching}
        >
          <PropertyGrid properties={properties} />
        </InfiniteScroll>
      </main>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        currentFilters={filters}
      />

      <Footer />
    </div>
  );
};
