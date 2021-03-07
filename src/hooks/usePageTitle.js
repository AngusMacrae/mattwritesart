import { useEffect } from 'react';

export default function usePageTitle(newTitle) {
  useEffect(() => {
    document.title = newTitle;
  }, []);
}
