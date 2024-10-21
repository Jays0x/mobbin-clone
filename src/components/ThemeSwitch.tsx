'use client'

import { FiSun, FiMoon, FiMonitor } from "react-icons/fi"; // Add FiMonitor for system mode
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme(); // Access `theme` to check the current theme (light, dark, or system)

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  // Display the appropriate icon based on the current theme
  return (
    <div className="flex items-center gap-4">
      {/* System mode icon */}
      <FiMonitor
        onClick={() => setTheme('system')}
        className={theme === 'system' ? 'text-blue-500' : ''}
        title="System Mode"
      />
      
      {/* Light mode icon */}
      <FiSun
        onClick={() => setTheme('light')}
        className={resolvedTheme === 'light' ? 'text-yellow-500' : ''}
        title="Light Mode"
      />
      
      {/* Dark mode icon */}
      <FiMoon
        onClick={() => setTheme('dark')}
        className={resolvedTheme === 'dark' ? 'text-red-200' : ''}
        title="Dark Mode"
      />
    </div>
  );
}
