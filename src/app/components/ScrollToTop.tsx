import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Scrolls to the top of the page on every route change,
 * unless the URL has a hash (hash navigation is handled by the page itself).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
