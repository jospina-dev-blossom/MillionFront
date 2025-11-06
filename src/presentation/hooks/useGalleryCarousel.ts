import { useState, useEffect } from 'react';

interface UseGalleryCarouselProps {
  totalImages: number;
}

interface UseGalleryCarouselReturn {
  currentIndex: number;
  itemsPerView: number;
  maxIndex: number;
  showNavigation: boolean;
  visibleStartIndex: number;
  visibleEndIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
  goToIndex: (index: number) => void;
}

export const useGalleryCarousel = ({ 
  totalImages 
}: UseGalleryCarouselProps): UseGalleryCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, totalImages - itemsPerView);
  const showNavigation = totalImages > itemsPerView;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    itemsPerView,
    maxIndex,
    showNavigation,
    visibleStartIndex: currentIndex,
    visibleEndIndex: Math.min(currentIndex + itemsPerView, totalImages),
    handlePrevious,
    handleNext,
    goToIndex,
  };
};
