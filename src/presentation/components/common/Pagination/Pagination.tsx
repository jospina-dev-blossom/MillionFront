import { TEXTS } from '@shared/constants/texts';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  hasNextPage = true,
  hasPreviousPage = true,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (showEllipsisStart) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (showEllipsisEnd) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePrevious = () => {
    if (hasPreviousPage && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrevious}
        disabled={!hasPreviousPage || currentPage === 1}
        aria-label={TEXTS.pagination.previous}
      >
        <svg
          className="pagination__arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="pagination__ellipsis">
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`pagination__button ${
              currentPage === page ? 'pagination__button--active' : ''
            }`}
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </button>
        );
      })}

      <button
        className="pagination__button"
        onClick={handleNext}
        disabled={!hasNextPage || currentPage === totalPages}
        aria-label={TEXTS.pagination.next}
      >
        <svg
          className="pagination__arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};
