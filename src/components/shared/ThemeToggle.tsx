import { MoonStar, Sun } from 'lucide-react';

import { Button } from '../ui/button';
import { Theme, useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  function handleToggleTheme() {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  }

  return (
    <Button variant="secondary" size="icon" onClick={handleToggleTheme}>
      <MoonStar className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-blue-500" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-yellow-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
