'use client';

import { useTheme } from '@/components/layout/ThemeProvider';

export default function TestPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
