import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo || location.state?.preserveScroll) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return null;
}
