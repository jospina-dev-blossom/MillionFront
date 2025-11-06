import { useState, type KeyboardEvent } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { TEXTS } from '../../../../shared/constants/texts';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  onFilterClick: () => void;
  placeholder?: string;
  isLoading?: boolean;
}

export const SearchBar = ({
  onSearch,
  onFilterClick,
  placeholder = TEXTS.searchBar.placeholder,
  isLoading = false,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm.trim());
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <search className="search-bar" role="search">
      <div className="search-bar__wrapper">
        <form 
          className="search-bar__container" 
          onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
          role="search"
        >
          <label htmlFor="property-search" className="search-bar__label">
            {TEXTS.searchBar.label}
          </label>
          <input
            id="property-search"
            className="search-bar__input"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown ={handleKeyPress}
            disabled={isLoading}
            aria-label={TEXTS.searchBar.label}
          />
          <button
            type="submit"
            className="search-bar__button"
            disabled={isLoading}
            aria-label={TEXTS.searchBar.searchButton}
          >
            <Search className="search-bar__icon" size={20} aria-hidden="true" />
          </button>
        </form>

        <button 
          type="button"
          className="search-bar__filters-button" 
          onClick={onFilterClick}
          aria-label={TEXTS.searchBar.filtersButton}
        >
          <SlidersHorizontal className="search-bar__filter-icon" size={20} aria-hidden="true" />
          <span>{TEXTS.searchBar.filtersText}</span>
        </button>
      </div>
    </search>
  );
};
