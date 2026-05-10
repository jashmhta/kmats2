import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'day' : 'dark'} mode`}
    >
      <Sun className={theme === 'dark' ? 'is-hidden' : ''} aria-hidden="true" />
      <Moon className={theme === 'dark' ? '' : 'is-hidden'} aria-hidden="true" />
      <span>{theme === 'dark' ? 'Day' : 'Dark'}</span>
    </button>
  );
}
