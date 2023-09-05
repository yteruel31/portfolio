import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectWindowSize = () => {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', detectWindowSize);
    return () => {
      window.removeEventListener('resize', detectWindowSize);
    };
  }, []);

  return isMobile;
};
