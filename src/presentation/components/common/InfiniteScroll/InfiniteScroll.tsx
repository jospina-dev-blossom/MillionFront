import { TEXTS } from '@shared/constants/texts';
import { useInfiniteScroll } from '@presentation/hooks/useInfiniteScroll';
import './InfiniteScroll.css';

interface InfiniteScrollProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}

export const InfiniteScroll = ({
  onLoadMore,
  hasMore,
  isLoading,
  children,
}: InfiniteScrollProps) => {
  const { observerTarget } = useInfiniteScroll({
    onLoadMore,
    hasMore,
    isLoading,
  });

  return (
    <>
      {children}
      {hasMore && (
        <div ref={observerTarget} className="infinite-scroll">
          {isLoading && (
            <div className="infinite-scroll__loading">
              <div className="infinite-scroll__spinner" />
              <p className="infinite-scroll__text">{TEXTS.propertiesPage.loadingMore}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
