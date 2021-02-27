import { useEffect } from 'react';

export default function usePageTitle(newTitle) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = newTitle;
    return () => {
      document.title = prevTitle;
    };
  }, []);
}
