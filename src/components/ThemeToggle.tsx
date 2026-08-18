import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  labelSwitchToLight?: string;
  labelSwitchToDark?: string;
}

export default function ThemeToggle({
  labelSwitchToLight = 'Switch to light mode',
  labelSwitchToDark = 'Switch to dark mode',
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? labelSwitchToLight : labelSwitchToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
      style={{
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-primary)',
        backgroundColor: 'var(--color-bg-raised)',
      }}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}