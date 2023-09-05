import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const getScrollPosition = (): ScrollPosition =>
  typeof window !== 'undefined'
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 };

const scrollTo = ({ x, y }: Partial<ScrollPosition>) => {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = { behavior: 'smooth' };

    if (typeof x === 'number') {
      scrollOptions.left = x;
    }

    if (typeof y === 'number') {
      scrollOptions.top = y;
    }

    window.scrollTo(scrollOptions);
  }
};

export const useWindowScroll = () => {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setPosition(getScrollPosition()));
      window.addEventListener('resize', () => setPosition(getScrollPosition()));
    }
  }, []);

  useEffect(() => {
    setPosition(getScrollPosition());
  }, []);

  return [position, scrollTo] as const;
};
