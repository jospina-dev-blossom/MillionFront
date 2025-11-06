import { useEffect, useRef, useCallback } from 'react';
import { TEXTS } from '@shared/constants/texts';
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
  const observerTarget = useRef<HTMLDivElement>(null);
  const hasLoadedOnce = useRef(false);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasMore && !isLoading && hasLoadedOnce.current) {
        onLoadMore();
      }
    },
    [onLoadMore, hasMore, isLoading]
  );

  useEffect(() => {
    const element = observerTarget.current;
    if (!element) return;

    const timer = setTimeout(() => {
      hasLoadedOnce.current = true;
    }, 500);

    const options = {
      root: null,
      rootMargin: '200px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(element);

    return () => {
      clearTimeout(timer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [handleObserver]);

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
