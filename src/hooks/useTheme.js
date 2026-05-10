import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.removeItem('theme');
  }, []);

  return { theme: 'light', toggleTheme: () => {} };
}

