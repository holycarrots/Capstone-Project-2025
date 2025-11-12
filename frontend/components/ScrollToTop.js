import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useLayoutEffect(() => {
    window.scrollTo({top:0, behavior:"auto"});
  }, [pathname]);
  return null;
}

export default ScrollToTop;